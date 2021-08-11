function test($msg) {
    alert($msg);
}

/* CONTROLES MENU */
function toggleMenu(el) {
    var prt = el.parentNode;
    var ctrl = prt.children[2];

    if(prt.className=="elmenu active") {
        prt.classList.remove('active');
        ctrl.style.visibility = "hidden";
        
    }else{
        prt.classList.add('active');
        ctrl.style.visibility = "visible";
    }
    
}

function addToBasket() {
    
}




// function getvalue(){
//     var radios = document.getElementsByName('btnradio');
//     var valeur;
//     for(var i = 0; i < radios.length; i++){
//     if(radios[i].checked){
//         // radios[i].style.backgroundColor = "f2b705";
//         //valeur = radios[i].value;
//         console.log(valeur);
//         // document.getElementById('elmenu').innerHTML = valeur;
//         }
//     }
//}