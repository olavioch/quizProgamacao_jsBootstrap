//Array que contem todas as perguntas em objeto com seus parametros
let perguntas = [
    {   titulo:'Pergunta 1', pergunta:'Tag em html para usar css externo: ', 
        respostas:{r1:'< a >', r2:'< link >', r3:'< button >', r4:'< input >'},
        respostaCerta: 2
    },
    {   titulo:'Pergunta 2', pergunta:'Parametro do css para tornar uma pagina responsiva: ', 
        respostas:{r1:'@media', r2:'@font', r3:'@import', r4:'@export'},
        respostaCerta: 1
    },
    {   titulo:'Pergunta 3', pergunta:'Conhecido como esqueleto de uma webpage: ', 
        respostas:{r1:'javascript', r2:'css', r3:'php', r4:'html'},
        respostaCerta: 4
    },
    {   titulo:'Pergunta 4', pergunta:'Conhecido como a arte do site: ', 
        respostas:{r1:'css', r2:'photoshop', r3:'gimp', r4:'html'},
        respostaCerta: 1
    },
    {   titulo:'Pergunta 5', pergunta:'Tag para paragrafo em html: ', 
        respostas:{r1:'< paragrafo >', r2:'< b >', r3:'< p >', r4:'< pr >'},
        respostaCerta: 3
    },
    {   titulo:'Pergunta 6', pergunta:'Tag para imagen em html: ', 
        respostas:{r1:'< src >', r2:'< img >', r3:'< type >', r4:'< image >'},
        respostaCerta: 2
    },
    {   titulo:'Pergunta 7', pergunta:'Tag para tabelas em html:', 
        respostas:{r1:'< col >', r2:'< row >', r3:'< column >', r4:'< table >'},
        respostaCerta: 4
    },
    {   titulo:'Pergunta 8', pergunta:'Parametro css para borda:', 
        respostas:{r1:'borda', r2:'border', r3:'bd', r4:'#borda'},
        respostaCerta: 2
    },
    {   titulo:'Pergunta 9', pergunta:'Sinal ultilizado para identificar classes no css:', 
        respostas:{r1:'.classe', r2:'#classe', r3:'classe', r4:'$classe'},
        respostaCerta: 1
    },
    {   titulo:'Pergunta 10', pergunta:'Sinal ultilizado para identificar ids no css:', 
        respostas:{r1:'.classe', r2:'classe', r3:'#classe', r4:'$classe'},
        respostaCerta: 3
    },
    {   titulo:'Resultado', 
        resultado:'<img src="assets/img/congratulations.png"> <br>Parabens, voce concluiu todo o quiz. <br><br> Seu resultado é:'
    }
];

//variavel contagem de itens do array perguntas
let x= 0;
let pontos = 0;
//açoes necessarias ao apertar o menu iniciar
function apertouIniciar(){
    document.getElementById('reset').style.display = 'none';
    document.getElementById('tituloPergunta').innerHTML = perguntas[x].titulo;
    document.querySelector('.pergunta').innerHTML = perguntas[x].pergunta;
    document.getElementById('r1').innerHTML = perguntas[x].respostas.r1;
    document.getElementById('r2').innerHTML = perguntas[x].respostas.r2;            
    document.getElementById('r3').innerHTML = perguntas[x].respostas.r3;
    document.getElementById('r4').innerHTML = perguntas[x].respostas.r4; 
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
        document.getElementById('r1').innerHTML = perguntas[x].respostas.r1;
        document.getElementById('r2').innerHTML = perguntas[x].respostas.r2;            
        document.getElementById('r3').innerHTML = perguntas[x].respostas.r3;
        document.getElementById('r4').innerHTML = perguntas[x].respostas.r4;            
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
    function latencia (){
        let radios = document.getElementsByName('flexRadioDefault');
        let numRadio;
        if(radios[0].checked == true){
            numRadio = 1;
            if(numRadio == perguntas[x].respostaCerta){
            document.getElementById('respostacerta').innerHTML = "resposta certa";
            limpar();
            document.getElementById('respostacerta').classList.add('bg-success', 'pd-1');
            pontos = pontos + 1; 
            document.getElementById('pontos').innerHTML = pontos; 
            }else{
                document.getElementById('respostacerta').innerHTML = "resposta errada";
                document.getElementById('respostacerta').classList.add('bg-danger', 'pd-1');
            } 
        } 
        else if(radios[1].checked == true){
            numRadio = 2;
            if(numRadio == perguntas[x].respostaCerta){
                document.getElementById('respostacerta').innerHTML = "resposta certa";
                limpar();
                document.getElementById('respostacerta').classList.add('bg-success', 'pd-1');
                pontos=pontos+1;
                document.getElementById('pontos').innerHTML = pontos; 
                }else{
                    document.getElementById('respostacerta').innerHTML = "resposta errada";
                    document.getElementById('respostacerta').classList.add('bg-danger', 'pd-1');
                } 
        }
        else if(radios[2].checked == true){
            numRadio = 3;
            if(numRadio == perguntas[x].respostaCerta){
                document.getElementById('respostacerta').innerHTML = "resposta certa";
                limpar();
                document.getElementById('respostacerta').classList.add('bg-success', 'pd-1');
                pontos = pontos + 1;
                document.getElementById('pontos').innerHTML = pontos; 
                }else{
                    document.getElementById('respostacerta').innerHTML = "resposta errada";
                    document.getElementById('respostacerta').classList.add('bg-danger', 'pd-1');
                } 
        }
        else if(radios[3].checked == true){
            numRadio = 4;
            if(numRadio == perguntas[x].respostaCerta){
                document.getElementById('respostacerta').innerHTML = "resposta certa";
                limpar();
                document.getElementById('respostacerta').classList.add('bg-success', 'pd-1');
                pontos = pontos+1;
                document.getElementById('pontos').innerHTML = pontos; 
                }else{
                    document.getElementById('respostacerta').innerHTML = "resposta errada";
                    document.getElementById('respostacerta').classList.add('bg-danger', 'pd-1');
                } 
        }
    }
    setTimeout(latencia, 100);
}

//acoes necesserias ao escolher uma resposta
function apertouEscolha(){
    document.getElementById('ok').classList.remove('disabled');
    document.getElementById('ok').disabled = false;

}
function limpar(){
    document.getElementById('respostacerta').classList.remove('bg-success', 'pd-1');
    document.getElementById('respostacerta').classList.remove('bg-danger', 'pd-1');
}
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