import { obtenerHistorial } from './obtener-historial.js';

/**
 * Guarda una partida en el historial del navegador.
 * @param {Object} partida - Datos de la partida finalizada.
 * @returns {boolean} Indica si se guardó correctamente.
 */
export const guardarPartida = (partida) => {
    const historial = obtenerHistorial();

    historial.push(partida);

    try {
        localStorage.setItem(
            'historialBlackjack',
            JSON.stringify(historial)
        );

        return true;
    } catch (error) {
        console.error('No se pudo guardar la partida:', error);
        return false;
    }
};