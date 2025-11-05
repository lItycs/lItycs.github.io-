// === АНІМАЦІЯ ЗІРОК ===
const starContainer = document.getElementById('star-container');

function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = Math.random() * 100 + 'vw';
  star.style.animationDuration = 3 + Math.random() * 4 + 's'; // швидкість падіння
  star.style.opacity = Math.random();
  starContainer.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 7000); // щоб не перевантажувалося DOM
}

setInterval(createStar, 120); // кількість зірок

// === КНОПКА "ДАЛІ" ===
document.getElementById('nextButton').addEventListener('click', () => {
  const nextSection = document.getElementById('next-section');
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' }); // плавна прокрутка
  }
});

// === МЕНЮ ВИБОРУ СТИЛЮ ===
const themeButton = document.getElementById('themeButton');
const themeMenu = document.getElementById('themeMenu');

themeButton.addEventListener('click', () => {
  themeMenu.classList.toggle('show');
});

document.addEventListener('click', (e) => {
  if (!themeButton.contains(e.target) && !themeMenu.contains(e.target)) {
    themeMenu.classList.remove('show');
  }
});

// === ЗМІНА ТЕМИ ===
const themes = {
  default: {
    background: 'linear-gradient(to bottom, #1a0033, #3b0066)',
    textColor: '#ffffff',
    starColor: '#ffffff'
  },
  'newyear-day': {
    background: 'linear-gradient(to bottom, #b3ecff, #ffffff)',
    textColor: '#003366',
    starColor: '#ffd700'
  },
  'newyear-night': {
    background: 'linear-gradient(to bottom, #000014, #1a0033)',
    textColor: '#ffffff',
    starColor: '#a3c9ff'
  }
};

document.querySelectorAll('#themeMenu li').forEach((item) => {
  item.addEventListener('click', () => {
    const selected = item.dataset.theme;
    applyTheme(selected);
    themeMenu.classList.remove('show');
  });
});

function applyTheme(themeName) {
  const theme = themes[themeName];
  if (!theme) return;

  document.body.style.background = theme.background;
  document.body.style.color = theme.textColor;

  document.querySelectorAll('.star').forEach((star) => {
    star.style.backgroundColor = theme.starColor;
  });

  localStorage.setItem('selectedTheme', themeName);
}

// === ЗБЕРЕЖЕННЯ ТЕМИ ===
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('selectedTheme') || 'default';
  applyTheme(savedTheme);
});
