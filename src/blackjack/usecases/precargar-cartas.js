/**
 * Precarga las imágenes de las cartas para reutilizarlas durante el juego.
 * @param {string[]} cartas - Códigos de las cartas del mazo.
 * @returns {Promise<void>} Promesa que termina cuando finaliza la precarga.
 */
export const precargarCartas = async (cartas) => {
    const cargas = cartas.map(carta => {
        return new Promise(resolve => {
            const imagen = new Image();

            imagen.onload = resolve;
            imagen.onerror = resolve;
            imagen.src = `assets/cartas/${carta}.png`;
        });
    });

    await Promise.all(cargas);
};