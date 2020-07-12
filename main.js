/*window.addEventListener("load", ativar());

function ativar(){
    var path = window.location.href.split("/").pop();
    var els = document.querySelectorAll("a[href='"+path+"']");
    els[0].classList.add("active");
    els[1].classList.add("active");
}*/
var steam = document.getElementById("steam");
var xbox = document.getElementById("xbox");
var playstation = document.getElementById("playstation");

steam.addEventListener('mouseover', opaco);
xbox.addEventListener('mouseover', opaco);
playstation.addEventListener('mouseover', opaco);

steam.addEventListener('mouseout', normal);
xbox.addEventListener('mouseout', normal);
playstation.addEventListener('mouseout', normal);

function opaco(){
    this.style.opacity = "0.5";
}

function normal(){
    this.style.opacity = "1";
}