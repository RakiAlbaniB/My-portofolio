const T = {
  id: {
    nav_home:      'Beranda',
    nav_about:     'Tentang',
    nav_skills:    'Keahlian',
    nav_projects:  'Projek',
    nav_contact:   'Kontak',

    hero_desc:     'Desainer 3D/2D & Game Developer dari Universitas Budi Luhur. Berdedikasi menciptakan dunia virtual yang imersif.',
    hero_cta1:     'Lihat Karya →',
    hero_cta2:     'Hubungi Saya',

    about_label:   'Tentang Saya',
    about_title:   'Designer & Game Dev',
    about_desc:    'Mahasiswa Teknik Informatika Universitas Budi Luhur yang fokus pada aset 3D di Blender, pixel art, dan pengembangan game di Unity & Godot.',
    about_cta:     'Mari berkolaborasi →',
    about_stats:   'Statistik',

    stat_projects: 'Proyek',
    stat_jam:      'Game Jam',
    stat_years:    'Tahun',

    skills_label:  'Keahlian',
    skills_title:  'Tech Stack',

    projects_label: 'Karya',
    projects_title: 'Proyek Saya',
    proj1_desc:    'Diorama fantasi low-poly dibuat di Blender. Tugas akhir Pemodelan 3D.',
    proj2_desc:    'Aset karakter & animasi pixel art untuk prototipe game RPG.',
    proj3_desc:    'Platformer 2.5D hasil Game Jam 48 jam di Unity.',
    proj_artstation: 'ArtStation',
    proj_detail:   'Detail',
    proj_play:     'Main Demo',
    proj_source:   'Source',

    contact_label: 'Kontak',
    contact_title: 'Mari Berkolaborasi',
    contact_desc:  'Tertarik bekerja sama? Hubungi saya melalui platform berikut.',

    footer_rights: 'Semua hak dilindungi.',
  },

  en: {
    nav_home:      'Home',
    nav_about:     'About',
    nav_skills:    'Skills',
    nav_projects:  'Projects',
    nav_contact:   'Contact',

    hero_desc:     '3D/2D Designer & Game Developer from Universitas Budi Luhur. Dedicated to crafting immersive virtual worlds.',
    hero_cta1:     'View Projects →',
    hero_cta2:     "Let's Talk",

    about_label:   'About Me',
    about_title:   'Designer & Game Dev',
    about_desc:    'Informatics student at Universitas Budi Luhur focused on 3D assets in Blender, pixel art, and game development in Unity & Godot.',
    about_cta:     "Let's collaborate →",
    about_stats:   'Stats',

    stat_projects: 'Projects',
    stat_jam:      'Game Jam',
    stat_years:    'Years',

    skills_label:  'Expertise',
    skills_title:  'Tech Stack',

    projects_label: 'Work',
    projects_title: 'My Projects',
    proj1_desc:    'A fantasy low-poly diorama built entirely in Blender. 3D Modeling final project.',
    proj2_desc:    'Character assets & pixel art animations for an RPG prototype.',
    proj3_desc:    '2.5D platformer from a 48-hour Game Jam, built in Unity.',
    proj_artstation: 'ArtStation',
    proj_detail:   'Details',
    proj_play:     'Play Demo',
    proj_source:   'Source',

    contact_label: 'Contact',
    contact_title: "Let's Collaborate",
    contact_desc:  'Interested in working together? Reach me through the platforms below.',

    footer_rights: 'All rights reserved.',
  },
};

let lang = 'id';

function applyLang() {
  const t = T[lang];
  document.querySelectorAll('[data-key]').forEach(el => {
    const v = t[el.dataset.key];
    if (v !== undefined) el.textContent = v;
  });
  document.getElementById('lang-lbl').textContent = lang === 'id' ? 'EN' : 'ID';
  document.documentElement.lang = lang;
}

function toggleLang() {
  lang = lang === 'id' ? 'en' : 'id';
  applyLang();
}

