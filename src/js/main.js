// ── Trigger hero entrance stagger as soon as possible ──
(function () {
  function go() { document.body.classList.add('loaded'); }
  if (document.body) go();
  else document.addEventListener('DOMContentLoaded', go);
})();

// ── Product data ──
const PRODUCTS = {
  cleanser: {
    status: 'Coming Soon',
    title: 'Sweat & Oil Reset',
    subtitle: 'Lightweight Gel Cleanser',
    desc: "A lightweight gel cleanser developed to effectively remove excess oil, sweat, and daily impurities without stripping the skin's natural comfort. Designed for hot and humid lifestyles, it helps leave the skin feeling fresh, clean, and balanced without tightness or dryness.",
    focus: ['Lightweight cleansing','Everyday comfort','Non-stripping formula','Fresh skin feel','Suitable for oily & combination skin'],
    img: '/src/Images/Products/SWEAT&OIL_RESET_GEL_CLEANSER.webp',
    shape: '<div class="w-5 h-9 rounded-t-full" style="background:#e9e0d2;"></div><div class="w-[90px] h-[230px] rounded-lg shadow-lg" style="background:linear-gradient(to bottom,#fbf8f3,#e6dccd);"></div>',
    grad: 'linear-gradient(150deg,#efe7da 0%,#ddd0bd 100%)'
  },
  moisturizer: {
    status: 'Coming Soon',
    title: 'Weightless Humidity',
    subtitle: 'Fast-Absorbing Gel Moisturizer',
    desc: 'A breathable gel moisturizer designed to provide comfortable hydration without heaviness, greasiness, or stickiness. Developed for climates where skin often feels oily yet dehydrated, it helps maintain hydration while supporting a lightweight and comfortable skin feel throughout the day.',
    focus: ['Lightweight hydration','Fast absorption','Non-sticky comfort','Breathable texture','Everyday wearability'],
    img: '/src/Images/Products/WEIGHTLESS_HUMIDITY_GEL_MOISTURIZER.webp',
    shape: '<div class="w-[120px] h-[28px] rounded-t-[7px] shadow" style="background:linear-gradient(to bottom,#fbf8f3,#e6dccd);"></div><div class="w-[135px] h-[100px] rounded-b-2xl shadow-lg" style="background:linear-gradient(to bottom,#f4efe7,#e0d6c6);"></div>',
    grad: 'linear-gradient(150deg,#f1ece2 0%,#ddd4c4 100%)'
  },
  serum: {
    status: 'In Pipeline',
    title: 'Climate Performance',
    subtitle: 'Lightweight Performance Serum',
    desc: 'A lightweight serum designed to support skin hydration, balance, and overall comfort in challenging environmental conditions. Its fast-absorbing texture integrates easily into daily skincare routines without adding unnecessary weight or residue.',
    focus: ['Lightweight layering','Daily skin support','Fast absorption','Comfortable wear','Climate-inspired skincare'],
    img: '/src/Images/Products/CLIMATE_PERFORMANCE_SERUM.webp',
    shape: '<div class="w-[12px] h-12 rounded-full" style="background:#caa07a;"></div><div class="w-[22px] h-[14px] rounded-sm" style="background:#b8916b;"></div><div class="w-[70px] h-[200px] rounded-md shadow-lg" style="background:linear-gradient(to bottom,#faf6f0,#e2d8c9);"></div>',
    grad: 'linear-gradient(150deg,#ece4d6 0%,#d6cbb8 100%)'
  },
  sunscreen: {
    status: 'In Pipeline',
    title: 'Lightweight Sunscreen',
    subtitle: 'Everyday UV Protection',
    desc: 'A lightweight sunscreen developed to provide daily sun protection with a comfortable, breathable finish. Designed to minimize heaviness, greasiness, and discomfort often associated with sunscreen use, making daily protection easier and more enjoyable.',
    focus: ['Lightweight protection','Comfortable wear','Breathable finish','Everyday use','Layering-friendly texture'],
    img: '/src/Images/Products/LIGHTWEIGHT_SUNSCREEN.webp',
    shape: '<div class="w-5 h-9 rounded-t-full" style="background:#e9e0d2;"></div><div class="w-[84px] h-[230px] rounded-lg shadow-lg" style="background:linear-gradient(to bottom,#fbf8f3,#e6dccd);"></div>',
    grad: 'linear-gradient(150deg,#f0e9dd 0%,#dcd2c1 100%)'
  },
  scalp: {
    status: 'In Pipeline',
    title: 'Scalp & Hair Care Solution',
    subtitle: 'Climate-Inspired Scalp Care',
    desc: 'A modern scalp and hair care solution developed to support scalp comfort and healthy-looking hair in hot, humid, and high-perspiration environments. Designed with a lightweight approach that helps maintain freshness and everyday comfort without leaving heavy residue.',
    focus: ['Scalp comfort','Lightweight care','Fresh feeling','Everyday usability','Humid-climate suitability'],
    img: '/src/Images/Products/SCALP&HAIR_CARE_SOLUTION.webp',
    shape: '<div class="w-[10px] h-14 rounded-full" style="background:#cdbfa8;"></div><div class="w-[18px] h-6 rounded-sm" style="background:#bdae95;"></div><div class="w-[80px] h-[220px] rounded-xl shadow-lg" style="background:linear-gradient(to bottom,#fbf8f3,#e6dccd);"></div>',
    grad: 'linear-gradient(150deg,#ede6d9 0%,#d8cebc 100%)'
  },
  specialized: {
    status: 'In Pipeline',
    title: 'Specialized',
    subtitle: 'Climate-Performance Skincare',
    desc: 'A growing range of specialized climate-performance formulations developed for targeted everyday skin needs in hot, humid, and high-perspiration environments — built on the same lightweight, breathable, comfort-first philosophy.',
    focus: ['Targeted skin needs','Climate-driven formulas','Lightweight performance','Everyday comfort','Continuous innovation'],
    shape: '<div class="w-5 h-8 rounded-t-full" style="background:#e3d9c9;"></div><div class="w-[78px] h-[210px] rounded-2xl shadow-lg" style="background:linear-gradient(to bottom,#fbf8f3,#e2d7c7);"></div>',
    grad: 'linear-gradient(150deg,#e9e1d3 0%,#d2c7b3 100%)'
  }
};

