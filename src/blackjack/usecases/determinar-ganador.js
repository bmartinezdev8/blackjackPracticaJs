import { BLACKJACK } from "./constantes.js";

/**
 * Determina al ganador de la partida
 * @param {Number} puntosJugador Puntos finales del jugador
 * @param {Number} puntosComputadora Puntos finales de la computadora
 * @returns {String} Mensaje con el resultado de la partida
 */
export const determinarGanador = (puntosJugador, puntosComputadora) => {
    if (puntosJugador === puntosComputadora ) return 'Nadie gana (˶˃⤙˂˶)';
    if (puntosJugador > BLACKJACK ) return 'Gana la computadora (╥﹏╥)';
    if (puntosComputadora > BLACKJACK) return 'Jugador gana felicidades (,,> ᴗ <,,)';
    return 'Computadora gana (⋟﹏⋞)';
};