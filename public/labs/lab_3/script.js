const pics = document.querySelector(".images")

 function shift_left(){
     const last_three = Array.from(pics.children).slice(4,7).reverse();
     last_three.forEach((element) => {
         pics.removeChild(element);
         pics.insertBefore(element, pics.children[0]);
     });
 }

 function shift_right(){
    const first_three = Array.from(pics.children).slice(0,3);
    first_three.forEach((element) => {
        pics.removeChild(element);
        pics.appendChild(element);
    });
}

function load_page(){
    document.querySelector("button.arrow.prev").addEventListener("click", (event) => {
        shift_left();
    });
    document.querySelector("button.arrow.next").addEventListener("click", (event) => {
        shift_right()
    });
   
}
window.onload = load_page;