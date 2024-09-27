/*document.addEventListener("DOMContentLoaded", () => {
    const footerLoadTime = document.getElementById('footerLoadTime');

    const pageLoadTime = 200; // Примерное время загрузки страницы
    const domInteractiveTime = 300; // Примерное время до интерактивного DOM
    const responseTime = 100; // Примерное время ответа сервера

    //const text = `Время загрузки страницы: ${pageLoadTime} мс\nВремя до интерактивного DOM: ${domInteractiveTime} мс\nВремя ответа сервера: ${responseTime} мс`;

    footerLoadTime.textContent = ''; // Очистка перед началом печати

    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            footerLoadTime.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Скорость печати (100 мс на символ)
        } else {
            setTimeout(() => {
                footerLoadTime.classList.add('hidden'); // Исчезновение после печати
            }, 2000); // Исчезает через 2 секунды после завершения печати
        }
    }

    typeWriter(); // Запуск эффекта печати
});*/
