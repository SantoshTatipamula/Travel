// ============ MOBILE NAV TOGGLE ============
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const navActions = document.querySelector(".nav-actions");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    navActions.classList.toggle("open");
  });
}

// Close mobile nav on link click (optional)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navActions.classList.remove("open");
  });
});

// ============ TESTIMONIAL SLIDER ============
const slider = document.getElementById("testimonialSlider");
const testimonials = slider.querySelectorAll(".testimonial");
const dots = slider.querySelectorAll(".dot");
const ctrlButtons = slider.querySelectorAll(".ctrl-btn");

let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((t) => t.classList.remove("active"));
  dots.forEach((d) => d.classList.remove("active"));

  testimonials[index].classList.add("active");
  dots[index].classList.add("active");

  currentIndex = index;
}

ctrlButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const direction = btn.getAttribute("data-direction");
    if (direction === "next") {
      const nextIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(nextIndex);
    } else {
      const prevIndex =
        (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(prevIndex);
    }
  });
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const index = Number(dot.getAttribute("data-index"));
    showTestimonial(index);
  });
});

// Auto-rotate every 7 seconds
setInterval(() => {
  const nextIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(nextIndex);
}, 7000);

// ============ SUBSCRIBE FORM (BASIC VALIDATION) ============
const subscribeForm = document.getElementById("subscribeForm");
const emailInput = document.getElementById("emailInput");
const subscribeMessage = document.getElementById("subscribeMessage");

if (subscribeForm) {
  subscribeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!email) {
      subscribeMessage.textContent = "Please enter your email address.";
      subscribeMessage.style.color = "#ffe3e3";
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      subscribeMessage.textContent = "Please enter a valid email.";
      subscribeMessage.style.color = "#ffe3e3";
      return;
    }

    subscribeMessage.textContent = "Thank you for subscribing!";
    subscribeMessage.style.color = "#d1ffe3";
    subscribeForm.reset();
  });
}
