// Função para carregar dinamicamente a página do dashboard
function loadDashboard(page) {
    window.location.href = `dashboards/${page}`;
  }
  
  // Adiciona animações de rolagem ao site
  window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.introduction, .projects, .skills, .contact');
    elements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (position < windowHeight) {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }
    });
  });
  