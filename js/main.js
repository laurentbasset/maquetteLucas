function test($msg) {
    alert($msg);
}

/* CONTROLES MENU */
function toggleMenu(el) {
    var prt = el.parentNode;
    var ctrl = prt.children[2];
    var qte = prt.children[1];

    if(prt.className=="elmenu active") {
        prt.classList.remove('active');
        ctrl.style.visibility = "hidden";
        
    }else{
        prt.classList.add('active');
        ctrl.style.visibility = "visible";
        qte = ctrl.children[0].innerHTML = 1;
    }
}

function addToBasket(el) {
    var prt = el.parentNode;
    var getQte = prt.children[0].innerHTML;
    var qte = new Number(getQte);
    qte++;
    prt.children[0].innerHTML = qte;    ;
    
}

function removeFromBasket(el) {

    var prt = el.parentNode;
    var gprt = prt.parentNode;
    var getQte = prt.children[0].innerHTML;
    var qte = new Number(getQte);
    qte--;
    if(qte == 0) {
        var prtEl = el.parentNode; 
        toggleMenu(prtEl);
        
        //console.log (gprt.className == "elpanier active");
        if(gprt.className == "elpanier active") { gprt.classList.remove('active'); }
    }
    prt.children[0].innerHTML = qte; 
}