/**
 * Recupera y valida el historial de partidas almacenado en el navegador.
 * @returns {Array<Object>} Partidas válidas del historial.
 */
export const obtenerHistorial = () => {
    try {
        const datosGuardados = localStorage.getItem('historialBlackjack');

        if (!datosGuardados) {
            return [];
        }

        const historial = JSON.parse(datosGuardados);

        if (!Array.isArray(historial)) {
            console.warn('El historial no tiene un formato válido.');
            return [];
        }

        const resultadosValidos = ['Victoria', 'Derrota', 'Empate'];

        const historialValido = historial.filter(partida =>
            partida !== null &&
            typeof partida === 'object' &&
            !Array.isArray(partida) &&
            typeof partida.fecha === 'string' &&
            Number.isFinite(partida.puntosJugador) &&
            Number.isFinite(partida.puntosComputadora) &&
            resultadosValidos.includes(partida.resultado)
        );

        if (historialValido.length !== historial.length) {
            console.warn('Se encontraron partidas con datos inválidos.');
        }

        return historialValido;

    } catch (error) {
        console.error('No se pudo recuperar el historial:', error);
        return [];
    }
};