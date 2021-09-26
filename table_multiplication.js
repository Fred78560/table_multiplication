exports.action = function (data) {
try{

var phrase=JarvisIA.reco
console.log("on envoie : ",phrase)
var foo = phrase
var nbr=foo.match(/\d+/g).join('')
//console.log(nbr)

var rep = "";
nombre = nbr;
for (i = 1; i <= 10; i++) { // Tableau table de multiplication 
console.log(nombre+ " x " +i+ " = "+nombre*i);
}
//console.log(rep)
var t=nbr;
var tbl="";
			for (var i = 1; i <=10; i++) { // Code js pour la phrase à vocaliser
				r=i*t;
				tbl += t+" x "+i+" = "+r+" , ";
			}
speak(rep);
			
function speak(rep) { var valeurduspeak = tbl 
			JarvisIASpeech(valeurduspeak)
		return 
	}
}catch(err){console.log(err);return }
}