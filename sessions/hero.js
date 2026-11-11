window.SESSION_hero = `<!-- HERO -->
<section id="hero" class="snap-section blueprint-grid" style="border-bottom: 1px solid var(--border);">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto fit-content">
        <div class="fade-content panel rounded-xl p-5 sm:p-10" style="background: var(--surface); border: 1px solid var(--border);">
            <div class="section-noise" aria-hidden="true"></div>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 hero-inner">
                <div class="lg:col-span-7 space-y-4 sm:space-y-5">
                    <h1 class="text-2xl sm:text-5xl font-bold tracking-tight leading-[1.1]" id="hero-name">Abdul Cadre</h1>
                    <p class="text-xs sm:text-base leading-relaxed" style="color: var(--text-muted);" id="hero-subtitle">Mobile developer (B4X / Android), lecturer and ICT trainer in Mozambique.</p>
                    <div class="hero-cta-row pt-1 flex sm:flex-nowrap items-center gap-2 sm:gap-3">
                        <a href="#contact" data-nav-jump="contact" class="cta-btn px-4 py-2 rounded-lg text-white text-xs font-semibold shadow-lg flex items-center gap-2 star-border" style="background: var(--accent); box-shadow: 0 4px 14px var(--accent-border);">
                            <i data-lucide="send" class="w-3.5 h-3.5"></i>
                            <span id="btn-contact">Get in touch</span>
                        </a>
                        <button onclick="downloadCV()" class="cta-btn px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2" style="background: var(--bg); border: 1px solid var(--border); color: var(--text);">
                            <i data-lucide="download" class="w-3.5 h-3.5" style="color: var(--accent);"></i>
                            <span id="btn-cv">Download CV</span>
                        </button>
                    </div>
                    <div class="socials-icons-mobile flex sm:hidden items-center gap-2 pt-2" id="hero-socials-mobile"></div>
                    <div class="hidden sm:flex flex-wrap items-center gap-2 pt-1" id="hero-socials"></div>
                </div>
                <div class="hidden lg:block lg:col-span-5 rounded-lg p-4 font-mono text-xs space-y-2.5" style="background: var(--bg); border: 1px solid var(--border);">
                    <div class="flex items-center justify-between pb-2" style="border-bottom: 1px solid var(--border);">
                        <div class="flex items-center gap-2 text-[10px]" style="color: var(--text-muted);">
                            <i data-lucide="layers" class="w-3.5 h-3.5" style="color: var(--accent);"></i>
                            <span>INSPECTOR</span>
                        </div>
                        <span class="text-[9px] px-1.5 py-0.5 rounded font-bold" style="background: rgba(34,197,94,0.15); color: #22c55e;">READY</span>
                    </div>
                    <div class="space-y-1 text-[11px]">
                        <p><span style="color: var(--accent);">location:</span> "<span id="inspector-location">Mozambique</span>";</p>
                        <p><span style="color: var(--accent);">email:</span> "<span id="inspector-email">abdullcadre@gmail.com</span>";</p>
                        <p><span style="color: var(--accent);">degree:</span> "<span id="inspector-degree">BSc Computer Science</span>";</p>
                        <p><span style="color: var(--accent);">stack:</span> <span id="inspector-stack">["B4X","Android","PHP","SQLite"]</span>;</p>
                    </div>
                    <div class="pt-2 flex items-center justify-between text-[10px]" style="border-top: 1px solid var(--border); color: var(--text-muted);">
                        <span id="inspector-university">LICUNGO UNIVERSITY</span>
                        <span class="font-bold" style="color: var(--accent);" id="inspector-year">2021</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`;
