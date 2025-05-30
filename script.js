const btnUp = document.getElementById('btnUp');

// Mostrar u ocultar el botón según el scroll
window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        btnUp.style.display = 'block';
      } else {
        btnUp.style.display = 'none';
      }
    });

    // Al hacer click, subir suavemente
    btnUp.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

const btnWpp = document.getElementById('btnWpp');


// Boton de leer más
document.querySelectorAll('.leer-mas').forEach(btn => {
  btn.addEventListener('click', () => {
    const extra = btn.previousElementSibling;
    const visible = extra.classList.contains('visible');
    extra.classList.toggle('visible');
    btn.textContent = visible ? 'Leer más...' : 'Leer menos...';
  });
});

// Boton de ver mas
document.querySelectorAll('.ver-mas').forEach(btn => {
  btn.addEventListener('click', () => {
    const extra = btn.previousElementSibling;
    const visible = extra.classList.contains('visible');
    extra.classList.toggle('visible');
    btn.textContent = visible ? 'Ver más' : 'Ver menos';
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

  // Enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      scrollWithOffset(targetId);
      // Cambiar el hash sin saltar
      history.pushState(null, '', `#${targetId}`);
    });
  });

  // Si se carga con hash desde otra página
  window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.replace('#', '');
      // Esperar un poquito para que se renderice todo
      setTimeout(() => scrollWithOffset(targetId), 100);
    }
  });

  const menuBtn = document.querySelector('.nav-menu');
  const closeBtn = document.querySelector('.nav-menu--second');
  const dropdown = document.getElementById('menu');

  // Función para abrir el menú
  function openMenu(e) {
    e.preventDefault();
    dropdown.classList.add('active');
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
  }

  document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.nav-menu');
  const closeButton = document.querySelector('.nav-menu--second');
  const dropdown = document.querySelector('.dropdown');
  const checkboxes = document.querySelectorAll('.dropdown-check');

  // Abrir menú
  menuButton.addEventListener('click', () => {
    dropdown.classList.add('active');
    menuButton.style.display = 'none';
    closeButton.style.display = 'block';
  });

  // Cerrar menú
  closeButton.addEventListener('click', () => {
    dropdown.classList.remove('active');
    closeButton.style.display = 'none';
    menuButton.style.display = 'block';
    checkboxes.forEach(cb => cb.checked = false); // Cerrar todos los submenús
  });

  // Cerrar menú y submenús al hacer clic en cualquier enlace
  dropdown.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      dropdown.classList.remove('active');
      closeButton.style.display = 'none';
      menuButton.style.display = 'block';
      checkboxes.forEach(cb => cb.checked = false);
    });
  });
});

  // ✅ Cerrar al hacer clic fuera del nav
  document.addEventListener('click', (e) => {
    const isClickInside = dropdown.contains(e.target) || menuBtn.contains(e.target) || closeBtn.contains(e.target);
    if (!isClickInside) {
      dropdown.classList.remove('active');
      menuBtn.style.display = 'inline-block';
      closeBtn.style.display = 'none';
    }
  });