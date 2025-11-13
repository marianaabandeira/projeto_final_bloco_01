import readlinesync = require("readline-sync")  // Importando a biblioteca readline-sync para ler entradas do usuário no terminal

export function main() { // Função principal que exibe o menu e lida com as opções do usuário

    let opcao: number // Variável para armazenar a opção escolhida pelo usuário

    while (true) { // Loop infinito para exibir o menu repetidamente até que o usuário escolha sair

        console.log("*****************************************************")
        console.log("                                                     ")
        console.log("                     LUMÉ STORE                      ")
        console.log("                                                     ")
        console.log("*****************************************************")
        console.log("                                                     ")
        console.log("            1 - Cadastrar Produto                    ")
        console.log("            2 - Listar todos os Produtos             ")
        console.log("            3 - Buscar Produto por ID                ")
        console.log("            4 - Atualizar Produto                    ")
        console.log("            5 - Remover Produto                      ")
        console.log("            6 - Realizar Compra                      ")
        console.log("            7 - Exibir Carrinho                      ")
        console.log("            8 - Finalizar Pedido                     ")
        console.log("            9 - Sair                                 ")
        console.log("                                                     ")
        console.log("*****************************************************")
        console.log("                                                     ")

        opcao = readlinesync.questionInt( "Entre com a opção desejada: ") // Lê a opção escolhida pelo usuário

        if (opcao == 9) { // Se a opção for 9, exibe a mensagem de saída e chama a função sobre()
            console.log("\nLumé Store - Elegância, estilo e luz em cada peça! ✨")
            sobre() // Chama a função sobre para exibir informações do desenvolvedor
            process.exit(0) // Encerra o programa
        }

        switch (opcao) { // Estrutura switch para lidar com as diferentes opções do menu
            case 1: // Se a opção for 1, exibe a mensagem de cadastro de produto
                console.log("\n\nCadastrar Produto\n\n") // Aqui você pode chamar a função de cadastro de produto

                break // Fim do case 1
            case 2:
                console.log("\n\nListar todos os Produtos\n\n")

                break
            case 3:
                console.log("\n\nBuscar Produto por ID\n\n")

                break
            case 4:
                console.log("\n\nAtualizar Produto\n\n")

                break
            case 5:
                console.log("\n\nRemover Produto\n\n")

                break
            case 6:
                console.log("\n\nRealizar Compra\n\n")

                break
            case 7:
                console.log("\n\nExibir Carrinho\n\n")

                break
            case 8:
                console.log("\n\nFinalizar Pedido\n\n")

                break
            default:
                console.log("\nOpção Inválida! Tente novamente.\n")

                break
        }
    }
}

// Função com os dados da pessoa desenvolvedora do projeto
export function sobre(): void { // Função que exibe informações sobre o desenvolvedor do projeto
    console.log("\n*****************************************************")
    console.log("Projeto Desenvolvido por: Mariana Bandeira ")
    console.log("Mariana Bandeira - marianaabandeiira@gmail.com")
    console.log("github.com/marianaabandeira")
    console.log("*****************************************************")
}

main() // Chama a função principal para iniciar o programa
