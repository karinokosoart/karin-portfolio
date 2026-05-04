// ---------------------------------------------------------
// Hero carousel — quiet crossfade slideshow.
// Auto-advances every INTERVAL_MS with a 2.2s CSS fade.
// Updates the caption in the footer to match the active slide.
// ---------------------------------------------------------
// Fill current year into colophon
(function () {
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();

// Reveal works on scroll
(function () {
  if (!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  document
    .querySelectorAll(".project, .chapter, .profile__portrait, .profile__figure--breather, .profile__figure--video")
    .forEach(function (el) {
      el.classList.add("reveal");
      io.observe(el);
    });
})();

(function () {
  const INTERVAL_MS = 4000;

  const carousel = document.querySelector(".carousel");
  const slides = Array.from(document.querySelectorAll(".carousel__slide"));
  const dots = Array.from(document.querySelectorAll(".carousel__dot"));
  const titleEl = document.querySelector("[data-caption-title]");
  const metaEl = document.querySelector("[data-caption-meta]");

  if (!carousel || slides.length === 0) return;

  let index = slides.findIndex((s) => s.classList.contains("is-active"));
  if (index < 0) index = 0;

  function setCaption(slide) {
    if (!slide) return;
    const title = slide.dataset.title;
    const meta = slide.dataset.meta;
    if (titleEl && title) titleEl.textContent = title;
    if (metaEl && meta) metaEl.textContent = meta;
  }

  function go(next) {
    // normalise modulo so we can go forward OR backward
    const n = ((next % slides.length) + slides.length) % slides.length;
    if (n === index) return;
    slides[index].classList.remove("is-active");
    dots[index] && dots[index].classList.remove("is-active");
    slides[n].classList.add("is-active");
    dots[n] && dots[n].classList.add("is-active");
    setCaption(slides[n]);
    index = n;
  }

  function advance() { go(index + 1); }

  setCaption(slides[index]);

  // Auto-advance
  let timer = setInterval(advance, INTERVAL_MS);
  function restartTimer() {
    clearInterval(timer);
    timer = setInterval(advance, INTERVAL_MS);
  }

  // Pause while the tab isn't visible so the sequence stays
  // in sync with the viewer's attention.
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      clearInterval(timer);
    } else {
      timer = setInterval(advance, INTERVAL_MS);
    }
  });

  // Click anywhere on the carousel → advance (desktop behavior)
  carousel.style.cursor = "pointer";
  carousel.addEventListener("click", function () {
    advance();
    restartTimer();
  });

  // Touch swipe (mobile behavior)
  let touchStartX = 0;
  let touchStartY = 0;
  let touchActive = false;
  const SWIPE_THRESHOLD = 40;

  carousel.addEventListener("touchstart", function (e) {
    const t = e.changedTouches[0];
    touchStartX = t.clientX;
    touchStartY = t.clientY;
    touchActive = true;
  }, { passive: true });

  carousel.addEventListener("touchend", function (e) {
    if (!touchActive) return;
    touchActive = false;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartX;
    const dy = t.clientY - touchStartY;

    // Only treat as horizontal swipe if predominantly horizontal
    if (Math.abs(dx) < SWIPE_THRESHOLD) {
      // small move = treat as tap → advance
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) {
        advance();
        restartTimer();
      }
      return;
    }
    if (Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) go(index + 1); // swipe left → next
      else go(index - 1);         // swipe right → previous
      restartTimer();
    }
  }, { passive: true });

  // Also let the dots be clickable directly (nice-to-have)
  dots.forEach(function (dot, i) {
    dot.style.cursor = "pointer";
    dot.addEventListener("click", function (e) {
      e.stopPropagation();
      go(i);
      restartTimer();
    });
  });
})();