/* ──────────────────────────────────────────
   THEME — DARK / LIGHT
────────────────────────────────────────── */
const htmlEl  = document.documentElement;
const tpillEl = document.getElementById('tpill');

function applyPill() {
  const dark = htmlEl.classList.contains('dark');
  tpillEl.className = 'tpill ' + (dark ? 'on' : 'off');
  // Fix profile image border bg colour per theme
  document.querySelectorAll('.profile-glow').forEach(img => {
    img.style.setProperty('--imgbg', dark ? '#000' : '#f9fafb');
  });
}

function toggleTheme() {
  htmlEl.classList.toggle('dark');
  applyPill();
}

/* ──────────────────────────────────────────
   NAVBAR — scroll glass effect
────────────────────────────────────────── */
const navEl = document.getElementById('navbar');

function updateNav() {
  const dark = htmlEl.classList.contains('dark');
  if (window.scrollY > 50) {
    navEl.style.backdropFilter       = 'blur(22px)';
    navEl.style.webkitBackdropFilter = 'blur(22px)';
    navEl.style.background   = dark ? 'rgba(0,0,0,.85)'          : 'rgba(249,250,251,.90)';
    navEl.style.borderBottom  = dark ? '1px solid rgba(255,255,255,.06)' : '1px solid rgba(0,0,0,.07)';
    navEl.style.boxShadow     = dark ? 'none'                     : '0 2px 18px rgba(0,0,0,.06)';
  } else {
    navEl.style.backdropFilter       = '';
    navEl.style.webkitBackdropFilter = '';
    navEl.style.background    = '';
    navEl.style.borderBottom  = '';
    navEl.style.boxShadow     = '';
  }
}

window.addEventListener('scroll', updateNav, { passive: true });

/* ──────────────────────────────────────────
   MOBILE MENU
────────────────────────────────────────── */
let menuOpen = false;

function toggleMenu() {
  menuOpen = !menuOpen;
  document.getElementById('mob-menu').classList.toggle('hidden', !menuOpen);

  const h1 = document.getElementById('hb1');
  const h2 = document.getElementById('hb2');
  const h3 = document.getElementById('hb3');

  if (menuOpen) {
    h1.style.transform = 'translateY(8px) rotate(45deg)';
    h2.style.opacity   = '0';
    h3.style.cssText   = 'width:100%; transform:translateY(-8px) rotate(-45deg)';
  } else {
    h1.style.transform = '';
    h2.style.opacity   = '';
    h3.style.cssText   = 'width:75%';
  }
}

function closeMenu() {
  if (menuOpen) toggleMenu();
}

/* ──────────────────────────────────────────
   CUSTOM CURSOR
────────────────────────────────────────── */
/* ──────────────────────────────────────────
   CUSTOM CURSOR
────────────────────────────────────────── */
const curDot   = document.getElementById('cur-dot');
const curRing  = document.getElementById('cur-ring');
const curShape = document.getElementById('cur-shape');

let mx = 0, my = 0;
let rx = 0, ry = 0;
let sx = 0, sy = 0;
let isTouchDevice = false; // Flag untuk mendeteksi layar sentuh

// Jika layar disentuh, matikan kursor kustom sepenuhnya
document.addEventListener('touchstart', () => {
  isTouchDevice = true;
  curDot.style.display = 'none';
  curRing.style.display = 'none';
  curShape.style.display = 'none';
  
  // Kembalikan kursor default untuk elemen yang mungkin masih ter-hidden
  document.body.style.cursor = 'auto'; 
  document.querySelectorAll('*').forEach(el => el.style.cursor = 'auto');
}, { once: true }); // event ini cukup dijalankan sekali saja

// Update koordinat hanya jika bukan perangkat touch
document.addEventListener('mousemove', e => {
  if (isTouchDevice) return; 
  mx = e.clientX;
  my = e.clientY;
});

