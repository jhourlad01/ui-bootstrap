(() => {
  const body = document.body;
  const themeToggleBtn = document.getElementById('themeToggle');
  const cardsToggleBtn = document.getElementById('cardsToggle');
  const cardsContainer = document.getElementById('cardsContainer');
  const mainContent = document.getElementById('mainContent');

  // Theme functionality
  function setTheme(theme) {
    if (theme === 'dark') {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
      themeToggleBtn.textContent = 'Light Mode';
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
      themeToggleBtn.textContent = 'Dark Mode';
    }
    localStorage.setItem('theme', theme);
  }

  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  // Cards toggle functionality
  let cardsVisible = true;
  
  function toggleCards() {
    cardsVisible = !cardsVisible;
    const toggleIcon = cardsToggleBtn.querySelector('i');
    const toggleContainer = document.querySelector('.cards-toggle-container');
    
    if (cardsVisible) {
      // Show cards with slide animation
      cardsContainer.style.display = 'block';
      cardsContainer.style.width = '25%';
      mainContent.style.width = '75%';
      toggleIcon.className = 'bi bi-chevron-left';
      toggleContainer.style.left = '25%';
      
      // Start cards off-screen to the left, then slide in
      cardsContainer.style.transform = 'translateX(-100%)';
      setTimeout(() => {
        cardsContainer.style.transform = 'translateX(0)';
      }, 50);
    } else {
      // Hide cards with slide animation
      cardsContainer.style.transform = 'translateX(-100%)';
      mainContent.style.width = '100%';
      toggleIcon.className = 'bi bi-chevron-right';
      toggleContainer.style.left = '15px';
      
      // Hide container after animation
      setTimeout(() => {
        cardsContainer.style.display = 'none';
        cardsContainer.style.transform = 'translateX(0)';
      }, 400);
    }
    
    localStorage.setItem('cardsVisible', cardsVisible);
  }

  // Initialize cards state
  const savedCardsState = localStorage.getItem('cardsVisible');
  const toggleIcon = cardsToggleBtn.querySelector('i');
  const toggleContainer = document.querySelector('.cards-toggle-container');
  
  if (savedCardsState === 'false') {
    cardsVisible = false;
    cardsContainer.style.display = 'none';
    mainContent.style.width = '100%';
    toggleIcon.className = 'bi bi-chevron-right';
    toggleContainer.style.left = '15px';
  } else {
    toggleIcon.className = 'bi bi-chevron-left';
    toggleContainer.style.left = '25%';
  }

  cardsToggleBtn.addEventListener('click', toggleCards);
})();
