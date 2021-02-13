const pics = document.querySelector(".images")
 function left(){
     const last = Array.from(pics.children).slice(4,7).reverse();
     last.forEach((element) => {
         pics.removeChild(element);
         pics.insertBefore(element, pics.children[0]);
     });
 }
 function right(){
    const first = Array.from(pics.children).slice(0,3);
    first.forEach((element) => {
        pics.removeChild(element);
        pics.appendChild(element);
    });
 }
 function home(){
    document.querySelector("button.arrow.prev").addEventListener("click", (event) => {
        left();
    });
    document.querySelector("button.arrow.next").addEventListener("click", (event) => {
        right()
    });
 }
}
window.onload = home;