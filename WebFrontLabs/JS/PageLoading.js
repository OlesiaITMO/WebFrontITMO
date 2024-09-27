/*window.addEventListener('load', function() {
    const footer = document.getElementById('footer');
    if (!footer) {
        console.error('Элемент с id "footer" не найден.');
        return;
    }

    function displayLoadTime(entry) {
        const pageLoadTime = entry.loadEventEnd - entry.startTime;
        const domInteractiveTime = entry.domInteractive - entry.startTime;
        const responseTime = entry.responseEnd - entry.requestStart;
        const footerLoadTime = document.getElementById('footerLoadTime');
        // const footerInteractive = document.getElementById('footerInteractive');
        // const footerResponse = document.getElementById('footerResponse');

        console.log(`Время загрузки страницы: ${pageLoadTime} мс \n Время до интерактивного DOM: ${domInteractiveTime} мс \n Время ответа сервера: ${responseTime} мс`);

        footerLoadTime.innerHTML = `Page loading: ${pageLoadTime} мс <br> Time before interactive DOM: ${domInteractiveTime} мс <br> Server\'s response time: ${responseTime} мс`;

    }

    if ('performance' in window) {
        console.log('Performance API поддерживается.');

        setTimeout(() => {
            const [entry] = performance.getEntriesByType('navigation');
            if (entry) {
                console.log('Навигационные данные найдены:', entry);
                displayLoadTime(entry);
            } else {
                console.log('Навигационные данные не найдены.');
            }
        }, 100); // Задержка 100 мс
    } else {
        console.log('Performance API не поддерживается в этом браузере.');
    }
});*/
window.addEventListener('load', function() {
    const footer = document.getElementById('footer');
    if (!footer) {
        console.error('Элемент с id "footer" не найден.');
        return;
    }

    function displayLoadTime(entry) {
        const pageLoadTime = entry.loadEventEnd - entry.startTime;
        const domInteractiveTime = entry.domInteractive - entry.startTime;
        const responseTime = entry.responseEnd - entry.requestStart;

        console.log(`Время загрузки страницы: ${pageLoadTime} мс \nВремя до интерактивного DOM: ${domInteractiveTime} мс \nВремя ответа сервера: ${responseTime} мс`);

        const pageTitle = document.title || window.location.pathname;
        const text = `Page loading time: ${pageLoadTime} ms\nDOM interactive time: ${domInteractiveTime} ms\nServer's response time: ${responseTime} ms\n `;

        footerLoadTime.textContent = '';

        let index = 0;

        function typeWriter() {
            if (index < text.length) {
                footerLoadTime.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    footerLoadTime.classList.add('hidden');
                }, 2000);
            }
        }

        typeWriter();
    }

    if ('performance' in window) {
        console.log('Performance API поддерживается.');

        setTimeout(() => {
            const [entry] = performance.getEntriesByType('navigation');
            if (entry) {
                console.log('Навигационные данные найдены:', entry);
                displayLoadTime(entry); // Вызываем функцию для отображения времени загрузки
            } else {
                console.log('Навигационные данные не найдены.');
            }
        }, 100); // Задержка 100 мс
    } else {
        console.log('Performance API не поддерживается в этом браузере.');
    }
});

window.addEventListener('load', function() {
    const menuItems = document.querySelectorAll('#menu a');
    const currentPage = document.location.pathname.split('/').pop();

    menuItems.forEach(item => {
        const linkPage = item.getAttribute('href');
        if (linkPage === currentPage) {
            item.classList.add('active');
        }
    });
});



