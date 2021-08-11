function toggleMenu(el) {
    var prt = el.parentNode;
    var ctrl = prt.children[1];

    if(prt.className=="elmenu active") {
        prt.classList.remove('active');
        ctrl.style.visibility = "hidden";
        
    }else{
        prt.classList.add('active');
        ctrl.style.visibility = "visible";
    }
    
}