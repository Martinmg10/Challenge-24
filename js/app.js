let oro = 0;
let posiones = 0;
let nada = 0;
let cofre = 0;



for (let index = 0; index <10 ; index++) {
    cofre=Math.round(Math.random()*2);   

if(cofre==0) {
oro ++ 

    console.log('Enconto 10 monedas de oro' );
 }
else if (cofre==1) {
posiones ++
    console.log('Encontro 2 posiones de vida');
     
}
else if (cofre==2){
nada ++ 
    console.log('No encontro nada');

}
}

console.log("Total de monedas de oro encontradas: " + oro*10);
console.log("Total de posiones de vida encontradas: " + posiones*2);
console.log("cantidad de cofres vacios: " + nada);
