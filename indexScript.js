var c;
var expanded=0;
var emb1open=0;
var emb2open=0;
var pathHR ="url(./img/HR/";
var hires = ["hellrydeselftitled.png","hellrydeselftitledContra.png","hellrydebeyond.png","zelichantPresence.png","zelichantPresenceInt.png","zelichantAwaken.png", "zelichantAwakenCentro.png","metalmecca.png","lifecover.png","lifeContra.png","DOAcover.png"];

var hidesc = ["<b>Hellryde Incorporated</b> 'Selftitled' album cover 2013","<b>Hellryde Incorporated</b> 'Selftitled' album counter-cover 2013","<b>Hellryde Incorporated</b> 'Beyond the grave' digital album cover 2015","<b>Zelichant</b> 'Presence Unknown' album cover 2014","<b>Zelichant</b> 'Presence Unknown' centerfold 2014","<b>Zelichant</b> 'Awaken from reality' album cover 2015","<b>Zelichant</b> 'Awaken from reality' centerfold 2015","<b>Metal Mecca</b> 'Artwork for metal blog' 2011","<b>Life Extinction</b> 'Lo unico seguro en la vida, es la muerte' album counter-cover 2005","<b>Life Extinction</b> 'Lo unico seguro en la vida, es la muerte' album cover 2005","<b>Dancing on Ashes</b> 'Despair Anthems' album cover 2004"];
var topeimg = hires.length;
var act = 0;
var next=act+1;
var image = document.getElementById("imghld");
var paragraph=document.getElementById("desc");
var der=document.getElementById("der");
var izq=document.getElementById("izq");
var w=window.innerWidth;
var emb1=document.getElementById("emb1");
var emb2=document.getElementById("emb2");
var res;

window.addEventListener("resize", imgres);
der.addEventListener("click", change);
izq.addEventListener("click", goback);

function flechas(){
	if (next==topeimg) {
		der.style.visibility="hidden";
		izq.style.visibility="visible";
	}
	else if (act==0) {
		der.style.visibility="visible";
		izq.style.visibility="hidden";
	}
	else{
		der.style.visibility="visible";
		izq.style.visibility="visible";	
	}
}

function cierra(c){
	switch (c) {
		case 1: {
			return emb1.style.display="none";
			emb1open=0;
			break;
		}
		case 2: {
			return emb2.style.display="none";
			emb2open=0;
			break;
		}
		
	}
}

function chEmbed(){
	switch (act) {
		case 0: {
			emb1.style.display="inherit";
			emb1open=1;
			break;
		}
		case 2: {
			emb2.style.display="inherit";
			emb2open=1;
			break;
		}
		
	}
}
	

function imgres(){
	w=window.innerWidth;
	if (w<751) {
		expanded=0;
		expand();
		image.style.backgroundImage = "none";
	}
	else if(w>1280) {
		expanded=1;
		expand();
		pathHR="url(./img/HR/";
		image.style.backgroundImage = pathHR + hires[act]+")";
	}
	else {
		expanded=1;
		expand();
		pathHR="url(./img/";
		image.style.backgroundImage = pathHR + hires[act]+")";
	}

	flechas();
}


function start(){
	imgres();
	paragraph.innerHTML =hidesc[act];
	chEmbed();
	/*if (w>750) {
	image.style.backgroundImage = pathHR + hires[act]+")";
	}
	else {

	}*/
}

function change(){
	
	image.style.backgroundImage = pathHR + hires[next]+")";
	paragraph.innerHTML =hidesc[next];
	next++;
	act++;
	chEmbed();
	if (next==topeimg) {
		der.style.visibility="hidden";
		izq.style.visibility="visible";
	}
	else{
		der.style.visibility="visible";
		izq.style.visibility="visible";	
	}
	

}

function goback(){	
	image.style.backgroundImage = pathHR + hires[act-1]+")";
	paragraph.innerHTML =hidesc[act-1];

	next--;
	act--;
	chEmbed();

	if (act==0) {
		der.style.visibility="visible";
		izq.style.visibility="hidden";
	}
	else{
		der.style.visibility="visible";
		izq.style.visibility="visible";	
	}


}

function contract(){
		el=document.getElementById("boxintro");
		el.style.backgroundColor="transparent";

		el=document.getElementById("justap");
		el.style.display="none";

		el=document.getElementById("sub");
		el.style.display="none";

		el=document.getElementById("persdesc");
		el.style.display="none";

		expanded=0;
}

function expand(){

	if (expanded==0) {

		var el=document.getElementById("boxintro");
		el.style.backgroundColor="#222222";

		el=document.getElementById("justap");
		el.style.display="inherit";

		el=document.getElementById("sub");
		el.style.display="inherit";

		el=document.getElementById("persdesc");
		el.style.display="inherit";

		expanded=1;


	}
	else {
		contract();
	}

}

