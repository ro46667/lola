/* =========================================================
   1. DATOS: las 10 preguntas del quiz
   -----------------------------------------------------------
   Cada pregunta es un objeto con:
   - question: enunciado
   - code: bloque de código C++ (string vacío si no aplica)
   - options: arreglo de 4 textos de respuesta
   - correct: índice (0 = A, 1 = B, 2 = C, 3 = D) de la opción correcta
   - explanation: texto que se muestra después de responder
   ========================================================= */
const questions = [
  {
    question: "En C++, ¿qué significa que una función tenga el parámetro:",
    code: "void funcion(const string& texto)",
    options: [
      "Recibe una copia modificable del texto.",
      "Recibe el texto por referencia y no permite modificarlo desde la función.",
      "Convierte automáticamente el texto en una constante global.",
      "Recibe únicamente una dirección de memoria de tipo char."
    ],
    correct: 1,
    explanation:
      "El símbolo & significa que el parámetro se recibe por referencia, evitando copiar el objeto. " +
      "const significa que la función no puede modificar el objeto mediante esa referencia. " +
      "Por lo tanto, const string& texto permite trabajar con el string original sin copiarlo, pero impide modificarlo desde ese parámetro."
  },
  {
    question: "Observa la siguiente expresión. ¿Cuál es su objetivo principal en un cifrado César?",
    code: "int claveNormalizada = ((clave % 26) + 26) % 26;",
    options: [
      "Garantizar una clave entre 0 y 25.",
      "Convertir cualquier clave en un número entre 1 y 26.",
      "Eliminar todos los espacios del texto.",
      "Convertir la clave directamente en un carácter ASCII."
    ],
    correct: 0,
    explanation:
      "El alfabeto tiene 26 posiciones. La expresión normaliza la clave para obtener un valor entre 0 y 25, " +
      "incluso si clave es negativa o muy grande."
  },
  {
    question: "Observa el siguiente ciclo. ¿Qué está recorriendo normalmente?",
    code: "for (size_t i = 0; i < resultado.size(); i++)",
    options: [
      "Los caracteres de un string, utilizando i como índice.",
      "Solamente los números pares almacenados en el string.",
      "Las funciones declaradas dentro del programa.",
      "Las posiciones desde 1 hasta el tamaño incluido."
    ],
    correct: 0,
    explanation:
      "Si resultado es un string, resultado.size() indica cuántos caracteres contiene. " +
      "i comienza en 0 y avanza hasta llegar al último índice válido."
  },
  {
    question:
      "¿Cuál es la diferencia principal entre pasar una variable a una función por valor y pasarla por referencia usando &?",
    code: "",
    options: [
      "Por valor trabaja con una copia; por referencia trabaja con la variable original.",
      "Por valor siempre modifica el original; por referencia nunca lo modifica.",
      "No existe ninguna diferencia en C++.",
      "La referencia solo sirve para variables de tipo int."
    ],
    correct: 0,
    explanation:
      "Por valor (void funcion(int x)) la función recibe una copia. " +
      "Por referencia (void funcion(int& x)) la función trabaja directamente con la variable original."
  },
  {
    question: "Observa la siguiente asignación. Si posteriormente modificamos resultado, ¿qué ocurre con texto?",
    code: "string resultado = texto;",
    options: [
      "También se modifica automáticamente.",
      "No se modifica porque resultado contiene una copia.",
      "Se elimina inmediatamente de memoria.",
      "Se convierte automáticamente en una referencia."
    ],
    correct: 1,
    explanation:
      "La asignación string resultado = texto; crea una copia del contenido. " +
      "Por lo tanto, modificar resultado no modifica directamente texto."
  },
  {
    question:
      "Tenemos un parámetro const string& texto y dentro de la función intentamos modificar su primer carácter. ¿Qué ocurre?",
    code: "void funcion(const string& texto) {\n    texto[0] = 'A';\n}",
    options: [
      "El primer carácter cambia normalmente.",
      "El programa modifica solamente una copia temporal.",
      "El compilador rechaza esa modificación.",
      "El string se convierte automáticamente en mutable."
    ],
    correct: 2,
    explanation:
      "const impide modificar el objeto mediante esa referencia. Por eso texto[0] = 'A'; no es válido y el compilador marca error."
  },
  {
    question:
      "¿Por qué es conveniente separar un programa en funciones como cifrar() y descifrar() en lugar de colocar toda la lógica dentro de main()?",
    code: "",
    options: [
      "Permite organizar y reutilizar partes específicas de la lógica.",
      "Hace que el programa no necesite compilar.",
      "Elimina la necesidad de utilizar variables.",
      "Hace que todas las variables sean globales."
    ],
    correct: 0,
    explanation:
      "Las funciones permiten dividir el problema en partes más pequeñas. Esto facilita la organización, reutilización, mantenimiento, pruebas y lectura del código."
  },
  {
    question:
      "Observa el ciclo. ¿Por qué normalmente usamos i < resultado.size() y no i <= resultado.size() cuando queremos acceder a resultado[i]?",
    code: "for (size_t i = 0; i < resultado.size(); i++)",
    options: [
      "Porque la última posición válida es size() - 1.",
      "Porque C++ comienza todos los índices en 1.",
      "Porque size() siempre devuelve 0.",
      "Porque <= solamente funciona con double."
    ],
    correct: 0,
    explanation:
      "Si un string tiene 5 caracteres, sus índices son 0,1,2,3,4 y el tamaño es 5. Por eso resultado[5] estaría fuera del rango válido."
  },
  {
    question: "Observa el siguiente código. Después de ejecutar cambiar(x), ¿qué valor tiene la variable original?",
    code: "int x = 5;\n\nvoid cambiar(int& x)\n{\n    x = 10;\n}\n\ncambiar(x);",
    options: [
      "5",
      "10",
      "0",
      "No compila porque una referencia no puede recibir un int."
    ],
    correct: 1,
    explanation:
      "El parámetro int& x es una referencia a la variable original. Por lo tanto, x = 10; modifica directamente la variable original."
  },
  {
    question: "En un programa C++ desarrollado en Visual Studio, ¿cuál es la función principal de main()?",
    code: "int main() {\n    // ...\n    return 0;\n}",
    options: [
      "Es el punto de entrada principal de la ejecución del programa.",
      "Es obligatoria para declarar todos los string.",
      "Convierte automáticamente C++ en Java.",
      "Es una función exclusiva para trabajar con ciclos for."
    ],
    correct: 0,
    explanation: "main() es el punto de entrada principal de un programa C++ ejecutable. La ejecución comienza allí."
  }
];

