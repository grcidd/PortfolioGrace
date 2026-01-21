// ===== NAV (burger) =====
const nav = document.querySelector(".nav");
const toggle = document.querySelector("[data-nav-toggle]");
if (toggle && nav) {
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
}

// ===== ACTIVE LINK (optional) =====
const current = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a, .mobile-panel a").forEach((a) => {
  const href = a.getAttribute("href");
  if (href === current) a.classList.add("active");
});

// ===== REVEAL ON SCROLL =====
const els = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("is-visible");
    });
  },
  { threshold: 0.12 }
);

els.forEach((el) => io.observe(el));

// ===== NAV mobile toggle =====
(function () {
  const nav = document.querySelector(".nav");
  const btn = document.querySelector("[data-nav-toggle]");
  if (!nav || !btn) return;

  btn.addEventListener("click", () => nav.classList.toggle("open"));
})();
