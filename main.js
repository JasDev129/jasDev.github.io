const menuBar = document.querySelector('.menu');
const navList = document.querySelector('.nav-list');

let navStatus = false;
    menuBar.addEventListener('click', () => {
        console.log('clicked');
        navList.classList.toggle("block");
       
    })