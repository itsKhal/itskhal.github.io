// Get DOM elements
const container = document.getElementById("poemContainer");
const homeSection = document.getElementById("homeSection");
const themeBtn = document.getElementById("themeBtn");

// Create Particles
function createParticles() {
    const backgroundEffects = document.querySelector('.background-effects');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        backgroundEffects.appendChild(particle);
    }
}

// Initialize particles
createParticles();

// Theme Management
let currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon();

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    themeBtn.textContent = currentTheme === 'dark' ? '🌙' : '☀️';
}

// Render Poems
poems.forEach(poem => {
    const card = document.createElement("div");
    card.className = "poem-card";

    card.innerHTML = `
        <div class="poem-title">${escapeHtml(poem.title)}</div>
        <div class="poem-author">by ${escapeHtml(poem.author)}</div>
        <div class="poem-content">${escapeHtml(poem.content)}</div>
    `;

    container.appendChild(card);
});

// Navigation Functions
function showPoems() {
    container.classList.add("active");
    homeSection.style.display = "none";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showHome() {
    container.classList.remove("active");
    homeSection.style.display = "flex";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Utility function
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}