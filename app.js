// Milestone1
var button = document.getElementById('Submit');
var skills = document.getElementById('skillhide');
button.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
