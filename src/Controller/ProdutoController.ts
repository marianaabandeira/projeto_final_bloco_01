import { Produto } from "../model/Produto";
import { Roupa } from "../model/Roupa";
import { Sapatos } from "../model/Sapatos";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Produto[] = [];
    private idAutoIncrement: number = 0;

    // CRUD da Interface ProdutoRepository
    procurarPorId(id: number): Produto | null {
        const produto = this.listaProdutos.find(p => p.id === id);
        return produto ? produto : null;
    }

    listarTodos(): void {
        if (this.listaProdutos.length === 0) {
            console.log("\nNenhum produto cadastrado.\n");
            return;
        }

        console.log("\n--- Lista de Produtos ---\n");
        this.listaProdutos.forEach(p => p.visualizar());
    }

    cadastrar(produto: Produto): void {
        produto.id = ++this.idAutoIncrement;
        this.listaProdutos.push(produto);
        console.log(`\nProduto "${produto.nome}" cadastrado com sucesso!`);
    }

    atualizar(produto: Produto): void {
        const index = this.listaProdutos.findIndex(p => p.id === produto.id);
        if (index >= 0) {
            this.listaProdutos[index] = produto;
            console.log(`\nProduto "${produto.nome}" atualizado com sucesso!`);
        } else {
            console.log(`\nProduto com ID ${produto.id} não encontrado.`);
        }
    }

    deletar(id: number): void {
        const index = this.listaProdutos.findIndex(p => p.id === id);
        if (index >= 0) {
            const produto = this.listaProdutos[index];
            if (produto) {
                this.listaProdutos.splice(index, 1);
                console.log(`\nProduto "${produto.nome}" removido com sucesso!`);
            }
        } else {
            console.log(`\nProduto com ID ${id} não encontrado.`);
        }
    }

    // Métodos auxiliares para criar produtos
    criarRoupa(nome: string, preco: number, tamanho: string): void {
        const roupa = new Roupa(0, nome, preco, tamanho); // id será definido no cadastrar()
        this.cadastrar(roupa);
    }

    criarSapato(nome: string, preco: number, numero: number): void {
        const sapato = new Sapatos(0, nome, preco, numero); // id será definido no cadastrar()
        this.cadastrar(sapato);
    }
}
