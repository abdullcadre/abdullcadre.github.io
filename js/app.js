    // ============================================================
    // STATE
    // ============================================================
    const state = {
        data: null,
        currentLang: localStorage.getItem('lang') || 'en',
        theme: localStorage.getItem('theme') || 'dark'
    };
    const CARD_DATA = {};

    // ============================================================
    // BRAND ICONS
    // ============================================================
    const BRAND_ICONS = {
        linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>`,
        facebook: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/></svg>`,
        instagram: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38a5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>`
    };

    function icon(name, cls = 'w-4 h-4') {
        if (BRAND_ICONS[name]) {
            return `<span class="${cls}" style="display:inline-flex;align-items:center;justify-content:center;">${BRAND_ICONS[name]}</span>`;
        }
        return `<i data-lucide="${name}" class="${cls}"></i>`;
    }
    function setText(id, value) { const el = document.getElementById(id); if (el) el.textContent = value; }

    function loadData() {
        if (!window.PORTFOLIO_DATA) { console.error('data.js não carregado'); return false; }
        state.data = window.PORTFOLIO_DATA;
        return true;
    }

    // ============================================================
    // TEXT TYPE (typewriter)
    // ============================================================
    function createTyper(el, sentences, opts = {}) {
        if (!el || !sentences || !sentences.length) return null;
        const typingSpeed = opts.typingSpeed ?? 45;
        const deletingSpeed = opts.deletingSpeed ?? 22;
        const pause = opts.pause ?? 1800;
        const initialDelay = opts.initialDelay ?? 300;

        let idx = 0, count = 0, deleting = false, timer = null;
        let chars = Array.from(sentences[0]);

        const cursor = document.createElement('span');
        cursor.className = 'text-type__cursor';
        cursor.setAttribute('aria-hidden', 'true');

        const render = () => {
            el.innerHTML = '';
            const frag = document.createDocumentFragment();
            for (let i = 0; i < count; i++) {
                const span = document.createElement('span');
                span.className = 'text-type__char';
                span.textContent = chars[i];
                frag.appendChild(span);
            }
            el.appendChild(frag);
            el.appendChild(cursor);
        };

        const tick = () => {
            if (!deleting) {
                if (count < chars.length) {
                    count++;
                    render();
                    const char = chars[count - 1] || '';
                    const delay = /[.,;!?]/.test(char) ? typingSpeed * 4 : typingSpeed;
                    timer = setTimeout(tick, delay);
                } else {
                    timer = setTimeout(() => { deleting = true; tick(); }, pause);
                }
            } else {
                if (count > 0) {
                    count--;
                    render();
                    timer = setTimeout(tick, deletingSpeed);
                } else {
                    deleting = false;
                    idx = (idx + 1) % sentences.length;
                    chars = Array.from(sentences[idx]);
                    timer = setTimeout(tick, 320);
                }
            }
        };

        setTimeout(() => { render(); tick(); }, initialDelay);

        return {
            stop() { if (timer) clearTimeout(timer); },
            restart(newSentences) {
                if (timer) clearTimeout(timer);
                sentences = newSentences;
                idx = 0; count = 0; deleting = false;
                chars = Array.from(sentences[0]);
                render();
                tick();
            }
        };
    }

    // ============================================================
    // CARROSSEL
    // ============================================================
    function initCarousel(trackId, dotsId, prevId, nextId) {
        const track = document.getElementById(trackId);
        const dotsWrap = document.getElementById(dotsId);
        const prevBtn = document.getElementById(prevId);
        const nextBtn = document.getElementById(nextId);
        if (!track || !dotsWrap) return;

        const items = track.querySelectorAll('.carousel-item');
        const itemCount = items.length;
        if (itemCount === 0) return;

        function visibleCount() {
            const w = window.innerWidth;
            if (w >= 1100) return 4;
            if (w >= 769) return 3;
            if (w >= 481) return 2;
            return 1;
        }
        function pagesCount() { return Math.max(1, Math.ceil(itemCount / visibleCount())); }
        function rebuildDots() {
            dotsWrap.innerHTML = '';
            const totalPages = pagesCount();
            for (let i = 0; i < totalPages; i++) {
                const b = document.createElement('button');
                b.className = 'c-dot' + (i === 0 ? ' active' : '');
                b.addEventListener('click', () => scrollToPage(i));
                dotsWrap.appendChild(b);
            }
            dotsWrap.style.display = totalPages <= 1 ? 'none' : 'flex';
        }
        rebuildDots();

        function currentPage() {
            const itemW = items[0].offsetWidth + 12;
            const pageW = itemW * visibleCount();
            return Math.min(Math.round(track.scrollLeft / pageW), pagesCount() - 1);
        }
        function scrollToPage(p) {
            const itemW = items[0].offsetWidth + 12;
            const target = Math.max(0, Math.min(p, pagesCount() - 1));
            track.scrollTo({ left: target * itemW * visibleCount(), behavior: 'smooth' });
        }
        function updateArrows() {
            if (!prevBtn || !nextBtn) return;
            const maxScroll = track.scrollWidth - track.clientWidth - 4;
            if (maxScroll <= 4) { prevBtn.classList.add('hidden-btn'); nextBtn.classList.add('hidden-btn'); return; }
            prevBtn.classList.toggle('hidden-btn', track.scrollLeft <= 4);
            nextBtn.classList.toggle('hidden-btn', track.scrollLeft >= maxScroll);
        }
        function updateDots() {
            const p = currentPage();
            dotsWrap.querySelectorAll('.c-dot').forEach((d, i) => d.classList.toggle('active', i === p));
            updateArrows();
        }

        if (prevBtn) prevBtn.onclick = () => scrollToPage(currentPage() - 1);
        if (nextBtn) nextBtn.onclick = () => scrollToPage(currentPage() + 1);

        let scrollTimeout = null;
        track.addEventListener('scroll', () => {
            if (scrollTimeout) clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(updateDots, 60);
        }, { passive: true });

        let isDown = false, startX, scrollStart;
        track.addEventListener('mousedown', (e) => { isDown = true; startX = e.pageX; scrollStart = track.scrollLeft; track.style.cursor = 'grabbing'; });
        track.addEventListener('mouseleave', () => { isDown = false; track.style.cursor = 'grab'; });
        track.addEventListener('mouseup', () => { isDown = false; track.style.cursor = 'grab'; });
        track.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            track.scrollLeft = scrollStart - (e.pageX - startX) * 1.5;
        });

        window.addEventListener('resize', () => { rebuildDots(); updateDots(); });
        requestAnimationFrame(() => { updateDots(); updateArrows(); });
    }

    // ============================================================
    // RENDER
    // ============================================================
    let quoteTyper = null;

    function render() {
        const t = state.data[state.currentLang];
        document.documentElement.lang = state.currentLang;
        const langLabel = document.getElementById('lang-label');
        if (langLabel) langLabel.textContent = state.currentLang.toUpperCase();

        setText('brand-name', t.brandName);
        setText('brand-location', t.brandLocation);

        const navItems = t.nav || [];
        const navDesktop = document.getElementById('nav-desktop');
        if (navDesktop) navDesktop.innerHTML = navItems.map(n =>
            `<a href="#${n.id}" data-nav="${n.id}" data-nav-jump="${n.id}" class="nav-link px-3 py-1.5 rounded-md text-xs font-medium" style="color: var(--text-muted);">${n.label}</a>`
        ).join('');

        const mobileNav = document.getElementById('mobile-nav');
        if (mobileNav) mobileNav.innerHTML = navItems.map(n =>
            `<a href="#${n.id}" data-nav="${n.id}" data-nav-jump="${n.id}" aria-label="${n.label}">${icon(n.icon, 'w-4 h-4')}</a>`
        ).join('');

        const dotsEl = document.getElementById('dots');
        if (dotsEl) dotsEl.innerHTML = navItems.map(n =>
            `<button class="dot-btn" data-nav-jump="${n.id}" data-nav="${n.id}" aria-label="${n.label}"></button>`
        ).join('');

        const miEl = document.getElementById('mobile-indicator');
        if (miEl) miEl.innerHTML = navItems.map((n, i) =>
            `<span class="mi-dot${i === 0 ? ' active' : ''}" data-mi="${n.id}"></span>`
        ).join('');

        setText('hero-name', t.hero?.name);
        setText('hero-subtitle', t.hero?.subtitle);
        setText('btn-contact', t.actions?.contact);
        setText('btn-cv', t.actions?.downloadCV);
        setText('inspector-location', t.hero?.inspector?.location);
        setText('inspector-email', t.hero?.inspector?.email);
        setText('inspector-degree', t.hero?.inspector?.degree);
        const stackEl = document.getElementById('inspector-stack');
        if (stackEl) stackEl.textContent = JSON.stringify(t.hero?.inspector?.stack || []);
        setText('inspector-university', t.hero?.inspector?.university);
        setText('inspector-year', t.hero?.inspector?.year);

        const socialsDesktop = (t.contact.socials || []).map(s => `
            <a href="${s.url}" target="_blank" rel="noopener" class="social-pill" title="${s.label}">${icon(s.icon, 'w-3.5 h-3.5')}<span>${s.label}</span></a>
        `).join('');
        const socialsMobile = (t.contact.socials || []).map(s => `
            <a href="${s.url}" target="_blank" rel="noopener" class="social-pill" title="${s.label}" aria-label="${s.label}">${icon(s.icon, 'w-4 h-4')}<span>${s.label}</span></a>
        `).join('');
        const heroS = document.getElementById('hero-socials'); if (heroS) heroS.innerHTML = socialsDesktop;
        const heroSM = document.getElementById('hero-socials-mobile'); if (heroSM) heroSM.innerHTML = socialsMobile;

        // SKILLS
        setText('skills-tag', t.skills?.tag);
        setText('skills-title', t.skills?.title);
        setText('skills-subtitle', t.skills?.subtitle);
        (t.skills?.list || []).forEach((s, i) => { CARD_DATA[`skill-${i}`] = { type: 'skill', ...s }; });
        const skillsTrack = document.getElementById('skills-track');
        if (skillsTrack) skillsTrack.innerHTML = (t.skills?.list || []).map((s, i) => `
            <div class="carousel-item p-4 rounded-lg card-hover" data-modal-id="skill-${i}" style="background: var(--bg); border: 1px solid var(--border);">
                <div class="flex items-center justify-between mb-3">
                    <div class="w-8 h-8 rounded-md flex items-center justify-center" style="background: var(--accent-soft); color: var(--accent);">${icon(s.icon, 'w-4 h-4')}</div>
                    <span class="text-[9px] font-mono uppercase tracking-wider" style="color: var(--text-muted);">${s.tag}</span>
                </div>
                <h3 class="text-sm font-semibold mb-1.5">${s.title}</h3>
                <p class="text-xs leading-relaxed" style="color: var(--text-muted);">${s.description}</p>
            </div>
        `).join('');
        initCarousel('skills-track', 'skills-dots', 'skills-prev', 'skills-next');

        // PROJECTS
        setText('projects-tag', t.projects?.tag);
        setText('projects-title', t.projects?.title);
        setText('projects-subtitle', t.projects?.subtitle);
        setText('projects-store-link', t.projects?.storeLink);
        setText('projects-b4x-link', t.projects?.b4xLink);
        const storeA = document.getElementById('projects-store-anchor');
        if (storeA) storeA.href = t.projects?.storeUrl || '#';
        const b4xA = document.getElementById('projects-b4x-anchor');
        if (b4xA) b4xA.href = t.projects?.b4xUrl || '#';

        (t.projects?.list || []).forEach((p, i) => { CARD_DATA[`project-${i}`] = { type: 'project', ...p }; });
        const projectsTrack = document.getElementById('projects-track');
        if (projectsTrack) projectsTrack.innerHTML = (t.projects?.list || []).map((p, i) => `
            <div class="carousel-item rounded-lg p-4 flex flex-col justify-between card-hover" data-modal-id="project-${i}" style="background: var(--bg); border: 1px solid var(--border);">
                <div>
                    <div class="flex justify-between items-center mb-3">
                        <div class="w-8 h-8 rounded-md flex items-center justify-center" style="background: var(--accent-soft); color: var(--accent);">${icon(p.icon, 'w-4 h-4')}</div>
                        <span class="text-[9px] font-mono uppercase tracking-wider" style="color: var(--text-muted);">${p.tag}</span>
                    </div>
                    <h3 class="text-sm font-semibold mb-1.5">${p.title}</h3>
                    <p class="text-xs leading-relaxed mb-2" style="color: var(--text-muted);">${p.description}</p>
                </div>
                <div class="pt-3 flex items-center justify-between text-[10px] font-mono" style="border-top: 1px solid var(--border); color: var(--text-muted);">
                    <span>${p.tech}</span><span style="color: var(--accent);">${p.status}</span>
                </div>
            </div>
        `).join('');
        initCarousel('projects-track', 'projects-dots', 'projects-prev', 'projects-next');

        // EDUCATION
        setText('education-tag', t.education?.tag);
        setText('education-title', t.education?.title);
        setText('education-subtitle', t.education?.subtitle);
        (t.education?.list || []).forEach((e, i) => { CARD_DATA[`edu-${i}`] = { type: 'education', ...e }; });
        const educationTrack = document.getElementById('education-track');
        if (educationTrack) educationTrack.innerHTML = (t.education?.list || []).map((e, i) => `
            <div class="carousel-item" data-modal-id="edu-${i}">
                <div class="edu-card">
                    <div class="edu-year">${e.year}</div>
                    <div class="edu-level">${icon(e.icon, 'w-3.5 h-3.5')} ${e.level}</div>
                    <div class="edu-desc">${e.description}</div>
                </div>
            </div>
        `).join('');
        initCarousel('education-track', 'education-dots', 'education-prev', 'education-next');

        // QUOTE
        setText('quote-brand', t.brandName);
        const typerEl = document.getElementById('quote-typer');
        if (typerEl) {
            const sentence = t.quote?.text || '';
            if (quoteTyper) quoteTyper.restart([sentence]);
            else quoteTyper = createTyper(typerEl, [sentence], {
                typingSpeed: 32,
                deletingSpeed: 14,
                pause: 3200,
                initialDelay: 300
            });
        }

        setText('contact-tag', t.contact?.tag || 'Contacts');
        setText('contact-title', t.contact?.title);

        const contactList = document.getElementById('contact-list');
        if (contactList) contactList.innerHTML = (t.contact?.items || []).map(item => `
            <a href="${item.url}" target="_blank" rel="noopener" class="contact-row">
                <span class="contact-ico">${icon(item.icon, 'w-4 h-4')}</span>
                <span class="contact-info">
                    <span class="contact-lbl">${item.label}</span>
                    <span class="contact-val">${item.value}</span>
                    ${item.sub ? `<span class="contact-sub">${item.sub}</span>` : ''}
                </span>
            </a>
        `).join('');

        setText('footer-brand', t.brandName);
        setText('footer-rights', t.footer?.rights);
        setText('footer-tag', t.footer?.tag);

        if (window.lucide) lucide.createIcons();

        document.querySelectorAll('[data-nav-jump]').forEach(a => {
            a.removeEventListener('click', navJumpHandler);
            a.addEventListener('click', navJumpHandler);
        });

        updateActiveNav();
        initFadeContent();
    }

    function navJumpHandler(e) { e.preventDefault(); jumpToSection(this.getAttribute('data-nav-jump')); }

    // ============================================================
    // SCROLL / NAV
    // ============================================================
    let SECTIONS = [];
    let currentIndex = 0;
    let isAnimating = false;
    const scroller = document.getElementById('scroller');

    function jumpToSection(id) {
        const idx = SECTIONS.indexOf(id);
        if (idx >= 0) jumpToIndex(idx);
    }
    function jumpToIndex(idx) {
        if (isAnimating) return;
        idx = Math.max(0, Math.min(SECTIONS.length - 1, idx));
        if (idx === currentIndex) return;
        isAnimating = true;
        currentIndex = idx;
        const target = document.getElementById(SECTIONS[idx]);
        if (target) scroller.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
        updateActiveNav();
        showMobileIndicator();
        setTimeout(() => { isAnimating = false; }, 800);
    }
    function updateActiveNav() {
        const activeId = SECTIONS[currentIndex];
        document.querySelectorAll('[data-nav]').forEach(a => {
            const isActive = a.getAttribute('data-nav') === activeId;
            a.classList.toggle('active', isActive);
            if (a.closest('#nav-desktop')) a.style.color = isActive ? 'var(--accent)' : 'var(--text-muted)';
            if (a.classList.contains('dot-btn')) a.classList.toggle('active', isActive);
        });
        document.querySelectorAll('#mobile-indicator .mi-dot').forEach(d => {
            d.classList.toggle('active', d.getAttribute('data-mi') === activeId);
        });
    }
    let miTimeout = null;
    function showMobileIndicator() {
        const el = document.getElementById('mobile-indicator');
        if (!el) return;
        el.classList.add('show');
        if (miTimeout) clearTimeout(miTimeout);
        miTimeout = setTimeout(() => el.classList.remove('show'), 1500);
    }

    let wheelTimeout = null, wheelAccumulated = 0;
    scroller.addEventListener('wheel', (e) => {
        if (document.body.classList.contains('modal-open')) return;
        e.preventDefault();
        if (isAnimating) return;
        wheelAccumulated += e.deltaY;
        if (wheelTimeout) clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => { wheelAccumulated = 0; }, 150);
        if (Math.abs(wheelAccumulated) < 40) return;
        if (wheelAccumulated > 0) jumpToIndex(currentIndex + 1);
        else jumpToIndex(currentIndex - 1);
        wheelAccumulated = 0;
    }, { passive: false });

    let touchStartX = 0, touchStartY = 0, touchStartTime = 0;
    scroller.addEventListener('touchstart', (e) => {
        const t = e.touches[0];
        touchStartX = t.clientX; touchStartY = t.clientY;
        touchStartTime = Date.now();
    }, { passive: true });
    scroller.addEventListener('touchend', (e) => {
        if (document.body.classList.contains('modal-open')) return;
        const t = e.changedTouches[0];
        const dx = touchStartX - t.clientX;
        const dy = touchStartY - t.clientY;
        const dt = Date.now() - touchStartTime;
        const vx = Math.abs(dx) / dt, vy = Math.abs(dy) / dt;
        if (e.target.closest('.carousel-track, .mobile-nav, [data-modal-id]')) return;
        if (Math.abs(dy) > 50 || (vy > 0.5 && Math.abs(dy) > 30)) {
            jumpToIndex(dy > 0 ? currentIndex + 1 : currentIndex - 1);
            showMobileIndicator();
            return;
        }
        if (Math.abs(dx) > 70 && vx > 0.4) {
            jumpToIndex(dx > 0 ? currentIndex + 1 : currentIndex - 1);
            showMobileIndicator();
        }
    }, { passive: true });

    document.addEventListener('keydown', (e) => {
        if (document.body.classList.contains('modal-open')) return;
        if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === 'ArrowRight') { e.preventDefault(); jumpToIndex(currentIndex + 1); }
        else if (e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'ArrowLeft') { e.preventDefault(); jumpToIndex(currentIndex - 1); }
        else if (e.key === 'Home') { e.preventDefault(); jumpToIndex(0); }
        else if (e.key === 'End') { e.preventDefault(); jumpToIndex(SECTIONS.length - 1); }
    });

    scroller.addEventListener('scroll', () => {
        const idx = Math.round(scroller.scrollTop / window.innerHeight);
        if (idx !== currentIndex && idx >= 0 && idx < SECTIONS.length) {
            currentIndex = idx;
            updateActiveNav();
            showMobileIndicator();
        }
    }, { passive: true });

    // ============================================================
    // FADE CONTENT
    // ============================================================
    function initFadeContent() {
        const targets = document.querySelectorAll('.fade-content');
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        const options = isMobile
            ? { threshold: 0.01, rootMargin: '0px 0px -8% 0px' }
            : { threshold: 0.05, rootMargin: '0px 0px -10% 0px' };

        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const el = entry.target;
                if (entry.isIntersecting) el.classList.add('is-visible');
                else {
                    const rect = entry.boundingClientRect;
                    if (rect.bottom < 0 || rect.top > window.innerHeight) el.classList.remove('is-visible');
                }
            });
        }, options);

        targets.forEach(t => obs.observe(t));
        requestAnimationFrame(() => {
            targets.forEach(t => {
                const rect = t.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    setTimeout(() => t.classList.add('is-visible'), 80);
                }
            });
        });
    }

    // ============================================================
    // THEME
    // ============================================================
    function applyTheme() {
        document.documentElement.classList.toggle('dark', state.theme === 'dark');
        document.documentElement.classList.toggle('light', state.theme === 'light');
        const iconEl = document.getElementById('icon-theme');
        if (iconEl) {
            iconEl.setAttribute('data-lucide', state.theme === 'dark' ? 'sun' : 'moon');
            if (window.lucide) lucide.createIcons();
        }
        if (window.__glowCursor) window.__glowCursor.setTheme(state.theme);
    }
    // Delegated — header is loaded async
    document.addEventListener('click', (e) => {
        if (e.target.closest('#theme-btn')) {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', state.theme);
            applyTheme();
        }
        if (e.target.closest('#lang-btn')) {
            state.currentLang = state.currentLang === 'pt' ? 'en' : 'pt';
            localStorage.setItem('lang', state.currentLang);
            render();
            if (window.lucide) lucide.createIcons();
        }
    });

    function downloadCV() {
        const t = state.data[state.currentLang];
        const url = (t.actions && t.actions.cvUrl) || '#';
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    // ============================================================
    // MODAL
    // ============================================================
    const modalOverlay = () => document.getElementById('modal-overlay');

    function openModal(data) {
        const overlay = modalOverlay();
        if (!overlay) return;

        const iconEl = document.getElementById('modal-icon');
        iconEl.innerHTML = icon(data.icon || 'file-text', 'w-5 h-5');

        document.getElementById('modal-tag').textContent = data.tag || data.level || data.tech || '';
        document.getElementById('modal-title').textContent = data.title || data.level || data.year || '';
        document.getElementById('modal-desc').textContent = data.description || '';

        const metaEl = document.getElementById('modal-meta');
        metaEl.innerHTML = '';
        const metaRows = [];
        if (data.tech) metaRows.push(['Tech', data.tech]);
        if (data.status) metaRows.push(['Status', data.status]);
        if (data.year) metaRows.push(['Year', data.year]);
        if (data.level) metaRows.push(['Level', data.level]);
        if (data.tag && data.tag !== (data.level || data.tech)) metaRows.push(['Category', data.tag]);
        metaRows.forEach(([lbl, val]) => {
            const cell = document.createElement('div');
            cell.className = 'modal-meta-cell';
            cell.innerHTML = `<div class="meta-lbl">${lbl}</div><div class="meta-val"></div>`;
            cell.querySelector('.meta-val').textContent = val;
            metaEl.appendChild(cell);
        });
        metaEl.style.display = metaRows.length ? 'grid' : 'none';

        const actionsEl = document.getElementById('modal-actions');
        actionsEl.innerHTML = '';
        if (data.storeUrl) {
            const a = document.createElement('a');
            a.className = 'modal-btn primary';
            a.href = data.storeUrl; a.target = '_blank'; a.rel = 'noopener';
            a.innerHTML = `${icon('external-link','w-3.5 h-3.5')} Google Play`;
            actionsEl.appendChild(a);
        }
        actionsEl.style.display = actionsEl.children.length ? 'flex' : 'none';

        if (window.lucide) lucide.createIcons();

        overlay.classList.remove('closing');
        overlay.classList.add('open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    }

    function closeModal() {
        const overlay = modalOverlay();
        if (!overlay) return;
        overlay.classList.add('closing');
        setTimeout(() => {
            overlay.classList.remove('open', 'closing');
            overlay.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('modal-open');
        }, 300);
    }

    document.addEventListener('click', (e) => {
        if (e.target.closest('[data-modal-close]')) {
            e.preventDefault();
            closeModal();
            return;
        }
        const card = e.target.closest('[data-modal-id]');
        if (card && !e.target.closest('a, button')) {
            const data = CARD_DATA[card.getAttribute('data-modal-id')];
            if (data) openModal(data);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.body.classList.contains('modal-open')) closeModal();
    });

    // ============================================================
    // CROSSHAIR
    // ============================================================
    function initCrosshair() {
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
        const crosshair = document.getElementById('crosshair');
        const dot = document.getElementById('ch-dot');
        const coords = document.getElementById('ch-coords');
        const box = document.getElementById('ch-target-box');
        const label = document.getElementById('ch-target-label');
        let mouseX = 0, mouseY = 0, currentTarget = null;
        window.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; }, { passive: true });
        document.addEventListener('mouseover', (e) => {
            const target = e.target.closest('a, button, [data-modal-id], .contact-row');
            if (target) {
                currentTarget = target;
                const rect = target.getBoundingClientRect();
                box.style.left = rect.left + 'px'; box.style.top = rect.top + 'px';
                box.style.width = rect.width + 'px'; box.style.height = rect.height + 'px';
                box.classList.add('active');
                label.textContent = `${target.tagName.toLowerCase()} • ${Math.round(rect.width)}×${Math.round(rect.height)}`;
            } else if (currentTarget) {
                currentTarget = null; box.classList.remove('active');
            }
        });
        function frame() {
            dot.style.left = mouseX + 'px'; dot.style.top = mouseY + 'px';
            coords.textContent = `${mouseX}, ${mouseY}`;
            coords.style.left = mouseX + 'px'; coords.style.top = mouseY + 'px';
            requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
    }

    // ============================================================
    // CLICK SPARK
    // ============================================================
    function initClickSpark() {
        const canvas = document.getElementById('spark-canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        let W = 0, H = 0;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const resize = () => { W = Math.round(window.innerWidth * dpr); H = Math.round(window.innerHeight * dpr); canvas.width = W; canvas.height = H; };
        resize();
        window.addEventListener('resize', resize);
        const sparks = [];
        const COLORS = ['#818CF8', '#4F46E5', '#6D28D9', '#A78BFA', '#F59E0B', '#22c55e'];
        function createSpark(x, y) {
            const count = 10 + Math.floor(Math.random() * 4);
            for (let i = 0; i < count; i++) {
                const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
                const speed = 3 + Math.random() * 4;
                sparks.push({
                    x: x * dpr, y: y * dpr,
                    vx: Math.cos(angle) * speed * dpr, vy: Math.sin(angle) * speed * dpr,
                    life: 1, decay: 0.025 + Math.random() * 0.012,
                    size: (2 + Math.random() * 2) * dpr,
                    color: COLORS[Math.floor(Math.random() * COLORS.length)],
                    rotation: Math.random() * Math.PI * 2
                });
            }
        }
        function frame() {
            ctx.clearRect(0, 0, W, H);
            for (let i = sparks.length - 1; i >= 0; i--) {
                const s = sparks[i];
                s.x += s.vx; s.y += s.vy; s.vx *= 0.94; s.vy *= 0.94; s.vy += 0.15 * dpr;
                s.life -= s.decay; s.rotation += 0.15;
                if (s.life <= 0) { sparks.splice(i, 1); continue; }
                ctx.save();
                ctx.translate(s.x, s.y); ctx.rotate(s.rotation);
                ctx.globalAlpha = s.life; ctx.fillStyle = s.color;
                const spikes = 4, outer = s.size, inner = s.size * 0.4;
                ctx.beginPath();
                for (let k = 0; k < spikes * 2; k++) {
                    const r = k % 2 === 0 ? outer : inner;
                    const a = (k / (spikes * 2)) * Math.PI * 2;
                    if (k === 0) ctx.moveTo(Math.cos(a)*r, Math.sin(a)*r);
                    else ctx.lineTo(Math.cos(a)*r, Math.sin(a)*r);
                }
                ctx.closePath(); ctx.fill(); ctx.restore();
            }
            ctx.globalAlpha = 1;
            requestAnimationFrame(frame);
        }
        frame();
        document.addEventListener('click', (e) => createSpark(e.clientX, e.clientY), { passive: true });
        document.addEventListener('touchstart', (e) => { const t = e.touches[0]; if (t) createSpark(t.clientX, t.clientY); }, { passive: true });
    }

    // ============================================================
    // GLOW CURSOR
    // ============================================================
    const GLOW_VERTEX = `#version 300 es
    in vec2 aPosition;
    uniform vec2 uTexel;
    out vec2 vUv;
    out vec2 vL;
    out vec2 vR;
    out vec2 vT;
    out vec2 vB;
    void main() {
      vUv = aPosition * 0.5 + 0.5;
      vL = vUv - vec2(uTexel.x, 0.0);
      vR = vUv + vec2(uTexel.x, 0.0);
      vT = vUv + vec2(0.0, uTexel.y);
      vB = vUv - vec2(0.0, uTexel.y);
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }`;
    const GLOW_HEADER = `#version 300 es
    precision highp float;
    precision highp sampler2D;
    in vec2 vUv;
    in vec2 vL;
    in vec2 vR;
    in vec2 vT;
    in vec2 vB;
    out vec4 outColor;
    `;
    const GLOW_SPLAT = `${GLOW_HEADER}
    uniform sampler2D uTarget;
    uniform float uAspect;
    uniform vec2 uA;
    uniform vec2 uB;
    uniform float uRadius;
    uniform float uWide;
    uniform vec3 uValue;
    uniform float uMode;
    uniform float uStrength;
    float erf(float x) {
      float x2 = x * x;
      float a = 0.147;
      return sign(x) * sqrt(1.0 - exp(-x2 * (1.2732395 + a * x2) / (1.0 + a * x2)));
    }
    float sweep(float along, float length, float across, float radius) {
      return exp(-across * across / (radius * radius)) * 0.5 * (erf(along / radius) - erf((along - length) / radius));
    }
    void main() {
      vec2 p = vec2(vUv.x * uAspect, vUv.y);
      vec2 a = vec2(uA.x * uAspect, uA.y);
      vec2 ab = vec2(uB.x * uAspect, uB.y) - a;
      float len = length(ab);
      vec2 dir = len > 1e-6 ? ab / len : vec2(1.0, 0.0);
      vec2 ap = p - a;
      vec3 base = texture(uTarget, vUv).xyz;
      if (uMode > 1.5) {
        float along = dot(ap, dir);
        float across = dot(ap, vec2(-dir.y, dir.x));
        if (uMode > 2.5) {
          outColor = vec4(mix(base, uValue, sweep(along, len, across, uRadius) * uStrength), 1.0);
          return;
        }
        vec3 add = vec3(uValue.xy * sweep(along, len, across, uRadius), uValue.z * sweep(along, len, across, uWide));
        outColor = vec4(base + add, 1.0);
        return;
      }
      float h = clamp(dot(ap, ab) / max(dot(ab, ab), 1e-9), 0.0, 1.0);
      vec2 d = ap - ab * h;
      float r2 = dot(d, d);
      float falloff = exp(-r2 / (uRadius * uRadius));
      float wide = exp(-r2 / (uWide * uWide));
      vec3 result = uMode > 0.5 ? mix(base, uValue, falloff * uStrength) : base + vec3(uValue.xy * falloff, uValue.z * wide);
      outColor = vec4(result, 1.0);
    }`;
    const GLOW_ADVECT = `${GLOW_HEADER}
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 uVelocityTexel;
    uniform float uDt;
    uniform vec4 uDecay;
    void main() {
      vec2 coord = vUv - uDt * texture(uVelocity, vUv).xy * uVelocityTexel;
      outColor = texture(uSource, coord) * uDecay;
    }`;
    const GLOW_MACCORMACK = `${GLOW_HEADER}
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform sampler2D uForward;
    uniform sampler2D uBack;
    uniform vec2 uVelocityTexel;
    uniform vec2 uSourceTexel;
    uniform float uDt;
    uniform vec4 uDecay;
    void main() {
      vec2 coord = vUv - uDt * texture(uVelocity, vUv).xy * uVelocityTexel;
      vec4 forward = texture(uForward, vUv);
      vec4 corrected = forward + 0.5 * (texture(uSource, vUv) - texture(uBack, vUv));
      vec2 base = (floor(coord / uSourceTexel - 0.5) + 0.5) * uSourceTexel;
      vec4 a = texture(uSource, base);
      vec4 b = texture(uSource, base + vec2(uSourceTexel.x, 0.0));
      vec4 c = texture(uSource, base + vec2(0.0, uSourceTexel.y));
      vec4 d = texture(uSource, base + uSourceTexel);
      vec4 low = min(min(a, b), min(c, d));
      vec4 high = max(max(a, b), max(c, d));
      outColor = clamp(corrected, low, high) * uDecay;
    }`;
    const GLOW_DIVERGENCE = `${GLOW_HEADER}
    uniform sampler2D uVelocity;
    void main() {
      float left = texture(uVelocity, vL).x;
      float right = texture(uVelocity, vR).x;
      float top = texture(uVelocity, vT).y;
      float bottom = texture(uVelocity, vB).y;
      vec2 center = texture(uVelocity, vUv).xy;
      if (vL.x < 0.0) left = -center.x;
      if (vR.x > 1.0) right = -center.x;
      if (vT.y > 1.0) top = -center.y;
      if (vB.y < 0.0) bottom = -center.y;
      outColor = vec4(0.5 * (right - left + top - bottom), 0.0, 0.0, 1.0);
    }`;
    const GLOW_SCALE = `${GLOW_HEADER}
    uniform sampler2D uSource;
    uniform float uValue;
    void main() { outColor = texture(uSource, vUv) * uValue; }`;
    const GLOW_PRESSURE = `${GLOW_HEADER}
    uniform sampler2D uPressure;
    uniform sampler2D uDivergence;
    void main() {
      float left = texture(uPressure, vL).x;
      float right = texture(uPressure, vR).x;
      float top = texture(uPressure, vT).x;
      float bottom = texture(uPressure, vB).x;
      float divergence = texture(uDivergence, vUv).x;
      outColor = vec4((left + right + bottom + top - divergence) * 0.25, 0.0, 0.0, 1.0);
    }`;
    const GLOW_GRADIENT = `${GLOW_HEADER}
    uniform sampler2D uPressure;
    uniform sampler2D uVelocity;
    void main() {
      float left = texture(uPressure, vL).x;
      float right = texture(uPressure, vR).x;
      float top = texture(uPressure, vT).x;
      float bottom = texture(uPressure, vB).x;
      vec2 velocity = texture(uVelocity, vUv).xy - vec2(right - left, top - bottom);
      outColor = vec4(velocity, 0.0, 1.0);
    }`;
    const GLOW_SHADE = `
    uniform vec3 uColor;
    uniform vec3 uSecondary;
    uniform float uIntensity;
    uniform float uHotspot;
    vec3 shade(vec3 dye) {
      float energy = max(dye.x, 0.0);
      float heat = clamp(dye.y, 0.0, energy);
      float gas = max(dye.z, 0.0);
      float fresh = heat / max(energy, 0.0001);
      vec3 tint = mix(uSecondary, uColor, fresh);
      return (tint * energy + uSecondary * gas + vec3(heat * heat * 0.3 * uHotspot)) * uIntensity;
    }`;
    const GLOW_PREFILTER = `${GLOW_HEADER}${GLOW_SHADE}
    uniform sampler2D uDye;
    uniform vec2 uDyeTexel;
    void main() {
      vec2 o = uDyeTexel * 0.5;
      vec3 light = shade(texture(uDye, vUv + vec2(-o.x, -o.y)).xyz);
      light += shade(texture(uDye, vUv + vec2(o.x, -o.y)).xyz);
      light += shade(texture(uDye, vUv + vec2(-o.x, o.y)).xyz);
      light += shade(texture(uDye, vUv + vec2(o.x, o.y)).xyz);
      outColor = vec4(light * 0.25, 1.0);
    }`;
    const GLOW_DOWN = `${GLOW_HEADER}
    uniform sampler2D uSource;
    uniform vec2 uSourceTexel;
    void main() {
      vec2 o = uSourceTexel;
      vec3 color = texture(uSource, vUv).rgb * 4.0;
      color += texture(uSource, vUv + vec2(-o.x, -o.y)).rgb;
      color += texture(uSource, vUv + vec2(o.x, -o.y)).rgb;
      color += texture(uSource, vUv + vec2(-o.x, o.y)).rgb;
      color += texture(uSource, vUv + vec2(o.x, o.y)).rgb;
      outColor = vec4(color / 8.0, 1.0);
    }`;
    const GLOW_UP = `${GLOW_HEADER}
    uniform sampler2D uSource;
    uniform vec2 uSourceTexel;
    void main() {
      vec2 o = uSourceTexel;
      vec3 color = texture(uSource, vUv + vec2(-o.x * 2.0, 0.0)).rgb;
      color += texture(uSource, vUv + vec2(o.x * 2.0, 0.0)).rgb;
      color += texture(uSource, vUv + vec2(0.0, -o.y * 2.0)).rgb;
      color += texture(uSource, vUv + vec2(0.0, o.y * 2.0)).rgb;
      color += texture(uSource, vUv + vec2(-o.x, -o.y)).rgb * 2.0;
      color += texture(uSource, vUv + vec2(o.x, -o.y)).rgb * 2.0;
      color += texture(uSource, vUv + vec2(-o.x, o.y)).rgb * 2.0;
      color += texture(uSource, vUv + vec2(o.x, o.y)).rgb * 2.0;
      outColor = vec4(color / 12.0, 1.0);
    }`;
    const GLOW_DISPLAY = `${GLOW_HEADER}${GLOW_SHADE}
    uniform sampler2D uDye;
    uniform sampler2D uBloom;
    uniform float uGlow;
    uniform float uGrain;
    uniform float uTime;
    uniform float uLight;
    float hash(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }
    void main() {
      vec3 dye = texture(uDye, vUv).xyz;
      vec3 light = shade(dye);
      vec3 bloom = texture(uBloom, vUv).rgb * uGlow;
      float edge = smoothstep(0.0, 0.02, min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y)));
      float grain = 1.0 + (hash(gl_FragCoord.xy + fract(uTime * 13.7) * 97.0) - 0.5) * uGrain * 2.0;
      if (uLight > 0.5) {
        float energy = max(dye.x, 0.0);
        float heat = clamp(dye.y, 0.0, energy);
        float gas = max(dye.z, 0.0);
        float fresh = heat / max(energy, 0.0001);
        vec3 tint = mix(uSecondary, uColor, fresh);
        float halo = dot(bloom, vec3(0.2126, 0.7152, 0.0722));
        float density = 1.0 - exp(-((energy * 1.1 + gas * 0.8) * uIntensity + halo * 0.25));
        float tone = dot(tint, vec3(0.2126, 0.7152, 0.0722));
        vec3 ink = tint * min(1.0, 0.5 / max(tone, 0.001)) * mix(0.95, 0.72, smoothstep(0.5, 3.0, energy));
        ink = mix(ink, vec3(1.0), clamp(heat * heat * 0.05 * uHotspot, 0.0, 0.45));
        density = clamp(density * grain, 0.0, 1.0) * edge;
        outColor = vec4(ink * density, density);
      } else {
        vec3 color = 1.0 - exp(-(light + bloom) * grain);
        color *= edge;
        outColor = vec4(color, max(color.r, max(color.g, color.b)));
      }
    }`;

    const GLOW_QUALITY = { low: { sim: 96, dye: 384 }, medium: { sim: 128, dye: 576 }, high: { sim: 160, dye: 768 } };
    const GLOW_PRESSURE_STEPS = 20;
    const GLOW_FLOW = 0.75;
    const GLOW_BLOOM_LEVELS = 5;

    function compileShader(gl, type, source) {
        const shader = gl.createShader(type);
        if (!shader) return null;
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader;
        console.error('Shader error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    function toHsv([r, g, b]) {
        const max = Math.max(r, g, b), min = Math.min(r, g, b), delta = max - min;
        let hue = 0;
        if (delta > 0) {
            if (max === r) hue = ((g - b) / delta) % 6;
            else if (max === g) hue = (b - r) / delta + 2;
            else hue = (r - g) / delta + 4;
        }
        return [(hue * 60 + 360) % 360, max > 0 ? delta / max : 0, max];
    }
    function fromHsv(hue, saturation, value) {
        const h = (((hue % 360) + 360) % 360) / 60;
        const c = value * saturation;
        const x = c * (1 - Math.abs((h % 2) - 1));
        const m = value - c;
        const [r, g, b] = h < 1 ? [c, x, 0] : h < 2 ? [x, c, 0] : h < 3 ? [0, c, x] : h < 4 ? [0, x, c] : h < 5 ? [x, 0, c] : [c, 0, x];
        return [r + m, g + m, b + m];
    }

    function initGlowCursor() {
        const container = document.getElementById('glow-cursor-root');
        const canvas = document.getElementById('glow-canvas');
        if (!container || !canvas) return;

        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        const settings = {
            color: '#818CF8', /* Cor do glow a condizer com o acento */
            secondaryColor: '',
            intensity: 1.3,
            trailWidth: 3,
            linger: 1.4,
            glow: 1.2,
            hotspot: 0.8,
            followSpeed: 0.6,
            grain: 0.015,
            clickBurst: true,
            quality: isMobile ? 'medium' : 'high',
            theme: state.theme,
            maxDevicePixelRatio: isMobile ? 1.5 : 2,
            enabled: true
        };

        const gl = canvas.getContext('webgl2', { alpha: true, premultipliedAlpha: true, antialias: false, depth: false, stencil: false });
        if (!gl || !gl.getExtension('EXT_color_buffer_float')) {
            console.warn('GlowCursor: WebGL2/EXT_color_buffer_float não disponível.');
            return;
        }

        const vertexShader = compileShader(gl, gl.VERTEX_SHADER, GLOW_VERTEX);
        if (!vertexShader) return;

        function build(source) {
            const fragment = compileShader(gl, gl.FRAGMENT_SHADER, source);
            const program = gl.createProgram();
            if (!fragment || !program) return null;
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragment);
            gl.bindAttribLocation(program, 0, 'aPosition');
            gl.linkProgram(program);
            gl.deleteShader(fragment);
            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) { gl.deleteProgram(program); return null; }
            const uniforms = {};
            const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
            for (let i = 0; i < count; i++) {
                const info = gl.getActiveUniform(program, i);
                if (info) uniforms[info.name] = gl.getUniformLocation(program, info.name);
            }
            return { program, uniforms };
        }

        const passes = {
            splat: build(GLOW_SPLAT), advect: build(GLOW_ADVECT), maccormack: build(GLOW_MACCORMACK),
            divergence: build(GLOW_DIVERGENCE), scale: build(GLOW_SCALE), pressure: build(GLOW_PRESSURE),
            gradient: build(GLOW_GRADIENT), prefilter: build(GLOW_PREFILTER), down: build(GLOW_DOWN),
            up: build(GLOW_UP), display: build(GLOW_DISPLAY)
        };
        if (Object.values(passes).some(p => !p)) return;

        const vao = gl.createVertexArray();
        const buffer = gl.createBuffer();
        gl.bindVertexArray(vao);
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

        const probe = document.createElement('canvas');
        probe.width = 1; probe.height = 1;
        const probeCtx = probe.getContext('2d', { willReadFrequently: true });
        const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

        const S = {
            width: 1, height: 1, ratio: 1,
            colorKey: '',
            color: [0.37, 0.55, 1],
            secondary: [0.25, 0.3, 1],
            pointer: { x: 0, y: 0, inside: false },
            emitter: { x: 0, y: 0, vx: 0, vy: 0, px: 0, py: 0 },
            ready: false,
            bursts: [],
            active: -Infinity,
            time: 0,
            allocated: '',
            targets: null
        };
        let raf = 0, last = 0, alive = true, visible = true, resizePending = false;

        function toRgb(value, fallback) {
            if (!probeCtx || !value) return fallback;
            const css = /^[0-9a-f]{3,8}$/i.test(value) ? `#${value}` : value;
            probeCtx.clearRect(0, 0, 1, 1);
            probeCtx.fillStyle = '#000';
            probeCtx.fillStyle = css;
            probeCtx.fillRect(0, 0, 1, 1);
            const [r, g, b] = probeCtx.getImageData(0, 0, 1, 1).data;
            return [r / 255, g / 255, b / 255];
        }
        function resolveColors() {
            const key = `${settings.color}|${settings.secondaryColor}`;
            if (key === S.colorKey) return;
            S.colorKey = key;
            S.color = toRgb(settings.color, [0.37, 0.55, 1]);
            if (settings.secondaryColor) S.secondary = toRgb(settings.secondaryColor, S.color);
            else {
                const [h, s, v] = toHsv(S.color);
                S.secondary = fromHsv(h + 8, Math.min(1, s * 1.1 + 0.05), v);
            }
        }
        function createTarget(w, h, internalFormat, format, filter) {
            const texture = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, gl.HALF_FLOAT, null);
            const fbo = gl.createFramebuffer();
            gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
            gl.viewport(0, 0, w, h);
            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);
            return { texture, fbo, width: w, height: h, texel: [1 / w, 1 / h] };
        }
        function createPair(w, h, iF, f, filter) {
            let read = createTarget(w, h, iF, f, filter);
            let write = createTarget(w, h, iF, f, filter);
            return {
                get read() { return read; },
                get write() { return write; },
                swap() { const t = read; read = write; write = t; },
                targets() { return [read, write]; }
            };
        }
        function destroyTarget(t) { gl.deleteTexture(t.texture); gl.deleteFramebuffer(t.fbo); }
        function release() {
            const t = S.targets;
            if (!t) return;
            [...t.velocity.targets(), ...t.dye.targets(), ...t.pressure.targets(), t.divergence, t.forward, t.back, ...t.bloom].forEach(destroyTarget);
            S.targets = null;
        }
        function clearTargets() {
            const t = S.targets;
            if (!t) return;
            gl.clearColor(0, 0, 0, 0);
            [...t.velocity.targets(), ...t.dye.targets(), ...t.pressure.targets()].forEach(target => {
                gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
                gl.clear(gl.COLOR_BUFFER_BIT);
            });
        }
        function allocate() {
            const key = `${settings.quality}|${S.width}|${S.height}|${canvas.width}|${canvas.height}`;
            if (key === S.allocated && S.targets) return;
            release();
            S.allocated = key;
            const preset = GLOW_QUALITY[settings.quality];
            const aspect = S.width / S.height;
            const dims = base => (aspect >= 1 ? [Math.round(base * aspect), base] : [base, Math.round(base / aspect)]);
            const [simW, simH] = dims(preset.sim);
            let [dyeW, dyeH] = dims(preset.dye);
            const shrink = Math.min(1, canvas.width / dyeW, canvas.height / dyeH);
            dyeW = Math.max(2, Math.round(dyeW * shrink));
            dyeH = Math.max(2, Math.round(dyeH * shrink));
            const bloom = [];
            let bw = dyeW >> 1, bh = dyeH >> 1;
            for (let i = 0; i < GLOW_BLOOM_LEVELS; i++) {
                bloom.push(createTarget(Math.max(1, bw), Math.max(1, bh), gl.RGBA16F, gl.RGBA, gl.LINEAR));
                bw >>= 1; bh >>= 1;
            }
            S.targets = {
                velocity: createPair(simW, simH, gl.RG16F, gl.RG, gl.LINEAR),
                dye: createPair(dyeW, dyeH, gl.RGBA16F, gl.RGBA, gl.LINEAR),
                forward: createTarget(dyeW, dyeH, gl.RGBA16F, gl.RGBA, gl.LINEAR),
                back: createTarget(dyeW, dyeH, gl.RGBA16F, gl.RGBA, gl.LINEAR),
                pressure: createPair(simW, simH, gl.R16F, gl.RED, gl.NEAREST),
                divergence: createTarget(simW, simH, gl.R16F, gl.RED, gl.NEAREST),
                bloom
            };
        }
        function applyResize() {
            const w = Math.max(1, container.clientWidth);
            const h = Math.max(1, container.clientHeight);
            const ratio = Math.min(window.devicePixelRatio || 1, Math.max(0.5, settings.maxDevicePixelRatio || 2));
            const pw = Math.max(1, Math.round(w * ratio));
            const ph = Math.max(1, Math.round(h * ratio));
            if (canvas.width !== pw || canvas.height !== ph) { canvas.width = pw; canvas.height = ph; }
            S.width = w; S.height = h; S.ratio = ratio;
            allocate();
        }
        function resize() { resizePending = true; wake(); }
        function draw(target) {
            if (target) { gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo); gl.viewport(0, 0, target.width, target.height); }
            else { gl.bindFramebuffer(gl.FRAMEBUFFER, null); gl.viewport(0, 0, canvas.width, canvas.height); }
            gl.drawArrays(gl.TRIANGLES, 0, 3);
        }
        function use(pass, texel) {
            gl.useProgram(pass.program);
            if (pass.uniforms.uTexel) gl.uniform2f(pass.uniforms.uTexel, texel[0], texel[1]);
            return pass.uniforms;
        }
        function bind(unit, target) {
            gl.activeTexture(gl.TEXTURE0 + unit);
            gl.bindTexture(gl.TEXTURE_2D, target.texture);
            return unit;
        }
        function splat(pair, ax, ay, bx, by, radius, value, mode, strength, wide = radius) {
            const u = use(passes.splat, pair.read.texel);
            gl.uniform1i(u.uTarget, bind(0, pair.read));
            gl.uniform1f(u.uAspect, S.width / S.height);
            gl.uniform2f(u.uA, ax / S.width, 1 - ay / S.height);
            gl.uniform2f(u.uB, bx / S.width, 1 - by / S.height);
            gl.uniform1f(u.uRadius, radius / S.height);
            gl.uniform1f(u.uWide, wide / S.height);
            gl.uniform3f(u.uValue, value[0], value[1], value[2]);
            gl.uniform1f(u.uMode, mode);
            gl.uniform1f(u.uStrength, strength);
            draw(pair.write);
            pair.swap();
        }
        function toGrid(vx, vy) {
            const v = S.targets.velocity;
            return [(vx * v.read.width) / S.width, (-vy * v.read.height) / S.height];
        }
        function lightRadius() {
            return Math.max(settings.trailWidth * 0.5, (S.height / S.targets.dye.read.height) * 0.9);
        }
        function emit(dt, now) {
            const e = S.emitter, p = S.pointer;
            e.px = e.x; e.py = e.y;
            if (reduce || settings.followSpeed >= 1) {
                e.x = p.x; e.y = p.y;
            } else {
                const omega = 10 + settings.followSpeed * 50;
                const steps = Math.max(1, Math.ceil(dt / 0.004));
                const h = dt / steps;
                for (let k = 0; k < steps; k++) {
                    e.vx += (omega * omega * (p.x - e.x) - 2 * omega * e.vx) * h;
                    e.vy += (omega * omega * (p.y - e.y) - 2 * omega * e.vy) * h;
                    e.x += e.vx * h;
                    e.y += e.vy * h;
                }
            }
            const dx = e.x - e.px, dy = e.y - e.py;
            const length = Math.hypot(dx, dy);
            if (length < 0.05 || !settings.enabled) return;
            const radius = lightRadius();
            if (!reduce) {
                const target = toGrid(dx / Math.max(dt, 1e-3), dy / Math.max(dt, 1e-3));
                splat(S.targets.velocity, e.px, e.py, e.x, e.y, radius * 4 + 18, [target[0], target[1], 0], 3, GLOW_FLOW * 0.6);
            }
            splat(S.targets.dye, e.px, e.py, e.x, e.y, radius, [5.6, 5.6, 0.7], 2, 1, radius * 5 + 6);
            S.active = now;
        }
        function burst(x, y, now) {
            const radius = lightRadius();
            const jets = 6;
            const base = Math.random() * Math.PI * 2;
            for (let k = 0; k < jets; k++) {
                const angle = base + (k / jets) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
                const cx = Math.cos(angle), cy = Math.sin(angle);
                const reach = 20 + Math.random() * 14;
                const ax = x + cx * 3, ay = y + cy * 3;
                const bx = x + cx * reach, by = y + cy * reach;
                if (!reduce) {
                    const target = toGrid(Math.cos(angle + 0.6) * 760, Math.sin(angle + 0.6) * 760);
                    splat(S.targets.velocity, ax, ay, bx, by, 18, [target[0], target[1], 0], 1, 0.9);
                }
                splat(S.targets.dye, ax, ay, bx, by, radius * 1.1, [2.4, 2.4, 0.3], 0, 1, radius * 5 + 6);
            }
            splat(S.targets.dye, x, y, x + 0.01, y, radius * 2.2, [1.8, 1.8, 0.4], 0, 1, radius * 7 + 10);
            S.active = now;
        }
        function step(dt) {
            const { velocity, dye, pressure, divergence } = S.targets;
            if (!reduce) {
                let u = use(passes.divergence, velocity.read.texel);
                gl.uniform1i(u.uVelocity, bind(0, velocity.read));
                draw(divergence);
                u = use(passes.scale, pressure.read.texel);
                gl.uniform1i(u.uSource, bind(0, pressure.read));
                gl.uniform1f(u.uValue, 0.8);
                draw(pressure.write);
                pressure.swap();
                u = use(passes.pressure, pressure.read.texel);
                gl.uniform1i(u.uDivergence, bind(1, divergence));
                for (let i = 0; i < GLOW_PRESSURE_STEPS; i++) {
                    gl.uniform1i(u.uPressure, bind(0, pressure.read));
                    draw(pressure.write);
                    pressure.swap();
                }
                u = use(passes.gradient, velocity.read.texel);
                gl.uniform1i(u.uPressure, bind(0, pressure.read));
                gl.uniform1i(u.uVelocity, bind(1, velocity.read));
                draw(velocity.write);
                velocity.swap();
                u = use(passes.advect, velocity.read.texel);
                gl.uniform2f(u.uVelocityTexel, velocity.read.texel[0], velocity.read.texel[1]);
                gl.uniform1i(u.uVelocity, bind(0, velocity.read));
                gl.uniform1i(u.uSource, bind(0, velocity.read));
                gl.uniform1f(u.uDt, dt);
                const calm = Math.exp(-dt * 1.2);
                gl.uniform4f(u.uDecay, calm, calm, 1, 1);
                draw(velocity.write);
                velocity.swap();
            }
            const decay = [
                Math.exp((-dt * 4.6) / (settings.linger * 0.8)),
                Math.exp((-dt * 4.6) / (settings.linger * 0.2)),
                Math.exp((-dt * 4.6) / (settings.linger * 1.2)),
                1
            ];
            const { forward, back } = S.targets;
            if (reduce) {
                const u = use(passes.advect, dye.read.texel);
                gl.uniform2f(u.uVelocityTexel, velocity.read.texel[0], velocity.read.texel[1]);
                gl.uniform1i(u.uVelocity, bind(0, velocity.read));
                gl.uniform1i(u.uSource, bind(1, dye.read));
                gl.uniform1f(u.uDt, 0);
                gl.uniform4f(u.uDecay, decay[0], decay[1], decay[2], decay[3]);
                draw(dye.write);
                dye.swap();
                return;
            }
            let u = use(passes.advect, dye.read.texel);
            gl.uniform2f(u.uVelocityTexel, velocity.read.texel[0], velocity.read.texel[1]);
            gl.uniform1i(u.uVelocity, bind(0, velocity.read));
            gl.uniform1i(u.uSource, bind(1, dye.read));
            gl.uniform1f(u.uDt, dt);
            gl.uniform4f(u.uDecay, 1, 1, 1, 1);
            draw(forward);
            gl.uniform1i(u.uSource, bind(1, forward));
            gl.uniform1f(u.uDt, -dt);
            draw(back);
            u = use(passes.maccormack, dye.read.texel);
            gl.uniform2f(u.uVelocityTexel, velocity.read.texel[0], velocity.read.texel[1]);
            gl.uniform2f(u.uSourceTexel, dye.read.texel[0], dye.read.texel[1]);
            gl.uniform1i(u.uVelocity, bind(0, velocity.read));
            gl.uniform1i(u.uSource, bind(1, dye.read));
            gl.uniform1i(u.uForward, bind(2, forward));
            gl.uniform1i(u.uBack, bind(3, back));
            gl.uniform1f(u.uDt, dt);
            gl.uniform4f(u.uDecay, decay[0], decay[1], decay[2], decay[3]);
            draw(dye.write);
            dye.swap();
        }
        function setShade(u) {
            gl.uniform3f(u.uColor, S.color[0], S.color[1], S.color[2]);
            gl.uniform3f(u.uSecondary, S.secondary[0], S.secondary[1], S.secondary[2]);
            gl.uniform1f(u.uIntensity, settings.intensity);
            gl.uniform1f(u.uHotspot, settings.hotspot);
        }
        function render() {
            const { dye, bloom } = S.targets;
            if (settings.glow > 0) {
                let u = use(passes.prefilter, bloom[0].texel);
                gl.uniform1i(u.uDye, bind(0, dye.read));
                gl.uniform2f(u.uDyeTexel, dye.read.texel[0], dye.read.texel[1]);
                setShade(u);
                draw(bloom[0]);
                u = use(passes.down, bloom[0].texel);
                for (let i = 1; i < bloom.length; i++) {
                    gl.uniform1i(u.uSource, bind(0, bloom[i - 1]));
                    gl.uniform2f(u.uSourceTexel, bloom[i - 1].texel[0], bloom[i - 1].texel[1]);
                    draw(bloom[i]);
                }
                gl.enable(gl.BLEND);
                gl.blendFunc(gl.ONE, gl.ONE);
                u = use(passes.up, bloom[0].texel);
                for (let i = bloom.length - 1; i > 0; i--) {
                    gl.uniform1i(u.uSource, bind(0, bloom[i]));
                    gl.uniform2f(u.uSourceTexel, bloom[i].texel[0], bloom[i].texel[1]);
                    draw(bloom[i - 1]);
                }
                gl.disable(gl.BLEND);
            }
            const u = use(passes.display, [1 / canvas.width, 1 / canvas.height]);
            gl.uniform1i(u.uDye, bind(0, dye.read));
            gl.uniform1i(u.uBloom, bind(1, bloom[0]));
            setShade(u);
            gl.uniform1f(u.uGlow, settings.glow > 0 ? (settings.glow * 1.4) / GLOW_BLOOM_LEVELS : 0);
            gl.uniform1f(u.uGrain, settings.grain);
            gl.uniform1f(u.uTime, S.time);
            gl.uniform1f(u.uLight, settings.theme === 'light' ? 1 : 0);
            draw(null);
        }
        function blank() {
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);
        }
        function frame(now) {
            raf = 0;
            if (resizePending) { resizePending = false; applyResize(); }
            if (!alive || !visible || document.hidden) return;
            const dt = last ? Math.min(1 / 30, (now - last) / 1000) : 1 / 60;
            last = now;
            S.time += dt;
            const wanted = Math.min(window.devicePixelRatio || 1, Math.max(0.5, settings.maxDevicePixelRatio || 2));
            if (Math.abs(wanted - S.ratio) > 0.01) applyResize();
            allocate();
            resolveColors();
            gl.bindVertexArray(vao);
            gl.disable(gl.BLEND);
            if (S.ready) emit(dt, now);
            while (S.bursts.length) {
                const [bx, by] = S.bursts.shift();
                burst(bx, by, now);
            }
            step(dt);
            render();
            const quiet = now - S.active > settings.linger * 1200 + 900;
            const resting = Math.hypot(S.emitter.vx, S.emitter.vy) < 1;
            if (quiet && resting) {
                clearTargets();
                blank();
                last = 0;
                return;
            }
            raf = requestAnimationFrame(frame);
        }
        function wake() { if (!raf && alive && visible && !document.hidden) raf = requestAnimationFrame(frame); }

        const updatePointerFromClient = (clientX, clientY) => {
            const rect = container.getBoundingClientRect();
            const x = clientX - rect.left;
            const y = clientY - rect.top;
            const inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
            if (!inside) {
                if (S.pointer.inside) { S.pointer.inside = false; S.ready = false; wake(); }
                return false;
            }
            if (!S.ready) {
                S.emitter.x = x; S.emitter.y = y;
                S.emitter.px = x; S.emitter.py = y;
                S.emitter.vx = 0; S.emitter.vy = 0;
                S.ready = true;
            }
            S.pointer.x = x; S.pointer.y = y; S.pointer.inside = true;
            wake();
            return true;
        };

        const onPointerMove = (event) => {
            if (event.pointerType === 'touch') return;
            updatePointerFromClient(event.clientX, event.clientY);
        };
        const onPointerDown = (event) => {
            if (!settings.clickBurst || !settings.enabled) return;
            if (event.pointerType === 'touch') return;
            const rect = container.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;
            S.bursts.push([x, y]);
            wake();
        };
        const onPointerLeave = () => { S.pointer.inside = false; S.ready = false; wake(); };

        const onTouchStart = (e) => {
            const t = e.touches[0];
            if (!t) return;
            updatePointerFromClient(t.clientX, t.clientY);
            if (settings.clickBurst && settings.enabled) {
                const rect = container.getBoundingClientRect();
                const x = t.clientX - rect.left;
                const y = t.clientY - rect.top;
                if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
                    S.bursts.push([x, y]);
                    wake();
                }
            }
        };
        const onTouchMove = (e) => {
            const t = e.touches[0];
            if (!t) return;
            updatePointerFromClient(t.clientX, t.clientY);
        };
        const onTouchEnd = () => {
            S.pointer.inside = false;
            S.ready = false;
            last = 0;
            wake();
        };

        const onVisibility = () => { last = 0; wake(); };

        const resizeObs = new ResizeObserver(() => { resize(); wake(); });
        resizeObs.observe(container);
        const interObs = new IntersectionObserver(entries => {
            visible = entries.some(e => e.isIntersecting);
            if (visible) { last = 0; wake(); }
        });
        interObs.observe(container);

        window.addEventListener('pointermove', onPointerMove, { passive: true });
        window.addEventListener('pointerdown', onPointerDown, { passive: true });
        document.documentElement.addEventListener('pointerleave', onPointerLeave);
        document.addEventListener('visibilitychange', onVisibility);
        container.addEventListener('touchstart', onTouchStart, { passive: true });
        container.addEventListener('touchmove', onTouchMove, { passive: true });
        container.addEventListener('touchend', onTouchEnd, { passive: true });
        container.addEventListener('touchcancel', onTouchEnd, { passive: true });

        resize();
        blank();

        window.__glowCursor = {
            setTheme(theme) {
                settings.theme = theme;
                canvas.style.mixBlendMode = theme === 'light' ? 'normal' : 'screen';
            },
            setEnabled(v) { settings.enabled = !!v; },
            destroy() {
                alive = false;
                cancelAnimationFrame(raf);
                resizeObs.disconnect();
                interObs.disconnect();
                window.removeEventListener('pointermove', onPointerMove);
                window.removeEventListener('pointerdown', onPointerDown);
                document.documentElement.removeEventListener('pointerleave', onPointerLeave);
                document.removeEventListener('visibilitychange', onVisibility);
                container.removeEventListener('touchstart', onTouchStart);
                container.removeEventListener('touchmove', onTouchMove);
                container.removeEventListener('touchend', onTouchEnd);
                container.removeEventListener('touchcancel', onTouchEnd);
                release();
                Object.values(passes).forEach(p => gl.deleteProgram(p.program));
                gl.deleteShader(vertexShader);
                gl.deleteBuffer(buffer);
                gl.deleteVertexArray(vao);
            }
        };
        canvas.style.mixBlendMode = settings.theme === 'light' ? 'normal' : 'screen';
    }

    // ============================================================
    // LOAD INCLUDES + SESSIONS (fail-safe, works on file://)
    // Templates are loaded as <script> (window.INCLUDE_* / window.SESSION_*)
    // ============================================================
    function loadIncludesAndSessions() {
        // Header
        const headerSlot = document.getElementById('header-slot');
        if (headerSlot && window.INCLUDE_HEADER) {
            headerSlot.innerHTML = window.INCLUDE_HEADER;
        } else if (!window.INCLUDE_HEADER) {
            console.warn('include/header.js not loaded — header skipped');
        }

        // Footer
        const footerSlot = document.getElementById('footer-slot');
        if (footerSlot && window.INCLUDE_FOOTER) {
            footerSlot.innerHTML = window.INCLUDE_FOOTER;
        } else if (!window.INCLUDE_FOOTER) {
            console.warn('include/footer.js not loaded — footer skipped');
        }

        // Sessions — order from data.js nav; missing templates are skipped
        const scrollerEl = document.getElementById('scroller');
        SECTIONS = [];
        if (!scrollerEl || !state.data) return;

        const langKey = state.currentLang in state.data ? state.currentLang : (state.data.meta?.defaultLang || 'en');
        const nav = (state.data[langKey] && state.data[langKey].nav) || [];
        const ids = nav.map(n => n.id).filter(Boolean);

        const fallback = ['hero','skills','projects','education','quote','contact'];
        const order = ids.length ? ids : fallback;

        for (const id of order) {
            const html = window['SESSION_' + id];
            if (!html) {
                console.warn(`Session "${id}" not found (sessions/${id}.js) — skipped`);
                continue;
            }
            scrollerEl.insertAdjacentHTML('beforeend', html);
            SECTIONS.push(id);
        }
    }

    // ============================================================
    // INIT
    // ============================================================
    window.addEventListener('load', () => {
        if (!loadData()) return;
        if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'en');
        if (!localStorage.getItem('theme')) localStorage.setItem('theme', 'dark');
        state.currentLang = localStorage.getItem('lang');
        state.theme = localStorage.getItem('theme');
        document.documentElement.lang = state.currentLang;

        loadIncludesAndSessions();

        applyTheme();
        render();
        if (window.lucide) lucide.createIcons();

        initClickSpark();
        initCrosshair();

        requestAnimationFrame(() => updateActiveNav());

        try { initGlowCursor(); } catch (err) { console.warn('GlowCursor init failed:', err); }

        const hint = document.getElementById('scroll-hint');
        if (hint && scroller) {
            scroller.addEventListener('scroll', () => {
                hint.classList.toggle('hidden', scroller.scrollTop > 50);
            }, { passive: true });
        }
    });
    
