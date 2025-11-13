import readlinesync = require("readline-sync");
import { ProdutoController } from "./src/Controller/ProdutoController";
import { Roupa } from "./src/model/Roupa";
import { Sapatos } from "./src/model/Sapatos";

// Cria o Controller
const produtoController = new ProdutoController();

export function main() {
    let opcao: number;

    while (true) {
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                     LUMÉ STORE                      ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Buscar Produto por ID                ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Remover Produto                      ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        opcao = readlinesync.questionInt("Entre com a opção desejada: ");

        if (opcao === 6) {
            console.log("\nLumé Store - Elegância, estilo e luz em cada peça! ✨");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                cadastrarProdutoMenu();
                break;
            case 2:
                produtoController.listarTodos();
                break;
            case 3:
                buscarProdutoMenu();
                break;
            case 4:
                atualizarProdutoMenu();
                break;
            case 5:
                removerProdutoMenu();
                break;
            default:
                console.log("\nOpção inválida! Tente novamente.\n");
                break;
        }
    }
}

// --- Funções do Menu ---
function cadastrarProdutoMenu() {
    console.log("\n--- Cadastrar Produto ---\n");
    const tipo = readlinesync.questionInt("Tipo (1 - Roupa / 2 - Sapato): ");
    const nome = readlinesync.question("Nome: ");
    const preco = readlinesync.questionFloat("Preço: ");

    if (tipo === 1) {
        const tamanho = readlinesync.question("Tamanho: ");
        produtoController.criarRoupa(nome, preco, tamanho);
    } else if (tipo === 2) {
        const numero = readlinesync.questionInt("Número do sapato: ");
        produtoController.criarSapato(nome, preco, numero);
    } else {
        console.log("\nTipo inválido!\n");
    }
}

function buscarProdutoMenu() {
    console.log("\n--- Buscar Produto por ID ---\n");
    const id = readlinesync.questionInt("Digite o ID do produto: ");
    const produto = produtoController.procurarPorId(id);

    if (produto) {
        produto.visualizar();
    } else {
        console.log("\nProduto não encontrado.\n");
    }
}

function atualizarProdutoMenu() {
    console.log("\n--- Atualizar Produto ---\n");
    const id = readlinesync.questionInt("Digite o ID do produto: ");
    const produto = produtoController.procurarPorId(id);

    if (!produto) {
        console.log("\nProduto não encontrado.\n");
        return;
    }

    const novoNome = readlinesync.question("Novo nome: ");
    const novoPreco = readlinesync.questionFloat("Novo preço: ");
    produto.nome = novoNome;
    produto.preco = novoPreco;

    if (produto instanceof Roupa) {
        const novoTamanho = readlinesync.question("Novo tamanho: ");
        produto.tamanho = novoTamanho;
    } else if (produto instanceof Sapatos) {
        const novoNumero = readlinesync.questionInt("Novo número: ");
        produto.numero = novoNumero;
    }

    produtoController.atualizar(produto);
}

function removerProdutoMenu() {
    console.log("\n--- Remover Produto ---\n");
    const id = readlinesync.questionInt("Digite o ID do produto: ");
    produtoController.deletar(id);
}

// --- Função desenvolvedor ---
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Mariana Bandeira");
    console.log("Mariana Bandeira - marianaabandeiira@gmail.com");
    console.log("github.com/marianaabandeira");
    console.log("*****************************************************");
}

main();
