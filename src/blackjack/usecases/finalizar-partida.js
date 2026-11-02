import { determinarGanador } from './determinar-ganador.js';
import { guardarPartida } from './guardar-partida.js';

/**
 * Finaliza una partida, guarda el resultado y muestra el ganador.
 * @param {Number} puntosJugador Puntos finales del jugador
 * @param {Number} puntosComputadora Puntos finales de la computadora
 */
export const finalizarPartida = (puntosJugador, puntosComputadora) => {

    const { resultado, mensaje } = determinarGanador(
        puntosJugador,
        puntosComputadora
    );

    guardarPartida({
        fecha: new Date().toLocaleString('es-CL'),
        puntosJugador,
        puntosComputadora,
        resultado
    });

    setTimeout(() => {
        alert(mensaje);
    }, 100);

};
