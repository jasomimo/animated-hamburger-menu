document.addEventListener('DOMContentLoaded', registerMenuClickHandler);

function registerMenuClickHandler() {

    var menuElement = document.getElementById('hamburger-menu');

    if (!menuElement) {
        throw Error('Element "hamburger-menu" not found.');
    }

    menuElement.addEventListener('click', function(event){
        if (menuElement.classList.contains('expanded')) {
            menuElement.classList.remove('expanded');
        } else {
            menuElement.classList.add('expanded');
        }
    });
}