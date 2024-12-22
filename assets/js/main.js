// main.js
// Скрипты для динамических эффектов на главной странице
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('change-color-btn');
    btn.addEventListener('click', function() {
        const headings = document.querySelectorAll('h2');
        headings.forEach(h2 => {
            // Изменение цвета заголовков динамически
            h2.style.color = 'rgb(' + 
                Math.floor(Math.random()*256) + ',' +
                Math.floor(Math.random()*256) + ',' +
                Math.floor(Math.random()*256) + ')';
        });
    });
    // Добавление интерактивности к таблицам
    const tables = document.querySelectorAll('.stat-table, .equip-table');
    tables.forEach(table => {
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
            row.addEventListener('mouseover', function() {
                // Подсвечивание строки и добавление эффекта
                this.style.background = `rgb(${Math.random()*50+200},${Math.random()*50+200},255)`;
                this.style.transform = 'scale(1.02)';
                this.style.transition = 'all 0.3s ease';
            });
            
            row.addEventListener('mouseout', function() {
                this.style.background = '';
                this.style.transform = 'scale(1)';
            });
        });
    });

    // Добавление интерактивности к спискам определений
    const terms = document.querySelectorAll('dt');
    terms.forEach(term => {
        term.addEventListener('click', function() {
            const definition = this.nextElementSibling;
            definition.style.display = 
                definition.style.display === 'none' ? 'block' : 'none';
            this.style.color = 
                definition.style.display === 'none' ? '' : 'rgb(0,100,200)';
        });
    });

    // Добавление анимации для появления секций при прокрутке
    const sections = document.querySelectorAll('section');
    
    // Настройки для IntersectionObserver
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    // Создание наблюдателя за появлением элементов
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Применение начальных стилей и добавление наблюдения за каждой секцией
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.5s ease-out';
        sectionObserver.observe(section);
    });
});