(function animCursor() {
  if (isTouchDevice) return; // Hentikan animasi jika layar sentuh

  rx += (mx - rx) * 0.16;
  ry += (my - ry) * 0.16;
  sx += (mx - sx) * 0.07;
  sy += (my - sy) * 0.07;

  curDot.style.left    = mx + 'px';
  curDot.style.top     = my + 'px';
  curRing.style.left   = rx + 'px';
  curRing.style.top    = ry + 'px';
  curShape.style.left  = sx + 'px';
  curShape.style.top   = sy + 'px';

  requestAnimationFrame(animCursor);
})();

document.addEventListener('mouseover', e => {
  if (isTouchDevice) return;
  if (e.target.closest('a, button')) {
    document.body.classList.add('hovered');
  } else {
    document.body.classList.remove('hovered');
  }
});

/* ──────────────────────────────────────────
   BACKGROUND CANVAS — animated abstract lines
────────────────────────────────────────── */
const bgCanvas = document.getElementById('bgc');
const bgCtx    = bgCanvas.getContext('2d');
const PAL      = ['#9929EA', '#FF5FCF', '#FAEB92'];

function resizeBg() {
  bgCanvas.width  = window.innerWidth;
  bgCanvas.height = window.innerHeight;
}
resizeBg();
window.addEventListener('resize', resizeBg, { passive: true });

// Generate animated lines
const bgLines = Array.from({ length: 24 }, () => ({
  x1:  Math.random() * 100,
  y1:  Math.random() * 100,
  x2:  Math.random() * 100,
  y2:  Math.random() * 100,
  dx1: (Math.random() - 0.5) * 0.018,
  dy1: (Math.random() - 0.5) * 0.018,
  dx2: (Math.random() - 0.5) * 0.018,
  dy2: (Math.random() - 0.5) * 0.018,
  col: PAL[Math.floor(Math.random() * 3)],
  a:   Math.random() * 0.06 + 0.018,
  w:   Math.random() * 1.1  + 0.3,
}));

// Generate animated arcs
const bgArcs = Array.from({ length: 8 }, () => ({
  x:   Math.random() * 100,
  y:   Math.random() * 100,
  r:   Math.random() * 25 + 8,
  s:   Math.random() * Math.PI * 2,
  e:   Math.random() * Math.PI + Math.PI * 0.5,
  dx:  (Math.random() - 0.5) * 0.012,
  dy:  (Math.random() - 0.5) * 0.012,
  col: PAL[Math.floor(Math.random() * 3)],
  a:   Math.random() * 0.048 + 0.015,
  w:   Math.random() * 0.9   + 0.4,
}));

