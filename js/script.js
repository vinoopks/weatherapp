function openNav() {
    
    document.getElementById("sideNav").style.width = "250px";

    //    document.getElementById("main").style.marginLeft = "250px";
    //    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    //    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";


}

function blurContent(){
  var contentElement= document.getElementById("content");
    contentElement.classList.add("blur");

}
function noblurContent(){
  var contentElement= document.getElementById("content");
    contentElement.classList.remove("blur");

}


var nav = [openNav, closeNav];
var blur = [blurContent,noblurContent];

/*
$(document).ready(function () {
    $("#nav-button").click(function () {
        nav.reverse()[1]();
        blur.reverse()[1]();

    });
});

*/

function navAction(){

        nav.reverse()[1]();
        blur.reverse()[1]();

}
