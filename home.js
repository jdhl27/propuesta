const urlParams = new URLSearchParams(window.location.search);

window.onload = function () {
  const myParam = urlParams.get('question');

  if (myParam) {
    const pregunta = document.getElementById('question_html');
    pregunta.innerHTML = "¿" + myParam + "?";
  } else {
    mostrarModal();
  }

  var screen_windth = window.screen.width;
  var screen_height = window.screen.height;


  var boton = document.getElementById("boton");
  boton.onmouseover = function (e) {
    var win = Math.floor(Math.random() * ((screen_windth - 300) - 20)) + 20;
    var hei = Math.floor(Math.random() * ((screen_height - 300) - 20)) + 20;

    boton.style.left = 0;
    boton.style.top = 0;

    boton.style.top = hei + "px";

    boton.style.left = win + "px";

  };
}

function mostrarModal() {
  swal("Ingrese la pregunta", {
    content: "input",
    closeOnClickOutside: false
  })
    .then((value) => {
      if (value) {
        const pregunta = document.getElementById('question_html');
        pregunta.innerHTML = "¿" + value + "?";
        insertParam("question", value);
      }
    });
}

function insertParam(key, value) {
  key = encodeURIComponent(key); value = encodeURIComponent(value);

  var s = document.location.search;
  var kvp = key + "=" + value;

  var r = new RegExp("(&|\\?)" + key + "=[^\&]*");

  s = s.replace(r, "$1" + kvp);

  if (!RegExp.$1) { s += (s.length > 0 ? '&' : '?') + kvp; };
  //again, do what you will here
  document.location.search = s;

}

function aceptar() {
  var rocket = document.getElementById("rocket");

  // Posición inicial
  rocket.style.top = "67vh";
  rocket.style.left = "60vh";

  // Animación hacia arriba en diagonal
  var startX = 65; // Valor inicial en vh
  var startY = 67; // Valor inicial en vh
  var endX = 77; // Valor final en vw
  var endY = 5; // Valor final en vw
  var duration = 2000; // Duración en milisegundos

  var startTime = null;

  function animateRocket(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = (timestamp - startTime) / duration;

    if (progress < 1) {
      var x = startX + (endX - startX) * progress;
      var y = startY + (endY - startY) * progress;
      rocket.style.left = x + "vw";
      rocket.style.top = y + "vh";
      requestAnimationFrame(animateRocket);
    }
  }

  requestAnimationFrame(animateRocket);

  // Mostrar mensaje
  swal({
    title: "¡Sabía que dirías que sí!",
    icon: "./images/boda.png",
    text: "...",
  });

  // Volver a la posición original después de 6 segundos
  setTimeout(function () {
    rocket.style.top = "67vh";
    rocket.style.left = "65vh";
    swal.close();
  }, 6000);
}

function copyTextToClipboard(ext) {
  var text = window.location.href;
  console.log(text);
  navigator.clipboard.writeText(text).then(function () {
    swal("¡Copiado!", "Compartelo con quien quieras", "success");
  }, function (err) {
    swal('¡Lo siento!', 'A ocurrido un error mientras intenté copiar la URL.' +
      'Copiala manualmente y compartelo con quien quieras', 'error')
  });
}
