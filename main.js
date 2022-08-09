const menuBtn = document.querySelector('.menuBtn')
const sidebar = document.querySelector('.sidebar')

menuBtn.addEventListener('click', function openSidebar() {
  sidebar.classList.toggle('open')
})