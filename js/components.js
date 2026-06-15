/* ============================================================
   Components: shared NAV and FOOTER for all pages
   Inject into <div id="nav-placeholder"></div> and
   <div id="footer-placeholder"></div> at runtime.
   Edit here once; updates everywhere.
   ============================================================ */

const NAV = `
<header class="masthead">
  <div class="wrap mast-row">
    <a href="/" class="logo">TopAutoShippingCompanies</a>
    <nav class="primary" aria-label="Primary">
      <div class="navitem" data-menu="reports" tabindex="0" role="button" aria-haspopup="true" aria-expanded="false">
        Reports
        <span class="chev" aria-hidden="true"></span>
        <div class="dropdown" role="menu">
          <a href="/#top-8" role="menuitem">Top 8 Overall</a>
          <a href="/best-independent.html" role="menuitem">Top 7 Independent</a>
          <a href="/best-for-military.html" role="menuitem">Top 7 Military</a>
        </div>
      </div>
      <a href="/#how-we-rank" class="navitem">Methodology</a>
      <a href="/blog/" class="navitem">Articles</a>
    </nav>
  </div>
</header>
`;

const FOOTER = `
<footer class="site-foot">
  <div class="wrap">
    <div class="foot-top">
      <div>
        <div class="foot-logo">TopAutoShippingCompanies</div>
        <p class="foot-disclosure">TopAutoShippingCompanies is independently operated. We may earn a referral fee if you book through links on this site. This does not influence our rankings.</p>
      </div>
      <div class="foot-col">
        <h4>Reports</h4>
        <ul>
          <li><a href="/#top-8">Top 8 Overall</a></li>
          <li><a href="/best-independent.html">Top 7 Independent</a></li>
          <li><a href="/best-for-military.html">Top 7 Military</a></li>
        </ul>
      </div>
      <div class="foot-col">
        <h4>Site</h4>
        <ul>
          <li><a href="/#how-we-rank">Methodology</a></li>
          <li><a href="/blog/">Articles</a></li>
          <li><a href="/contact.html">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="foot-bottom">
      <div>© 2026 TopAutoShippingCompanies</div>
      <div class="legal">
        <a href="/privacy.html">Privacy</a>
        <a href="/terms.html">Terms</a>
        <a href="/disclosure.html">Disclosure</a>
      </div>
    </div>
  </div>
</footer>
`;

// Inject components and wire up nav dropdown behavior
(function () {
  const navHost = document.getElementById('nav-placeholder');
  const footHost = document.getElementById('footer-placeholder');
  if (navHost) navHost.outerHTML = NAV;
  if (footHost) footHost.outerHTML = FOOTER;

  // Dropdown nav (run after injection)
  const items = document.querySelectorAll('.navitem[data-menu]');
  items.forEach(item => {
    const open = () => {
      items.forEach(o => o !== item && o.classList.remove('open'));
      item.classList.add('open');
      item.setAttribute('aria-expanded', 'true');
    };
    const close = () => {
      item.classList.remove('open');
      item.setAttribute('aria-expanded', 'false');
    };
    item.addEventListener('click', e => {
      e.stopPropagation();
      item.classList.contains('open') ? close() : open();
    });
    item.addEventListener('mouseenter', open);
    item.addEventListener('mouseleave', close);
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.classList.contains('open') ? close() : open();
      }
      if (e.key === 'Escape') close();
    });
  });
  document.addEventListener('click', () => items.forEach(i => i.classList.remove('open')));
})();
