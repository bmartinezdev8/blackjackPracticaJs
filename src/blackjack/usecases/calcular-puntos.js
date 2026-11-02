import { valorCarta } from './valor-carta.js';
import { BLACKJACK } from './constantes.js';

/**
 * Calcula los puntos de una mano de blackjack.
 * @param {string[]} mano - Cartas que componen la mano.
 * @returns {number} Puntuación total de la mano.
 */

export const calcularPuntos = (mano) => {

    let puntos = mano.reduce((total, carta) => total + valorCarta(carta), 0);

    let ases = mano.filter(carta => carta.startsWith('A')).length;

    while (puntos > BLACKJACK && ases > 0) {
        puntos -= 10;
        ases--;
    }

    return puntos;
};