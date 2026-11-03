(() => {
  const body = document.body;
  const finishLoader = () => window.setTimeout(() => body.classList.add('is-loaded'), 620);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', finishLoader, { once: true });
  else finishLoader();

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.main-nav a').forEach(link => {
    if (link.getAttribute('href').toLowerCase() === current) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      menuButton.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('open', !open);
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false');
    }));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }
    });
  }

  // Gallery lightbox: no animation loop, just event-driven image changes.
  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    const shots = [...document.querySelectorAll('[data-lightbox]')];
    const image = lightbox.querySelector('figure img');
    const caption = lightbox.querySelector('figcaption');
    let active = 0;
    const show = index => {
      active = (index + shots.length) % shots.length;
      const shot = shots[active];
      image.src = shot.dataset.lightbox;
      image.alt = shot.dataset.caption || 'Lodge gallery image';
      caption.textContent = shot.dataset.caption || '';
    };
    const close = () => { lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden','true'); document.body.classList.remove('modal-open'); };
    shots.forEach((shot, index) => shot.addEventListener('click', () => {
      show(index); lightbox.classList.add('open'); lightbox.setAttribute('aria-hidden','false'); document.body.classList.add('modal-open');
    }));
    lightbox.querySelector('.lightbox-close').addEventListener('click', close);
    lightbox.querySelector('.lightbox-prev').addEventListener('click', () => show(active - 1));
    lightbox.querySelector('.lightbox-next').addEventListener('click', () => show(active + 1));
    lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
    document.addEventListener('keydown', e => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(active - 1);
      if (e.key === 'ArrowRight') show(active + 1);
    });
  }

  // Booking enquiry opens WhatsApp only after visitor reviews and presses Send there.
  const form = document.querySelector('[data-whatsapp-form]');
  if (form) {
    const checkin = form.elements.checkin;
    const checkout = form.elements.checkout;
    const today = new Date();
    const iso = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
    if (checkin) checkin.min = iso;
    if (checkout) checkout.min = iso;
    if (checkin && checkout) checkin.addEventListener('change', () => { checkout.min = checkin.value || iso; if (checkout.value && checkout.value <= checkin.value) checkout.value = ''; });
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      if (checkin.value && checkout.value && checkout.value <= checkin.value) {
        checkout.setCustomValidity('Check-out must be after check-in.'); checkout.reportValidity(); checkout.setCustomValidity(''); return;
      }
      const data = new FormData(form);
      const message = [
        'Hello Aaranya Lodge, I would like to enquire about a stay.',
        '',
        `Name: ${data.get('name')}`,
        `My WhatsApp number: ${data.get('phone')}`,
        `Check-in: ${data.get('checkin')}`,
        `Check-out: ${data.get('checkout')}`,
        `Guests: ${data.get('guests')}`,
        `Room preference: ${data.get('room')}`,
        `Additional details: ${data.get('notes') || 'None'}`,
      ].join('\n');
      const url = `https://wa.me/917385585398?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
      const status = form.querySelector('.form-status');
      if (status) status.textContent = 'WhatsApp opened in a new tab. Review your message there and press Send to complete your enquiry.';
    });
  }
})();
