"use strict";
//Var
Object.defineProperty(exports, "__esModule", { value: true });
var Dog_1 = require("./Dog");
// String 
var nome = "Leonardo";
// Number
var idade = 30;
// Boolean
var deMaior = true;
//Arrays
var numeros = [1, 2, 3];
var nomes = ['Leo', 'Bob', 'Ana'];
//Objeto
var pessoa = {
    nome: "Leo",
    idade: 30
};
function calcula(num, num2) {
    return num + num2;
}
function mensagem(meuNome) {
    return "Ol\u00E1 ".concat(meuNome, "', tudo bem com voc\u00EA?");
}
function frase() {
    console.log("e ae");
}
// Função com parâmetros opcionais
function sayHello(name) {
    console.log("Hello,", name || "World");
}
sayHello();
sayHello("Leonardo");
function applyDiscount(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
console.log(applyDiscount(100), applyDiscount(100, 0.9));
// Crio objetos a partir da classe Dog
var myDog = new Dog_1.Dog("Bob", 10, "Golden-Retriever");
var myOtherDog = new Dog_1.Dog("Fido", 5, "Vira-Lata");
// Assim eu acesso seus atributos
console.log(myDog.breed); // Golden-Retriever
console.log(myOtherDog.name); // Fido
// Assim eu chamo os métodos
myDog.bark();
myOtherDog.eat();
