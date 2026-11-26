/* Inspector: "Run" shows a Python-style terminal spinner, then prints the values. */
(() => {
    const FRAMES = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    let timer = 0;

    document.addEventListener('click', (e) => {
        const button = e.target.closest('#inspector-run');
        const output = document.getElementById('inspector-output');
        if (!button || !output) return;

        const text = (id) => document.getElementById(id)?.textContent || '';
        let tick = 0;
        button.disabled = true;
        clearInterval(timer);
        timer = setInterval(() => {
            output.textContent = `${FRAMES[tick % FRAMES.length]} running inspector.py...`;
            if (++tick < 20) return;
            clearInterval(timer);
            button.disabled = false;
            output.textContent = [
                '>>> python inspector.py',
                text('inspector-location'),
                text('inspector-email'),
                `[${text('inspector-stack')}]`,
                'Process finished with exit code 0'
            ].join('\n');
        }, 80);
    });
})();
