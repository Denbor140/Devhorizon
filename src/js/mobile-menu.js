const btn = document.getElementById('menuBtn');
const menu = document.getElementById('mobileMenu');

const burger = document.getElementById('iconBurger');
const close = document.getElementById('iconCLose');

function closeMenu() {
  menu.classList.add('opacity-0', 'pointer-events-none');
  menu.classList.remove('opacity-100', 'pointer-events-auto');
}

btn.addEventListener('click', () => {
  menu.classList.toggle('opacity-0');
  menu.classList.toggle('pointer-events-none');
  menu.classList.toggle('opacity-100');
  menu.classList.toggle('pointer-events-auto');

  burger.classList.toggle('hidden');
  close.classList.toggle('hidden');
});

menu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', closeMenu);
});
