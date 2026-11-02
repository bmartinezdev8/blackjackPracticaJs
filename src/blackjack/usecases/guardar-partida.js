export const guardarPartida = (partida) => {

    const historial = JSON.parse(
        localStorage.getItem('historialBlackjack') || '[]'

    );

    historial.push(partida);

    localStorage.setItem(
        'historialBlackjack',
        JSON.stringify(historial)
    );
};