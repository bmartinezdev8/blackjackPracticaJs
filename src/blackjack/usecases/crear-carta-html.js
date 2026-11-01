/**
 * Crea la imagen HTML de una carta
 * @param {String} carta Ejemplo '2C', 'AH', 'KD'
 * @returns {HTMLImageElement} Imagen de la carta lista para agregar al DOM
 */
export const crearCartaHTML = (carta) => {

    if (!carta) throw new Error ('La carta es requerida');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');

    return imgCarta;
};