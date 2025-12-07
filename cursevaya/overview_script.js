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
        main_heading: "", 
        main_subheading: "",
        viewp_button: "View Projects", 
        hire_button: "Hire me",
        my_skills: "My Toolkit", 
        card_programming: "Programming", 
        card_sound: "Sound Design",
        card_art: "2D Art & Animation",
        card_fill_programming: "4 years worth of coding expierence, high skill versatility, perfectionist approach",
        card_fill_sound: "4 years of music composition and sound design combined, from raw and experimental sound to pop",
        card_fill_art: "A hobby grown into side projects with pieces of my soul",
        featured_projects: "",
        

    },
    ru: {
        about: "§ Обо мне",
        projects: "# Проекты",
        code: "// Код",
        sound: "b Звук",
        visuals: "‡ Графика",
    }
}