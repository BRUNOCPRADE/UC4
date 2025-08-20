export class ContaBancaria {
    protected saldo: number; 

    constructor(atualizarSaldo: number) {
        this.saldo = atualizarSaldo;
    }

    protected atualizarSaldo(valor: number): void {
        this.saldo += valor;
    }
}