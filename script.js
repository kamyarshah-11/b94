/* NAVBAR SCROLL */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

/* MOBILE MENU */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("open");
  });
});

/* REVEAL ON SCROLL */
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
);
revealEls.forEach((el) => observer.observe(el));

/* CONTACT FORM (demo) */
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name")?.trim();
  const phone = data.get("phone")?.trim();
  const date = data.get("date");
  const time = data.get("time");

  if (!name || !phone || !date || !time) {
    formNote.textContent =
      "لطفاً نام، شماره تماس، تاریخ و ساعت را کامل وارد کنید.";
    formNote.classList.remove("success");
    return;
  }

  formNote.textContent =
    "درخواست شما ثبت شد (نمایشی). برای تایید نهایی با ما تماس بگیرید. 🙏";
  formNote.classList.add("success");
  form.reset();
});

/* SMOOTH ANCHOR OFFSET */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#" || targetId.length < 2) return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    const offset = 70;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  });
});
