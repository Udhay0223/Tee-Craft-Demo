// 1) Search functionality
function handleSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  if (query) {
    alert(`You searched for: ${query}`);
    // You can replace alert with redirect or filtering logic later
  } else {
    alert('Please enter a search term!');
  }
}

// 2) Lightbox for product gallery
const galleryImages = document.querySelectorAll('.gallery-image');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});

// 3) Contact form validation
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const formMessages = document.getElementById('form-messages');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        formMessages.textContent = 'Please fill out all fields.';
        formMessages.className = 'error-message';
        return;
      }

      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formMessages.textContent = 'Please enter a valid email address.';
        formMessages.className = 'error-message';
        return;
      }

      formMessages.textContent = 'Message sent successfully!';
      formMessages.className = 'success-message';
      contactForm.reset();
    });
  }
});

// 4) Optional: FAQ accordion (only if you add FAQ page)
document.addEventListener('DOMContentLoaded', () => {
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      question.classList.toggle('active');
      const answer = question.nextElementSibling;
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});
