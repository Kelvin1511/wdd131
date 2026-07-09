// Toggle menu visibility and manage the responsive menu interface
const menuButton = document.querySelector('#menu-button');
const navigation = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    
    // Toggles the icon appearance between 'X' and '☰'
    if (navigation.classList.contains('open')) {
        menuButton.innerHTML = '&times;'; 
    } else {
        menuButton.innerHTML = '&#9776;'; 
    }
});

// Inject dynamic footer text values using standard JavaScript properties
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;