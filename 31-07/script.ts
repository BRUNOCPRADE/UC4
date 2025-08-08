//Var

import { Dog } from "./Dog";

// String 
let nome:string = "Leonardo";
// Number
let idade:number = 30;
// Boolean
let deMaior:boolean = true; 

//Arrays
let numeros: Array<number> = [1,2,3]
let nomes: string[] = ['Leo','Bob','Ana']

//Objeto
let pessoa: {nome:String, idade:number} = {
    nome:"Leo",
    idade: 30
}

function calcula(num:number, num2:number):number {
    return num + num2
}
function mensagem(meuNome:string):string{
    return `Olá ${meuNome}', tudo bem com você?`
}

function frase():void {
    console.log("e ae")
}

// Função com parâmetros opcionais
function sayHello(name?: string): void {
    console.log("Hello," , name  || "World")
}

sayHello()
sayHello("Leonardo")

function applyDiscount(price: number, discount: number = 0.05): number {
    return price * (1 - discount)
}

console.log(
    applyDiscount(100),
    applyDiscount(100,0.9)
)

// Crio objetos a partir da classe Dog
let myDog:Dog = new Dog("Bob",10,"Golden-Retriever")
let myOtherDog:Dog = new Dog("Fido",5, "Vira-Lata")

// Assim eu acesso seus atributos
console.log(myDog.breed) // Golden-Retriever
console.log(myOtherDog.name) // Fido

// Assim eu chamo os métodos
myDog.bark()
myOtherDog.eat()