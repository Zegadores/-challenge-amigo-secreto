let amigo = [];

function agregarAmigo(){
let inputAmigo = document.getElementById("amigo");
let nombreamigo = inputAmigo.value;

if (!nombreamigo){
    alert("Debes ingresar un nombre");
    return;
    }
    amigo.push(nombreamigo);
    inputAmigo.value ="";
    inputAmigo.focus ();
    renderizarAmigos();
}

function renderizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
listaAmigos.innerHTML = "";

for(let i = 0; i < amigo.length; i++ ){
    let item = document.createElement ("li");
    item.textContent = amigo[i];
    listaAmigos.appendChild(item);
    }   
}
function sortearAmigo(){
    if(amigo.length === 0) {
    alert("No hay amigos para sortear");
    return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];  
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo soteado es: ${amigoSorteado}`;
    
    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}