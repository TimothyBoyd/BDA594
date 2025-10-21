// Highlight the active nav item based on current path
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.navlinks a');
  links.forEach(a => {
    const href = a.getAttribute('href');
    if ((path === '' && href === 'index.html') || href === path) {
      a.classList.add('active');
    }
  });
  // Set copyright year
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
})();