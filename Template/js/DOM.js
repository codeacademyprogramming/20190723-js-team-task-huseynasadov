"use strict";

let main = document.createElement("main"),
divCont = document.createElement("div"),
divRow = document.createElement("div"),
divCol12 = document.createElement("div"),
button = document.createElement("button");

document.body.appendChild(main);
main.appendChild(divCont);
divCont.className = "container vh-100 d-flex align-items-center justify-content-center";
divCont.appendChild(divRow);
divRow.className = "row";
divRow.appendChild(divCol12);
divCol12.className = "col-12";
divCol12.appendChild(button);
button.className = "btn btn-outline-info";
button.innerText = "Get Login Page"
button.style.color = "info"
button.id= "button";
document.getElementById("button").addEventListener("click",loginPage);
function loginPage(){
    divCol12.innerHTML = form;

}


let form = document.createElement("form"),
image = document.createElement("img"),
label = document.createElement("label"),
input1 = document.createElement("input"),
input2 = document.createElement("input"),
input3 = document.createElement("input");


form.appendChild(image);
form.appendChild(label);
form.appendChild(input1);
form.appendChild(input2);
form.appendChild(input3);

form.className= "form-signin";
image.className = "mb-4"
