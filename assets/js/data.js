document.addEventListener('DOMContentLoaded', function() {
    // -----------------------------------------------------------
    // 1. Шапка сайта
    // -----------------------------------------------------------
    const header = document.createElement('header');
    header.setAttribute('id', 'main-header');

    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo-container');

    const logoImg = document.createElement('img');
    logoImg.setAttribute('src', 'assets/images/logo.png');
    logoImg.setAttribute('alt', 'Лого');
    logoImg.setAttribute('id', 'site-logo');

    const aImg = document.createElement('a');
    aImg.setAttribute('href','index.html');
    aImg.appendChild(logoImg);

    const siteTitle = document.createElement('h1');
    siteTitle.setAttribute('id', 'site-title');
    siteTitle.setAttribute('class', 'header-text animate-fadein');
    siteTitle.textContent = 'Информационно-аналитический портал';

    logoContainer.appendChild(aImg);
    logoContainer.appendChild(siteTitle);

    // Навигация
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.classList.add('main-nav');

    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');

    const a1 = document.createElement('a');
    a1.setAttribute('href','index.html');
    a1.textContent = 'Главная';

    const a2 = document.createElement('a');
    a2.setAttribute('href','about.html');
    a2.textContent = 'О сайте';

    const a3 = document.createElement('a');
    a3.setAttribute('href','data.html');
    a3.textContent = 'Данные';

    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    nav.appendChild(ul);

    header.appendChild(logoContainer);
    header.appendChild(nav);

    document.body.appendChild(header);


    // -----------------------------------------------------------
    // 2. Основной блок (main)
    // -----------------------------------------------------------
    const main = document.createElement('main');
    main.setAttribute('id', 'data-main');

    // Заголовок и вводный текст
    const h2 = document.createElement('h2');
    h2.textContent = 'Страница с данными (сгенерировано JS)';
    main.appendChild(h2);

    const p = document.createElement('p');
    p.textContent = 'Данный раздел полностью генерируется с помощью JavaScript, без явной HTML-разметки в документе.';
    main.appendChild(p);

    // -----------------------------------------------------------
    // Пример flex-блока (2 карточки с более интересной анимацией)
    // -----------------------------------------------------------
    const flexContainer = document.createElement('div');
    flexContainer.style.display = 'flex';
    flexContainer.style.justifyContent = 'space-around';
    flexContainer.style.alignItems = 'flex-start';
    flexContainer.style.marginTop = '20px';

    // Данные для двух карточек во flex-контейнере
    const flexCardsData = [
        {
            title: 'Карточка Flex №1',
            desc: 'Эта карточка показывает 3D-эффект при наведении. Текст можно дополнить любой информацией.',
            background: '#FCE0E0', // можно использовать градиент
            img: 'assets/images/flex-card1.png'
        },
        {
            title: 'Карточка Flex №2',
            desc: 'Еще один пример 3D-эффекта и масштабирования, уже для второй карточки. Можно также добавить ссылки.',
            background: '#FDEBD0',
            img: 'assets/images/flex-card2.png'
        }
    ];

    // Генерация карточек
    flexCardsData.forEach((card) => {
        const cardDiv = document.createElement('div');
        cardDiv.style.background = card.background;
        cardDiv.style.width = '220px';
        cardDiv.style.margin = '0 10px';
        cardDiv.style.border = '1px solid #ccc';
        cardDiv.style.borderRadius = '5px';
        cardDiv.style.overflow = 'hidden';
        cardDiv.style.padding = '20px';
        cardDiv.style.textAlign = 'center';
        
        // Применение 3D-трансформа
        cardDiv.style.transformStyle = 'preserve-3d';
        cardDiv.style.transition = 'transform 0.5s ease';

        // Анимация при наведении (немного поворот и увеличение)
        cardDiv.addEventListener('mouseover', () => {
            cardDiv.style.transform = 'rotateY(10deg) rotateX(5deg) scale(1.05)';
        });
        cardDiv.addEventListener('mouseout', () => {
            cardDiv.style.transform = 'rotateY(0) rotateX(0) scale(1)';
        });

        // Вставляем контент
        // Картинка вверху карточки
        if (card.img) {
            const cardImg = document.createElement('img');
            cardImg.src = card.img;
            cardImg.alt = card.title;
            cardImg.style.width = '100px';
            cardImg.style.height = '100px';
            cardImg.style.objectFit = 'contain';
            cardImg.style.marginBottom = '10px';
            cardDiv.appendChild(cardImg);
        }

        const cardTitle = document.createElement('h3');
        cardTitle.textContent = card.title;

        const cardDesc = document.createElement('p');
        cardDesc.textContent = card.desc;

        cardDiv.appendChild(cardTitle);
        cardDiv.appendChild(cardDesc);
        flexContainer.appendChild(cardDiv);
    });

    main.appendChild(flexContainer);

    // -----------------------------------------------------------
    // Пример grid-структуры (теперь тоже карточки с иконками/деталями)
    // -----------------------------------------------------------
    const gridContainer = document.createElement('div');
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(250px, 1fr))';
    gridContainer.style.gap = '20px';
    gridContainer.style.marginTop = '30px';

    // Данные для трех (или более) карточек в grid-контейнере
    const gridCardsData = [
        {
            title: 'Grid-карта №1',
            desc: 'Короткое, но информативное описание, дополняется иконкой.',
            icon: 'assets/images/icon1.svg',
            color: '#D1F2EB'
        },
        {
            title: 'Grid-карта №2',
            desc: 'Показывает второй пример с иконкой и заливкой.',
            icon: 'assets/images/icon2.svg',
            color: '#D6EAF8'
        },
        {
            title: 'Grid-карта №3',
            desc: 'Отличается цветовым оформлением и своим содержанием.',
            icon: 'assets/images/icon3.svg',
            color: '#FADBD8'
        },
        {
            title: 'Grid-карта №4',
            desc: 'При необходимости мы можем добавить больше карточек, и они будут автоматически размещаться в гриде.',
            icon: 'assets/images/icon4.svg',
            color: '#F9E79F'
        },
    ];

    // Генерация карточек в grid
    gridCardsData.forEach((item) => {
        const gridItem = document.createElement('div');
        gridItem.style.background = item.color;
        gridItem.style.border = '1px solid #ccc';
        gridItem.style.borderRadius = '5px';
        gridItem.style.padding = '15px';
        gridItem.style.boxShadow = '2px 2px 5px rgba(0,0,0,0.3)';
        gridItem.style.transition = 'box-shadow 0.3s, transform 0.3s';
        gridItem.style.display = 'flex';
        gridItem.style.flexDirection = 'column';
        gridItem.style.alignItems = 'center';
        gridItem.style.textAlign = 'center';

        // Hover-эффект
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.boxShadow = '4px 4px 15px rgba(0,0,0,0.5)';
            gridItem.style.transform = 'translateY(-3px)';
        });
        gridItem.addEventListener('mouseout', () => {
            gridItem.style.boxShadow = '2px 2px 5px rgba(0,0,0,0.3)';
            gridItem.style.transform = 'translateY(0)';
        });

        // Иконка (или картинка)
        if (item.icon) {
            const iconImg = document.createElement('img');
            iconImg.src = item.icon;
            iconImg.alt = item.title;
            iconImg.style.width = '60px';
            iconImg.style.height = '60px';
            iconImg.style.objectFit = 'contain';
            iconImg.style.marginBottom = '10px';
            gridItem.appendChild(iconImg);
        }

        // Заголовок и описание
        const itemTitle = document.createElement('h4');
        itemTitle.textContent = item.title;

        const itemDesc = document.createElement('p');
        itemDesc.textContent = item.desc;

        gridItem.appendChild(itemTitle);
        gridItem.appendChild(itemDesc);

        gridContainer.appendChild(gridItem);
    });

    main.appendChild(gridContainer);

    // -----------------------------------------------------------
    // 3. Дополнительный контент (section с таблицей и карточками)
    // -----------------------------------------------------------
    const extraSection = document.createElement('section');
    extraSection.setAttribute('class', 'extra-section');
    extraSection.style.marginTop = '40px';

    const extraHeading = document.createElement('h3');
    extraHeading.textContent = 'Дополнительная информация и статистика';
    extraSection.appendChild(extraHeading);

    const extraParagraph = document.createElement('p');
    extraParagraph.textContent = 'Ниже представлена сводная таблица данных, а также карточки, раскрывающие ключевые факты.';
    extraSection.appendChild(extraParagraph);

    // Таблица
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    table.style.marginTop = '20px';
    table.style.width = '100%';
    table.style.maxWidth = '700px';

    // Заголовок таблицы (thead)
    const thead = document.createElement('thead');
    const trHead = document.createElement('tr');
    const headings = ['Показатель', 'Значение', 'Единица измерения'];

    headings.forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        th.style.border = '1px solid #ccc';
        th.style.padding = '8px';
        th.style.backgroundColor = '#f2f2f2';
        trHead.appendChild(th);
    });
    thead.appendChild(trHead);

    // Тело таблицы (tbody)
    const tbody = document.createElement('tbody');
    
    // Данные для таблицы
    const dataRows = [
        { name: 'Население', value: '12 500 000', unit: 'чел.' },
        { name: 'ВВП', value: '580', unit: 'млрд. руб.' },
        { name: 'Темп роста', value: '3,2', unit: '%' },
        { name: 'Инфляция', value: '4,5', unit: '%' },
    ];

    dataRows.forEach(item => {
        const tr = document.createElement('tr');

        const tdName = document.createElement('td');
        tdName.textContent = item.name;
        tdName.style.border = '1px solid #ccc';
        tdName.style.padding = '8px';

        const tdValue = document.createElement('td');
        tdValue.textContent = item.value;
        tdValue.style.border = '1px solid #ccc';
        tdValue.style.padding = '8px';

        const tdUnit = document.createElement('td');
        tdUnit.textContent = item.unit;
        tdUnit.style.border = '1px solid #ccc';
        tdUnit.style.padding = '8px';

        tr.appendChild(tdName);
        tr.appendChild(tdValue);
        tr.appendChild(tdUnit);
        tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    extraSection.appendChild(table);

    // Блок с карточками (cards)
    const cardsContainer = document.createElement('div');
    cardsContainer.style.display = 'flex';
    cardsContainer.style.flexWrap = 'wrap';
    cardsContainer.style.gap = '20px';
    cardsContainer.style.marginTop = '20px';

    const cardData = [
        {
            title: 'Инновации',
            desc: 'В регионе внедрено более 100 новых технологических решений в разных отраслях экономики.',
            img: 'assets/images/card1.jpg'
        },
        {
            title: 'Экология',
            desc: 'За последний год было высажено свыше 10 тысяч деревьев в черте города.',
            img: 'assets/images/card2.jpg'
        },
        {
            title: 'Социальная поддержка',
            desc: 'Создано 5 новых центров для социальной адаптации и медицинской помощи населению.',
            img: 'assets/images/card3.jpg'
        },
    ];

    cardData.forEach(item => {
        const card = document.createElement('div');
        card.style.width = '300px';
        card.style.border = '1px solid #ccc';
        card.style.borderRadius = '5px';
        card.style.overflow = 'hidden';
        card.style.boxShadow = '2px 2px 8px rgba(0,0,0,0.2)';
        card.style.transition = 'transform 0.3s';
        card.addEventListener('mouseover', () => card.style.transform = 'translateY(-5px)');
        card.addEventListener('mouseout', () => card.style.transform = 'translateY(0)');

        // Картинка
        const cardImg = document.createElement('img');
        cardImg.src = item.img;
        cardImg.alt = item.title;
        cardImg.style.width = '100%';
        cardImg.style.height = '180px';
        cardImg.style.objectFit = 'cover';

        // Блок с текстом внутри карточки
        const cardText = document.createElement('div');
        cardText.style.padding = '15px';

        const cardTitle = document.createElement('h4');
        cardTitle.textContent = item.title;

        const cardDesc = document.createElement('p');
        cardDesc.textContent = item.desc;

        cardText.appendChild(cardTitle);
        cardText.appendChild(cardDesc);
        card.appendChild(cardImg);
        card.appendChild(cardText);

        cardsContainer.appendChild(card);
    });

    extraSection.appendChild(cardsContainer);

    // Добавляем весь дополнительный секшен в main
    main.appendChild(extraSection);

    // -----------------------------------------------------------
    // Завершаем основной блок
    // -----------------------------------------------------------
    document.body.appendChild(main);


    // -----------------------------------------------------------
    // 4. Футер
    // -----------------------------------------------------------
    const footer = document.createElement('footer');
    footer.textContent = '© 2024 Информационно-аналитический портал';
    footer.style.background = 'rgb(0,50,100)';
    footer.style.color = '#fff';
    footer.style.textAlign = 'center';
    footer.style.padding = '10px';

    document.body.appendChild(footer);
});
