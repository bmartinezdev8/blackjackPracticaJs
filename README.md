# Blackjack

Juego de cartas Blackjack (21) que corre en el navegador, hecho con HTML, CSS y JavaScript. Es un proyecto de práctica del curso **JavaScript Moderno** de Fernando Herrera (DevTalles, en Udemy), donde trabajé la manipulación del DOM y la organización del código en módulos.

## Cómo se juega

1. Pulsa **Nuevo juego** para barajar el mazo y empezar una partida.
2. Pulsa **Pedir carta** para sacar una carta. Si te pasas de 21, pierdes.
3. Pulsa **Detener** cuando quieras plantarte. Entonces juega la computadora.
4. Gana quien se acerque más a 21 sin pasarse.

Valores de las cartas: las figuras (J, Q, K) valen 10, el As vale 11 y las demás valen su número.

## Tecnologías

- HTML5
- CSS3 y Bootstrap
- JavaScript (módulos ES, sin frameworks)
- Vite (servidor de desarrollo y build)
- Underscore.js (para barajar el mazo)

## Qué practiqué

- Manipulación del DOM: crear y agregar elementos (las cartas) y actualizar el puntaje en pantalla.
- Eventos: botones con `addEventListener`.
- Módulos ES: cada función vive en su propio archivo dentro de `usecases` y se exporta desde un `index.js`.
- Encapsulación: todo el juego está dentro de `iniciarJuego()`, sin variables globales.
- Refactorización en funciones pequeñas y reutilizables (`crearDeck`, `pedirCarta`, `valorCarta`, `crearCartaHTML`, `turnoComputadora` y `determinarGanador`), que reciben sus datos por argumentos.
- Constantes con nombre (`BLACKJACK`) en vez de números sueltos.
- Documentación del código con JSDoc.
- Flujo de trabajo con Git: ramas, commits por paso y pull requests.

## Estructura del proyecto

```
blackjackPracticaJs/
├── index.html
├── main.js                  # punto de entrada, llama a iniciarJuego()
├── style.css
├── vite.config.js
├── public/
│   └── assets/cartas/       # imágenes de las cartas
└── src/
    └── blackjack/
        ├── index.js         # iniciarJuego()
        └── usecases/        # funciones del juego
            ├── constantes.js
            ├── crear-carta-html.js
            ├── crear-deck.js
            ├── determinar-ganador.js
            ├── pedir-carta.js
            ├── turno-computadora.js
            ├── valor-carta.js
            └── index.js
```

## Cómo ejecutarlo

Necesitas tener [Node.js](https://nodejs.org) instalado.

```bash
git clone https://github.com/bmartinezdev8/blackjackPracticaJs.git
cd blackjackPracticaJs
npm install
npm run dev
```

Luego abre en el navegador la dirección que muestra la terminal (termina en `/blackjackPracticaJs/`).

Para generar la versión de producción:

```bash
npm run build
```

## Mejoras pendientes

- [ ] Guardar el historial de partidas con `localStorage`
- [ ] Hacer el diseño responsive para celular
- [ ] Publicar el juego en línea

## Créditos

Proyecto desarrollado siguiendo el curso [JavaScript Moderno: Guía para dominar el lenguaje](https://www.udemy.com/user/fernando-herrera85/), de Fernando Herrera, en Udemy. La estructura base del juego y los recursos (como las imágenes de las cartas) pertenecen al material del curso.

## Autor

Benjamin Martinez ([@bmartinezdev8](https://github.com/bmartinezdev8))