/* =========================================================
   2. ESTADO DE LA APLICACIÓN
   -----------------------------------------------------------
   Toda la información "viva" del quiz se guarda aquí.
   Nada se guarda en el HTML: el HTML solo refleja este estado.
   ========================================================= */
const state = {
  currentIndex: 0,       // índice de la pregunta actual (0 a 9)
  score: 0,               // respuestas correctas acumuladas
  selectedOption: null,   // índice de la opción que el usuario seleccionó
  isAnswerChecked: false, // true una vez se pulsó "COMPROBAR RESPUESTA"
  userAnswers: []          // historial: { selected, correct, isCorrect } por pregunta
};

/* =========================================================
   3. REFERENCIAS AL DOM
   ========================================================= */
const screens = {
  start: document.getElementById("screen-start"),
  quiz: document.getElementById("screen-quiz"),
  results: document.getElementById("screen-results"),
  review: document.getElementById("screen-review")
};

const el = {
  btnStart: document.getElementById("btn-start"),
  questionCounter: document.getElementById("question-counter"),
  progressBarFill: document.getElementById("progress-bar-fill"),
  questionTag: document.getElementById("question-tag"),
  questionText: document.getElementById("question-text"),
  questionCode: document.getElementById("question-code"),
  optionsContainer: document.getElementById("options-container"),
  feedbackBox: document.getElementById("feedback-box"),
  feedbackTitle: document.getElementById("feedback-title"),
  feedbackExplanation: document.getElementById("feedback-explanation"),
  btnCheck: document.getElementById("btn-check"),
  btnNext: document.getElementById("btn-next"),
  scoreFraction: document.getElementById("score-fraction"),
  scorePercent: document.getElementById("score-percent"),
  resultsMessage: document.getElementById("results-message"),
  statCorrect: document.getElementById("stat-correct"),
  statIncorrect: document.getElementById("stat-incorrect"),
  statGrade: document.getElementById("stat-grade"),
  btnReview: document.getElementById("btn-review"),
  btnRestart: document.getElementById("btn-restart"),
  btnRestart2: document.getElementById("btn-restart-2"),
  btnBackResults: document.getElementById("btn-back-results"),
  reviewList: document.getElementById("review-list")
};

