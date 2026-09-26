/* =========================================================
   Alex Rivera — Portfolio  |  script.js (vanilla JS)
   ========================================================= */
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  buildSkills();
  buildServices();
  buildProjects();
  buildWhy();
  buildTestimonials();
  initReveal();
  initNav();
  initScrollProgress();
  initTyping();
  initCounters();
  initCursor();
  initMagnetic();
  initParallax();
  initParticles();
  initContactForm();
  initRipple();
  initBackToTop();
  document.getElementById("year").textContent = new Date().getFullYear();
});

/* ---------- Preloader ---------- */
window.addEventListener("load", () => {
  const pre = document.getElementById("preloader");
  if (pre) setTimeout(() => pre.classList.add("hidden"), 500);
});

/* =========================================================
   DATA
   ========================================================= */
const SKILLS = [
  { name: "HTML5", icon: "fa-brands fa-html5", pct: 95 },
  { name: "CSS3", icon: "fa-brands fa-css3-alt", pct: 92 },
  { name: "JavaScript", icon: "fa-brands fa-js", pct: 90 },
  { name: "Bootstrap", icon: "fa-brands fa-bootstrap", pct: 88 },
  { name: "Responsive Design", icon: "fa-solid fa-mobile-screen", pct: 94 },
  { name: "jQuery", icon: "fa-solid fa-code", pct: 82 },
  { name: "Git", icon: "fa-brands fa-git-alt", pct: 85 },
  { name: "PHP (Basic)", icon: "fa-brands fa-php", pct: 60 },
  { name: "MySQL (Basic)", icon: "fa-solid fa-database", pct: 58 },
];

const SERVICES = [
  { icon: "fa-solid fa-mobile-screen-button", title: "Responsive Website Design", desc: "Flawless layouts that adapt beautifully across every device and screen size." },
  { icon: "fa-solid fa-rocket", title: "Landing Pages", desc: "High-converting, fast landing pages engineered to turn visitors into customers." },
  { icon: "fa-solid fa-briefcase", title: "Business Websites", desc: "Professional corporate websites that build trust and grow your brand online." },
  { icon: "fa-solid fa-id-badge", title: "Portfolio Websites", desc: "Stunning personal portfolios that showcase your work and win opportunities." },
  { icon: "fa-solid fa-pen-ruler", title: "UI Development", desc: "Pixel-perfect interface development from your designs with clean, semantic code." },
  { icon: "fa-solid fa-wand-magic-sparkles", title: "Website Redesign", desc: "Modernize outdated sites with premium design and improved performance." },
];

const PROJECTS = [
  {
    img: "images/project-1.png",
    title: "Nova Commerce",
    desc: "A sleek, high-performance e-commerce storefront with a modern dark theme.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    demo: "#", repo: "#",
  },
  {
    img: "images/project-2.png",
    title: "Insight Dashboard",
    desc: "A responsive analytics dashboard with interactive charts and glassmorphism UI.",
    tags: ["JavaScript", "Bootstrap", "Chart.js"],
    demo: "#", repo: "#",
  },
  {
    img: "images/project-3.png",
    title: "Savory Bistro",
    desc: "An elegant restaurant landing page with reservations and smooth animations.",
    tags: ["HTML5", "CSS3", "jQuery"],
    demo: "#", repo: "#",
  },
];

const WHY = [
  { icon: "fa-solid fa-code", title: "Clean Code", desc: "Readable, modular and maintainable code following best practices." },
  { icon: "fa-solid fa-mobile-screen", title: "Responsive Design", desc: "Perfect on mobile, tablet, laptop and large screens alike." },
  { icon: "fa-solid fa-bolt", title: "Fast Loading", desc: "Optimized assets and lightweight animations for blazing speed." },
  { icon: "fa-solid fa-magnifying-glass-chart", title: "SEO Friendly", desc: "Semantic markup and meta setup built for search visibility." },
  { icon: "fa-solid fa-wand-magic-sparkles", title: "Modern UI", desc: "Premium, on-trend interfaces that impress and convert." },
  { icon: "fa-solid fa-crosshairs", title: "Pixel Perfect", desc: "Meticulous attention to spacing, alignment and detail." },
  { icon: "fa-solid fa-face-smile", title: "Client Satisfaction", desc: "Dedicated to exceeding expectations on every project." },
  { icon: "fa-solid fa-comments", title: "Pro Communication", desc: "Clear, timely and reliable updates from start to finish." },
];

