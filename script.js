/**
 * VEXEL Studio - Lógica de Interfaz
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initSlider();
  initForm();
});

// NAVBAR SCROLL EFFECT
function initNavbar() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.borderBottom = "1px solid rgba(0,0,0,0.1)";
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
    } else {
      navbar.style.borderBottom = "1px solid rgba(0,0,0,0.05)";
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    }
  });

  // Mobile Menu
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isVisible = navLinks.style.display === "flex";
      if (isVisible) {
        navLinks.style.display = "none";
      } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "80px";
        navLinks.style.left = "0";
        navLinks.style.width = "100%";
        navLinks.style.background = "#fff";
        navLinks.style.padding = "24px";
        navLinks.style.borderBottom = "1px solid #eee";
      }
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          navLinks.style.display = "none";
        }
      });
    });
  }
}

// BEFORE / AFTER SLIDER
function initSlider() {
  const container = document.getElementById("beforeAfterSlider");
  const beforeImg = document.getElementById("sliderBefore");
  const handle = document.getElementById("sliderHandle");
  
  if (!container || !beforeImg || !handle) return;

  let isDragging = false;

  const updateSlider = (x) => {
    const rect = container.getBoundingClientRect();
    let position = x - rect.left;
    
    // Limits
    if (position < 0) position = 0;
    if (position > rect.width) position = rect.width;
    
    const percentage = (position / rect.width) * 100;
    
    beforeImg.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  };

  // Mouse Events
  handle.addEventListener("mousedown", (e) => {
    isDragging = true;
    e.preventDefault();
  });
  
  window.addEventListener("mouseup", () => {
    isDragging = false;
  });
  
  window.addEventListener("mousemove", (e) => {
    if (isDragging) updateSlider(e.clientX);
  });

  // Touch Events
  handle.addEventListener("touchstart", (e) => {
    isDragging = true;
  });
  
  window.addEventListener("touchend", () => {
    isDragging = false;
  });
  
  window.addEventListener("touchmove", (e) => {
    if (isDragging) updateSlider(e.touches[0].clientX);
  });
}

// MULTI-STEP FORM
let currentStep = 1;
const totalSteps = 3;

window.nextStep = function(step) {
  document.getElementById(`step-${currentStep}`).classList.remove('active');
  document.getElementById(`indicator-${currentStep}`).classList.add('completed');
  document.getElementById(`indicator-${currentStep}`).classList.remove('active');
  
  currentStep = step;
  
  document.getElementById(`step-${currentStep}`).classList.add('active');
  document.getElementById(`indicator-${currentStep}`).classList.add('active');
};

window.prevStep = function(step) {
  document.getElementById(`step-${currentStep}`).classList.remove('active');
  document.getElementById(`indicator-${currentStep}`).classList.remove('active');
  
  currentStep = step;
  
  document.getElementById(`step-${currentStep}`).classList.add('active');
  document.getElementById(`indicator-${currentStep}`).classList.remove('completed');
};

window.submitForm = function() {
  const form = document.getElementById('quoteForm');
  
  // Basic validation
  const name = form.querySelector('[name="name"]').value;
  const email = form.querySelector('[name="email"]').value;
  
  if (!name || !email) {
    alert("Por favor, completa tu nombre y correo electrónico.");
    return;
  }
  
  // Hide current step and show success
  document.getElementById(`step-${currentStep}`).classList.remove('active');
  document.getElementById(`indicator-${currentStep}`).classList.add('completed');
  document.getElementById(`indicator-${currentStep}`).classList.remove('active');
  
  document.getElementById('step-success').classList.add('active');
};