// ── Product detail modal ──
let modal, dialog;

function openProduct(key) {
  const p = PRODUCTS[key];
  if (!p) return;
  document.getElementById('modal-status').textContent = p.status;
  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-subtitle').textContent = p.subtitle;
  document.getElementById('modal-desc').textContent = p.desc;
  const imgEl = document.getElementById('modal-img');
  const shapeEl = document.getElementById('modal-shape');
  if (p.img) {
    imgEl.src = p.img;
    imgEl.alt = p.title;
    imgEl.classList.remove('hidden');
    shapeEl.classList.add('hidden');
    document.getElementById('modal-image').style.background = '';
  } else {
    imgEl.classList.add('hidden');
    shapeEl.classList.remove('hidden');
    shapeEl.innerHTML = p.shape;
    document.getElementById('modal-image').style.background = p.grad;
  }
  document.getElementById('modal-focus').innerHTML =
    p.focus.map(f => '<li class="flex items-start gap-2"><span class="text-vb-tan">•</span>' + f + '</li>').join('');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.documentElement.classList.add('modal-open');
  document.body.classList.add('modal-open');
  requestAnimationFrame(() => {
    dialog.classList.remove('scale-95', 'opacity-0');
    dialog.classList.add('scale-100', 'opacity-100');
  });
}

function closeProduct() {
  dialog.classList.add('scale-95', 'opacity-0');
  dialog.classList.remove('scale-100', 'opacity-100');
  document.documentElement.classList.remove('modal-open');
  document.body.classList.remove('modal-open');
  setTimeout(() => { modal.classList.add('hidden'); modal.classList.remove('flex'); }, 250);
}