const TESTIMONIALS = [
  {
    img: "images/client-1.png", name: "Sarah Mitchell", role: "Marketing Director, BrightCo",
    stars: 5, quote: "Alex delivered our landing page ahead of schedule and it looked absolutely premium. Our conversion rate jumped by 40% within a month. Truly professional work!",
  },
  {
    img: "images/client-2.png", name: "David Chen", role: "Founder, Ledgerly",
    stars: 5, quote: "Working with Alex was seamless. The code was clean, the design was modern, and communication was excellent throughout. Highly recommended for any frontend project.",
  },
  {
    img: "images/client-3.png", name: "Emily Rodriguez", role: "CEO, Bloom Studio",
    stars: 5, quote: "Our website redesign exceeded every expectation. Alex understood our vision instantly and brought it to life with beautiful animations and pixel-perfect detail.",
  },
];

/* =========================================================
   BUILDERS
   ========================================================= */
function buildSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;
  grid.innerHTML = SKILLS.map(
    (s, i) => `
    <article class="skill-card reveal" data-reveal="up" style="transition-delay:${i * 60}ms" tabindex="0">
      <div class="skill-top">
        <span class="skill-icon"><i class="${s.icon}"></i></span>
        <span class="skill-name">${s.name}</span>
        <span class="skill-pct">${s.pct}%</span>
      </div>
      <div class="skill-bar"><span class="skill-fill" data-fill="${s.pct}"></span></div>
    </article>`
  ).join("");
  initTilt(grid.querySelectorAll(".skill-card"));
}

function buildServices() {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;
  grid.innerHTML = SERVICES.map(
    (s, i) => `
    <article class="service-card reveal" data-reveal="up" style="transition-delay:${i * 70}ms">
      <span class="service-icon"><i class="${s.icon}"></i></span>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </article>`
  ).join("");
}

function buildProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  grid.innerHTML = PROJECTS.map(
    (p, i) => `
    <article class="project-card reveal" data-reveal="up" style="transition-delay:${i * 90}ms">
      <div class="project-media">
        <img src="${p.img}" alt="${p.title} project screenshot" loading="lazy" width="400" height="275" />
        <div class="project-overlay">
          <a href="${p.demo}" aria-label="View live demo of ${p.title}"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          <a href="${p.repo}" aria-label="View source of ${p.title} on GitHub"><i class="fa-brands fa-github"></i></a>
        </div>
      </div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project-tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
      </div>
    </article>`
  ).join("");
}

function buildWhy() {
  const grid = document.getElementById("whyGrid");
  if (!grid) return;
  grid.innerHTML = WHY.map(
    (w, i) => `
    <article class="why-card reveal" data-reveal="up" style="transition-delay:${i * 50}ms">
      <span class="why-icon"><i class="${w.icon}"></i></span>
      <h3>${w.title}</h3>
      <p>${w.desc}</p>
    </article>`
  ).join("");
}

function buildTestimonials() {
  const track = document.getElementById("testiTrack");
  const dots = document.getElementById("testiDots");
  if (!track || !dots) return;

  track.innerHTML = TESTIMONIALS.map(
    (t, i) => `
    <div class="testi-slide ${i === 0 ? "active" : ""}" data-index="${i}">
      <div class="testi-stars">${"<i class='fa-solid fa-star'></i>".repeat(t.stars)}</div>
      <p class="testi-quote">${t.quote}</p>
      <div class="testi-author">
        <img src="${t.img}" alt="Photo of ${t.name}" loading="lazy" width="56" height="56" />
        <div><h4>${t.name}</h4><span>${t.role}</span></div>
      </div>
    </div>`
  ).join("");

  dots.innerHTML = TESTIMONIALS.map(
    (_, i) => `<button class="${i === 0 ? "active" : ""}" data-dot="${i}" aria-label="Go to testimonial ${i + 1}"></button>`
  ).join("");

  let current = 0;
  const slides = track.querySelectorAll(".testi-slide");
  const dotEls = dots.querySelectorAll("button");

  const go = (n) => {
    current = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle("active", i === current));
    dotEls.forEach((d, i) => d.classList.toggle("active", i === current));
  };

  document.getElementById("testiNext").addEventListener("click", () => { go(current + 1); reset(); });
  document.getElementById("testiPrev").addEventListener("click", () => { go(current - 1); reset(); });
  dotEls.forEach((d) => d.addEventListener("click", () => { go(+d.dataset.dot); reset(); }));

  let timer = setInterval(() => go(current + 1), 6000);
  function reset() { clearInterval(timer); timer = setInterval(() => go(current + 1), 6000); }
}

/* =========================================================
   INTERACTIONS
   ========================================================= */

/* Scroll Reveal */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((e) => e.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach((e) => io.observe(e));
}

