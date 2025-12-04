document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
        });
               
    document.querySelector('.nav-links').classList.remove('active');
    });
});
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon.');
    this.reset();
});

const translations = {
    en: {
        about: "§ About me",
        projects: "# Projects",
        code: "// Code",
        sound: "b Sound",
        visuals: "‡ Visuals",
    },
    ru: {
        about: "§ Обо мне",
        projects: "# Проекты",
        code: "// Код",
        sound: "b Звук",
        visuals: "‡ Графика",
    }
}