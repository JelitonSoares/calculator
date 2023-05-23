const prompt = require('prompt-sync')({sigint: true});
let continuar = true;
while(continuar === true) {
    let operacao = prompt('Qual operação deseja realizar ? adicao, subtracao, divisao ou multiplicacao. Caso não queira digite "sair": ');
    switch(operacao){
        case 'adicao':
            console.log('Você escolheu adição');
            adicao();
            break;
        case 'subtracao':
            console.log('Você escolheu subtração');
            subtracao();
            break;
        case 'divisao':
            console.log('você escolheu divisão');
            divisao();
            break;
        case 'multiplicacao':
            console.log('Você escolheu multiplicação');
            multiplicacao();
            break;
        case 'sair':
            console.log('Até a próxima!!')
            continuar = false;
    }
}

function adicao() {
    let primeiraParcela = prompt('Digite a primeira parcela (o primeiro número) que deseja somar: ');
    let segundaParcela = prompt('Digite a segunda parcela (o segundo número) que deseja somar: ');
    let resultadoA = Number(primeiraParcela) + Number(segundaParcela);
    console.log(`O resultado da adição é: ${resultadoA}`);
    continuar = true
}

function subtracao() {
    let minuendo = prompt('Digite o minuendo que deseja subtrair: ');
    let subtraendo = prompt('Digite o subtraendo: ');
    let resultadoS = Number(minuendo) - Number(subtraendo);
    console.log(`O resto da subtração é: ${resultadoS}`)
    continuar = true;
}

function divisao() {
    let dividendo = prompt('Digite o valor do dividendo que deseja dividir: ');
    let divisor = prompt('Digite o valor do divisor: ');
    let resultadoD = Number(dividendo) / Number(divisor);
    console.log(`O quociente da divisão é: ${resultadoD}`);
    continuar = true;
}

function multiplicacao() {
    let fatorUm = prompt('Digite o primeiro fator para a multiplicação: ');
    let fatorDois = prompt('Digite o segundo fator: ');
    let resultadoM = Number(fatorUm) * Number(fatorDois);
    console.log(`O produto da multiplicação é: ${resultadoM}`);
    continuar = true;
}