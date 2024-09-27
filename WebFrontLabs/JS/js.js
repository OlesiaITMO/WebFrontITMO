document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.getElementById('preloader');
    const commentsContainer = document.getElementById('comments');
    const loadMoreButton = document.getElementById('loadMore');
    const filterInput = document.getElementById('filter');
    const applyFilterButton = document.getElementById('applyFilter');
    const loadingText = document.getElementById('loadingText');

    let currentPage = 0;
    const limit = 5;
    let allComments = [];
    let filteredComments = [];


    function showPreloader() {
        preloader.style.display = 'flex';
        loadingText.style.display = 'block';
    }

    function hidePreloader() {
        preloader.style.display = 'none';
        loadingText.style.display = 'none';
    }


    function showError() {
        commentsContainer.innerHTML = '<p>⚠ Что-то пошло не так...</p>';
    }


    function fetchComments() {
        showPreloader();
        fetch(`https://jsonplaceholder.typicode.com/comments?_start=${currentPage * limit}&_limit=${limit}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                hidePreloader();
                allComments = [...allComments, ...data]; // Добавляем новые комментарии
                filteredComments = allComments; // По умолчанию показываем все комментарии
                renderComments(filteredComments);
                loadMoreButton.style.display = 'block'; // Показываем кнопку "Загрузить ещё"
                currentPage++;
            })
            .catch(error => {
                hidePreloader();
                showError();
                console.error('Fetch error:', error);
            });
    }

    // Функция для рендера комментариев
    function renderComments(comments) {
        commentsContainer.innerHTML = ''; // Очищаем перед рендерингом

        if (comments.length === 0) {
            commentsContainer.innerHTML = '<p>Нет комментариев для отображения</p>';
            return;
        }

        comments.forEach(comment => {
            const commentBlock = document.createElement('div');
            commentBlock.classList.add('comment-block');
            commentBlock.innerHTML = `
                <div><strong>Name</strong> ${comment.name}</div>
                <div><strong>Comment:</strong> ${comment.body}</div>
                <div><strong>Email:</strong> ${comment.email}</div>
            `;
            commentsContainer.appendChild(commentBlock);
        });
    }

    function filterComments() {
        const filterValue = filterInput.value.toLowerCase();
        filteredComments = allComments.filter(comment =>
            comment.name.toLowerCase().includes(filterValue) ||
            comment.email.toLowerCase().includes(filterValue)
        );
        renderComments(filteredComments);
    }

    // Добавляем обработчик для кнопки фильтрации
    applyFilterButton.addEventListener('click', filterComments);

    // Обработчик для загрузки следующей порции комментариев
    loadMoreButton.addEventListener('click', function() {
        console.log('Кнопка нажата, загружаем комментарии');
        fetchComments();
    });

    // Запускаем запрос за комментариями при загрузке страницы
    fetchComments();
});



window.addEventListener('load', function() {
    // Например, если вы хотите установить активный элемент на основе URL
    const currentPage = document.location.pathname.split('/').pop();

    if (currentPage === 'html1.html') {
        const but1 = document.getElementById('main');
        but1.style.boxShadow = '5px 5px 15px rgba(0, 0, 0, 0.8)';

    } else if (currentPage === 'html2.html') {
        const but2 = document.getElementById('block1');
        but2.style.boxShadow = '5px 5px 15px rgba(0, 0, 0, 0.8)';
    } else if (currentPage === 'html3.html') {
        const but3 = document.getElementById('block2');
        but3.style.boxShadow = '5px 5px 15px rgba(0, 0, 0, 0.8)';
    }
});

