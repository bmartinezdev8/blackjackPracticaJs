

let deck = [];
const tipos =['C','D','H','S'];
const especiales=['A','J','Q','K'];


//referencia html
const btnPedir = document.querySelector('#btnPedirCarta');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevoJuego = document.querySelector('#btnNuevoJuego');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#cruppier-cartas');
const puntosHtml = document.querySelectorAll('small');

let puntosJugador = 0,
    puntosComputadora = 0;

//ESTA FUNCION CREA UNA NUEVA BARAJA
const crearDeck = () => {

    for (let i =2; i<=10; i++){
        for(let tipo of tipos)
        deck.push(i+tipo);
    }
    for (let tipo of tipos){
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }
    //console.log(deck);
    deck = _.shuffle( deck );
    console.log(deck);
}


crearDeck();

//ESTA FUNCION PERMITE TOMAR UNA CARTA
const pedirCarta = () => {
    if (deck.length===0){
        throw 'No hay mas cartas'
    }
    const carta = deck.pop();

    // console.log (deck);
    // console.log (carta);
    return carta; 
}



//pedirCarta();

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length-1);
    return (isNaN(valor))?
            (valor === 'A')? 11 : 10
            : valor*1;  
    // //let puntos= 0;
    // console.log ({valor});
    // if( isNaN(valor)){
    //     puntos= (valor==='A') ? 11 : 10;
    // } else{
    //     //console.log ('Es un numero')
    //     puntos= valor *1;
    // }
    // //console.log (puntos)
    
};
// const valor =valorCarta(pedirCarta());
// console.log (valor)

// turno de la computadora

const turnoComputadora = (puntosMinimos) => {
    do {
    const carta = pedirCarta();
    
    puntosComputadora = puntosComputadora + valorCarta(carta);
    
    puntosHtml[1].innerText = puntosComputadora;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasComputadora.append(imgCarta);    
    if (puntosMinimos > 21){
        break;
    }
    }  while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
    setTimeout(() => {
        if (puntosComputadora === puntosMinimos){
            alert('Nadie gana');
        } else if (puntosMinimos > 21){
            alert('Computadora gana');
        } else if (puntosComputadora > 21){
            alert('Jugador gana');
    } 
    }, 10);
}
    

// Eventos

btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    
    puntosJugador = puntosJugador + valorCarta(carta);
    
    puntosHtml[0].innerText = puntosJugador;
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21){
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
         if (puntosComputadora === puntosJugador){
            console.warn('Nadie gana');
        }
    } else if (puntosJugador === 21){

        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador); 
        
    }

    
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
});

btnNuevoJuego.addEventListener('click', () => {
    console.clear();
    deck = [];
    deck = crearDeck();
    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHtml[0].innerText =0;
    puntosHtml[1].innerText =0;
    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';
    btnPedir.disabled = false;
    btnDetener.disabled = false;

})
