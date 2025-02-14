// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Regalame tu corazon", time: 27 },
  { text: "Dejame entrar a ese lugar", time: 30 },
  { text: "Donde nacen las flores", time: 36 },
  { text: "Donde nace el amor", time: 40 },
  { text: "Entregame tus labios rotos", time: 44 },
  { text: "Los quiero besar, los quiero curar", time: 47 },
  { text: "Los voy a cuidar", time: 53},
  { text: "Con todo mi amor", time: 58 },
  { text: "Es raro el amor", time: 64 },
  { text: "Es raro el amor", time: 69 },
  { text: "Que se te aparece cuando menos piensas", time: 73 },
  { text: "Es raro el amor", time: 78 },
  { text: "Es raro el amor", time: 82 },
  { text: "No importa la distancia, ni el tiempo, ni la edad", time: 86 },
  { text: "Moja el desierto de mi alma", time: 119 },
  { text: "Con tu mirar, con tu tierna voz", time: 123 },
  { text: "Con tu mano en mi mano", time: 128 },
  { text: "Por la eternidad", time: 133 },
  { text: "Y entrégame esos labios rotos", time: 136 },
  { text: "Los quiero besar, los quiero curar", time: 140 },
  { text: "Los voy a cuidar", time: 146 },
  { text: "Con todo mi amor", time: 150 },
  { text: "Es raro el amor", time: 156 },
  { text: "Es raro el amor", time: 160 },
  { text: "Que se te aparece cuando menos piensas", time: 165 },
  { text: "Es raro el amor", time: 170 },
  { text: "Es raro el amor", time: 175 },
  { text: "No importa la distancia, ni el tiempo, ni la edad", time: 179},
  { text: "Amor, amor", time: 209},
  { text: "Amor, amor", time: 211},
  { text: "Amor, amor", time: 213},
  { text: "Amor, amor", time: 215},
  { text: "Amor, amor", time: 217},
  { text: "Amor, amor", time: 219},
  { text: "Gracias por todo TQM 💙 ", time: 221},
  
  
  

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3.5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 10000);