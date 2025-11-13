import { Produto } from "./Produto";

export class Sapatos extends Produto {
    public numero: number;

    constructor(id: number, nome: string, preco: number, numero: number) {
        super(id, nome, preco);
        this.numero = numero;
    }

    public visualizar(): void {
        console.log(`ID: ${this.id} | Nome: ${this.nome} | Preço: R$${this.preco.toFixed(2)} | Número: ${this.numero}`);
    }
}