const OPTION_LETTERS = ["A", "B", "C", "D"];

/* =========================================================
   4. NAVEGACIÓN ENTRE PANTALLAS
   ========================================================= */
function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[name].classList.add("active");
}

/* =========================================================
   5. INICIAR EL QUIZ
   ========================================================= */
function startQuiz() {
  state.currentIndex = 0;
  state.score = 0;
  state.userAnswers = [];
  showScreen("quiz");
  loadQuestion();
}

/* =========================================================
   6. CARGAR UNA PREGUNTA EN PANTALLA
   ========================================================= */
function loadQuestion() {
  // Reiniciar estado de la pregunta actual
  state.selectedOption = null;
  state.isAnswerChecked = false;

  const q = questions[state.currentIndex];
  const questionNumber = state.currentIndex + 1;

  // Encabezado / progreso
  el.questionCounter.textContent = `Pregunta ${questionNumber} de ${questions.length}`;
  el.progressBarFill.style.width = `${(questionNumber / questions.length) * 100}%`;

  // Contenido de la pregunta
  el.questionTag.textContent = `PREGUNTA ${questionNumber}`;
  el.questionText.textContent = q.question;

  if (q.code) {
    el.questionCode.hidden = false;
    el.questionCode.querySelector("code").textContent = q.code;
  } else {
    el.questionCode.hidden = true;
  }

  // Generar las opciones dinámicamente
  el.optionsContainer.innerHTML = "";
  q.options.forEach((optionText, index) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.type = "button";
    button.innerHTML = `
      <span class="option-letter">${OPTION_LETTERS[index]}</span>
      <span class="option-text">${optionText}</span>
    `;
    button.addEventListener("click", () => selectAnswer(index));
    el.optionsContainer.appendChild(button);
  });

  // Reiniciar feedback y botones
  el.feedbackBox.hidden = true;
  el.feedbackBox.className = "feedback-box";
  el.btnCheck.hidden = false;
  el.btnCheck.disabled = true;
  el.btnNext.hidden = true;
}

/* =========================================================
   7. SELECCIONAR UNA RESPUESTA
   ========================================================= */
function selectAnswer(index) {
  if (state.isAnswerChecked) return; // bloqueado tras comprobar

  state.selectedOption = index;

  const buttons = el.optionsContainer.querySelectorAll(".option-btn");
  buttons.forEach((btn, i) => {
    btn.classList.toggle("selected", i === index);
  });

  el.btnCheck.disabled = false;
}

/* =========================================================
   8. COMPROBAR LA RESPUESTA SELECCIONADA
   ========================================================= */
function checkAnswer() {
  if (state.selectedOption === null || state.isAnswerChecked) return;

  state.isAnswerChecked = true;
  const q = questions[state.currentIndex];
  const isCorrect = state.selectedOption === q.correct;

  if (isCorrect) {
    state.score++;
  }

  // Guardar la respuesta en el historial para la revisión posterior
  state.userAnswers.push({
    selected: state.selectedOption,
    correct: q.correct,
    isCorrect
  });

  // Marcar visualmente las opciones y bloquearlas
  const buttons = el.optionsContainer.querySelectorAll(".option-btn");
  buttons.forEach((btn, i) => {
    btn.disabled = true;

    if (i === q.correct) {
      btn.classList.add("correct");
    }
    if (i === state.selectedOption && !isCorrect) {
      btn.classList.add("incorrect");
    }
  });

  // Mostrar el bloque de retroalimentación con estilo del "profesor exigente"
  el.feedbackBox.hidden = false;
  if (isCorrect) {
    el.feedbackBox.classList.add("state-correct");
    el.feedbackTitle.textContent = pickCorrectPhrase();
  } else {
    el.feedbackBox.classList.add("state-incorrect");
    el.feedbackTitle.textContent = pickIncorrectPhrase();
  }
  el.feedbackExplanation.textContent = q.explanation;

  // Alternar botones de acción
  el.btnCheck.hidden = true;
  el.btnNext.hidden = false;
}

