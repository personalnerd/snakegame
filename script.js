let canvas = document.getElementById('snake');
let context = canvas.getContext('2d');
let box = 32;

function criarBG() {
    context.fillStyle = 'lightgreen';
    context.fillRect(0, 0, 16 * box, 16 * box);
    // posição de x e y, altura e largura (16 quadradinhos * altura do box (32))
}

criarBG();