import { crearCartaHTML } from './crear-carta-html.js';
import { pedirCarta } from './pedir-carta.js';
import { calcularPuntos } from './calcular-puntos.js';
import { determinarGanador } from './determinar-ganador.js';
import { BLACKJACK } from './constantes.js';

/**
 * Turno de la computadora
 * @param {Number} puntosMinimos Puntos mínimos que necesita la computadora para ganar
 * @param {HTMLElement} puntosHTML Elemento HTML donde se muestran los puntos de la computadora
 * @param {HTMLElement} divCartasComputadora Elemento HTML donde se muestran las cartas
 * @param {Array<String>} deck Arreglo de cartas disponibles
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck ) => {

    if ( puntosMinimos === undefined ) throw new Error('Puntos minimos es requerido');
    if ( !puntosHTML ) throw new Error('Argumento puntosHTML es requerido');

    let puntosComputadora = 0;
    let manoComputadora = [];

    if (puntosMinimos > BLACKJACK) {
    setTimeout(() => {
        alert(determinarGanador(puntosMinimos, puntosComputadora));
    }, 100);
    return;
    } 
    
    do {
        const carta = pedirCarta( deck );

        manoComputadora.push(carta);
        puntosComputadora = calcularPuntos(manoComputadora);
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

    } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= BLACKJACK) );

    setTimeout(() => {
        alert( determinarGanador( puntosMinimos, puntosComputadora ) );
    }, 100 );
};