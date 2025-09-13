document.getElementById('toggleButton').addEventListener('click', function() {
    const text = document.getElementById('text');
    text.classList.toggle('hidden');
    text.classList.toggle('visible');
});