// ── Init after the DOM is ready (script loads in <head>) ──
document.addEventListener('DOMContentLoaded', () => {
  modal = document.getElementById('product-modal');
  dialog = document.getElementById('product-dialog');

  // Navbar: solid background once scrolled past the top.
  const siteHeader = document.getElementById('site-header');
  if (siteHeader) {
    const onHeaderScroll = () => siteHeader.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onHeaderScroll, { passive: true });
    onHeaderScroll();
  }

  // Scroll fade-in: reveal elements as they enter the viewport.
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if (revealEls.length) {
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0, rootMargin: '0px 0px -10% 0px' });
      revealEls.forEach(el => io.observe(el));
    } else {
      revealEls.forEach(el => el.classList.add('in-view'));
    }
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) closeProduct();
  });

  // ── Subscribe forms → submit to Formspree via AJAX (no redirect) ──
  document.querySelectorAll('form[action*="formspree.io"]').forEach(form => {
    // visible status line under the form
    let statusEl = form.querySelector('.form-status');
    if (!statusEl) {
      statusEl = document.createElement('p');
      statusEl.className = 'form-status text-[12px] mt-2';
      form.appendChild(statusEl);
    }
    function setStatus(msg, ok) {
      statusEl.textContent = msg;
      statusEl.style.color = ok ? '#4A7A45' : '#b4453a';
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const input = form.querySelector('input[type="email"]');
      const originalBtn = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
      setStatus('', true);
      try {
        // Submit as JSON (Formspree accepts application/json)
        const payload = Object.fromEntries(new FormData(form).entries());
        const res = await fetch(form.action, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        console.log('[subscribe] status', res.status);
        let data = null;
        try { data = await res.json(); console.log('[subscribe] body', data); } catch (_) {}
        if (res.ok) {
          form.reset();
          if (btn) btn.textContent = '✓ Subscribed';
          setStatus("Thanks! You're on the list.", true);
          setTimeout(() => { if (btn) { btn.textContent = originalBtn; btn.disabled = false; } }, 4000);
        } else {
          const msg = data && data.errors ? data.errors.map(x => x.message).join(', ')
                      : ('Error ' + res.status + ' — please try again.');
          if (btn) { btn.textContent = originalBtn; btn.disabled = false; }
          setStatus(msg, false);
        }
      } catch (err) {
        console.error('[subscribe] network error', err);
        if (btn) { btn.textContent = originalBtn; btn.disabled = false; }
        setStatus('Network blocked or offline — could not reach Formspree.', false);
      }
    });
  });

  // Close the mobile nav menu when clicking/tapping anywhere outside it.
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('hamburger');
  if (mobileMenu) {
    document.addEventListener('click', e => {
      if (!mobileMenu.classList.contains('open')) return;
      const insideMenu = mobileMenu.contains(e.target);
      const onHamburger = hamburger && hamburger.contains(e.target);
      if (!insideMenu && !onHamburger) mobileMenu.classList.remove('open');
    });
    // Tapping a link inside the menu also closes it.
    mobileMenu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => mobileMenu.classList.remove('open'))
    );
  }

  // ── Floating chat assistant ──
  const chatbotPanel = document.getElementById('chatbot-panel');
  const chatbotToggle = document.getElementById('chatbot-toggle');
  const chatbotClose = document.getElementById('chatbot-close');
  const chatbotForm = document.getElementById('chatbot-form');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotMessages = document.getElementById('chatbot-messages');

  function setChatOpen(open) {
    if (!chatbotPanel || !chatbotToggle) return;
    chatbotPanel.hidden = !open;
    chatbotToggle.setAttribute('aria-expanded', String(open));
    chatbotToggle.setAttribute('aria-label', open ? 'Close chat assistant' : 'Open chat assistant');
    if (open && chatbotInput) setTimeout(() => chatbotInput.focus(), 80);
  }

  function addChatMessage(text, type) {
    if (!chatbotMessages) return;
    const bubble = document.createElement('div');
    bubble.className = 'chatbot-message ' + type;
    bubble.textContent = text;
    chatbotMessages.appendChild(bubble);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function getChatReply(question) {
    const q = question.toLowerCase();
    if (q.includes('launch') || q.includes('available') || q.includes('buy') || q.includes('product')) {
      return 'Our first products are marked Coming Soon. You can join the community form near the footer for launch updates and early offers.';
    }
    if (q.includes('routine') || q.includes('start') || q.includes('skin') || q.includes('oil') || q.includes('humid')) {
      return 'For hot and humid lifestyles, start with a lightweight cleanser, breathable gel moisturizer, and daily sunscreen. Vibird is building each around comfort, fast absorption, and non-sticky wear.';
    }
    if (q.includes('contact') || q.includes('phone') || q.includes('whatsapp') || q.includes('email')) {
      return 'You can reach Vibird through the contact section, email vibirdinternational@gmail.com, or use the WhatsApp link in the footer.';
    }
    if (q.includes('consult') || q.includes('studio') || q.includes('analysis')) {
      return 'The Vibird Skin Experience Studio is opening soon with skin consultation, product trials, skin education, and AI skin analysis.';
    }
    return 'Thanks for asking. I can help with product launches, skincare routines for humidity, consultations, or contact details.';
  }

  function askChatbot(question) {
    const cleanQuestion = question.trim();
    if (!cleanQuestion) return;
    addChatMessage(cleanQuestion, 'user');
    setTimeout(() => addChatMessage(getChatReply(cleanQuestion), 'bot'), 240);
  }

  if (chatbotPanel && chatbotToggle) {
    chatbotToggle.addEventListener('click', () => {
      const nextOpen = chatbotPanel.hidden;
      setChatOpen(nextOpen);
    });
    if (chatbotClose) chatbotClose.addEventListener('click', () => setChatOpen(false));
    if (chatbotForm) {
      chatbotForm.addEventListener('submit', e => {
        e.preventDefault();
        if (!chatbotInput) return;
        askChatbot(chatbotInput.value);
        chatbotInput.value = '';
      });
    }
    document.querySelectorAll('[data-chat-question]').forEach(button => {
      button.addEventListener('click', () => askChatbot(button.getAttribute('data-chat-question') || ''));
    });
  }

  // ── "What We Solve" interactive tabs ──
  const SOLVE = [
    { title: 'Excess Oil',                desc: "Heat triggers overproduction of sebum. We formulate to balance — not strip — your skin's natural oil levels throughout the day.", img: 'src/Images/learn/Understanding Your Skin Type.webp?auto=format&fit=crop&w=900&q=70' },
    { title: 'Sticky Skin Feel',          desc: 'Thick textures and occlusive ingredients cling in humidity. Our products use lightweight actives that absorb cleanly, no residue.', img: 'src/Images/learn/Oily vs Dehydrated Skin.webp?auto=format&fit=crop&w=900&q=70' },
    { title: 'Heavy Moisturisers',        desc: 'Rich creams feel suffocating in the heat. We build breathable, gel-based hydration that comforts without weighing skin down.', img: 'src/Images/about/About story.avif?auto=format&fit=crop&w=900&q=70' },
    { title: 'Uncomfortable Sunscreens',  desc: 'White cast, grease, and pill-up make daily SPF a chore. We design protection that wears light and layers effortlessly.', img: 'src/Images/learn/Skin Barrier Health.webp?auto=format&fit=crop&w=900&q=70' },
    { title: 'Climate-Related Discomfort',desc: 'UV, humidity, and heat interact in ways most global brands ignore. We design for the conditions you actually live in.', img: 'src/Images/learn/Sunscreen Comfort & Everyday Use.webp?auto=format&fit=crop&w=900&q=70' }
  ];
  const solveItems = document.querySelectorAll('.solve-item');
  const solveSegs = document.querySelectorAll('.solve-seg');
  const solveTitle = document.getElementById('solve-title');
  const solveDesc = document.getElementById('solve-desc');
  const solveBg = document.getElementById('solve-bg');
  const isDesktopSolve = window.matchMedia('(min-width: 768px)');

  function selectSolve(i) {
    const item = SOLVE[i];
    if (!item) return;
    solveItems.forEach((el, idx) => el.classList.toggle('is-active', idx === i));
    solveSegs.forEach((s, idx) => {
      s.classList.toggle('bg-vb-tan', idx === i);
      s.classList.toggle('bg-vb-beige', idx !== i);
    });
    if (solveTitle) solveTitle.textContent = item.title;
    if (solveDesc) solveDesc.textContent = item.desc;
    if (solveBg && item.img) solveBg.src = item.img;
  }
  solveItems.forEach((el, idx) => {
    const tab = el.querySelector('.solve-tab');
    if (!tab) return;
    tab.addEventListener('click', () => {
      // Mobile: toggle (collapse if tapping the open one); Desktop: just select
      if (!isDesktopSolve.matches && el.classList.contains('is-active')) {
        el.classList.remove('is-active');
      } else {
        selectSolve(idx);
      }
    });
    tab.addEventListener('mouseenter', () => { if (isDesktopSolve.matches) selectSolve(idx); });
  });

  // Mobile: tapping outside the accordion collapses the open description.
  const solveWrap = document.getElementById('solve');
  if (solveWrap) {
    document.addEventListener('click', (e) => {
      if (isDesktopSolve.matches) return;
      if (!solveWrap.contains(e.target)) {
        solveItems.forEach(el => el.classList.remove('is-active'));
      }
    });
  }

  // ── Product carousel dots (scroll position indicator) ──
  const track = document.getElementById('product-track');
  const dots = document.querySelectorAll('.product-dot');
  if (track && dots.length) {
    const cards = track.querySelectorAll('.product-card');

    function activeIndex() {
      // Find the card whose left edge is closest to the track's scroll position.
      const sl = track.scrollLeft;
      let best = 0, bestDist = Infinity;
      cards.forEach((c, i) => {
        const d = Math.abs(c.offsetLeft - track.offsetLeft - sl);
        if (d < bestDist) { bestDist = d; best = i; }
      });
      return best;
    }
    function syncDots() {
      const a = activeIndex();
      dots.forEach((dot, i) => {
        const on = i === a;
        dot.classList.toggle('bg-vb-dark', on);
        dot.classList.toggle('bg-vb-beige', !on);
        dot.classList.toggle('w-6', on);   // active dot is wider (pill)
        dot.classList.toggle('w-2.5', !on);
      });
    }
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        const card = cards[i];
        if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
      });
    });
    let dticking = false;
    track.addEventListener('scroll', () => {
      if (!dticking) { dticking = true; requestAnimationFrame(() => { syncDots(); dticking = false; }); }
    }, { passive: true });
    window.addEventListener('resize', syncDots);
    syncDots();

    // ── Auto-advance: scroll through products one after another while the
    //    section is in view; pause on hover / touch / focus. ──
    // Slower on tablet/desktop (≥768px), quicker on mobile.
    const SLIDE_MS = window.matchMedia('(min-width: 768px)').matches ? 3000 : 2300;
    let autoTimer = null, inView = false, paused = false;

    function goTo(i) {
      const card = cards[i];
      if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
    }
    function nextSlide() {
      const next = (activeIndex() + 1) % cards.length;
      goTo(next);
    }
    function startAuto() {
      if (autoTimer || !inView || paused) return;
      autoTimer = setInterval(() => {
        if (!paused && inView) nextSlide();
      }, SLIDE_MS);
    }
    function stopAuto() {
      if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
    }

    // Pause on interaction
    const carousel = track.closest('section') || track;
    ['mouseenter', 'touchstart', 'focusin'].forEach(ev =>
      track.addEventListener(ev, () => { paused = true; stopAuto(); }, { passive: true }));
    ['mouseleave', 'touchend', 'focusout'].forEach(ev =>
      track.addEventListener(ev, () => { paused = false; startAuto(); }, { passive: true }));

    // Only run while the products section is visible
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((entries) => {
        inView = entries[0].isIntersecting;
        if (inView) startAuto(); else stopAuto();
      }, { threshold: 0.3 }).observe(carousel);
    } else {
      inView = true; startAuto();
    }
  }

  // Desktop: trigger the card reveal for whichever product is under the
  // mouse pointer — including while wheel-scrolling (when :hover doesn't
  // re-fire because the cursor itself isn't moving).
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!finePointer) return;
  let px = -1, py = -1, ticking = false;

  function activateUnderPointer() {
    ticking = false;
    if (px < 0) return;
    const el = document.elementFromPoint(px, py);
    const card = el ? el.closest('.product-card') : null;
    document.querySelectorAll('.product-card.is-active').forEach(c => {
      if (c !== card) c.classList.remove('is-active');
    });
    if (card) card.classList.add('is-active');
  }
  function schedule() {
    if (!ticking) { ticking = true; requestAnimationFrame(activateUnderPointer); }
  }

  document.addEventListener('mousemove', e => { px = e.clientX; py = e.clientY; schedule(); }, { passive: true });
  window.addEventListener('scroll', schedule, { passive: true });
});
