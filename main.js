window.addEventListener("load", ativar());

function ativar(){
    var path = window.location.href.split("/").pop();
    var els = document.querySelectorAll("a[href='"+path+"']");
    els[0].classList.add("active");
    els[1].classList.add("active");
}
