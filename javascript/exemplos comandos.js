//declaração variavel var variavel_1;
//comparação do valor se conseguir converter converte e compara: == 
//comparação exata valor e tipo: === 
//negação do valor se conseguir converter converte e compara: !=
//negação exata valor e tipo:: !==
//booleano: 1 true 0 false
// verificar tipo da variavel : typeof "nome da variavel"


var n1 = 3;

if(n1 < 3){
    console.log('n1 é menor que 3')
} else if (n1 > 3){
    console.log("n2 é maior que 3")
} else{
    console.log("n1 é igual a 3")
}

//pra 1 condição não precisa das chaves
n1 = 3;
if(n1 == 5)
console.log("n1 é menor que 5");

//comando de repetição
    //for
for(var i = 0; i < 5; i++ );

    //while
var i = 0;
while(i < 5){
    console.log(i);
    i++;
}

    //do while
var i = 0;
do{
    console.log(i);
    i++;
} while(i < 5);

//array- indice de array começa com valor 0(zero)
//como declarar um array duas formas:
var v1 = new Array();
var v1 = [];

//declaração de arrar já com valor
var v1 = new Array(1,3,7);
var v1 = [1,3,7];

//comando de repetição em array


for(var v1 = 0; i < v1.length; i++ ){
    console.log(v1[v1])
}


//adicionar elemento no array
v1.push(valor)

//remover o elemento no array - vai remover a partir do primeiro elemento 2 elementos
v1.splice[0,2]

//cópia do array
var2 = v1.slice(1,4)

//criando objeto computador, duas formas? 
//var computador = new Object();
//var computador = {};

//inserindo os atributos que pertence ao objeto computador
computador.teclado = 'ptBR';
//ou
var computador = {
    teclado: "en",
    processador: "i5"
};

//alterar o valor do atributo
computador.teclado ='fr'

//comando for para objeto
for(attr in computador){
    console.log(attr);
    console.log(computador[attr]);
}

//criação de função
var mensagem = "Olá Mundo"
imprimeMensagem(mensagem)
function imprimeMensagem(mensagem){
console.log("Sua mensagem é:" + mensagem + ".")

}

//função que retorna valor
function criarComputador(teclado, processador){
    
    return {
        teclado: teclado,
        processador:processador}
    };
}