
import { BLACKJACK } from './constantes.js';

/**
 * Determina al ganador de la partida.
 * @param {Number} puntosJugador
 * @param {Number} puntosComputadora
 * @returns {Object} Resultado y mensaje de la partida
 */
export const determinarGanador = (puntosJugador, puntosComputadora) => {

    if (puntosJugador > BLACKJACK) {
        return {
            resultado: 'Derrota',
            mensaje: 'Gana la computadora (╥﹏╥)'
        };
    }

    if (puntosComputadora > BLACKJACK) {
        return {
            resultado: 'Victoria',
            mensaje: 'Jugador gana felicidades (,,> ᴗ <,,)'
        };
    }

    if (puntosJugador === puntosComputadora) {
        return {
            resultado: 'Empate',
            mensaje: 'Nadie gana (˶˃⤙˂˶)'
        };
    }

    if (puntosJugador > puntosComputadora) {
        return {
            resultado: 'Victoria',
            mensaje: 'Jugador gana felicidades (,,> ᴗ <,,)'
        };
    }

    return {
        resultado: 'Derrota',
        mensaje: 'Gana la computadora (╥﹏╥)'
    };
};
