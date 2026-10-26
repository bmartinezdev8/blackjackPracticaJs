

const miModulo = (() => {
    'use strict'

    let deck = [];
    const tipos =['C','D','H','S'],
        especiales=['A','J','Q','K'];

    let puntosJugadores = [];
    
    //referencia html
    const btnPedir = document.querySelector('#btnPedirCarta'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevoJuego = document.querySelector('#btnNuevoJuego');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
          puntosHtml = document.querySelectorAll('small');


    //esta funcion inicializa el juego
    const iniciarJuego = (numJugadores = 2) => {
        deck = crearDeck();
        for (let i = 0; i < numJugadores; i++){
            puntosJugadores.push(0);
        }
        puntosHtml.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '');
        btnPedir.disabled = false;
        btnDetener.disabled = false;

    }

    //ESTA FUNCION CREA UNA NUEVA BARAJA
    const crearDeck = () => {

        deck = [];
        for (let i =2; i<=10; i++){
            for(let tipo of tipos)
            deck.push(i+tipo);
        }
        for (let tipo of tipos){
            for (let esp of especiales) {
                deck.push(esp + tipo);
            }
        }
        return _.shuffle(deck);
    }

    //ESTA FUNCION PERMITE TOMAR UNA CARTA
    const pedirCarta = () => {
        if (deck.length===0){
            throw 'No hay mas cartas'
        }
        return deck.pop();
    }

    //esta funcion permite obtener el valor de la carta 
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length-1);
        return (isNaN(valor))?
                (valor === 'A')? 11 : 10
                : valor*1;  
    };

    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);  
    }

    const determinarGanador = () => {
        const [puntosMinimos, puntosComputadora] = puntosJugadores;
        setTimeout(() => {
            if (puntosComputadora === puntosMinimos){
                alert('Nadie gana');
            } else if (puntosMinimos > 21){
                alert('Computadora gana');
            } else if (puntosComputadora > 21){
                alert('Jugador gana');
        } 
        }, 100);
    }

    const acumularPuntos = ( carta, turno ) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHtml[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    // turno de la computadora
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);  
            crearCarta(carta, puntosJugadores.length - 1);
        }  while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
        determinarGanador();
    }
        

    // Eventos

    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);

        crearCarta(carta, 0);

        if (puntosJugador > 21){
            console.warn('Lo siento mucho, perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);

        } else if (puntosJugador === 21){

            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador); 
        }

        
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);
    });

    btnNuevoJuego.addEventListener('click', () => {
        iniciarJuego();

    });

    return {
        nuevoJuego: iniciarJuego
    };
})();

