function test($msg) {
    alert($msg);
}

/* CONTROLES MENU */
function toggleMenu(el) {

    var prt = el.parentNode;
    var ctrl = prt.children[1];
    var qte = ctrl.children[0];
    
    if(prt.className=="elmenu active") {
        prt.classList.remove('active');
        ctrl.style.display = "none";
        
     }else{
         prt.classList.add('active');
         ctrl.style.display = "inline-block";
         qte = ctrl.children[0].innerHTML = 1;
    }
}

// boutons + -
function addToBasket(el) {
    var prt = el.parentNode;
    var gprt = prt.parentNode;
    var getQte = gprt.children[0].innerHTML;
    var qte = new Number(getQte);
    qte++;
    gprt.children[0].innerHTML = qte;
}

function removeFromBasket(el) {
    var prt = el.parentNode;
    var gprt = prt.parentNode;
    var getQte = gprt.children[0].innerHTML;
    var qte = new Number(getQte);
    qte--;
    if(qte == 0) {
        toggleMenu(gprt);
    }
    gprt.children[0].innerHTML = qte;
}