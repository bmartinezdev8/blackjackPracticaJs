/**
 * Determina al ganador de la partida
 * @param {Number} puntosJugador Puntos finales del jugador
 * @param {number} puntosComputadora Puntos finales de la computadora
 * @returns {string} Mensaje con el resultado de la partida
 */
export const determinarGanador = (puntosJugador, puntosComputadora) =>{
    if (puntosJugador === puntosComputadora ) return 'Nadie gana (˶˃⤙˂˶)';
    if (puntosJugador > 21 ) return 'Gana la computadora (╥﹏╥)';
    if (puntosComputadora > 21) return 'Jugador gana felicidades (,,> ᴗ <,,)';
    return 'Computadora gana (⋟﹏⋞)';
}