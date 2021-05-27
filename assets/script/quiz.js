//Array que contem todas as perguntas em objeto com seus parametros
let perguntas = [
    {   titulo:'Pergunta 1', pergunta:'Tag em html para usar css externo: ', 
        respostas:['< a >', '< link >', '< button >', '< input >'],
        respostaCerta: ['resposta errada', 'resposta certa', 'resposta errada', 'resposta errada' ]
    },
    {   titulo:'Pergunta 2', pergunta:'Parametro do css para tornar uma pagina responsiva: ', 
        respostas:['@media', '@font', '@import', '@export'],
        respostaCerta: ['resposta certa', 'resposta errada', 'resposta errada', 'resposta errada' ]
    },
    {   titulo:'Pergunta 3', pergunta:'Conhecido como esqueleto de uma webpage: ', 
        respostas:['javascript', 'css', 'php', 'html'],
        respostaCerta: ['resposta errada', 'resposta errada', 'resposta errada', 'resposta certa' ]
    },
    {   titulo:'Pergunta 4', pergunta:'Conhecido como a arte do site: ', 
        respostas:['css', 'photoshop', 'gimp', 'html'],
        respostaCerta: ['resposta certa', 'resposta errada', 'resposta errada', 'resposta errada' ]
    },
    {   titulo:'Pergunta 5', pergunta:'Tag para paragrafo em html: ', 
        respostas:['< paragrafo >', '< b >', '< p >', '< pr >'],
        respostaCerta: ['resposta errada', 'resposta errada', 'resposta certa', 'resposta errada' ]
    },
    {   titulo:'Pergunta 6', pergunta:'Tag para imagen em html: ', 
        respostas:['< src >', '< img >', '< type >', '< image >'],
        respostaCerta: ['resposta errada', 'resposta certa', 'resposta errada', 'resposta errada' ]
    },
    {   titulo:'Pergunta 7', pergunta:'Tag para tabelas em html:', 
        respostas:['< col >', '< row >', '< column >', '< table >'],
        respostaCerta: ['resposta errada', 'resposta errada', 'resposta errada', 'resposta certa' ]
    },
    {   titulo:'Pergunta 8', pergunta:'Parametro css para borda:', 
        respostas:['borda', 'border', 'bd', '#borda'],
        respostaCerta: ['resposta errada', 'resposta certa', 'resposta errada', 'resposta errada' ]
    },
    {   titulo:'Pergunta 9', pergunta:'Sinal ultilizado para identificar classes no css:', 
        respostas:['.classe', '#classe', 'classe', '$classe'],
        respostaCerta: ['resposta certa', 'resposta errada', 'resposta errada', 'resposta errada' ]
    },
    {   titulo:'Pergunta 10', pergunta:'Sinal ultilizado para identificar ids no css:', 
        respostas:['.classe', 'classe', '#classe', '$classe'],
        respostaCerta: ['resposta errada', 'resposta errada', 'resposta certa', 'resposta errada' ]
    },
    {   titulo:'Resultado', 
        resultado:'<img src="assets/img/congratulations.png"> <br>Parabens, voce concluiu todo o quiz. <br><br> Seu resultado é:'
    }
];

//variavel contagem de itens do array perguntas
let x= 0;
//variavel contagem de pontos
let pontos = 0;

//açoes necessarias ao apertar o menu iniciar
function apertouIniciar(){
    document.getElementById('reset').style.display = 'none';
    document.getElementById('tituloPergunta').innerHTML = perguntas[x].titulo;
    document.querySelector('.pergunta').innerHTML = perguntas[x].pergunta;
    document.querySelector('.pergunta').innerHTML = perguntas[x].pergunta;
    document.getElementById('r1').innerHTML = perguntas[x].respostas[0];
    document.getElementById('r2').innerHTML = perguntas[x].respostas[1];            
    document.getElementById('r3').innerHTML = perguntas[x].respostas[2];
    document.getElementById('r4').innerHTML = perguntas[x].respostas[3]; 
    tornarAleatorio();
    corResposta();
}

//açoes necessarias ao apertar o botao next
function apertouNext(){
    if(x<9){
    if(document.getElementById('next').classList.contains('disabled')){}
    else{
        x++;
        console.log(x);
        document.getElementById('tituloPergunta').innerHTML = perguntas[x].titulo;
        document.querySelector('.pergunta').innerHTML = perguntas[x].pergunta;           
        document.querySelector('.pergunta').innerHTML = perguntas[x].pergunta;
        document.getElementById('r1').innerHTML = perguntas[x].respostas[0];
        document.getElementById('r2').innerHTML = perguntas[x].respostas[1];            
        document.getElementById('r3').innerHTML = perguntas[x].respostas[2];
        document.getElementById('r4').innerHTML = perguntas[x].respostas[3];
        document.getElementById('rc1').style.display = 'none';
        document.getElementById('rc2').style.display = 'none';
        document.getElementById('rc3').style.display = 'none';
        document.getElementById('rc4').style.display = 'none'; 
        tornarAleatorio();
        corResposta();
        document.getElementById('next').classList.add('disabled');
    }
    document.getElementById('ok').classList.add('disabled');
    document.getElementById('respostacerta').innerHTML = ""; 
    }else{
      resultado();
    }
}

