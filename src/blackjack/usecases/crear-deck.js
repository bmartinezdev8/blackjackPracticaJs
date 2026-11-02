import _ from 'underscore';
/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} regresa un deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!Array.isArray (tiposDeCarta) || tiposDeCarta.length ===0) throw new Error('tiposDeCarta es obligatorio como un arreglo de string');
    if (!Array.isArray  (tiposEspeciales) || tiposEspeciales.length ===0) throw new Error('tiposEspeciales es obligatorio como un arreglo de string');
   
    let deck = [];


    for( let i = 2; i <= 10; i++ ) {
        for( const tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( const tipo of tiposDeCarta ) {
        for( const esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}

//export default crearDeck;