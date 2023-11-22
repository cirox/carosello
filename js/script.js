document.addEventListener('DOMContentLoaded', function () {
    const carosello = document.getElementById('carosello');
    const items = carosello.getElementsByClassName('item');
    const totalItems = items.length;
    let currentIndex = 0;

    function showImage(index) {
        if (index < 0) {
            currentIndex = totalItems - 1;
        } else if (index >= totalItems) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const offset = currentIndex * -100 + '%';
        for (let i = 0; i < items.length; i++) {
            items[i].style.transform = 'translateX(' + offset + ')';
        }
    }

    function nextImage() {
        showImage(currentIndex + 1);
    }

    function prevImage() {
        showImage(currentIndex - 1);
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') {
            nextImage();
        } else if (event.key === 'ArrowLeft') {
            prevImage();
        }
    });
});
