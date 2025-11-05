(() => {
  /* ---------- CANVAS ЗІРОК У ШАПЦІ ---------- */
  const canvas = document.getElementById('headerStars');
  const ctx = canvas?.getContext('2d');
  const headerHeight = 80;
  let stars = [];
  const STAR_COUNT = 80;

  function resizeHeaderCanvas() {
    if (!canvas || !ctx) return;
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = headerHeight * devicePixelRatio;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = headerHeight + 'px';
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  }

  function initStars() {
    if (!canvas) return;
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width / devicePixelRatio,
        y: Math.random() * headerHeight,
        r: Math.random() * 1.6 + 0.4,
        speed: Math.random() * 0.25 + 0.03,
        baseAlpha: 0.4 + Math.random() * 0.6,
        colorType: Math.random() > 0.6 ? 'accent' : 'white'
      });
    }
  }

  function draw() {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let s of stars) {
      const alpha = s.baseAlpha * (0.7 + 0.3 * Math.sin(Date.now() / 600 + s.x));
      ctx.fillStyle = s.colorType === 'accent'
        ? `rgba(180,114,255,${alpha})`
        : `rgba(255,255,255,${alpha})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();

      s.y += s.speed;
      if (s.y > headerHeight + 4) {
        s.y = -4;
        s.x = Math.random() * (canvas.width / devicePixelRatio);
      }
    }
    requestAnimationFrame(draw);
  }

  if (canvas && ctx) {
    resizeHeaderCanvas();
    initStars();
    window.addEventListener('resize', () => {
      resizeHeaderCanvas();
      initStars();
    });
    draw();
  }

  /* ---------- ПЛАВНИЙ СКРОЛ "ДАЛІ" ---------- */
  const nextBtn = document.getElementById('nextButton');
  const targetSection = document.getElementById('teamSection');

  if (nextBtn && targetSection) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const top = targetSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  }

  /* ---------- Анімація карток ---------- */
  const cards = document.querySelectorAll('.player-card');
  if (cards.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });
    cards.forEach(card => observer.observe(card));
  }
})();
