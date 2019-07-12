function toggleButton() {
    const menus = document.querySelectorAll('.list-group-item');
    menus.forEach(menu => menu.classList.toggle('.toggle-button-show'));
}
document.querySelector('.toggle-button').addEventListener('click', toggleButton);
alert('sdf')