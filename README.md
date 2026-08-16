# Quiz de Programación II — C++

Mini quiz interactivo de 10 preguntas para repasar conceptos de **Programación II** en C++ (segundo semestre de Ingeniería): funciones, parámetros, referencias, `const`, `string`, ciclos `for`, índices y lógica básica.

## Tecnologías

- **HTML5** — estructura de las 4 pantallas (inicio, quiz, resultados, revisión).
- **CSS3** — diseño moderno tipo "IDE + plataforma educativa", sin frameworks.
- **JavaScript vanilla** — toda la lógica del quiz, sin librerías externas.

No usa backend, base de datos, APIs externas ni conexión a internet. Funciona 100% en el navegador.

## Estructura de carpetas

```text
quiz-programacion/
│
├── index.html   → estructura de las pantallas
├── style.css    → estilos visuales
├── script.js    → lógica del quiz (preguntas, estado, eventos)
└── README.md    → este archivo
```

## Cómo ejecutarlo en Visual Studio Code

1. Abre la carpeta `quiz-programacion` en Visual Studio Code (`File > Open Folder...`).
2. Instala la extensión **Live Server** (de Ritwick Dey) desde el marketplace de extensiones, si no la tienes.
3. Haz clic derecho sobre `index.html` y selecciona **"Open with Live Server"**.
4. Se abrirá automáticamente en tu navegador en una dirección como `http://127.0.0.1:5500`.

También puedes abrir `index.html` directamente con doble clic desde el explorador de archivos; funcionará igual, solo que sin recarga automática al guardar cambios.

## Cómo agregar una nueva pregunta

Todas las preguntas viven en el arreglo `questions` al inicio de `script.js`. Para agregar una pregunta nueva, añade un objeto con esta forma al final del arreglo:

```javascript
{
  question: "Enunciado de la pregunta",
  code: "código C++ opcional (usa '' si no aplica)",
  options: [
    "Opción A",
    "Opción B",
    "Opción C",
    "Opción D"
  ],
  correct: 1, // índice de la opción correcta (0 = A, 1 = B, 2 = C, 3 = D)
  explanation: "Texto que se muestra al responder, explicando el concepto"
}
```

Si agregas más de 10 preguntas, la barra de progreso y el contador se ajustan automáticamente porque se calculan a partir de `questions.length`. Si cambias el número total de preguntas, recuerda que la nota sobre 5 se calcula como `correctas / total * 5`, así que también se ajusta sola.

## Cómo modificar una pregunta existente

Busca el objeto correspondiente dentro del arreglo `questions` (puedes ubicarlo por el texto de `question`) y edita directamente sus campos: `question`, `code`, `options`, `correct` o `explanation`. No es necesario tocar el HTML ni el CSS: todo se genera dinámicamente desde JavaScript.

## Funcionalidades

- Pantalla de inicio con resumen del quiz.
- Barra de progreso y contador de preguntas.
- Selección de respuesta, botón "Comprobar respuesta" y bloqueo tras responder.
- Retroalimentación inmediata (correcto/incorrecto) con explicación.
- Pantalla de resultados con puntaje, porcentaje y nota sobre 5.0.
- Pantalla de revisión con el detalle de las 10 preguntas.
- Botón para repetir el quiz desde cero.
- Diseño responsive (computador, tablet y celular).
