import { Produto } from "./Produto"

export class Roupa extends Produto {

    private _tamanho: string

    constructor(id: number, nome: string, preco: number, tamanho: string) {
        super(id, nome, preco)
        this._tamanho = tamanho
    }

    public get tamanho() {
        return this._tamanho
    }

    public set tamanho(tamanho: string) {
        this._tamanho = tamanho
    }

    public visualizar(): void {
        super.visualizar()
        console.log("Tamanho: " + this._tamanho)
    }

}
