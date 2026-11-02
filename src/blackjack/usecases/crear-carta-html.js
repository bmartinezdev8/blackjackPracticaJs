/**
 * Crea un elemento HTML para representar una carta.
 * @param {string} carta - Código de la carta.
 * @returns {HTMLImageElement} Imagen de la carta.
 */
export const crearCartaHTML = (carta) => {
    if (!carta) {
        throw new Error('La carta es requerida');
    }

    const imgCarta = document.createElement('img');

    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.alt = `Carta ${carta}`;
    imgCarta.classList.add('carta');

    return imgCarta;
};