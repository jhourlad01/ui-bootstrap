(() => {
  const body = document.body;
  const themeToggleBtn = document.getElementById('themeToggle');

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
})();
