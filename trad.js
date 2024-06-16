document.addEventListener('DOMContentLoaded', function() {
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    function nextSlide() {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
    }

    function prevSlide() {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1]);
    }

    next.addEventListener('click', nextSlide);

    prev.addEventListener('click', prevSlide);
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            prevSlide(); 
        } else if (event.key === 'ArrowRight') {
            nextSlide(); 
        }
    });
});