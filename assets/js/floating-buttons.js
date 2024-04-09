document.addEventListener("DOMContentLoaded", function() {
    var floatingButtons = document.querySelector('.floating-buttons');
    setTimeout(function() {
        floatingButtons.classList.add('show');
    }, 500); // Adiciona um atraso de 500ms antes de mostrar os botões
});