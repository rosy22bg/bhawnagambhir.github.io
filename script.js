document.addEventListener('DOMContentLoaded', function () {
    var h1Element = document.querySelector('h1');
    h1Element.addEventListener('click', function () {
        h1Element.style.color = 'blue';
    });
});