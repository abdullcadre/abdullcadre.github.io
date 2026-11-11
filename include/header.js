window.INCLUDE_HEADER = `<header id="header" style="background: color-mix(in srgb, var(--bg) 88%, transparent); border-bottom: 1px solid var(--border);">
    <div class="max-w-6xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#hero" class="flex items-center gap-2.5" data-nav-jump="hero">
            <span class="w-7 h-7 rounded-md flex items-center justify-center" style="background: var(--accent-soft); color: var(--accent); border: 1px solid var(--accent-border);">
                <i data-lucide="terminal" class="w-4 h-4"></i>
            </span>
            <div class="leading-tight">
                <span class="text-sm font-semibold tracking-tight block" id="brand-name">Abdul Cadre</span>
                <span class="text-[10px] font-mono block" style="color: var(--text-muted);" id="brand-location">Mozambique</span>
            </div>
        </a>
        <nav class="hidden md:flex items-center gap-1 p-1 rounded-lg" style="background: var(--surface); border: 1px solid var(--border);" id="nav-desktop"></nav>
        <div class="flex items-center gap-2">
            <button id="lang-btn" class="px-2.5 py-1.5 rounded-md text-xs font-mono font-semibold flex items-center gap-1.5" style="background: var(--surface); border: 1px solid var(--border); color: var(--text);">
                <i data-lucide="languages" class="w-3.5 h-3.5" style="color: var(--accent);"></i>
                <span id="lang-label">EN</span>
            </button>
            <button id="theme-btn" class="w-8 h-8 rounded-md flex items-center justify-center" style="background: var(--surface); border: 1px solid var(--border); color: var(--text);">
                <i data-lucide="sun" class="w-3.5 h-3.5" id="icon-theme"></i>
            </button>
        </div>
    </div>
</header>`;
