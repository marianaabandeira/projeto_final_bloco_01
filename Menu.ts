import readlinesync = require("readline-sync") // Importa a biblioteca readline-sync para entrada de dados
import { Roupa } from './src/model/Roupa' // Importa a classe Roupa do arquivo model/Roupa.ts
import { Sapato } from './src/model/Sapatos'// Importa a classe Sapato do arquivo model/Sapatos.ts
import { ProdutoRepository } from './src/repository/ProdutoRepository' // Importa a classe ProdutoRepository do arquivo repository/ProdutoRepository.ts

export function main() { // Função principal que executa o menu do sistema
    const repo = new ProdutoRepository() // Cria uma instância do repositório de produtos
    let opcao: number // Declara a variável para armazenar a opção do menu

    while (true) {
        console.log("*****************************************************")
        console.log("                     LUMÉ STORE                      ")
        console.log("*****************************************************")
        console.log("            1 - Cadastrar Produto                    ")
        console.log("            2 - Listar todos os Produtos             ")
        console.log("            3 - Buscar Produto por ID                ")
        console.log("            4 - Atualizar Produto                    ")
        console.log("            5 - Remover Produto                      ")
        console.log("            9 - Sair                                 ")
        console.log("*****************************************************")

        opcao = readlinesync.questionInt("\nEntre com a opção desejada: ") // Lê a opção do usuário

        if (opcao == 9) { // Se a opção for 9, exibe a mensagem de saída e encerra o programa
            console.log("\nLumé Store - Elegância, estilo e luz em cada peça! ✨") // Mensagem temática de saída
            sobre()
            process.exit(0) // Encerra o programa
        }

        switch (opcao) { // Estrutura switch para tratar as opções do menu
            case 1: // Cadastrar Produto
                console.log("\nCadastrar Produto\n") // Mensagem de cabeçalho
                const tipo = readlinesync.questionInt("Tipo (1 - Roupa / 2 - Sapato): ")// Lê o tipo de produto
                const nome = readlinesync.question("Nome: ") // Lê o nome do produto    
                const preco = readlinesync.questionFloat("Preço: ") // Lê o preço do produto

                if (tipo === 1) { // Se o tipo for 1, cadastra uma roupa
                    const tamanho = readlinesync.question("Tamanho: ") // Lê o tamanho da roupa
                    repo.cadastrar(new Roupa(repo.gerarId(), nome, preco, tamanho)) // Cria e cadastra a roupa no repositório
                } else if (tipo === 2) { // Se o tipo for 2, cadastra um sapato
                    const numero = readlinesync.questionInt("Número do sapato: ") // Lê o número do sapato
                    repo.cadastrar(new Sapato(repo.gerarId(), nome, preco, numero)) // Cria e cadastra o sapato no repositório
                } else { // Tipo inválido
                    console.log("\nTipo inválido") 
                }
                break

            case 2:
                console.log("\nListando todos os produtos\n")
                repo.listarTodos()
                break

            case 3:
                const idBusca = readlinesync.questionInt("Digite o ID do produto: ")
                const produto = repo.procurarPorId(idBusca)
                if (produto) produto.visualizar()
                else console.log("\nProduto não encontrado")
                break

            case 4:
                const idAtualizar = readlinesync.questionInt("Digite o ID do produto que deseja atualizar: ")
                const prod = repo.procurarPorId(idAtualizar)
                if (prod) {
                    const novoNome = readlinesync.question("Novo nome: ")
                    const novoPreco = readlinesync.questionFloat("Novo preço: ")
                    prod.nome = novoNome
                    prod.preco = novoPreco
                    if (prod instanceof Roupa) {
                        const novoTamanho = readlinesync.question("Novo tamanho: ")
                        prod.tamanho = novoTamanho
                    } else if (prod instanceof Sapato) {
                        const novoNumero = readlinesync.questionInt("Novo número: ")
                        prod.numero = novoNumero
                    }
                    console.log("\nProduto atualizado com sucesso")
                } else {
                    console.log("\nProduto não encontrado")
                }
                break

            case 5:
                const idRemover = readlinesync.questionInt("Digite o ID do produto que deseja remover: ")
                repo.deletar(idRemover)
                break

            default:
                console.log("\nOpção inválida")
                break
        }
    }

}

export function sobre(): void {
    console.log("\n*****************************************************")
    console.log("Projeto Desenvolvido por: Mariana Bandeira ")
    console.log("Mariana Bandeira - marianaabandeiira@gmail.com")
    console.log("github.com/marianaabandeira")
    console.log("*****************************************************")
}

main()
