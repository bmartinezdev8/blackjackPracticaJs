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
- CSS3 y Bootstrap (para el diseño de los botones y la distribución)
- JavaScript (sin frameworks)
- Underscore.js (para barajar el mazo)

## Qué practiqué

- Manipulación del DOM: crear y agregar elementos (las cartas) y actualizar el puntaje en pantalla.
- Eventos: botones con `addEventListener`.
- Funciones, arreglos y control de flujo para armar el mazo, repartir cartas y calcular puntos.
- Organización de un proyecto pequeño en archivos separados (HTML, CSS y JS).

## Estructura del proyecto

```
blackjack/
├── index.html
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── app.js
    │   └── underscore.js
    └── cartas/
```

## Cómo ejecutarlo

No necesita instalación. Descarga o clona el repositorio y abre `index.html` en tu navegador:

```bash
git clone https://github.com/bmartinezdev8/blackjackPracticaJs.git
```

## Mejoras pendientes

- [ ] [Agregar apuestas con fichas]
- [ ] [Guardar el puntaje o el historial de partidas]
- [ ] [Mostrar un mensaje claro de quién ganó]
- [ ] [Hacer el diseño responsive para celular]

## Créditos

Proyecto desarrollado siguiendo el curso [JavaScript Moderno: Guía para dominar el lenguaje](https://www.udemy.com/user/fernando-herrera85/), de Fernando Herrera, en Udemy. La estructura base del juego y los recursos (como las imágenes de las cartas) pertenecen al material del curso.


## Autor

Benjamin Martinez ([@bmartinezdev8](https://github.com/bmartinezdev8))
