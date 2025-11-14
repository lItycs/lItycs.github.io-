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


/* ===== TOURNAMENT MODAL & DYNAMIC BRACKETS ===== */
(() => {
  // ------------ Пример данных (редагуй/додавай) ------------
  // Ключі eventId мають відповідати data-event-id на картках (або можна підставити індекс)
  const eventsData = {
    "cs1v1": {
      id: "cs1v1",
      title: "CS 1 vs 1",
      date: "Жовтень 25, 2025 • 19:00",
      status: "completed", // "live" | "upcoming" | "completed"
      image: "/photo/cs21v1.png",
      winner: "Ilty",
      description: "Локальний турнір серед гравців команди. Напружені поєдинки та відмінні перестрілки.",
      brackets: [
        {
          round: "Quarterfinals",
          matches: [
            { p1: "TUR-9000", p2: "SMAKOVV", score: "1 : 0", winner: "TUR-9000" },
            { p1: "Bareski", p2: "Mental", score: "0 : 1", winner: "Mental" },
            { p1: "Ger4eek", p2: "Waysiemens", score: "1 : 0", winner: "Ger4eek" },
          ]
        },
        {
          round: "Semifinals",
          matches: [
            { p1: "Mental", p2: "Qawoonchik", score: "1 : 0", winner: "Mental" },
            { p1: "Ilty", p2: "Ger4eek", score: "1 : 0", winner: "Ilty" },
            { p1: "TUR-9000", p2: "Mental", score: "1 : 0", winner: "TUR-9000" },
          ]
        },
        {
          round: "Final",
          matches: [
            { p1: "TUR-9000", p2: "Ilty", score: "0 : 1", winner: "Ilty" }
          ]
        }
      ]
    },

    // приклад live-турніру
    "summer-cup": {
      id: "summer-cup",
      title: "Summer Cup - Live",
      date: "Сьогодні • 20:30",
      status: "live",
      image: "",
      winner: "",
      description: "Прямий ефір турніру — слідкуй за оновленнями.",
      brackets: [
        {
          round: "Quarterfinals",
          matches: [
            { p1: "Kiruha", p2: "Shootka", score: "0 : 1", winner: "Shootka" },
            { p1: "Ilty", p2: "Mental", score: "", winner: "" }
          ]
        }
      ]
    }
  };

  // ------------ Елементи DOM ------------
  const modal = document.getElementById("tournamentModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalMeta = document.getElementById("modalMeta");
  const modalImage = document.getElementById("modalImage");
  const modalDescription = document.getElementById("modalDescription");
  const modalWinner = document.getElementById("modalWinner");
  const bracketsWrap = document.getElementById("bracketsWrap");

  // Відкрити модал по event-card
  document.querySelectorAll(".event-card").forEach((card, idx) => {
    // додатково можна задати data-event-id в HTML; якщо немає — використовуємо перший ключ
    const eventId = card.dataset.eventId || Object.keys(eventsData)[idx] || null;
    if (!eventId || !eventsData[eventId]) return;

    // оновити превʼю на картці (дата/статус/переможець)
    refreshEventCard(card, eventsData[eventId]);

    card.addEventListener("click", (e) => {
      openEventModal(eventsData[eventId]);
    });
  });

  // Закриття (по бекдропу, кнопкам, ESC)
  document.querySelectorAll("[data-close]").forEach(el => {
    el.addEventListener("click", closeModal);
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

  function openEventModal(data) {
    if (!data) return;
    modalTitle.textContent = data.title || "Турнір";
    modalDescription.textContent = data.description || "";
    modalWinner.textContent = data.winner || "—";

    // meta: date • status • winner
    const statusLabel = renderStatusLabel(data.status);
    modalMeta.innerHTML = `${data.date || "—"} • ${statusLabel}`;

    // image
    if (data.image) {
      modalImage.src = data.image;
      modalImage.classList.remove("hidden");
    } else {
      modalImage.classList.add("hidden");
    }

    // чистимо та будуємо сітку
    bracketsWrap.innerHTML = "";
    buildBrackets(data.brackets || []);

    // показати модал
    modal.classList.add("visible");
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("visible");
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    // невеликий таймаут під анімацію
    setTimeout(() => { bracketsWrap.innerHTML = ""; }, 320);
  }

  function renderStatusLabel(status) {
    if (!status) return '<span class="status-badge status-upcoming">UPCOMING</span>';
    if (status === "live") return '<span class="status-badge status-live">LIVE</span>';
    if (status === "completed") return '<span class="status-badge status-completed">COMPLETED</span>';
    return `<span class="status-badge status-upcoming">${status.toUpperCase()}</span>`;
  }

  // ------------ BUILD BRACKETS (block style) ------------
  function buildBrackets(brackets) {
    // expect brackets = [{ round: "Quarterfinals", matches: [ {p1, p2, score, winner}, ... ] }, ...]
    if (!Array.isArray(brackets) || brackets.length === 0) {
      bracketsWrap.innerHTML = '<p class="muted">Сітка відсутня.</p>';
      return;
    }

    brackets.forEach((roundObj, roundIndex) => {
      const roundEl = document.createElement("div");
      roundEl.className = "bracket-round";

      const title = document.createElement("div");
      title.className = "round-title";
      title.textContent = roundObj.round || `Round ${roundIndex+1}`;
      roundEl.appendChild(title);

      roundObj.matches.forEach((m, matchIndex) => {
        const match = document.createElement("div");
        match.className = "match-card enter";
        // якщо є переможець — підсвітити
        if (m.winner) match.classList.add("has-winner");

        // структура матчу
        match.innerHTML = `
          <div class="match-player">
            <span class="player-left">${escapeHtml(m.p1 || "—")}</span>
            <strong class="match-score">${escapeHtml(m.score || "") || "—"}</strong>
            <span class="player-right">${escapeHtml(m.p2 || "—")}</span>
          </div>
        `;
        // додатково підсвітити карточку якщо є win
        if (m.winner) {
          // покажемо winner-клас якщо p1 або p2 співпадає
          if (m.winner === m.p1) {
            // підсвітити лівого гравця (реалізовано на карточці через клас)
            // додамо декоративний клас
            match.classList.add("winner");
          } else if (m.winner === m.p2) {
            match.classList.add("winner");
          } else {
            // якщо winner не співпадає з p1/p2 — все одно підсвічуємо
            match.classList.add("winner");
          }
        }

        // опціонально: додати tooltip або onclick щоб показати профіль гравця
        // приклад: клік по match відкриває невеликий alert (можна змінити)
        match.addEventListener("click", () => {
          // наприклад виділити матч в UI або скопіювати результат
          match.classList.toggle("selected");
        });

        roundEl.appendChild(match);
      });

      bracketsWrap.appendChild(roundEl);
    });
  }

  // Utility: просте екранування
  function escapeHtml(str) {
    if (!str && str !== 0) return "";
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  // ------------ Refresh preview on event-card (synchronize) ------------
  function refreshEventCard(cardEl, data) {
    // додаємо короткий превʼю (дата, статус, переможець)
    // Створимо/оновимо блок preview в картці
    let meta = cardEl.querySelector(".event-meta");
    if (!meta) {
      meta = document.createElement("div");
      meta.className = "event-meta";
      meta.style.marginTop = "10px";
      meta.style.fontSize = "0.9rem";
      meta.style.color = "var(--text-muted)";
      cardEl.appendChild(meta);
    }
    const statusText = data.status ? data.status.toUpperCase() : "UPCOMING";
    meta.innerHTML = `${data.date || "—"} • <span style="color:var(--accent);font-weight:700">${statusText}</span> • ${data.winner || "—"}`;
  }

  // ------------ PUBLIC HELPERS (можеш викликати з консолі) ------------
  window.DURMIND = window.DURMIND || {};
  window.DURMIND.eventsData = eventsData;

  window.DURMIND.updateEvent = function(eventId, newData) {
    if (!eventsData[eventId]) return;
    Object.assign(eventsData[eventId], newData);
    // знайти картку і оновити preview
    const card = document.querySelector(`.event-card[data-event-id="${eventId}"]`);
    if (card) refreshEventCard(card, eventsData[eventId]);
  };

  // клік по бекдропу закриває модаль
  modal.querySelector(".modal-backdrop")?.addEventListener("click", closeModal);

})();


