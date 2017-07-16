/*
 FICHIER JAVASCRIPT
 */

var lettres = "ABCDEFGHJKLMNPQRSTVWXYZ";
var lettres = "ABZ";
var ct_pas = 100;
var timer;

function log(txt){ console.log(txt); }
function page_chargee() {
    log('Page chargée');   
    var plqch1 = document.getElementById("chaine-1");
    var plqch2 = document.getElementById("chaine-2");
    var plqct = document.getElementById("compteur");
    plqch1.innerHTML = "AA";
    plqct.innerHTML = "001";
    plqch2.innerHTML = "AA";
    
    document.getElementById("ct_pas").innerHTML = ct_pas;
    document.getElementById("Lettres").innerHTML = lettres;

    timer = window.setInterval(refresh, 25);    
    
}
function refresh() {
	incremente_chiffre();    
}
function incremente_chiffre() {
    var plqch1 = document.getElementById("compteur");
    var nb  = parseInt(plqch1.innerHTML)+ct_pas;
    if ( nb > 999 ) {
    	nb = 1;
    	if ( document.getElementById("chaine-1").innerHTML == "ZZ" &&
        document.getElementById("chaine-2").innerHTML == "ZZ" ) {
			window.clearTimeout(timer);
		}
		else { incremente_chaine("chaine-1"); }
	}
    plqch1.innerHTML = nb_to_chaine(nb); 
}

function nb_to_chaine(nb) {
	var rt = "";
	rt = nb.toString();
	while ( rt.length < 3 ) { rt = "0" + rt;}
	return rt;
}
function incremente_lettre(l) {

    if ( lettres.indexOf(l) >= lettres.length-1 ) { l = "A"; }
    else { l = lettres[lettres.indexOf(l)+1]; }
    return l;

}
function incremente_chaine(chaine) {
    var plqch1 = document.getElementById(chaine);
    var ch1 = plqch1.innerHTML;
	ch1 = ch1[0]  + incremente_lettre(ch1[1]);
	if ( ch1[1] == "A" ) {
		ch1 = incremente_lettre(ch1[0]) + ch1[1];
		if ( ch1[0] == "A" ) { incremente_chaine("chaine-2"); }
	}
	plqch1.innerHTML = ch1;

}
window.addEventListener("load",page_chargee);

