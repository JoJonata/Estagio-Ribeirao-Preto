/*1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);



Ao final do processamento, qual será o valor da variável SOMA?*/

function trechoCod(){
    let INDICE = 13, soma = 0, K = 0

    while(K<INDICE){
    K++;

    soma += K;
    }
    return soma;
}
console.log(trechoCod());