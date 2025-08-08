
/*let nomeTurma:string = "25-1N"
let numeroAlunos:number = 20

let nomes:string[] = ["Fulano" , "Beltrano"] 

function mensagem():void {
    console.log("Olá")
}

function calcula(num1:number , num2:number):number {
    return num1 + num2
}

console.log(calcula(20 , 10))

exercício 1
function exibirInformacoesDoAlunoI(
    nomeAluno: string,
    idadeAluno: number,
    estaMatriculado : boolean,
): void {
    console.log(`Nome: ${nomeAluno}`);
    console.log(`Idade: ${idadeAluno}`);
    console.log(`Está matriculado? ${estaMatriculado ? 'Sim' : 'Não'}`);
}

  (exibirInformacoesDoAlunoI("Ana",18,true));
  (exibirInformacoesDoAlunoI("Bruno",27,true));
  (exibirInformacoesDoAlunoI("Amanda",25,false));
  (exibirInformacoesDoAlunoI("Silvia",55,true));

  

  function saudacao(
    nomeDoAluno: String,
  ): void {
    console.log(`Olá, ${nomeDoAluno}! Bem-vindo(a) à turma. `)
  }
    (saudacao("Larissa"));

    Exercicio4
    function calcularMedia(
        num1: number,
        num2: number,
        num3: number,
    ): number {
        return (num1 + num2 + num3)/3
    }
      console.log(calcularMedia(10, 10, 10)); 

      function contarAlunos(
        alunos: string[],
      ): number {
        return alunos.length;
      }
      let turma = ["João", "Maria", "Pedro", "Bruno", "Paulo", "Gabriel"];
      console.log("Total de alunos:", contarAlunos(turma));

      exercicio6
      function verificarMaioridade(idade: number,): string {
        if(idade >= 18){
          return  ("Aluno é maior de idade");
        }else { 
              return "Aluno é menor de idade"
        }
      }
      console.log(verificarMaioridade(17));
      console.log(verificarMaioridade(21));

      Exercicio7
      function procurarAlunos(
        alunos: string[],
        nome:  string): boolean {
          return alunos.includes(nome);
          }
      
          let lista = ["Ana", "Bruno", "Carlos", "Diana"];

          console.log(procurarAlunos(lista, "Otavio"));
          console.log(procurarAlunos(lista, "Gabriel"));
          console.log(procurarAlunos(lista,"Bruno"));

          EXERCICIO 8
          function avaliarNota(nota: number,): string {
            if(nota >= 9 ){
              return("A")
            }else if(nota >= 7){
              return("B")
            }else if(nota >= 5){
              return("C")
            }else {
              return("D")
            }
          }

          console.log(avaliarNota(10));
          console.log(avaliarNota(2));

          function inverterNomes(nomes: string[]): string [] {
            return nomes.reverse();
          }
          let lista = ["Ana", "Amanda", "Bruno"];
          console.log(inverterNomes (lista));*/

          type Aluno = {
            nome: string;
            estaMatriculado: boolean;
          };
          
          function filtrarMatriculados(alunos: Aluno[]): Aluno[] {
            return alunos.filter(aluno => aluno.estaMatriculado);
          }
          
          // Lista de alunos com status de matrícula
          let lista: Aluno[] = [
            { nome: "Amanda", estaMatriculado: true },
            { nome: "Bruno", estaMatriculado: false },
            { nome: "Cecília", estaMatriculado: true }
          ];
          
          // Executando a função e mostrando no console
          console.log(filtrarMatriculados(lista));
          