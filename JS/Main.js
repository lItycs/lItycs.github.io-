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


const discordButton = document.querySelector('.Discord');
if (discordButton) {
  discordButton.addEventListener('click', () => {
    window.open('https://discord.gg/rnnyVrwRfz', '_blank');
  });
}


"/* ===== ДОДАВАННЯ ІНФОРМАЦІЇ ПРО ГРАВЦІВ ===== */"
const playersInfo = {
  "Waysiemens": {
    description: "Лідер команди, відповідає за стратегію, організацію і координацію гравців. Має великий досвід і стабільну стрілецьку форму.",
    socials: {
      steam: "https://steamcommunity.com/id/waysiemens/",
      discord: "https://discord.gg/example",
      instagram: "https://instagram.com/example"
    }
  },
  "SMAKOVV": {
    description: "Майстер з точності та стабільності. Один з ключових членів команди у клатч-ситуаціях.",
    socials: {
      steam: "https://steamcommunity.com/profiles/76561199237357499",
      instagram: "",
      twitch: ""
    }
  },
  "Bareski": {
    description: "Майстер з точності та стабільності. Один з ключових членів команди у клатч-ситуаціях.",
    socials: {
      steam: "https://steamcommunity.com/id/bAresk1",
      instagram: "",
      twitch: ""
    }
  },
  "Edgar": {
    description: "Майстер з точності та стабільності. Один з ключових членів команди у клатч-ситуаціях.",
    socials: {
      steam: "https://steamcommunity.com/profiles/76561199139831895",
      instagram: "",
      twitch: ""
    }
  },
  "Mental": {
    description: "Майстер з точності та стабільності. Один з ключових членів команди у клатч-ситуаціях.",
    socials: {
      steam: "https://steamcommunity.com/profiles/76561198949993671",
      instagram: "",
      twitch: ""
    }
  },
  "TUR-9000": {
    description: "Майстер з точності та стабільності. Один з ключових членів команди у клатч-ситуаціях.",
    socials: {
      steam: "https://steamcommunity.com/profiles/76561198392497468",
      instagram: "",
      twitch: ""
    }
  },
  "Prok": {
    description: "Майстер з точності та стабільності. Один з ключових членів команди у клатч-ситуаціях.",
    socials: {
      steam: "https://steamcommunity.com/profiles/76561199119910502",
      instagram: "",
      twitch: ""
    }
  },
  "Ger4eek": {
    description: "Майстер з точності та стабільності. Один з ключових членів команди у клатч-ситуаціях.",
    socials: {
      steam: "https://steamcommunity.com/profiles/76561199223642471",
      instagram: "",
      twitch: ""
    }
  },
  "Kiruha": {
    description: "Майстер з точності та стабільності. Один з ключових членів команди у клатч-ситуаціях.",
    socials: {
      steam: "https://steamcommunity.com/profiles/76561199046070249",
      instagram: "",
      twitch: ""
    }
  },
  "Shootka": {
    description: "Майстер з точності та стабільності. Один з ключових членів команди у клатч-ситуаціях.",
    socials: {
      steam: "https://steamcommunity.com/id/1559507142",
      instagram: "",
      twitch: ""
    }
  },
  "Ilty": {
    description: "Майстер з точності та стабільності. Один з ключових членів команди у клатч-ситуаціях.",
    socials: {
      steam: "https://steamcommunity.com/id/lItycs/",
      instagram: "",
      twitch: ""
    }
  }
  
  // додаєш інших за потреби
};

"Логіка відкриття інформації про гравців"
document.querySelectorAll(".player-card").forEach(card => {
  card.addEventListener("click", () => {
    // Закривати інші відкриті картки
    document.querySelectorAll(".player-card.expanded").forEach(opened => {
      if (opened !== card) opened.classList.remove("expanded");
    });

    card.classList.toggle("expanded");

    const name = card.querySelector("h3").textContent.trim();

    if (playersInfo[name]) {
      const descBox = card.querySelector(".player-description");
      const socialsBox = card.querySelector(".player-socials");

      descBox.textContent = playersInfo[name].description;

      // соц мережі
      socialsBox.innerHTML = "";
      for (const [platform, url] of Object.entries(playersInfo[name].socials)) {
        if (url.trim() !== "") {
          const icon = document.createElement("a");
          icon.href = url;
          icon.target = "_blank";
          icon.innerHTML = platform[0].toUpperCase(); // тимчасова буква-іконка
          socialsBox.appendChild(icon);
        }
      }
    }
  });
});
