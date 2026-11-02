
/**
 * Permite tomar una carta del deck
 * @param {Array<String>} deck Arreglo de cartas
 * @returns {String} Carta tomada del deck
 */
export const pedirCarta = (deck) => {

    if (!Array.isArray (deck) || deck.length === 0){
        throw new Error ('No har cartas en el Deck')
    }

    const carta = deck.pop();
    return carta;
}