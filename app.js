const contexMenu = document.querySelector(".container");
const ShareMenu = document.querySelector('.Share-menu');

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  contexMenu.style.visibility = "visible";
  let x = e.offsetX;
  let y = e.offsetY;
  let winWidth = window.innerWidth;
  let WinHeight = window.innerHeight;

  let cmWidth = contexMenu.offsetWidth;
  let cmHight = contexMenu.offsetHeight;
   if (x >(winWidth - cmWidth - ShareMenu.offsetWidth)) {
    ShareMenu.style.left = '-150px';
   } else {
    ShareMenu.style.left = '205px';
   }

x = x > winWidth - cmWidth ? winWidth - cmWidth : x ;
y = y > WinHeight - cmHight ? WinHeight - cmHight : y ;

  contexMenu.style.left = `${x}px`;
  contexMenu.style.top = `${y}px`;
});
document.addEventListener("click", () => {
  contexMenu.style.visibility = "hidden";
});
