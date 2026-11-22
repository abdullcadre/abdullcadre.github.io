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

        const fallback = ['hero','skills','projects','education','contact'];
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


        requestAnimationFrame(() => updateActiveNav());

        const hint = document.getElementById('scroll-hint');
        if (hint && scroller) {
            scroller.addEventListener('scroll', () => {
                hint.classList.toggle('hidden', scroller.scrollTop > 50);
            }, { passive: true });
        }
    });
    
