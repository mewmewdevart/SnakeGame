/* 
                    ╔═╦═╗
                    ║║║║╠═╦╦╦╦══╦═╦╦╦╗
                    ║║║║║╩╣║║║║║║╩╣║║║
Developed By:       ╚╩═╩╩═╩══╩╩╩╩═╩══╝
*/
let canvas = document.getElementById("snake"); // Chamando a Snake mencionada no HTML
let point = document.getElementById("pontuacao"); // Chamando a pontuacao mencionada no HTML
let context = canvas.getContext("2d"); // Renderizando o desenho - Plano 2D
let audio = document.getElementById("myAudio"); // Musica do Jogo
audio.volume = 0.1; 
let box = 32; //32 Pixels por quadrado no Canvas
let total = 0;  //Pontuacao Total iniciada em 0
let snake = [];
snake[0] = {
    x:  8 * box,
    y:  8 * box
}
let direction = "right"; // A cobra sempre começa andando para a direita

let food ={ //Gera posições aleatorias para o nascimento do bloco de "Comida"
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG(){ // Desenha o Canvas e Define o seu estilo em 4 parametros: x, y, altura e largura
    context.fillStyle = "#201F1F"; 
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha (){ //Desenhando o bloco da cobra, sua cor e seu tamanhho (coordenadas)
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "#FFFFFF";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood(){ //Desenhando o bloco de comida, sua cor e seu tamanhho (coordenadas)
    context.fillStyle = "#FFFFFF";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update); //Quando um evento acontece, detecta e chama essa função
function update(event){
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}


function iniciarJogo(){ //Ao iniciar o jogo é realizado essas checagens de ações
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;


    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert("Game over! Essa é a sua pontuação total: " + total)
            window.location.reload() //Ao clicar em Ok, o jogo reinicia
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box; // Calculo feito com base no Plano Cartesiano
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;


    if(snakeX != food.x || snakeY != food.y) {
            snake.pop(); //pop tira o último elemento da lista
    }
    else{ //recebendo posições aleatorias
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;

        total++
        point.innerHTML = total;
    }

    let newHead ={
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); //Adiciona mais blocos a cobrinha
}

let jogo = setInterval(iniciarJogo, 100); // Intervalo para iniciar o jogo 
