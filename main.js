function mesero(color) {
    document.body.style.background = color;
    document.getElementById("boton").innerText = "Llamando Mesero"
    document.getElementById("boton").style.background = 'beige'
    let mySound = new Audio('shiphorn.mp3')
    mySound.play()
}