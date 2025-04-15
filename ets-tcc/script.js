document.addEventListener('DOMContentLoaded', function () {
  // Mobile Navigation toggler behavior
  const menuToggler = document.getElementById('menu-toggler');
  const navLinks = document.querySelectorAll('.all-links a');

  // Tutup menu mobile saat link navigasi diklik
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (menuToggler.checked) {
        menuToggler.checked = false;
      }
    });
  });

  // Smooth Scroll untuk navigasi
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Sticky Header
  const header = document.querySelector('header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });

  // Tab switching untuk About Section
  const aboutTabs = document.querySelectorAll('.about-tab');
  const tabPanes = document.querySelectorAll('.tab-pane');

  aboutTabs.forEach(tab => {
    tab.addEventListener('click', function () {
      // Hapus kelas aktif dari semua tab dan pane
      aboutTabs.forEach(t => t.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));
      // Aktifkan tab yang diklik dan pane terkait
      this.classList.add('active');
      const targetPane = document.getElementById(this.dataset.tab);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // Tombol Scroll-to-Top
  const scrollTopBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('active');
    } else {
      scrollTopBtn.classList.remove('active');
    }
  });

  scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Inisialisasi AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true
    });
  }

  // Inisialisasi Swiper untuk Portfolio dan Testimonials
  if (typeof Swiper !== 'undefined') {
    // Swiper untuk portfolio
    new Swiper('.swiper', {
      loop: true,
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      }
    });
    // Swiper untuk testimonials (jika menggunakan selector berbeda)
    new Swiper('.testimonial-swiper', {
      loop: true,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      }
    });
  }

  // Penanganan pengiriman form kontak
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for your message. We will get back to you soon!');
      contactForm.reset();
    });
  }
});
