// saves the html elements with these id's to a variable
const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

// attach a click event to burger icon, runs a callback function
burger.addEventListener('click', () => {
    // checks to see if menu has the hidden class
    if (menu.classList.contains('hidden')) {
        // if so, remove it
        menu.classList.remove('hidden');
    } else {
        // if not, add it
        menu.classList.add('hidden');
    }
})