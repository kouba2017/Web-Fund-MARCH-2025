console.log("Script is working");


// DOM => Document: file Object:element Model:layout

// API: Application Programming Interface

// Manipulate 

// console.log(document);

var firstH1= document.querySelector("h1");
var secondP=document.querySelector(".secondH1 p");
var petImg= document.querySelector("#pet-img");
var testAll= document.querySelectorAll(".p-tag");
var nameTag=document.querySelector("#name-tag");
// console.log(secondP);

// secondP.innerHTML="Hello Again Again";
// console.log(testAll);
// testAll[0].innerHTML="Hello again and again";


// Switch the presetned image to an alternative
function switchImg() {
    if(petImg){
        petImg.src="./assets/img1.jpg";
        petImg.alt="artistic Figure";
        console.log("Switched was sucessful");
    }
    firstH1.classList.add("backGroundStyle");
    console.log(firstH1.classList);
    // firstH1.style.

}


function chooseLunch(element){
    // console.log(element);
    alert("You picked "+element.value);
    //delay 

}
// var message="The alert was showed";
// function testDelay(){
//     console.log(message);
    
// }
// setTimeout(alert("You picked "),10000); //ms

function setName(element) {
    nameTag.innerHTML=element.value;
}
