import { Personagens } from "./Personagens";

export class Monstro {
    private nome: string;
    private vida: number;
    private forca: number;
   

    constructor(nome: string, vida: number, forca: number) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        
    }

    atacar(oponente:Personagens) {
        oponente.dano(this);
    }

    dano(oponente:Personagens) {
        this.vida -= oponente.getForca();
    }


    getNome():string {
        return this.nome; 
    }

    setNome(novoNome:string):void {
        this.nome = novoNome;
    }
    
    getVida():number {
        return this.vida;
    }

    setVida(novaVida: number):void {
        this.vida = novaVida;

    }

    getForca():number {
        return this.forca;
    }

    setForca(novaForca:number) {
        this.forca = novaForca;
    }

}

