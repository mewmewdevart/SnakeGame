/* 
                    ╔═╦═╗
                    ║║║║╠═╦╦╦╦══╦═╦╦╦╗
                    ║║║║║╩╣║║║║║║╩╣║║║
Developed By:       ╚╩═╩╩═╩══╩╩╩╩═╩══╝
*/

let canvas = document.getElementById("snake"); /* Selecionando o ID */
let context = canvas.getContext("2d"); /* Renderizando o desenho - plano 2D */
let box = 32; /* 32 Pixels cada quadrado do Canvas */
let snake = [];
snake[0] = {
    x:  8 * box,
    y:  8 * box
}
let direction = "right";

function criarBG(){ /* Desenhando o Canvas */
    context.fillStyle   =   "#AC5DD9"; /* Color BG */
    context.fillRect(0, 0, 16 * box, 16 *box); /* Desenho do retangulo : 4 Parametros, posição de x e y altura e largura */
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle   = "#DDA5E9";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box; /*plano cartesiano*/
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeX -= box;
    if(direction == "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100); /* Intervalo para iniciar o jogo */
