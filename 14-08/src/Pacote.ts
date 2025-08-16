

export class Pacote {
    private destino: string;
    private peso: number;

    constructor(destino: string, peso: number) {
        this.destino = destino;
        this.peso = peso;
    }

    // Getter e Setter para destino
    getDestino(): string {
        return this.destino;
    }

    setDestino(destino: string): void {
        this.destino = destino;
    }

    // Getter e Setter para peso
    getPeso(): number {
        return this.peso;
    }

    setPeso(peso: number): void {
        if (peso < 0) {
            console.log("Erro: o peso não pode ser negativo.");
        } else {
            this.peso = peso;
        }
    }
}