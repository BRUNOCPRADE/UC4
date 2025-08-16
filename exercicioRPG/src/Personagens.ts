import { Monstro } from "./Monstro";

export class Personagens {
    private nome: string;
    private classe:string
    private vida: number;
    private forca: number;

    

    constructor(nome: string, classe:string,vida: number, forca: number) {
        this.nome = nome;
        this.classe = classe
        this.vida = vida;
        this.forca = forca;
        
    }

    atacar(oponente:Monstro) {
        oponente.dano(this)
    }

    dano(oponente:Monstro) {
        this.vida -= oponente.getForca()
    }

    curar(valor:number) {
        this.vida += valor;
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

    setVida(novaVida:number):void {
        this.vida = novaVida;

    }

    getForca():number {
        return this.forca;
    }

    setForca(novaForca:number) {
        this.forca = novaForca;
    }
    getClasse(): string {
        return this.classe;
    }

    setClasse(novaClasse:string) {
        this.classe = novaClasse
    }

}