/* Glow Cursor: light pours from the pointer, drifts and cools as it fades. */
(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduceMotion) return;

    const root = document.createElement('div');
    root.id = 'glow-cursor-root';
    root.setAttribute('aria-hidden', 'true');
    const canvas = document.createElement('canvas');
    canvas.id = 'glow-canvas';
    root.appendChild(canvas);
    document.body.appendChild(root);
    const ctx = canvas.getContext('2d');

    const MAX_PARTICLES = 260;
    const particles = [];
    let last = null, frame = 0, previousTime = 0;

    function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function spawn(x, y) {
        if (particles.length >= MAX_PARTICLES) particles.shift();
        particles.push({
            x: x + (Math.random() - 0.5) * 6,
            y: y + (Math.random() - 0.5) * 6,
            vx: (Math.random() - 0.5) * 22,
            vy: (Math.random() - 0.5) * 22 - 10,
            size: 8 + Math.random() * 14,
            phase: Math.random() * Math.PI * 2,
            age: 0,
            life: 0.8 + Math.random() * 0.7
        });
    }

    function draw(time) {
        const dt = Math.min((time - previousTime) / 1000, 0.05);
        previousTime = time;
        const light = document.documentElement.classList.contains('light');
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.globalCompositeOperation = light ? 'source-over' : 'lighter';

        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.age += dt;
            const t = p.age / p.life;
            if (t >= 1) { particles.splice(i, 1); continue; }

            p.x += (p.vx + Math.sin(p.phase + p.age * 3) * 14) * dt;
            p.y += (p.vy + Math.cos(p.phase + p.age * 2) * 8) * dt;

            /* warm (amber) -> violet -> cool blue */
            const hue = (400 - 190 * Math.min(t * 1.4, 1)) % 360;
            const lightness = light ? 55 : 72 - 20 * t;
            const alpha = (1 - t) * (1 - t) * (light ? 0.30 : 0.55);
            const radius = p.size * (0.6 + t);

            const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
            g.addColorStop(0, `hsla(${hue}, 95%, ${lightness}%, ${alpha})`);
            g.addColorStop(1, `hsla(${hue}, 95%, ${lightness}%, 0)`);
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
            ctx.fill();
        }
        frame = particles.length ? requestAnimationFrame(draw) : 0;
    }

    window.addEventListener('pointermove', (e) => {
        if (e.pointerType === 'touch') return;
        const from = last || { x: e.clientX, y: e.clientY };
        const dx = e.clientX - from.x, dy = e.clientY - from.y;
        const steps = Math.min(Math.max(1, Math.ceil(Math.hypot(dx, dy) / 8)), 12);
        for (let i = 1; i <= steps; i++) spawn(from.x + dx * i / steps, from.y + dy * i / steps);
        last = { x: e.clientX, y: e.clientY };
        if (!frame) { previousTime = performance.now(); frame = requestAnimationFrame(draw); }
    }, { passive: true });

    document.documentElement.addEventListener('pointerleave', () => { last = null; });
    window.addEventListener('resize', resize);
    resize();
})();
