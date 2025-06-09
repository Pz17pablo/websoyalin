const btnUp = document.getElementById('btnUp');

window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        btnUp.style.display = 'block';
      } else {
        btnUp.style.display = 'none';
      }
    });

    btnUp.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

const btnWpp = document.getElementById('btnWpp');


document.querySelectorAll('.leer-mas').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.remedio');
    const extra = card.querySelector('.remedios-extra');
    const visible = extra.classList.contains('visible');
    
    extra.classList.toggle('visible');
    btn.textContent = visible ? 'Leer más...' : 'Leer menos...';
  });
});

  const OFFSET = 80;

  function scrollWithOffset(id) {
    const target = document.getElementById(id);
    if (!target) return;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: targetPosition - OFFSET,
      behavior: 'smooth'
    });
  }


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      scrollWithOffset(targetId);
      history.pushState(null, '', `#${targetId}`);
    });
  });

  window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.replace('#', '');
      setTimeout(() => scrollWithOffset(targetId), 100);
    }
  });


  const menuBtn = document.querySelector('.nav-menu');
  const closeBtn = document.querySelector('.nav-menu-second');
  const dropdown = document.getElementById('menu');

  function openMenu(e) {
    e.preventDefault();
    dropdown.classList.add('active');
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
  }

  document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.nav-menu');
  const closeButton = document.querySelector('.nav-menu-second');
  const dropdown = document.querySelector('.dropdown');
  const checkboxes = document.querySelectorAll('.dropdown-check');

  menuButton.addEventListener('click', () => {
    dropdown.classList.add('active');
    menuButton.style.display = 'none';
    closeButton.style.display = 'block';
  });

  closeButton.addEventListener('click', () => {
    dropdown.classList.remove('active');
    closeButton.style.display = 'none';
    menuButton.style.display = 'block';
    checkboxes.forEach(cb => cb.checked = false);
  });

  dropdown.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      dropdown.classList.remove('active');
      closeButton.style.display = 'none';
      menuButton.style.display = 'block';
      checkboxes.forEach(cb => cb.checked = false);
    });
  });
});

  document.addEventListener('click', (e) => {
    const isClickInside = dropdown.contains(e.target) || menuBtn.contains(e.target) || closeBtn.contains(e.target);
    if (!isClickInside) {
      dropdown.classList.remove('active');
      menuBtn.style.display = 'inline-block';
      closeBtn.style.display = 'none';
    }
  });