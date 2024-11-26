
document.querySelectorAll('.card img').forEach(img => {
    img.addEventListener('click', () => {
        alert('You clicked on a profile picture!');
    });
});
