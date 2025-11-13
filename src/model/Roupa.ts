import { Produto } from "./Produto";

export class Roupa extends Produto {
    public tamanho: string;

    constructor(id: number, nome: string, preco: number, tamanho: string) {
        super(id, nome, preco);
        this.tamanho = tamanho;
    }

    public visualizar(): void {
        console.log(`ID: ${this.id} | Nome: ${this.nome} | Preço: R$${this.preco.toFixed(2)} | Tamanho: ${this.tamanho}`);
    }
}
