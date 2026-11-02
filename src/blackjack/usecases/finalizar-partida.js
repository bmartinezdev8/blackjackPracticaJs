import { determinarGanador } from './determinar-ganador.js';
import { guardarPartida } from './guardar-partida.js';
import { mostrarEstadisticas } from './mostrar-estadisticas.js';

/**
 * Finaliza una partida, registra su resultado y actualiza las estadísticas.
 * @param {number} puntosJugador - Puntuación final del jugador.
 * @param {number} puntosComputadora - Puntuación final de la computadora.
 */
export const finalizarPartida = (puntosJugador, puntosComputadora) => {
    const { resultado, mensaje } = determinarGanador(puntosJugador, puntosComputadora);

    guardarPartida({
        fecha: new Date().toLocaleString('es-CL'),
        puntosJugador,
        puntosComputadora,
        resultado
    });

    try {
        mostrarEstadisticas();
    } catch (error) {
        console.error('No se pudieron actualizar las estadísticas:', error);
    }

    setTimeout(() => {
        alert(mensaje);
    }, 100);
};