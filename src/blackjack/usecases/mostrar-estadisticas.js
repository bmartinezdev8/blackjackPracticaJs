import { obtenerHistorial } from './obtener-historial.js';
import { calcularEstadisticas } from './calcular-estadisticas.js';

export const mostrarEstadisticas = () => {

    const historial = obtenerHistorial();
    const estadisticas = calcularEstadisticas(historial);
    const { total, victorias, derrotas, empates, winrate } = estadisticas;

    document.querySelector('#total-partidas').textContent = total;
    document.querySelector('#total-victorias').textContent = victorias;
    document.querySelector('#total-derrotas').textContent = derrotas;
    document.querySelector('#total-empates').textContent = empates;
    document.querySelector('#porcentaje-victorias').textContent = `${winrate.toFixed(1)}%`;

    const tablaHistorial = document.querySelector('#tabla-historial');
    tablaHistorial.innerHTML = '';

    [...historial].reverse().forEach((partida) => {

    const fila = document.createElement('tr');

    fila.innerHTML = `
        <td>${partida.fecha}</td>
        <td>${partida.puntosJugador}</td>
        <td>${partida.puntosComputadora}</td>
        <td>${partida.resultado}</td>
    `;

    tablaHistorial.append(fila);

});
};