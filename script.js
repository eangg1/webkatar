function showLightbox(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").classList.add("active");
  }

  function closeLightbox() {
    document.getElementById("lightbox").classList.remove("active");
  }


    function smoothScrollTo(targetY, duration = 1000) {
    const startY = window.scrollY;
    const distanceY = targetY - startY;
    let startTime = null;

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, startY + distanceY * easeInOutQuad(progress));
      if (progress < 1) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(animation);
  }

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // agar tidak animasi ulang
      }
    });
  }, {
    threshold: 0.1
  });

  // Tambahkan class dan observasi ke semua elemen
  document.querySelectorAll("section").forEach((el) => {
    el.classList.add("fade-up");
    observer.observe(el);
  });

  document.querySelectorAll(".kartu-anggota, .judul-divisi, .sub-subjudul-divisi, .subjudul-divisi").forEach((el) => {
    el.classList.add("fade-up");
    observer.observe(el);
  });


  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      const offset = 80; // sesuaikan dengan tinggi navbar kamu
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: "smooth"
      });
    });
  });


  function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
    menu.classList.toggle('hidden');
  }

  // Tutup menu saat klik salah satu link
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#menu a').forEach(link => {
      link.addEventListener('click', () => {
        const menu = document.getElementById('menu');
        menu.classList.remove('active');
        menu.classList.add('hidden');
      });
    });
  });