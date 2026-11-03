# Blackjack ♠️♥️

Juego de cartas Blackjack (21) desarrollado con **HTML, CSS y JavaScript**, que se ejecuta directamente en el navegador.

El proyecto comenzó como una práctica del curso **JavaScript Moderno**, de Fernando Herrera (DevTalles, en Udemy), para aprender manipulación del DOM, eventos y organización del código mediante módulos.

Posteriormente amplié el proyecto incorporando un diseño responsivo, historial de partidas, estadísticas, validación de datos y mejoras de accesibilidad.

## Cómo se juega

1. Pulsa **Nuevo juego** para barajar el mazo y comenzar una nueva partida.
2. Pulsa **Pedir carta** para agregar una carta a tu mano.
3. Si superas los **21 puntos**, pierdes automáticamente.
4. Pulsa **Detener** cuando quieras finalizar tu turno. La computadora comenzará a jugar.
5. Gana quien consiga la mejor puntuación sin superar los 21 puntos. También puede producirse un empate.

**Valores de las cartas:**

- Las cartas del 2 al 10 valen su número.
- Las figuras (J, Q, K) valen 10 puntos.
- El As puede valer **11 o 1 punto**, dependiendo de cuál sea el valor más conveniente para la mano.

La computadora solicita cartas hasta alcanzar o superar la puntuación del jugador, sin sobrepasar voluntariamente el límite de 21 puntos.

## Funcionalidades

- Mazo de 52 cartas barajado aleatoriamente.
- Cálculo automático de puntuaciones.
- Ajuste del valor de los ases para evitar superar 21 cuando sea posible.
- Detección de victorias, derrotas y empates.
- Botones para pedir cartas, detener el turno y comenzar una nueva partida.
- Diseño responsivo para computadoras, tablets y celulares.
- Interfaz visual con cartas, fichas decorativas y un favicon personalizado.
- Historial de partidas almacenado mediante `localStorage`.
- Estadísticas de partidas jugadas, victorias, derrotas, empates y porcentaje de victorias.
- Historial desplegable con los resultados de cada partida.
- Opción para borrar el historial mediante una confirmación.
- Validación de datos almacenados para controlar historiales corruptos o registros inválidos.
- Precarga de imagenes: implementación de una función asíncrona que carga anticipadamente las 52 cartas del mazo, permitiendo que el navegador reutilice las imágenes y reduciendo los tiempos de espera durante las partidas.

## Tecnologías

- **HTML5:** estructura semántica de la aplicación.
- **CSS3:** estilos, animaciones y adaptación a diferentes pantallas.
- **Bootstrap 5:** componentes y sistema de cuadrícula.
- **JavaScript:** lógica del juego, eventos, DOM y almacenamiento local.
- **Vite:** servidor de desarrollo y compilación de producción.
- **Underscore.js:** mezcla aleatoria de las cartas del mazo.
- **Git y GitHub:** control de versiones y gestión de ramas.

## Qué practiqué

### JavaScript y organización del código

- Manipulación del DOM mediante la creación y actualización de elementos HTML.
- Manejo de eventos con `addEventListener`.
- Uso de módulos ES mediante `import` y `export`.
- Separación de responsabilidades en funciones pequeñas y reutilizables.
- Encapsulación del estado del juego dentro de `iniciarJuego()`.
- Uso de arreglos y métodos como `reduce()`, `filter()` e `includes()`.
- Uso de constantes como `BLACKJACK` para evitar valores repetidos.
- Documentación de funciones mediante JSDoc.

### Almacenamiento y validación

- Persistencia de información mediante `localStorage`.
- Conversión de datos con `JSON.stringify()` y `JSON.parse()`.
- Manejo de errores mediante `try...catch`.
- Validación de estructuras con `Array.isArray()`.
- Validación de valores numéricos mediante `Number.isFinite()`.
- Filtrado de registros incorrectos sin afectar a los válidos.
- Cálculo de estadísticas a partir del historial de partidas.

### Diseño y desarrollo

- Diseño responsivo utilizando CSS y media queries.
- Organización de elementos con Flexbox, Grid y Bootstrap.
- Mejoras básicas de accesibilidad mediante textos alternativos para las imágenes.
- Uso de Git mediante ramas, commits y fusión de cambios.
- Compilación y pruebas de producción con Vite.

## Estructura del proyecto

```text
blackjackPracticaJs/
├── index.html
├── main.js
├── style.css
├── vite.config.js
├── package.json
├── package-lock.json
├── public/
│   └── assets/
│       ├── cartas/
│       └── img/
│           ├── fichas-jugador.png
│           ├── fichas-computadora.png
│           └── icon_as.jpg
└── src/
    └── blackjack/
        ├── index.js
        └── usecases/
            ├── calcular-estadisticas.js
            ├── calcular-puntos.js
            ├── constantes.js
            ├── crear-carta-html.js
            ├── crear-deck.js
            ├── determinar-ganador.js
            ├── finalizar-partida.js
            ├── guardar-partida.js
            ├── index.js
            ├── limpiar-historial.js
            ├── mostrar-estadisticas.js
            ├── obtener-historial.js
            ├── pedir-carta.js
            ├── turno-computadora.js
            └── valor-carta.js
```

## Cómo ejecutarlo localmente

Necesitas tener [Node.js](https://nodejs.org/) instalado.

Clona el repositorio:

```bash
git clone https://github.com/bmartinezdev8/blackjackPracticaJs.git
```

Entra en la carpeta del proyecto:

```bash
cd blackjackPracticaJs
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre en el navegador la dirección que indique Vite.

Para generar la versión de producción:

```bash
npm run build
```

Para probar la compilación:

```bash
npm run preview
```

## Historial y estadísticas

Las partidas se guardan en el almacenamiento local del navegador mediante `localStorage`.

Cada registro contiene:

- Fecha de la partida.
- Puntuación del jugador.
- Puntuación de la computadora.
- Resultado: victoria, derrota o empate.

Las estadísticas se actualizan automáticamente al finalizar cada partida.

**Importante:** los datos se almacenan localmente. No se sincronizan entre dispositivos o navegadores y pueden desaparecer si se borran los datos del sitio.

## Auditoría y pruebas

Después de implementar las mejoras, realicé una revisión del código con apoyo de **ChatGPT**, enfocada en la lógica del juego, la seguridad del almacenamiento, el manejo de errores, la accesibilidad y la preparación para producción.

Se realizaron las siguientes comprobaciones:

- **7 pruebas funcionales:** comportamiento de los botones, puntuaciones, finalización de partidas, reinicio, historial y borrado de registros.
- **3 pruebas de validación del historial:** JSON corrupto, JSON con estructura incorrecta y registros válidos mezclados con registros inválidos.
- **Pruebas de compilación:** ejecución de `npm run build` y comprobación del juego mediante `npm run preview`.

Las pruebas realizadas finalizaron correctamente. Estas comprobaciones mejoran la confiabilidad del proyecto, aunque no sustituyen una auditoría de seguridad profesional.

## Créditos

Proyecto desarrollado inicialmente siguiendo el curso [JavaScript Moderno: Guía para dominar el lenguaje](https://www.udemy.com/user/fernando-herrera85/), de **Fernando Herrera**, en Udemy.

La estructura inicial del juego y recursos como las imágenes de las cartas provienen del material del curso.

Las funcionalidades adicionales, el diseño responsivo, las estadísticas, el historial de partidas y las mejoras posteriores fueron desarrolladas como parte de mi práctica personal, con apoyo de ChatGPT durante la revisión y las pruebas del código.

## Autor

Benjamin Martinez ([@bmartinezdev8](https://github.com/bmartinezdev8))
