import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML, BLACKJACK  } from './usecases';


/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];
let deck = crearDeck( tipos, especiales );


let puntosJugador = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const [  puntosJugadorHTML, puntosComputadoraHTML ] = document.querySelectorAll('small');



// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta( deck );
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosJugadorHTML.innerText = puntosJugador;
    
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = crearCartaHTML(carta);
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > BLACKJACK ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosComputadoraHTML, divCartasComputadora, deck );

    } else if ( puntosJugador === BLACKJACK ) {
        console.warn('¡21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosComputadoraHTML, divCartasComputadora, deck );
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugador, puntosComputadoraHTML, divCartasComputadora, deck );
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = crearDeck(tipos,especiales);

    puntosJugador     = 0;
    
    puntosJugadorHTML.innerText     = 0;
    puntosComputadoraHTML.innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});
