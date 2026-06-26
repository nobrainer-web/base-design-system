/* Nobrainer Base Design System — behaviour for the fixed components.
   Vanilla, no dependencies. Loaded with `defer`. Native SVG <use> handles
   icons, so no sprite-resolver is needed. */

(function () {
    'use strict';

    /* ── Mobile menu (off-canvas drawer) ────────────────────
       Markup contract (site-header component):
         <button data-nav-toggle aria-controls="…" aria-expanded>   (burger)
         <nav class="site-header__nav">…links + CTA…</nav>          (the drawer)
         <div data-nav-close>                                       (backdrop)
       Toggles .is-open on the block root; CSS handles the slide. No dependency.
       Works regardless of page structure (just a fixed panel). */
    function initMenu() {
        document.querySelectorAll('[data-block="site-header"]').forEach(function (header) {
            var toggle = header.querySelector('[data-nav-toggle]');
            var nav = header.querySelector('.site-header__nav');
            if (!toggle || !nav) return;

            var backdrop = header.querySelector('[data-nav-close]');

            function setOpen(open) {
                header.classList.toggle('is-open', open);
                toggle.setAttribute('aria-expanded', String(open));
            }

            toggle.addEventListener('click', function () {
                setOpen(!header.classList.contains('is-open'));
            });
            if (backdrop) backdrop.addEventListener('click', function () { setOpen(false); });
            nav.addEventListener('click', function (e) {
                if (e.target.closest('a')) setOpen(false); // close after following a link
            });
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') setOpen(false);
            });
        });
    }

    /* ── Pop-up ────────────────────────────────────────────
       Markup contract (popup component):
         <div class="block-popup" data-ds-popup data-popup-key="..." data-popup-delay="2000">
           <button data-ds-popup-close>…</button>
         </div>
       Shows once per dismissal (remembered in localStorage by key). */
    function initPopups() {
        document.querySelectorAll('[data-ds-popup]').forEach(function (popup) {
            var key = 'ds-popup-dismissed:' + (popup.getAttribute('data-popup-key') || 'default');
            var delay = parseInt(popup.getAttribute('data-popup-delay') || '1500', 10);

            var dismissed = false;
            try { dismissed = localStorage.getItem(key) === '1'; } catch (e) {}
            if (dismissed) { popup.remove(); return; }

            function close() {
                popup.classList.remove('ds-popup--open');
                try { localStorage.setItem(key, '1'); } catch (e) {}
            }

            popup.querySelectorAll('[data-ds-popup-close]').forEach(function (b) {
                b.addEventListener('click', close);
            });
            popup.addEventListener('click', function (e) {
                if (e.target === popup) close();
            });

            window.setTimeout(function () {
                popup.classList.add('ds-popup--open');
            }, delay);
        });
    }

    /* ── Accordion (FAQ) ───────────────────────────────────
       Markup contract (faq block):
         <div data-ds-accordion>
           <button class="faq__q" aria-expanded="false">…</button>
           <div class="faq__a">…</div>
         </div>
       Clicking the question toggles the answer + aria-expanded. */
    function initAccordions() {
        document.querySelectorAll('[data-ds-accordion] .faq__q').forEach(function (q) {
            q.addEventListener('click', function () {
                var open = q.getAttribute('aria-expanded') === 'true';
                q.setAttribute('aria-expanded', String(!open));
            });
        });
    }

    function init() {
        initMenu();
        initPopups();
        initAccordions();
    }

    if (document.readyState !== 'loading') {
        init();
    } else {
        document.addEventListener('DOMContentLoaded', init);
    }
})();
