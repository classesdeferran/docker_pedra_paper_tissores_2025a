// // Tareas para mis queridos alumnos:
// // 1) Incorpora los prompts y los alert donde corresponda
// // 2) Muestra los resultados en la página HTML 
// // 3) Haz que se puedan realizar más partidas
// // 4) Incorpora un recuento de victorias
// // 5) Comenta exhaustivamente el código

let nombreJugador = ""
let empates = 0
let victoriasHumano = 0
let victoriasPC = 0

let ponerNombrejugador = document.getElementById("nombreJugador")
ponerNombrejugador.onclick = function ponerNombre () {
    nombreJugador = prompt("Por favor, dime tu nombre")
    // ponerNombrejugador.textContent = nombreJugador
    ponerNombrejugador.innerHTML = `<p id="nuevoNombreJugador"> Buena suerte, ${nombreJugador} </p>`

}

function jugar() {

    let jugadaHumano = ""

    let opcionesDelJuego = document.getElementsByName("juego")
    // console.log(opcionesDelJuego);
    for (let i = 0; i < opcionesDelJuego.length; i++) {
        if (opcionesDelJuego[i].checked) {
            jugadaHumano = opcionesDelJuego[i].value
        }
    }

    // console.log("Has elegido ",jugadaHumano);

    if (jugadaHumano == 1 || jugadaHumano == 2 || jugadaHumano == 3) {


        let jugadaPC = Math.floor((Math.random() * 3) + 1)

        let mensajeJugadaPC

        switch (jugadaPC) {
            case 1:
                mensajeJugadaPC = '"piedra"'
                break
            case 2:
                mensajeJugadaPC = '"papel"'
                break
            default:
                mensajeJugadaPC = '"tijeras"'
        }
        alert("La jugada del PC es " + mensajeJugadaPC)


        // EMPATE -> cuando los dos jugadores hacen la misma jugada 
        // GANA EL HUMANO 
        // GANA EL PC == !GANA EL HUMANO

        let audioVictoria = document.getElementById("audioVictoria")
        let audioEmpate = document.getElementById("audioEmpate")
        let audioDerrota = document.getElementById("audioDerrota")

        if (jugadaHumano == jugadaPC) // empate
        {
            alert("¡Habeis empatado!")
            empates++
            audioEmpate.play()
        } else if (jugadaHumano == 1 && jugadaPC == 3) {
            alert(`¡ Has ganado ${nombreJugador} !`)
            victoriasHumano++
            audioVictoria.play()
        } else if (jugadaHumano == 2 && jugadaPC == 1) {
            alert(`¡ Has ganado ${nombreJugador} !`)
            victoriasHumano++
            audioVictoria.play()
        } else if (jugadaHumano == 3 && jugadaPC == 2) {
            alert(`¡ Has ganado ${nombreJugador} !`)
            victoriasHumano++
            audioVictoria.play()
        } else {
            alert(`¡ Has perdido ${nombreJugador} !`)
            victoriasPC++
            audioDerrota.play()
        }
    }

    if (nombreJugador.length == 0) {
        nombreJugador = "Sin Nombre"
    }


    let mensajeFinalHTML = `
    <table>
    <thead>
    <tr>
    <th>Tus victorias</th>
    <th>Empates</th>
    <th>Victorias del PC</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>${victoriasHumano}</td>
    <td>${empates}</td>
    <td>${victoriasPC}</td>
    </tr>
    </tbody>
    </table>
    `
    document.getElementById("respuesta").innerHTML = mensajeFinalHTML

    if (victoriasHumano > victoriasPC) {
        document.querySelector("#imagen").innerHTML = '<img src="img/victoria.jpg" alt="¡Ganamos!">'
    } else if (victoriasHumano < victoriasPC) {
        document.querySelector("#imagen").innerHTML = '<img src="img/derrota.jpg" alt="¡Perdimos!">'
    } else {
        document.querySelector("#imagen").innerHTML = '<img src="img/empate.jpg" alt="¡Empatamos!">'
    }
}












    