function pickCorrectPhrase() {
  const phrases = ["Correcto. Bien razonado.", "Correcto. Vas por buen camino."];
  return phrases[Math.floor(Math.random() * phrases.length)];
}

function pickIncorrectPhrase() {
  const phrases = [
    "Incorrecto. Revisa el concepto antes de continuar.",
    "No exactamente. Vuelve a leer el código con calma."
  ];
  return phrases[Math.floor(Math.random() * phrases.length)];
}

/* =========================================================
   9. AVANZAR A LA SIGUIENTE PREGUNTA
   ========================================================= */
function nextQuestion() {
  state.currentIndex++;

  if (state.currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

/* =========================================================
   10. MOSTRAR RESULTADOS FINALES
   ========================================================= */
function showResults() {
  const total = questions.length;
  const correct = state.score;
  const incorrect = total - correct;
  const percent = Math.round((correct / total) * 100);
  const grade = ((correct / total) * 5).toFixed(1);

  el.scoreFraction.textContent = `${correct} / ${total}`;
  el.scorePercent.textContent = `${percent}%`;
  el.statCorrect.textContent = correct;
  el.statIncorrect.textContent = incorrect;
  el.statGrade.textContent = grade;
  el.resultsMessage.textContent = getResultMessage(correct);

  showScreen("results");
}

function getResultMessage(correct) {
  if (correct <= 3) {
    return "Necesitas repasar. No te limites a memorizar código: entiende qué está haciendo.";
  } else if (correct <= 5) {
    return "Vas avanzando, pero todavía tienes conceptos fundamentales por reforzar.";
  } else if (correct <= 7) {
    return "Buen trabajo. Tienes una base decente, pero todavía hay conceptos que debes afianzar.";
  } else if (correct <= 9) {
    return "Muy bien. Tu comprensión de C++ es bastante sólida.";
  } else {
    return "Perfecto. Ahora sí, demostraste que entiendes los conceptos y no solamente los memorizaste.";
  }
}

/* =========================================================
   11. REVISIÓN DE RESPUESTAS
   ========================================================= */
function showReview() {
  el.reviewList.innerHTML = "";

  questions.forEach((q, index) => {
    const answer = state.userAnswers[index];
    const isCorrect = answer.isCorrect;

    const item = document.createElement("div");
    item.className = `review-item ${isCorrect ? "is-correct" : "is-incorrect"}`;

    item.innerHTML = `
      <div class="review-item-header">
        <span>Pregunta ${index + 1}</span>
        <span class="badge ${isCorrect ? "is-correct" : "is-incorrect"}">
          ${isCorrect ? "✔ Correcta" : "✘ Incorrecta"}
        </span>
      </div>
      <p class="review-item-question">${q.question}</p>
      <div class="review-answers">
        <span>Tu respuesta: <strong>${OPTION_LETTERS[answer.selected]}</strong></span>
        <span>Respuesta correcta: <strong>${OPTION_LETTERS[answer.correct]}</strong></span>
      </div>
      <p class="review-item-explanation">${q.explanation}</p>
    `;

    el.reviewList.appendChild(item);
  });

  showScreen("review");
}

/* =========================================================
   12. REINICIAR EL QUIZ
   ========================================================= */
function restartQuiz() {
  state.currentIndex = 0;
  state.score = 0;
  state.selectedOption = null;
  state.isAnswerChecked = false;
  state.userAnswers = [];
  showScreen("start");
}

/* =========================================================
   13. EVENTOS PRINCIPALES
   ========================================================= */
el.btnStart.addEventListener("click", startQuiz);
el.btnCheck.addEventListener("click", checkAnswer);
el.btnNext.addEventListener("click", nextQuestion);
el.btnReview.addEventListener("click", showReview);
el.btnRestart.addEventListener("click", restartQuiz);
el.btnRestart2.addEventListener("click", restartQuiz);
el.btnBackResults.addEventListener("click", () => showScreen("results"));
