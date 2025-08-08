
/*for (let voltas: number = 0;  voltas < 10; voltas ++) {
    console.log(`O ciclista deu ${voltas} voltas.`)
}
console.log("O ciclista venceu a corrida")

//ENQUANTO
let voltas:number = 0

while(voltas <= 10){
    console.log(`O ciclista deu ${voltas} voltas`)
    voltas ++
}


// Posso usar uma FOR para percorrer um array

const numeros:number[] = [10,20,30,40,50,60]

for (let i:number = 0; i < numeros.length; i++ ) {
    console.log("Numero: " +numeros[i])
}


// Para cada item do meu array
// Para cada numero dentro do array numeros 
// faça algo
// Não funciona para objetos
for (let numero of numeros) {
    console.log("Numero: " + numero)
}

const pessoa:{nome:string, idade: number} = {
    nome: 'Leo',
    idade: 30
}

for (let chave in pessoa ) {
    console.log(`${chave}: ${pessoa[chave as keyof typeof pessoa]}`);
}

// typeof descobre o tipo dde algo
// keyof nega as chaves de um objeto (exemplo: nome, idade)
// keyof typeof pessoa primiero descobre o tipo do objeto, depois pegaas chaves dele.

//foreach
//O foreach é usado em arrays
//ele serve para executar uma função para cada item deste array
//essa função é chamada como parâmetro do forEaxh (callback)
//o primeiro parâmetro dessa função é o valor do item, e o segundo é o seu indice.

const personagem: string[] = ['Frodo', 'Gandalf', 'Legolas'];

personagem.forEach((nome, indice) => {
    console.log(`Personagem ${indice}: ${nome}`);
});

/*
// do significa faça
do {
    console.log(`Contador` ${contador});
    contador ++;
}while (contador < 0);*/


//Exercicio 1

const sociedade = ['Frodo', 'Sam', 'Gandalf', 'Legolas', 'Gimli', 'Merry', 'Pippin', 'Aragorn', 'Boromir'];
const hobbit = ['Frodo', 'Sam', 'Merry', 'Pippin']

for (let i = 0; i < sociedade.length;  i++) {
    if(hobbit.includes(sociedade[i])){
        console.log("Hobbit encontrado:" + sociedade[i])
    }
}