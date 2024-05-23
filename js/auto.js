// Переключение изображений на главном экране при нажатии кнопки

    document.addEventListener("DOMContentLoaded", function() {
        var currentIndex = 0;
        var slides = document.querySelectorAll(".slide");
        var leftArrow = document.querySelector(".left_arrow");
        var rightArrow = document.querySelector(".right_arrow");
    
        // Функция для отображения текущего слайда
        function showSlide(index) {
            // Скрыть все слайды
            slides.forEach(function(slide) {
                slide.style.display = "none";
            });
            // Показать текущий слайд
            slides[index].style.display = "block";
        }
    
        // Показать первый слайд при загрузке страницы
        showSlide(currentIndex);
    
        // Обработчик для нажатия на левую стрелку
        leftArrow.addEventListener("click", function() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        });
    
        // Обработчик для нажатия на правую стрелку
        rightArrow.addEventListener("click", function() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        });
    });