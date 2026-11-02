import { valorCarta } from './valor-carta.js';

export const calcularPuntos = (mano) => {

    let puntos = mano.reduce(
        (total, carta) => total + valorCarta(carta), 0
    );

    let ases = mano.filter(
        carta => carta.startsWith('A')
    ).length;

    while (puntos > 21 && ases > 0) {
        puntos -= 10;
        ases--;
    }

    return puntos;
};