//acoes necessarias ao apertar o botao ok
function apertouOk(){
    document.getElementById('ok').disabled = true;
    document.getElementById('next').classList.remove('disabled');
    document.getElementById('rc1').style.display = 'inline';
    document.getElementById('rc2').style.display = 'inline';
    document.getElementById('rc3').style.display = 'inline';
    document.getElementById('rc4').style.display = 'inline';
    latencia();
    setTimeout(latencia, 100);
    limpar();
    document.getElementById('pontos').innerHTML = pontos;
}

//acoes necesserias ao escolher uma resposta
function apertouEscolha(){
    document.getElementById('ok').classList.remove('disabled');
    document.getElementById('ok').disabled = false;

}

//açoes necessarias para limpar classes desnecessarias
function limpar(){
    let radios = document.getElementsByName('flexRadioDefault');
    radios[0].classList.remove('respostacerta', 'respostaerrada');
    radios[1].classList.remove('respostacerta', 'respostaerrada');
    radios[2].classList.remove('respostacerta', 'respostaerrada');
    radios[3].classList.remove('respostacerta', 'respostaerrada');
}

// exibição do resultado do quiz
function resultado(){
    document.getElementById('tituloPergunta').innerHTML = perguntas[10].titulo;
    document.querySelector('.modal-body').innerHTML = `${perguntas[10].resultado} ${pontos} pontos`;
    document.getElementById('ok').style.display = 'none';
    document.getElementById('respostacerta').style.display = 'none';
    document.getElementById('reset').style.display = 'block';
    document.getElementById('next').style.display = 'none';
    document.getElementById('modal-footer').classList.remove('justify-content-between');
    document.getElementById('descPontos').style.display ='none';
}

//função necessaria para a aletoriedade do codigo
function tornarAleatorio(){
  const maxNumbers = 4;
  let randomNumber;
  let tmp;
  let list = [];
  let radios = document.getElementsByName('flexRadioDefault');
  for(let i = 0; i< maxNumbers; i++){
      list[i] = i + 1;
  }
  for (let i = list.length; i;){
      randomNumber =  Math.random() * i-- | 0;
      tmp = list[randomNumber];
      list[randomNumber] = list[i];
      list[i] = tmp;
  }
document.getElementById('r'+list[0]).innerHTML=perguntas[x].respostas[0];
document.getElementById('r'+list[1]).innerHTML=perguntas[x].respostas[1];
document.getElementById('r'+list[2]).innerHTML=perguntas[x].respostas[2];
document.getElementById('r'+list[3]).innerHTML=perguntas[x].respostas[3];
document.getElementById('rc'+list[0]).innerHTML=perguntas[x].respostaCerta[0];
document.getElementById('rc'+list[1]).innerHTML=perguntas[x].respostaCerta[1];
document.getElementById('rc'+list[2]).innerHTML=perguntas[x].respostaCerta[2];
document.getElementById('rc'+list[3]).innerHTML=perguntas[x].respostaCerta[3];
let lista =[];
var rcerta=[perguntas[x].respostaCerta[0].replace(" ", ""),perguntas[x].respostaCerta[1].replace(" ", ""),perguntas[x].respostaCerta[2].replace(" ",""),perguntas[x].respostaCerta[3].replace(" ","")];
lista = list.map(
    function(item){
        return item - 1 ;
    }
);
radios[lista[0]].classList.add(rcerta[0]);
radios[lista[1]].classList.add(rcerta[1]);
radios[lista[2]].classList.add(rcerta[2]);
radios[lista[3]].classList.add(rcerta[3]);
}

// funcao que avalia se a resposta e certa ou errada para a contagem de pontos
function latencia(){
    let radios = document.getElementsByName('flexRadioDefault');
    if((radios[0].checked == true) && (radios[0].classList.contains('respostacerta'))){
        pontos= pontos + 1;
    }
    else
    if((radios[1].checked == true) && (radios[1].classList.contains('respostacerta'))){
        pontos = pontos+1;
    }
    else
    if((radios[2].checked == true) && (radios[2].classList.contains('respostacerta'))){
        pontos = pontos + 1;
    }
    else
    if((radios[3].checked == true) && (radios[3].classList.contains('respostacerta'))){
        pontos = pontos + 1;
    }
}
function corResposta(){
    (document.getElementById('rc1').innerHTML == 'resposta certa')? 
    (document.getElementById('rc1').classList.add('bg-success'), document.getElementById('rc1').classList.remove('bg-danger')):
    (document.getElementById('rc1').classList.add('bg-danger'), document.getElementById('rc1').classList.remove('bg-success'));
    
    (document.getElementById('rc2').innerHTML == 'resposta certa')? 
    (document.getElementById('rc2').classList.add('bg-success'), document.getElementById('rc2').classList.remove('bg-danger')):
    (document.getElementById('rc2').classList.add('bg-danger'), document.getElementById('rc2').classList.remove('bg-success'));
    
    (document.getElementById('rc3').innerHTML == 'resposta certa')? 
    (document.getElementById('rc3').classList.add('bg-success'), document.getElementById('rc3').classList.remove('bg-danger')):
    (document.getElementById('rc3').classList.add('bg-danger'), document.getElementById('rc3').classList.remove('bg-success'));

    (document.getElementById('rc4').innerHTML == 'resposta certa')? 
    (document.getElementById('rc4').classList.add('bg-success'), document.getElementById('rc4').classList.remove('bg-danger')):
    (document.getElementById('rc4').classList.add('bg-danger'), document.getElementById('rc4').classList.remove('bg-success'));
}

function resetar(){
    location.reload();
}