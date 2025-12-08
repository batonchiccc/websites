
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon.');
    this.reset();
});

document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            lang_toggle: 'RU',
            about: 'About',
            projects: 'Projects',
            code: 'Code',
            sound: 'Sound',
            visuals: 'Visuals',
            viewp_button: 'View Projects',
            hire_button: 'Hire Me',
            hero_title: 'Crafting Immersive Gaming Experiences',
            hero_desc: 'Full-stack game developer specializing in programming, sound design, and 2D art. Creating engaging player experiences from concept to launch.',
            skills_title: 'My Creative Toolkit',
            prog_title: 'Programming',
            prog_desc: 'Building robust game systems with clean architecture and optimized performance',
            art_title: '2D Art & Animation',
            art_desc: 'Creating vibrant characters, environments, and animations that bring games to life',
            sound_title: 'Sound Design',
            sound_desc: 'Crafting immersive audio landscapes with dynamic music and impactful sound effects',
            portfolio_title: 'Featured Projects',
            portfolio_desc: 'Selected works showcasing my diverse skill set across game development disciplines',
            project1_title: 'Putrid Cupcake',
            project1_role: 'Tester & Sound Designer',
            project1_desc: 'Fast paced FPS styled after Cluelty Squad',
            project2_title: 'ICOBEAT',
            project2_role: 'Sound designer & Composer',
            project2_desc: 'A high-energy rhythm game that throws players into the dazzling lights of a neon-lit dance floor.',
            project3_title: 'Blin Switch',
            project3_role: 'UI & UX Developer & Programmer',
            project3_desc: 'Little storytelling game made for MIREA gamejam.',
            view_all: 'View All Projects',
            contact_title: 'Let\'s Create Something Amazing',
            contact_desc: 'Have a project in mind? I\'d love to hear about your game development needs',
            contact_name: 'Your Name',
            contact_email: 'Your Email',
            contact_title: 'Project Title',
            contact_desc_placeholder: 'Tell me about your project...',
            contact_submit: 'Send Message',
            copyright: '© 2025 Vostrikov Platon'
        },
        ru: {
            lang_toggle: 'EN',
            about: 'Обо мне',
            projects: 'Проекты',
            code: 'Код',
            sound: 'Саунд',
            visuals: 'Графика',
            viewp_button: 'Посмотреть проекты',
            hire_button: 'Нанять меня',
            hero_title: 'Создание захватывающих игровых впечатлений',
            hero_desc: 'Full-stack разработчик игр, специализирующийся на программировании, звуковом дизайне и 2D-арт. Создание увлекательных игровых впечатлений от концепции до запуска.',
            skills_title: 'Мой творческий набор инструментов',
            prog_title: 'Программирование',
            prog_desc: 'Создание надежных игровых систем с чистой архитектурой и оптимизированной производительностью',
            art_title: '2D Арт и Анимация',
            art_desc: 'Создание ярких персонажей, окружения и анимаций, которые оживают в играх',
            sound_title: 'Звуковой Дизайн',
            sound_desc: 'Создание захватывающих аудио-ландшафтов с динамической музыкой и выразительными звуковыми эффектами',
            portfolio_title: 'Избранные проекты',
            portfolio_desc: 'Отобранные работы, демонстрирующие мой разнообразный набор навыков в разработке игр',
            project1_title: 'Putrid Cupcake',
            project1_role: 'Тестировщик и Звукорежиссер',
            project1_desc: 'Динамичный шутер от первого лица в стиле Cluelty Squad',
            project2_title: 'ICOBEAT',
            project2_role: 'Звукорежиссер и Композитор',
            project2_desc: 'Энергичная ритм-игра, которая переносит игроков в ослепительные огни неоновой танцпола.',
            project3_title: 'Blin Switch',
            project3_role: 'UI/UX Разработчик и Программист',
            project3_desc: 'Небольшая игра с историей, созданная для геймджема МИРЭА.',
            view_all: 'Посмотреть все проекты',
            contact_title: 'Давайте создадим что-то удивительное',
            contact_desc: 'Есть проект? Я был бы рад узнать о ваших потребностях в разработке игр',
            contact_name: 'Ваше Имя',
            contact_email: 'Ваш Email',
            contact_title: 'Название проекта',
            contact_desc_placeholder: 'Расскажите мне о вашем проекте...',
            contact_submit: 'Отправить сообщение',
            copyright: '© 2025 Vostrikov Platon'
        }
    };
    // DOM elements
    const langToggle = document.getElementById('lang-toggle');
    let currentLang = 'ru'; // Default language
    // Initialize translations
    applyTranslations(currentLang);
    // Toggle language function
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'ru' ? 'en' : 'ru';
        applyTranslations(currentLang);
        langToggle.innerHTML = `<b>${translations[currentLang].lang_toggle}</b>`;
    });
    // Apply translations function
    function applyTranslations(lang) {
        // Translate elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        // Translate placeholder attributes
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });
        langToggle.innerHTML = `<b>${translations[lang].lang_toggle}</b>`;
    }
});