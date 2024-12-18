const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Cek tema yang tersimpan di localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
	body.classList.add('dark-theme');
	themeToggleButton.textContent = 'Switch to Light Theme';
}

themeToggleButton.addEventListener('click', () => {
	body.classList.toggle('dark-theme');

	// Simpan tema di localStorage
	if (body.classList.contains('dark-theme')) {
		localStorage.setItem('theme', 'dark');
		themeToggleButton.textContent = 'Switch to Light Theme';
	} else {
		localStorage.setItem('theme', 'light');
		themeToggleButton.textContent = 'Switch to Dark Theme';
	}
});