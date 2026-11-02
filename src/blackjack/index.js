import { crearDeck, pedirCarta, turnoComputadora, crearCartaHTML, BLACKJACK, calcularPuntos, mostrarEstadisticas, limpiarHistorial  } from './usecases/index.js';


/**
 * Inicia el juego de blackjack: crea el deck y registra los eventos de los botones
 */
export const iniciarJuego = () => {

    const tipos      = ['C','D','H','S'];
    const especiales = ['A','J','Q','K'];
    let deck = crearDeck( tipos, especiales );

    let manoJugador = [];
    let puntosJugador = 0;
    let partidaFinalizada = false;

    mostrarEstadisticas();

    // Referencias del HTML
    const btnPedir   = document.querySelector('#btnPedir');
    const btnDetener = document.querySelector('#btnDetener');
    const btnNuevo   = document.querySelector('#btnNuevo');
    const btnLimpiarHistorial = document.querySelector('#btnLimpiarHistorial');

    const divCartasJugador     = document.querySelector('#jugador-cartas');
    const divCartasComputadora = document.querySelector('#computadora-cartas');

    const puntosJugadorHTML = document.querySelector('#puntos-jugador');
    const puntosComputadoraHTML = document.querySelector('#puntos-computadora');
    
    const terminarTurnoJugador = () => {

        if (partidaFinalizada) return;

        partidaFinalizada = true;

        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(
            puntosJugador,
            puntosComputadoraHTML,
            divCartasComputadora,
            deck
        );
    };


    // Eventos
    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta( deck );
        
        manoJugador.push(carta);
        puntosJugador = calcularPuntos(manoJugador);
        puntosJugadorHTML.innerText = puntosJugador;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHTML(carta);
        divCartasJugador.append( imgCarta );

        if ( puntosJugador > BLACKJACK ) {
            console.warn('Lo siento mucho, perdiste');
            terminarTurnoJugador();

        } else if ( puntosJugador === BLACKJACK ) {
            console.warn('¡21, genial!');
            terminarTurnoJugador();
        }

    });


    btnDetener.addEventListener('click', terminarTurnoJugador);

    btnNuevo.addEventListener('click', () => {

        console.clear();
        deck = crearDeck(tipos,especiales);

        manoJugador = [];
        puntosJugador     = 0;
        partidaFinalizada = false;
        
        puntosJugadorHTML.innerText     = 0;
        puntosComputadoraHTML.innerText = 0;

        divCartasComputadora.innerHTML = '';
        divCartasJugador.innerHTML = '';

        btnPedir.disabled   = false;
        btnDetener.disabled = false;

    });
    
    btnLimpiarHistorial.addEventListener('click', () => {

        const confirmar = window.confirm(
            '¿Estás seguro de que deseas borrar todo tu historial? (￣□￣)\n\n' +
            'Se eliminarán permanentemente las partidas guardadas y tus estadísticas volverán a cero. O﹏o\n\n' +
            'Esta acción no se puede deshacer. ⊙﹏⊙'
        );

        if (!confirmar) return;

        limpiarHistorial();
        mostrarEstadisticas();

    });

};