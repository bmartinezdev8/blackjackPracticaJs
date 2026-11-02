export const calcularEstadisticas = (historial) => {

    let victorias = 0;
    let derrotas = 0;
    let empates = 0;

    historial.forEach((partida) => {

        if (partida.resultado === 'Victoria') {
            victorias++;
        } else if (partida.resultado === 'Derrota') {
            derrotas++;
        } else if (partida.resultado === 'Empate') {
            empates++;
        }

    });

    const total = historial.length;

    const winrate = total > 0
        ? (victorias / total) * 100
        : 0;

    return {
        total,
        victorias,
        derrotas,
        empates,
        winrate
    };
};
    