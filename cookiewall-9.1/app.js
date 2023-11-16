document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
});

document.getElementById('submitAge').addEventListener('click', function() {
    let age = document.getElementById('ageInput').value;
    
    if (age >= 18) {
        window.location.href = "https://www.youtube.com/";
    } else {
        document.getElementById('underage').style.display = 'block';
    }
});