/* Navbar: sticky, active link, mobile toggle, smooth scroll */
function initNav() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  const links = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
  });

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Active section highlight
  const sections = document.querySelectorAll("section[id]");
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const id = e.target.getAttribute("id");
          links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${id}`));
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
}

/* Scroll progress bar */
function initScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    bar.style.width = scrolled + "%";
  });
}

/* Typing animation */
function initTyping() {
  const el = document.getElementById("typing");
  if (!el) return;
  const words = ["premium websites.", "clean interfaces.", "fast experiences.", "pixel-perfect UIs."];
  let w = 0, c = 0, deleting = false;

  function tick() {
    const word = words[w];
    el.textContent = word.substring(0, c);
    if (!deleting && c < word.length) {
      c++; setTimeout(tick, 90);
    } else if (!deleting && c === word.length) {
      deleting = true; setTimeout(tick, 1600);
    } else if (deleting && c > 0) {
      c--; setTimeout(tick, 45);
    } else {
      deleting = false; w = (w + 1) % words.length; setTimeout(tick, 300);
    }
  }
  tick();
}

/* Animated counters + skill bars */
function initCounters() {
  const stats = document.querySelectorAll(".stat-num");
  const bars = document.querySelectorAll(".skill-fill");

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        if (el.classList.contains("stat-num")) {
          const target = +el.dataset.count;
          let n = 0;
          const step = Math.max(1, Math.ceil(target / 60));
          const run = () => {
            n += step;
            if (n >= target) { el.textContent = target; }
            else { el.textContent = n; requestAnimationFrame(run); }
          };
          run();
        } else {
          el.style.width = el.dataset.fill + "%";
        }
        io.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  stats.forEach((s) => io.observe(s));
  bars.forEach((b) => io.observe(b));
}

/* Custom cursor */
function initCursor() {
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  if (!dot || !ring || window.matchMedia("(max-width: 640px)").matches) return;

  let mx = 0, my = 0, rx = 0, ry = 0;
  window.addEventListener("mousemove", (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  });
  const loop = () => {
    rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  };
  loop();

  document.querySelectorAll("a, button, .skill-card, .service-card, .project-card").forEach((el) => {
    el.addEventListener("mouseenter", () => ring.classList.add("grow"));
    el.addEventListener("mouseleave", () => ring.classList.remove("grow"));
  });
}

/* Magnetic buttons */
function initMagnetic() {
  if (window.matchMedia("(max-width: 900px)").matches) return;
  document.querySelectorAll(".magnetic").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    });
    btn.addEventListener("mouseleave", () => { btn.style.transform = ""; });
  });
}

/* Hero parallax on mouse move */
function initParallax() {
  const hero = document.getElementById("hero");
  if (!hero || window.matchMedia("(max-width: 900px)").matches) return;
  const items = hero.querySelectorAll("[data-parallax]");
  hero.addEventListener("mousemove", (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    items.forEach((el) => {
      const depth = parseFloat(el.dataset.depth || "0.15");
      el.style.transform = `translate(${dx * depth * 30}px, ${dy * depth * 30}px)`;
    });
  });
  hero.addEventListener("mouseleave", () => items.forEach((el) => (el.style.transform = "")));
}

/* Floating particles */
function initParticles() {
  const wrap = document.getElementById("particles");
  if (!wrap) return;
  const count = window.innerWidth < 640 ? 14 : 30;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.className = "particle";
    const size = Math.random() * 3 + 2;
    p.style.left = Math.random() * 100 + "%";
    p.style.bottom = "-10px";
    p.style.width = p.style.height = size + "px";
    p.style.opacity = String(Math.random() * 0.5 + 0.2);
    p.style.animationDuration = Math.random() * 12 + 10 + "s";
    p.style.animationDelay = Math.random() * 8 + "s";
    wrap.appendChild(p);
  }
}

/* Ripple effect on buttons */
function initRipple() {
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const circle = document.createElement("span");
      const d = Math.max(this.clientWidth, this.clientHeight);
      const r = this.getBoundingClientRect();
      circle.style.width = circle.style.height = d + "px";
      circle.style.left = e.clientX - r.left - d / 2 + "px";
      circle.style.top = e.clientY - r.top - d / 2 + "px";
      circle.className = "ripple";
      const old = this.querySelector(".ripple");
      if (old) old.remove();
      this.appendChild(circle);
    });
  });
}

/* Tilt effect for skill cards */
function initTilt(cards) {
  if (window.matchMedia("(max-width: 900px)").matches) return;
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(700px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
    });
    card.addEventListener("mouseleave", () => { card.style.transform = ""; });
  });
}

/* Back to top */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 500);
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* Contact form (client-side validation only) */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const subject = (data.get("subject") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !email || !subject || !message) {
      status.textContent = "Please fill in all fields.";
      status.className = "form-status error";
      return;
    }
    if (!emailOk) {
      status.textContent = "Please enter a valid email address.";
      status.className = "form-status error";
      return;
    }
    status.textContent = "Thanks, " + name + "! Your message has been sent. I'll reply soon.";
    status.className = "form-status success";
    form.reset();
    setTimeout(() => { status.textContent = ""; status.className = "form-status"; }, 6000);
  });
}
