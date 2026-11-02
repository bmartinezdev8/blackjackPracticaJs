export const obtenerHistorial = () => {

    const historial = JSON.parse(
        localStorage.getItem('historialBlackjack') || '[]'
    );

    return historial;
};