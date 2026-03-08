/* ═══════════════════════════════════════
   VISHTECH — SHARED COMPONENTS (nav + footer + utils)
   Include this file on every page
   ═══════════════════════════════════════ */

(function() {

  /* ── Inject Navbar ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  function navLink(href, label) {
    const isActive = currentPage === href ? 'active' : '';
    return `<a href="${href}" class="${isActive}">${label}</a>`;
  }

  const navbar = `
  <nav id="navbar">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">
        <div class="nav-logo-text">Vish<span>tech</span></div>
      </a>
      <div class="nav-links">
        ${navLink('index.html','Home')}
        ${navLink('services.html','Services')}
        ${navLink('portfolio.html','Portfolio')}
        ${navLink('pricing.html','Pricing')}
        ${navLink('testimonials.html','Reviews')}
        ${navLink('blog.html','Blog')}
        ${navLink('about.html','About')}
      </div>
      <div class="nav-right">
        <div class="nav-phone"><i class="fas fa-phone"></i> +91 77329 97349</div>
        <a href="contact.html" class="btn btn-primary btn-sm">Free Quote →</a>
        <a href="vishtech-digital-card.html" class="btn btn-primary btn-sm">Instent conect →</a>
      </div>
      <div class="hamburger" onclick="toggleMobileNav()">
        <span></span><span></span><span></span>
      </div>
    </div>
    <div class="mobile-nav" id="mobileNav">
      <a href="index.html">Home</a>
      <a href="services.html">Services</a>
      <a href="portfolio.html">Portfolio</a>
      <a href="pricing.html">Pricing</a>
      <a href="testimonials.html">Reviews</a>
      <a href="blog.html">Blog</a>
      <a href="about.html">About</a>
      <a href="contact.html" style="color:var(--blue);font-weight:700;">Get Free Quote →</a>
    </div>
  </nav>`;

  const footer = `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo-text">Vish<span>tech</span> Software</div>
          <p>Jaipur's trusted IT agency — building professional websites, mobile apps & running digital marketing campaigns that generate real business leads.</p>
          <div class="social-row">
            <a href="https://facebook.com" target="_blank" class="social-btn"><i class="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" class="social-btn"><i class="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" class="social-btn"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://youtube.com" target="_blank" class="social-btn"><i class="fab fa-youtube"></i></a>
            <a href="https://wa.me/917732997349" target="_blank" class="social-btn"><i class="fab fa-whatsapp"></i></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="services.html">Website Development</a></li>
            <li><a href="services.html">Mobile App Development</a></li>
            <li><a href="services.html">E-Commerce Solutions</a></li>
            <li><a href="services.html">SEO Services</a></li>
            <li><a href="services.html">Google & Meta Ads</a></li>
            <li><a href="services.html">Custom Software</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="portfolio.html">Our Portfolio</a></li>
            <li><a href="testimonials.html">Client Reviews</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="pricing.html">Pricing</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact Us</h4>
          <div class="footer-contact-item"><i class="fas fa-phone"></i><span>+91 77329 97349</span></div>
          <div class="footer-contact-item"><i class="fas fa-envelope"></i><span>vishtechsoftwareservices@gmail.com</span></div>
          <div class="footer-contact-item"><i class="fas fa-map-marker-alt"></i><span>Khatipura, Jaipur,<br>Rajasthan 302021</span></div>
          <div class="footer-contact-item"><i class="fab fa-whatsapp"></i><span><a href="https://wa.me/917732997349" style="color:rgba(255,255,255,.55)">Chat on WhatsApp</a></span></div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 Vishtech Software Services. All rights reserved. Made with ❤️ in Jaipur</p>
        <p><a href="#" style="color:rgba(255,255,255,.4)">Privacy Policy</a> · <a href="#" style="color:rgba(255,255,255,.4)">Terms of Service</a></p>
      </div>
    </div>
  </footer>

  <!-- Floating WhatsApp -->
  <a href="https://wa.me/917732997349?text=Hi%2C%20I%20want%20a%20free%20quote%20for%20my%20project" 
     target="_blank" class="float-wa" title="Chat on WhatsApp">
    <i class="fab fa-whatsapp"></i>
  </a>

  <!-- Toast -->
  <div class="toast" id="toast">
    <i class="fas fa-check-circle"></i>
    <span id="toastMsg">Message sent!</span>
  </div>`;

  /* ── Inject into DOM ── */
  document.addEventListener('DOMContentLoaded', function() {
    document.body.insertAdjacentHTML('afterbegin', navbar);
    document.body.insertAdjacentHTML('beforeend', footer);

    /* Scroll effect */
    window.addEventListener('scroll', function() {
      const nb = document.getElementById('navbar');
      if (window.scrollY > 40) nb.classList.add('scrolled');
      else nb.classList.remove('scrolled');
    });

    /* Scroll reveal */
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  });

  /* ── Mobile Nav ── */
  window.toggleMobileNav = function() {
    document.getElementById('mobileNav').classList.toggle('open');
  };

  /* ── Lead Form Submit ── */
  window.submitLead = function(formId) {
    const form = document.getElementById(formId || 'leadForm');
    const name = form.querySelector('[name="name"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();
    const service = form.querySelector('[name="service"]') ? form.querySelector('[name="service"]').value : '';

    if (!name || !phone) {
      showToast('Please fill your Name and Phone number', 'error');
      return;
    }

    const fields = {};
    form.querySelectorAll('input,select,textarea').forEach(el => {
      if (el.name) fields[el.name] = el.value;
    });

    const msg = encodeURIComponent(
      `🔔 *New Lead — Vishtech Website*\n\n` +
      Object.entries(fields).map(([k,v]) => `*${k.charAt(0).toUpperCase()+k.slice(1)}:* ${v||'—'}`).join('\n')
    );

    window.open(`https://wa.me/917732997349?text=${msg}`, '_blank');
    form.reset();
    showToast('🎉 Request sent! We\'ll call you within 2 hours.', 'success');
  };

  /* ── Toast ── */
  window.showToast = function(msg, type) {
    const t = document.getElementById('toast');
    document.getElementById('toastMsg').textContent = msg;
    t.className = 'toast ' + (type||'');
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 4000);
  };

  /* ── Portfolio Filter ── */
  window.filterPortfolio = function(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('[data-cat]').forEach(card => {
      const show = cat === 'all' || card.dataset.cat === cat;
      card.style.display = show ? '' : 'none';
      if (show) { card.style.animation = 'none'; card.offsetHeight; card.style.animation = ''; }
    });
  };

})();
