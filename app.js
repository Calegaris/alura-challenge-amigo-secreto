// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.innerText = amigos[i];
        lista.appendChild(li);
    }
}

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

    if (nombre.trim() === '') {
        alert('El campo no puede estar vacio, /nPor favor, inserte un nombre.');
        return;
    } else if (amigos.includes(nombre)) {
        alert('El nombre ya fue agregado, por favor, inserte otro nombre.');
        return;
    } else {
        amigos.push(nombre);
        console.log(amigos); //para ver si se estan agregando los amigos
        mostrarAmigos();

        // Muestra el mensaje de éxito en el HTML
        document.getElementById('mensaje-exito').innerText = "Nombre agregado exitosamente";
        setTimeout(() => {
            document.getElementById('mensaje-exito').innerText = ""; // Elimina el mensaje después de 5 segundos
        }, 3000);

        document.getElementById('amigo').value = "";
    }
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay nombres en la lista. Agrega al menos un amigo antes de sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    console.log(amigoSorteado); //para ver si se esta sorteando un amigo
    document.getElementById('resultado').innerHTML = `<li>${amigoSorteado} ha sido sorteado 🎉</li>`;

    amigos = [];

    // Actualizar la lista en la interfaz
    mostrarAmigos();
}

document.getElementById('amigo').addEventListener('click', function () {
    document.getElementById('resultado').innerHTML = '';
});

