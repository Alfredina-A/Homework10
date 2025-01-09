let header = document.querySelector(".header")
header.style.backgroundColor ="blue"
header.style.color = "white"


let DOM = document.querySelector(".DOM")
function changeContent(){ 
DOM.style.backgroundColor="grey"
DOM.innerHTML = "I know now what the DOM is🙌"
DOM.style.color = "black"
}
DOM.addEventListener("click", changeContent)


let select = document.getElementById("select")
function changeColor(){
select.style.backgroundColor = "yellow"
select.innerHTML ="I know how to access/ select elements in the DOM👊"
select.style.color = "black"
}
select.addEventListener("click", changeColor)



let stylemethods = document.querySelector(".stylemethods")
function changeBackgroundColor(){
    stylemethods.style.backgroundColor = "green"
    stylemethods.innerHTML = "I know how to use the style methods to change the style of an element in the DOM✅"
    stylemethods.style.color = "black"
}
stylemethods.addEventListener("click", changeBackgroundColor)



let forth = document.querySelector(".forth")
function changeMovement(){
forth.style.backgroundColor = "purple"
forth.innerHTML = "I know how the styling properties differ in JS from CSS👍"
forth.style.color = "white"
}
forth.addEventListener("click", changeMovement)


let fif = document.getElementById("fif")
function changeExcitement(){
fif.style.backgroundColor = "black"
fif.innerHTML = "Yes I did it!! I manipulated the DOM and styled my elements😍😍😍😍"
fif.style.color = "white"
}
fif.addEventListener("click", changeExcitement)


let open = document.querySelector(".open")
function openImage(){
    let image = document.querySelector(".image")
    image.style.display="block"
    let close = document.querySelector(".close")
    close.style.display="block"
    let open= document.querySelector(".open")
    open.style.display="none"
}

open.addEventListener("click", openImage)


let close = document.querySelector(".close")
function closeImage(){
    let image = document.querySelector(".image")
    image.style.display="none"
    let close = document.querySelector(".close")
    close.style.display="none"
    let open= document.querySelector(".open")
    open.style.display=" block"
}

close.addEventListener("click", closeImage)