// declaration Varaiable

var text="Hello"

// Declaration of Function
// args arguments = params parameters
// function changeText(element) {
//     element="Hello Guys"
//     console.log(element);
//     // return text
// }
//node nameFile.js: No need
changeText(text);

function changeText(element){
    console.log(element);
    // element.innerText="<b>Clicked</b>";
    element.innerHTML="<b>Clickedddd</b>";
}


// function alerting() {
//     alert('OOOOPS you shouldn t clicked that')
//     counter+=1
// }

function turnOff(element){
    if(element.innerHTML=="On"){
        element.innerHTML="Off"
        // Change styling
        element.style.backgroundColor="red"
        //- => no space pascal cases 
        //background-color=> backgroundColor
    }else{
        element.innerHTML="On"
        element.style.backgroundColor="green"
    }
}



function hideParagraph(element){
    element.remove();
}


//getting the element 
var btnHovering=document.getElementById("hoverBox")
// var btnHovering=document.getElementsByTagName("button")
// console.log(btnHovering);
// var boxToHover=btnHovering[3]
// console.log(boxToHover);

// Hovering 
btnHovering.onmouseover=function () {
    btnHovering.style.color="red"
}
btnHovering.onmouseout=function () {
    btnHovering.style.color="green"
}




