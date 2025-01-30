// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
 
    let friend = document.getElementById('amigo').value.trim();

    if (friend) {
        amigos.push(friend);
        console.log(amigos);
        limpiarCaja();
        mostrarAmigos(amigos);
    } else {
        alert('Por favor, inserte un nombre')
    }
}

function mostrarAmigos(amigos) {
    let listaAmigos = asignarTextoElemento("listaAmigos", amigos)

    for (let i = 0, len = amigos.length; i < len; i++) {
        let amigo = amigos[i];
        let elemento = document.createElement('li');
        elemento.textContent = amigo;
        elemento.id = `amigo${i}`;
    }
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
