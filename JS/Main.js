(() => {
  /* ===== ЗІРКИ У ЛОГОТИПІ ===== */
  const canvas = document.getElementById('brandStars');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let stars = [];
    const STAR_COUNT = 35;

    function resize() {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
      initStars();
    }

    function initStars() {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * canvas.width / devicePixelRatio,
          y: Math.random() * canvas.height / devicePixelRatio,
          r: Math.random() * 1.2 + 0.4,
          speed: Math.random() * 0.4 + 0.1,
          alpha: 0.4 + Math.random() * 0.6
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let s of stars) {
        ctx.fillStyle = `rgba(180,114,255,${s.alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        s.y += s.speed;
        if (s.y > canvas.height / devicePixelRatio + 2) {
          s.y = -2;
          s.x = Math.random() * (canvas.width / devicePixelRatio);
        }
      }
      requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
  }

  /* ===== ПЛАВНИЙ СКРОЛ ===== */
  const scrollButton = document.getElementById('scrollToEvents');
  if (scrollButton) {
    scrollButton.addEventListener('click', () => {
      const target = document.getElementById('events');
      if (target) {
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
        smoothScrollTo(offsetTop, 1200);
      }
    });
  }

  function smoothScrollTo(targetY, duration = 1200) {
    const startY = window.scrollY || window.pageYOffset;
    const distance = targetY - startY;
    let startTime = null;
    function anim(time) {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const t = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      window.scrollTo(0, startY + distance * ease);
      if (t < 1) requestAnimationFrame(anim);
    }
    requestAnimationFrame(anim);
  }

  /* ===== Анімація появи карток ===== */
  const cards = document.querySelectorAll('.player-card, .event-card');
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
