# Blackjack

Juego de cartas Blackjack (21) que corre en el navegador, hecho con HTML, CSS y JavaScript. Es un proyecto de práctica del curso **JavaScript Moderno** de Fernando Herrera (DevTalles, en Udemy), donde trabajé la manipulación del DOM.

![Captura del juego](assets/captura.png)

**Jugar en línea:** [enlace de GitHub Pages, cuando lo publiques]

## Cómo se juega

1. Pulsa **Nuevo juego** para barajar el mazo y empezar una partida.
2. Pulsa **Pedir carta** para sacar una carta. Si te pasas de 21, pierdes.
3. Pulsa **Detener** cuando quieras plantarte. Entonces juega el crupier.
4. Gana quien se acerque más a 21 sin pasarse.

Valores de las cartas: las figuras (J, Q, K) valen 10, el As vale [11 u otro valor, según tu código] y las demás valen su número.

## Tecnologías

- HTML5
- CSS3 y Bootstrap
- JavaScript (sin frameworks)
- Underscore.js (para barajar el mazo)

## Qué practiqué

- Manipulación del DOM: crear y agregar elementos (las cartas) y actualizar el puntaje en pantalla.
- Eventos: botones con `addEventListener`.
- Patrón módulo: el código está dentro de una función autoejecutable (IIFE) con `'use strict'`, que evita variables globales y expone solo lo necesario (`miModulo.nuevoJuego`).
- Refactorización en funciones pequeñas (`crearDeck`, `pedirCarta`, `valorCarta`, `crearCarta`, `acumularPuntos`, `turnoComputadora` y `determinarGanador`).
- Puntajes guardados en un arreglo por jugador, lo que deja preparado el juego para más de dos participantes.
- Minificación del script para el uso en producción.

## Estructura del proyecto

```
blackjack/
├── index.html
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── app.js          # código fuente
    │   ├── app.min.js      # versión minificada que carga el HTML
    │   └── underscore.js
    └── cartas/
```

## Cómo ejecutarlo

No necesita instalación. Descarga o clona el repositorio y abre `index.html` en tu navegador:

```bash
git clone https://github.com/bmartinezdev8/blackjackPracticaJs.git
```

## Desarrollo

El `index.html` carga `assets/js/app.min.js`. Si modificas `app.js`, hay que volver a generar la versión minificada para que los cambios se vean en el juego.

## Mejoras pendientes

- [ ] [Agregar apuestas con fichas]
- [ ] [Guardar el puntaje o el historial de partidas]
- [ ] [Mostrar un mensaje claro de quién ganó]
- [ ] [Hacer el diseño responsive para celular]

## Créditos

Proyecto desarrollado siguiendo el curso [JavaScript Moderno: Guía para dominar el lenguaje](https://www.udemy.com/user/fernando-herrera85/), de Fernando Herrera, en Udemy. La estructura base del juego y los recursos (como las imágenes de las cartas) pertenecen al material del curso.


## Autor

Benjamin Martinez ([@bmartinezdev8](https://github.com/bmartinezdev8))
