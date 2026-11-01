import { crearCartaHTML } from './crear-carta-html.js';
import { pedirCarta } from './pedir-carta.js';
import { valorCarta } from './valor-carta.js';

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

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if ( puntosMinimos > 21 ) {
            break;
        }

    } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

    setTimeout(() => {
        if ( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana');
        } else if ( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana');
        }
    }, 100 );
};