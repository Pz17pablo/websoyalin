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



document.querySelectorAll('.leer-mas').forEach(btn => {
  btn.addEventListener('click', () => {
    const extra = btn.previousElementSibling;
    const visible = extra.classList.contains('visible');
    extra.classList.toggle('visible');
    btn.textContent = visible ? 'Leer más...' : 'Leer menos...';
  });
});

    const OFFSET = 80;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: targetPosition - OFFSET,
          behavior: 'smooth'
        });
      });
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

  // Función para cerrar el menú
  function closeMenu(e) {
    e.preventDefault();
    dropdown.classList.remove('active');
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
  }

  // Eventos para abrir/cerrar desde botones
  menuBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  // ✅ Cerrar al hacer clic en cualquier enlace del menú
  dropdown.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu(new Event('click'));
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

  // ✅ Submenú con flecha y checkbox
  document.querySelectorAll('.dropdown-list').forEach(item => {
    const check = item.querySelector('.dropdown-check');
    const arrow = item.querySelector('.dropdown-arrow');

    if (check && arrow) {
      arrow.addEventListener('click', (e) => {
        e.preventDefault();
        item.classList.toggle('open');
        check.checked = !check.checked;
      });
    }
  });