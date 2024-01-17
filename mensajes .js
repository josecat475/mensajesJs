function generadorDeNumeroRandom (num){
    return Math.floor(Math.random() * num)
}


const frasesMoti = {
    dayInfo: ['muy','super','increiblemente'],
    emocionDay:['feliz','alegre','contento']
}  
 let frasesMotivadoras = []

 const cantidadDeFrases = 1;

 for (let i = 0; i < cantidadDeFrases; i++){
    const infoIndex = generadorDeNumeroRandom(frasesMoti.dayInfo.length);
    const emocionIndex = generadorDeNumeroRandom(frasesMoti.emocionDay.length);
    const nuevaFrase = `hoy te sentiras ${frasesMoti.dayInfo[infoIndex]} ${frasesMoti.emocionDay[emocionIndex]}`;
    frasesMotivadoras.push(nuevaFrase);
 }
 console.log(frasesMotivadoras)