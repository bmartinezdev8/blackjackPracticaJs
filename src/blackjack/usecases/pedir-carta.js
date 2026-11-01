
/**
 * Permite tomar una carta del deck
 * @param {Array<String>} deck Arreglo de cartas
 * @returns {String} Carta tomada del deck
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.lenght === 0){
        throw new Error ('No har cartas en el Deck')
    }

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}