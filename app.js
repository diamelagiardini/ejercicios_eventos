const botonVerde = document.getElementById("respuestaCorrecta")

const cartel = document.getElementById("cartelDeRespuestaCorrecta")

const respuestasIncorrectas = document.getElementsByClassName("respuestaIncorrecta") 

const ponerTodosLosBotonesEnBlanco = document.getElementById("borrar")
console.log(respuestasIncorrectas)

const pintarBotonVerdeYMostrarCartel = () => {
    botonVerde.style.backgroundColor = "green"
    cartel.textContent = "¡Respuesta correcta!"
}

botonVerde.onclick = pintarBotonVerdeYMostrarCartel

const pintarRespuestasIncorrectas = () => {
    respuestasIncorrectas[0].style.backgroundColor="red"
    respuestasIncorrectas[1].style.backgroundColor="red"
    botonVerde.style.backgroundColor="green"
    cartel.textContent = "¡Respuesta equivocada!"
}

respuestasIncorrectas[0].onclick = pintarRespuestasIncorrectas
respuestasIncorrectas[1].onclick = pintarRespuestasIncorrectas

const botonesSinColor = () => {
    botonVerde.style.backgroundColor="white"
    respuestasIncorrectas[0].style.backgroundColor="white"
    respuestasIncorrectas[1].style.backgroundColor="white"
    cartel.textContent = " "
}

ponerTodosLosBotonesEnBlanco.onclick = botonesSinColor