window.addEventListener('load', function() {
    const swiperWords = document.getElementById('swiperWords');
    if (!swiperWords) {
        console.error('Элемент с id "swiperWords" не найден.');
        return;
    }

    const text = "Проект, находящийся в стадии разработки, но уже выполняющий основной функционал - приложение, обрабатывающее файлы нескольких расширений в указанных вами директориях, выявляющее битые ссылки и сигнализирующее о них (одна из главных задач). Как дополнение - выявление данных о состоянии ОС. Используется MongoDB и Postgres в качестве бд (Docker для поднятия контейнеров с ними), Swagger для документации, @Sheduled для отложенной на выполнение раз в определённое время проверки. Для удобства работы с сервисами, репозиторями и т.п. - Spring. В перспективе в ближайшее время генерация отчетов о состоянии системы, логирование работы приложения, а также телеграмм-бот для уведомления пользователей о найденных битых ссылка с предолжением заменить их на новые. В качестве паттернов на данный момент используется регистрационная фабрика с мапой стратегий в зависимости от расширения файла. Фабрика и стратегии синглтоны - фабрика как единая точка доступа, а стратегии - для гарантии, что ими будет владеть только их фабрика - их instance достаётся в его приватном конструкторе и сразу же кладётся в мапу фабрики.";  // Текст, который будет печататься
    swiperWords.textContent = ''; // Очистка перед началом печати

    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            swiperWords.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Скорость печати (100 мс на символ)
        } else {
            setTimeout(() => {
                swiperWords.classList.add('hidden'); // Исчезновение после печати (опционально)
            }, 2000); // Исчезает через 2 секунды после завершения печати (опционально)
        }
    }

    typeWriter(); // Запуск эффекта печати
});
