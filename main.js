const toggleBtn = document.querySelector('.hamBtn');
const menujs = document.querySelector('.menu');

toggleBtn.addEventListener('click', ()=>{
    menujs.classList.toggle('active');
});