document.addEventListener('mousedown', function(e) {
    if (e.target.matches('.item-link')) {
        e.target.classList.toggle('item-link');
        e.target.classList.toggle('red');
    }
});

document.addEventListener('mouseup', function(e) {
    if (e.target.matches('.red')) {
        e.target.classList.toggle('item-link');
        e.target.classList.toggle('red');
    }
});
