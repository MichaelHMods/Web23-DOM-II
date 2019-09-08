//**********mouseover event listener
let test = document.querySelectorAll("nav") [0];
test.addEventListener ('mouseover', function(event) {
    event.target.style.color = "hotpink";

    setTimeout (function () {
        event.target.style.color = "";
    },500);
}, false);




//********Keydown event listener <---------------two in one!!!!
document.querySelector("body").addEventListener("keydown", myFunction);
function myFunction() {
  document.querySelector("body").style.backgroundColor = "hotpink";
}

document.querySelector("body").addEventListener("keyup", myFunctionBack);
function myFunctionBack () {
    document.querySelector("body").style.backgroundColor = "white";
}




//*********wheel event listener
document.querySelector("h1").addEventListener("wheel", myFunctionAgain);
function myFunctionAgain() {
 document.style.fontSize = "100px"; 
}




//********mousedown event listener
let clickIt = document.getElementsByTagName("h2") [0];
clickIt.addEventListener ('mousedown', function(doIt) {
    doIt.target.style.color = "hotpink";
})





//********mouseup event listener
let unClickIt = document.getElementsByTagName("h2") [0];
unClickIt.addEventListener ('mouseup', function(unDoIt) {
    unDoIt.target.style.color = "black";
})





//********focus and blur event listener   <----------------------------This is two events in one!
const navClicker = document.querySelectorAll("nav") [0];

navClicker.addEventListener('focus', (doAThing) => {
  doAThing.target.style.background = 'pink';    
}, true);

navClicker.addEventListener('blur', (doAThing) => {
  doAThing.target.style.color = 'black';    
}, true);




//********resize event listener
window.addEventListener("resize", function(){
    document.querySelector("body").style.backgroundColor = ("magenta");
  }, true);




//********click event listener
document.addEventListener("click", function(){
    document.querySelector("body").style.backgroundColor = ("purple");
  }, true);




//preventdefault()

document.querySelector("nav").addEventListener("click", function(event){
    event.preventDefault()
    alert ("Nope");
  });