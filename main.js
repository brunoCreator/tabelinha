window.addEventListener("load", ativar());

function ativar(){
    var path = window.location.href.split("/").pop();
    var els = document.querySelectorAll("a[href='"+path+"']");
    els[0].classList.add("active");
    if(path.includes("index")){
       els[1].classList.add("active");
    }
    
}
if(window.location.href.split("/").pop().includes("jogos")){
    
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
}

document.addEventListener("click", function(e) {
var telefone = document.getElementById("telefone");
  if(e.target != telefone) {
      var numeros = ('' + telefone.value).replace(/\D/g, '').substr(0,11);

      telefone.value = numeros.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");;
  }
})
