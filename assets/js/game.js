/* 
                    ╔═╦═╗
                    ║║║║╠═╦╦╦╦══╦═╦╦╦╗
                    ║║║║║╩╣║║║║║║╩╣║║║
Developed By:       ╚╩═╩╩═╩══╩╩╩╩═╩══╝
*/

let canvas = document.getElementById("snake"); /* Selecionando o ID */
let context = canvas.getContext("2d"); /* Renderizando o desenho - plano 2D */
let box = 32; /* 32 Pixels cada quadrado do Canvas */

function criarBG()  { /* Desenhando o Canvas */
    context.fillStyle   =   "#AC5DD9"; /* Color BG */
    context.fillRect(0, 0, 16 * box, 16 *box); /* Desenho do retangulo : 4 Parametros, posição de x e y altura e largura */
}

criarBG();