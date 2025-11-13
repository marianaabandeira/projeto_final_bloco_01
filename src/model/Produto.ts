export class Produto {

    private _id: number
    private _nome: string
    private _preco: number

    constructor(id: number, nome: string, preco: number) {
        this._id = id
        this._nome = nome
        this._preco = preco
    }

    public get id() {
        return this._id
    }

    public set id(id: number) {
        this._id = id
    }

    public get nome() {
        return this._nome
    }

    public set nome(nome: string) {
        this._nome = nome
    }

    public get preco() {
        return this._preco
    }

    public set preco(preco: number) {
        this._preco = preco
    }

    public visualizar(): void {
        console.log("\nID: " + this._id)
        console.log("Nome: " + this._nome)
        console.log("Preço: R$ " + this._preco.toFixed(2))
    }

}
