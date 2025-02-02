// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < nombres.length; i++) {
        let li = document.createElement('li');
        li.innerText = nombres[i];
        lista.appendChild(li);
    }
}

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

    if (nombre.trim() === '') {
        alert('El campo no puede estar vacio, /nPor favor, inserte un nombre.');
        return;
    } else if (nombres.includes(nombre)) {
        alert('El nombre ya fue agregado, por favor, inserte otro nombre.');
        return;
    } else {
        nombres.push(nombre);
        console.log(nombres); //para ver si se estan agregando los nombres
        mostrarAmigos();

        // Muestra el mensaje de éxito en el HTML
        document.getElementById('mensaje-exito').innerText = "Nombre agregado exitosamente";
        setTimeout(() => {
            document.getElementById('mensaje-exito').innerText = ""; // Elimina el mensaje después de 5 segundos
        }, 3000);

        document.getElementById('amigo').value = "";
    }
}
