export {updateMenu,goTopPage,openSidebar, closeSidebar}

function updateMenu() {
  let navLinks = document.getElementById('nav-links')
  let btn =   document.getElementById("nav-button-div");
  if(btn) btn.onclick = () => {
    if (navLinks.classList.contains("hide"))
      navLinks.classList.remove('hide')
    else
      navLinks.classList.add('hide')
  }
}
function goTopPage(){
  document.body.style.overflow = 'hidden auto';
  window.scrollTo({ top: 0, behavior: 'smooth' });

  
}
function openSidebar(){
  let sidebar = document.getElementById('home-sidebar')
  let opacityDiv = document.getElementById("opacity-div")
  let page = document.getElementsByTagName('body')[0]

  let btn =   document.getElementById('home-toggle');
  btn.onclick = () => {
      sidebar.classList.add('active')
      opacityDiv.classList.add('active')
      document.body.style.overflow = 'hidden';
      sidebar.style.overflow = 'auto'
      // page.classList.add('noscroll')

  }
}
function closeSidebar(){
  let sidebar = document.getElementById('home-sidebar')
  let opacityDiv = document.getElementById("opacity-div")

  let btn =   document.getElementById('close-div');
  btn.onclick = () => {
      sidebar.classList.remove('active')
      opacityDiv.classList.remove('active')
      document.body.style.overflow = 'hidden auto';

      // page.classList.remove('noscroll')

   
  }
}
