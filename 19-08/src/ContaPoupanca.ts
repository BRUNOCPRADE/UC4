import { ContaBancaria} from "./ContaBancaria";

export class ContaPoupanca extends ContaBancaria {
    aplicarJuros(taxa: number): void {
        const rendimento = this.saldo * (taxa/100);
        this.atualizarSaldo(rendimento);
        console.log(`A conta aplicou. ${rendimento}`);
        console.log(`Saldo atual: R$${this.saldo}`);
    }
}