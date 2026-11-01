/**
 * Obtiene el valor de la carta
 * @param {String} Carta Ejemplo: '2C','AH'
 * @returns {Number} Valor de la carta (A=11, J/Q/K=10)
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}