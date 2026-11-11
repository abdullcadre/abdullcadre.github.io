window.SESSION_projects = `<!-- PROJECTS -->
<section id="projects" class="snap-section" style="border-bottom: 1px solid var(--border);">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto fit-content">
        <div class="fade-content panel rounded-xl p-5 sm:p-10" style="background: var(--surface); border: 1px solid var(--border);">
            <div class="section-noise" aria-hidden="true"></div>
            <div class="relative z-10">
                <div class="flex flex-col md:flex-row md:items-end justify-between mb-5 sm:mb-8 gap-3">
                    <div>
                        <div class="inline-flex items-center gap-2 text-xs font-mono mb-2" style="color: var(--accent);">
                            <i data-lucide="folder-git-2" class="w-3.5 h-3.5"></i>
                            <span id="projects-tag">Portfolio</span>
                        </div>
                        <h2 class="text-xl sm:text-3xl font-bold tracking-tight mb-2" id="projects-title">Featured Projects</h2>
                        <a href="#" target="_blank" rel="noopener" id="projects-store-anchor" class="inline-flex items-center gap-1.5 text-xs font-mono mr-3" style="color: var(--accent); text-decoration: none;">
                            <i data-lucide="shopping-bag" class="w-3 h-3"></i>
                            <span id="projects-store-link">View my Google Play store</span>
                        </a>
                        <a href="#" target="_blank" rel="noopener" id="projects-b4x-anchor" class="inline-flex items-center gap-1.5 text-xs font-mono" style="color: var(--accent); text-decoration: none;">
                            <i data-lucide="external-link" class="w-3 h-3"></i>
                            <span id="projects-b4x-link">View all B4X work</span>
                        </a>
                    </div>
                    <p class="text-xs sm:text-sm max-w-md" style="color: var(--text-muted);" id="projects-subtitle">Mobile apps and cross-platform solutions focused on real-world applicability.</p>
                </div>
                <div class="carousel-outer">
                    <button class="carousel-nav-btn prev" id="projects-prev" aria-label="Previous"><i data-lucide="chevron-left" class="w-4 h-4"></i></button>
                    <button class="carousel-nav-btn next" id="projects-next" aria-label="Next"><i data-lucide="chevron-right" class="w-4 h-4"></i></button>
                    <div class="carousel-track" id="projects-track"></div>
                    <div class="carousel-dots" id="projects-dots"></div>
                </div>
            </div>
        </div>
    </div>
</section>`;
