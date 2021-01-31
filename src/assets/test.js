export {updateMenu,goTopPage}

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
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


