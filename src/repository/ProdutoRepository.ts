import { Produto } from "../model/Produto"

export class ProdutoRepository {

    private produtos: Produto[] = []
    private contadorId: number = 1

    public gerarId(): number {
        return this.contadorId++
    }

    public cadastrar(produto: Produto): void {
        this.produtos.push(produto)
        console.log("\nProduto cadastrado com sucesso")
    }

    public listarTodos(): void {
        if (this.produtos.length == 0) {
            console.log("\nNenhum produto cadastrado")
        } else {
            this.produtos.forEach(produto => produto.visualizar())
        }
    }

    public procurarPorId(id: number): Produto | null {
        const produto = this.produtos.find(p => p.id == id)
        if (!produto) return null
        return produto
    }

    public atualizar(produto: Produto): void {
        const index = this.produtos.findIndex(p => p.id == produto.id)
        if (index != -1) {
            this.produtos[index] = produto
            console.log("\nProduto atualizado com sucesso")
        } else {
            console.log("\nProduto não encontrado")
        }
    }

    public deletar(id: number): void {
        const index = this.produtos.findIndex(p => p.id == id)
        if (index != -1) {
            this.produtos.splice(index, 1)
            console.log("\nProduto removido com sucesso")
        } else {
            console.log("\nProduto não encontrado")
        }
    }

}
