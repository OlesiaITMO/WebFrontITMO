window.addEventListener('load', function() {
    const currentPage = document.location.pathname.split('/').pop();

    if (currentPage === 'index.html') {
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
