window.SESSION_hero = `<!-- HERO -->
<section id="hero" class="snap-section blueprint-grid" style="border-bottom: 1px solid var(--border);">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto fit-content">
        <div class="fade-content panel rounded-xl p-5 sm:p-10" style="background: var(--surface); border: 1px solid var(--border);">
            <div class="section-noise" aria-hidden="true"></div>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 hero-inner">
                <div class="lg:col-span-7 space-y-4 sm:space-y-5">
                    <h1 class="text-2xl sm:text-5xl font-bold tracking-tight leading-[1.1]" id="hero-name">Abdul Cadre</h1>
                    <p class="text-xs sm:text-base leading-relaxed" style="color: var(--text-muted);" id="hero-subtitle">Front-end and Back-end Developer</p>
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
                <div class="inspector-box hidden lg:block lg:col-span-5 rounded-lg p-4 font-mono text-xs space-y-2.5" style="background: var(--bg); border: 1px solid var(--border);">
                    <div class="flex items-center justify-between pb-2" style="border-bottom: 1px solid var(--border);">
                        <div class="flex items-center gap-2 text-[10px]" style="color: var(--text-muted);">
                            <i data-lucide="file-code" class="w-3.5 h-3.5" style="color: var(--accent);"></i>
                            <span>inspector.py</span>
                        </div>
                        <button type="button" id="inspector-run" class="py-run"><i data-lucide="play" class="w-3 h-3"></i><span>Run</span></button>
                    </div>
                    <div class="space-y-1 text-[11px] py-code">
                        <p><span style="color: var(--accent);">location</span> = <span class="py-str">"<span id="inspector-location">Moçambique</span>"</span></p>
                        <p><span style="color: var(--accent);">email</span> = <span class="py-str">"<span id="inspector-email">abdullcadre@gmail.com</span>"</span></p>
                        <p><span style="color: var(--accent);">stack</span> = [<span class="py-str" id="inspector-stack">"Laravel", "Python FastAPI", ".NET", "UI/UX", "Figma", "GitHub"</span>]</p>
                    </div>
                    <pre id="inspector-output" class="py-output" aria-live="polite">&gt;&gt;&gt; </pre>
                    <div class="pt-2 flex items-center justify-between text-[10px]" style="border-top: 1px solid var(--border); color: var(--text-muted);">
                        <span id="inspector-university">LICUNGO UNIVERSITY</span>
                        <span class="font-bold" style="color: var(--accent);" id="inspector-year">2021</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`;
