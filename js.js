let pc = document.querySelector(".pc");
let text = document.querySelector("h1");
let contadorclicks = 0;

pc.addEventListener("click",function() {
    contadorclicks++;

    if (contadorclicks === 1) pc.src="./resources/pc_off.png";
    if (contadorclicks === 2) pc.src="./resources/pc_on.png";
    if (contadorclicks === 3) pc.src="./resources/pc_card.png";
    if (contadorclicks === 4) {
        text.textContent = "A la tarjeta hi ha una ruta! /etc/programaJava/iniciar.java, la clau es 'hackingDay6344'"
        text.className = "textMostrat"
    }

})

