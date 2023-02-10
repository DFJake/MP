var page = document.querySelector(".body");
var themeButton = document.querySelector(".themeButton");

themeButton.onclick = function() {
page.classList.toggle("lightTheme");
page.classList.toggle("darkTheme");
};




 
// document.querySelector(".themeButton").addEventListener("click", myfunc);


// function myfunc(){
//     // var buttonInnerHTML = this.innerHTML;
//     // makeSound(buttonInnerHTML);

//     var cn = document.querySelector("body").className

//     if (cn == "body darkTheme" ) {
//       alert("Темная тема!");
//       }

//     if (cn == "body lightTheme" ) {
//       alert("Светлая тема!");
//     }
//   }