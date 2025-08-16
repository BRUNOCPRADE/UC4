/*/
export class Pessoa {
    private nome: string;
    private idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): string {
        return `ola, meu nome é ${this.nome} e tenho ${this.idade}`;
    }

    // Getter - Método que "pega o valor"
    getNome(): string {
        return this.nome;
    }

    // Setter - Método que "define" o valor
    setNome(novoNome: string): void {
        this.nome = novoNome;
    }
}*/

// Criem os getters e setters para idade
// Impeça que uma idade possa ser negativa



export class Pessoa {
  // Atributos são o que a classe tem
    private nome: string;
    private idade: number;
  
    constructor(nome: string, idade: number) {
      this.nome = nome;
      this.idade = idade;
    }
  
    // Métodos são o que a classe faz
    getNome(): string {
      return this.nome;
    }
  
    
    setNome(novoNome: string) {
      this.nome = novoNome;
    }
  
    
    getIdade(): number {
      return this.idade;
    }
  
   
    setIdade(novaIdade: number) {
     
      if (novaIdade >= 0) {
        this.idade = novaIdade;
      } else {
        console.error("Erro: A idade não pode ser um número negativo.");
      }
    }
  }
  







