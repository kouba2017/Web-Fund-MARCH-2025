console.log("Hello");

function removeJoin(element){
    element.remove()
}
function search(){

    var inputValue=document.getElementById("search-input").value ;
    console.log(inputValue);
    alert(`Searching for ${inputValue}`)
    document.getElementById("search-input").value=""
}

function voteUp(id){
    document.getElementById(id).innerText++

}

function voteDown(id){
    document.querySelector(`#${id}`).innerText--
    //"#vote-1 / #vote-2"
}
