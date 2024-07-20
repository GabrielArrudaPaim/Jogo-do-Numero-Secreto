let ListaNumerosSorteados = [];
let numeroLimite = 10;
let numSecreto = gerarNumAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
    if(chute == numSecreto){
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        exibirTextoNaTela("h1", "Acertou!");
        exibirTextoNaTela("p", `Parabéns você acertou o número secreto com ${tentativas} ${palavraTentativa}!`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else if (numSecreto < chute) {
        exibirTextoNaTela("p", `O número secreto é menor que ${chute}`);
    } else {
        exibirTextoNaTela("p", `O número secreto é maior que ${chute}`);
    }
    tentativas++;
    limparCampo();
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function gerarNumAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = ListaNumerosSorteados.length;
   
    if(quantidadeDeElementosNaLista == numeroLimite){
        ListaNumerosSorteados = [];
    }

    if (ListaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumAleatorio();
    }else{
        ListaNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numSecreto = gerarNumAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}