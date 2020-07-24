window.onload=function()
{
  var question;
  swal("Ingrese la pregunta", {
    content: "input",
    closeOnClickOutside: false,
  })
  .then((value) => {
    question = value;
    const pregunta = document.getElementById('question_html');
    pregunta.innerHTML = "¿" + question + "?";
  });


  var screen_windth= window.screen.width;
  var screen_height= window.screen.height;


  var boton = document.getElementById("boton");
  boton.onmouseover = function(e) {
    var win = Math.floor(Math.random() * ((screen_windth - 300) - 20 )) + 20;
    var hei = Math.floor(Math.random() * ((screen_height - 300) - 20 )) + 20;
    
    boton.style.left = 0;
    boton.style.top = 0;
    
    boton.style.top = hei + "px";
    
    boton.style.left = win + "px";
      
  };
}


  
function aceptar() {
  var rocket = document.getElementById("rocket");

  rocket.style.top = "5vw";
  rocket.style.left = "77vw";
    
  
  swal({
    title: "¡Sabía que dirías que sí!",
    icon: "./images/boda.png",
    text: "Llegué a la luna..."
  });

  setTimeout(function(){ 
    rocket.style.top = "67vh";
    rocket.style.left = "65vh";
    boton.style.top = "41vh";
    boton.style.left = "52vw";
  }, 6000);
}