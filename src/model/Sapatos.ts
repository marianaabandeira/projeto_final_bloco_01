import { Produto } from "./Produto"

export class Sapato extends Produto {

    private _numero: number

    constructor(id: number, nome: string, preco: number, numero: number) {
        super(id, nome, preco)
        this._numero = numero
    }

    public get numero() {
        return this._numero
    }

    public set numero(numero: number) {
        this._numero = numero
    }

    public visualizar(): void {
        super.visualizar()
        console.log("Número: " + this._numero)
    }

}
