/*definindo uma tela*/
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'white';
pincel.fillRect(0, 0, 1000, 500);


/*fim da definição de tela e pincel*/

/* definindo botao */
botao = document.querySelector('button')
/*fim da definição*/

/*funções*/
function desenhaBolinha(evento){
    if(desenha){
        var eixoX = evento.pageX - tela.offsetLeft;
        var eixoY = evento.pageY - tela.offsetTop;
        pincel.beginPath();
        pincel.fillStyle = 'black';
        pincel.arc(eixoX,eixoY,4,0,2*3.14);
        pincel.fill();   
    }
}
function desenhaTrue(){
    desenha = true;
}
function desenhaFalse(){
    desenha = false;
}
function ativaVibrar(){
    window.navigator.vibrate(2000);
    console.log('vibrando');
}
/*function limparTela(){
    pincel.reset();
    pincel.fillStyle = 'lightgrey';
    pincel.fillRect(10, 10, 65, 40);
    pincel.fillStyle = 'black';
    pincel.font = '20px serif';
    pincel.fillText('limpar',15,35);
    
}
limparTela() //fazer depois*/

botao.onclick = ativaVibrar;
tela.onmousemove = desenhaBolinha;
tela.onmousedown = desenhaTrue;
tela.onmouseup = desenhaFalse;