(function drawBg() {
  bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
  const W    = bgCanvas.width;
  const H    = bgCanvas.height;
  const dark = htmlEl.classList.contains('dark');
  const am   = dark ? 1 : 0.4; // alpha multiplier — subtler on light mode

  // Ambient radial glows
  const g1 = bgCtx.createRadialGradient(W * 0.15, H * 0.25, 0, W * 0.15, H * 0.25, W * 0.44);
  g1.addColorStop(0, `rgba(153,41,234,${dark ? 0.09 : 0.04})`);
  g1.addColorStop(1, 'transparent');
  bgCtx.fillStyle = g1;
  bgCtx.fillRect(0, 0, W, H);

  const g2 = bgCtx.createRadialGradient(W * 0.85, H * 0.72, 0, W * 0.85, H * 0.72, W * 0.38);
  g2.addColorStop(0, `rgba(255,95,207,${dark ? 0.07 : 0.03})`);
  g2.addColorStop(1, 'transparent');
  bgCtx.fillStyle = g2;
  bgCtx.fillRect(0, 0, W, H);

  // Animated lines
  bgLines.forEach(l => {
    l.x1 += l.dx1; l.y1 += l.dy1;
    l.x2 += l.dx2; l.y2 += l.dy2;
    if (l.x1 < -5  || l.x1 > 105) l.dx1 *= -1;
    if (l.y1 < -5  || l.y1 > 105) l.dy1 *= -1;
    if (l.x2 < -5  || l.x2 > 105) l.dx2 *= -1;
    if (l.y2 < -5  || l.y2 > 105) l.dy2 *= -1;

    bgCtx.beginPath();
    bgCtx.moveTo(l.x1 / 100 * W, l.y1 / 100 * H);
    bgCtx.lineTo(l.x2 / 100 * W, l.y2 / 100 * H);
    bgCtx.strokeStyle  = l.col;
    bgCtx.globalAlpha  = l.a * am;
    bgCtx.lineWidth    = l.w;
    bgCtx.stroke();
  });

  // Animated arcs
  bgArcs.forEach(a => {
    a.x += a.dx; a.y += a.dy;
    if (a.x < -10 || a.x > 110) a.dx *= -1;
    if (a.y < -10 || a.y > 110) a.dy *= -1;

    bgCtx.beginPath();
    bgCtx.arc(a.x / 100 * W, a.y / 100 * H, a.r / 100 * Math.min(W, H), a.s, a.e);
    bgCtx.strokeStyle = a.col;
    bgCtx.globalAlpha = a.a * am;
    bgCtx.lineWidth   = a.w;
    bgCtx.stroke();
  });

  // Static diagonal grid (very subtle)
  bgCtx.lineWidth = 0.5;
  for (let i = -H; i < W + H; i += 90) {
    bgCtx.beginPath();
    bgCtx.moveTo(i, 0);
    bgCtx.lineTo(i + H, H);
    bgCtx.strokeStyle = '#9929EA';
    bgCtx.globalAlpha = dark ? 0.025 : 0.01;
    bgCtx.stroke();
  }
  for (let i = -H; i < W + H; i += 130) {
    bgCtx.beginPath();
    bgCtx.moveTo(i, 0);
    bgCtx.lineTo(i - H, H);
    bgCtx.strokeStyle = '#FF5FCF';
    bgCtx.globalAlpha = dark ? 0.018 : 0.008;
    bgCtx.stroke();
  }

  bgCtx.globalAlpha = 1;
  requestAnimationFrame(drawBg);
})();

/* ──────────────────────────────────────────
   SCROLL FADE-IN (IntersectionObserver)
────────────────────────────────────────── */
const fadeObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('show');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.fade-up').forEach(el => fadeObs.observe(el));

/* ──────────────────────────────────────────
   SKILL BARS — animate on scroll into view
────────────────────────────────────────── */
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.bar-fill').forEach(b => {
        b.style.width = b.dataset.pct + '%';
      });
    }
  });
}, { threshold: 0.15 });

const skillsSec = document.getElementById('skills');
if (skillsSec) barObs.observe(skillsSec);

/* ──────────────────────────────────────────
   INTRO ANIMATION
────────────────────────────────────────── */
function playIntro() {
  const greetings = ['Hello', 'Bonjour', 'Hola', 'Ciao', 'こんにちは', 'Hallo', 'Halo'];
  const overlay = document.getElementById('intro-overlay');
  const textEl = document.getElementById('intro-text');
  
  if (!overlay || !textEl) return;

  document.body.style.overflow = 'hidden';
  window.scrollTo(0, 0);

  let step = 0;

  function nextGreeting() {
    if (step < greetings.length) {
      textEl.textContent = greetings[step];
      textEl.style.opacity = '1';
      
      setTimeout(() => {
        textEl.style.opacity = '0';
        step++;
        setTimeout(nextGreeting, 400); // Wait for fade out
      }, 500); // Display time
    } else {
      setTimeout(() => {
        overlay.style.transform = 'translateY(-100%)';
        document.body.style.overflow = '';
        setTimeout(() => overlay.remove(), 1000);
      }, 200);
    }
  }
  
  setTimeout(nextGreeting, 300);
}

/* ──────────────────────────────────────────
   INIT
────────────────────────────────────────── */
applyLang();
applyPill();
updateNav();
playIntro();