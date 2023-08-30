// Exercício 7: Ranking de Pontuações
// Lucas e seus amigos estão jogando videogame e querem manter um ranking de pontuações.
// Crie um programa que permita que eles adicionem suas pontuações em um array. No final do
// dia, exiba o ranking com as pontuações ordenadas de forma decrescente.

// const pontuacoes = [];
// function adicionarPontuacao(pontuacao) {
//     pontuacoes.push(pontuacao);
//     alert(`Pontuação ${pontuacao} adicionada com sucesso!`);
// }
// function exibirRanking() {
//     const ranking = pontuacoes.slice().sort((a, b) => b - a);
//     let rankingTexto = 'Ranking de Pontuações:\n';
//     for (let i = 0; i < ranking.length; i++) {
//         rankingTexto += `${i + 1}. Pontuação: ${ranking[i]}\n`;
//     }
//     alert(rankingTexto);
// }
// while (true) {
//     const novaPontuacao = parseInt(prompt('Digite a nova pontuação (ou digite "0" para mostar o ranking):'));
//     if (novaPontuacao === 0) {
//         break;
//     }
//     adicionarPontuacao(novaPontuacao);
// }
// exibirRanking();

// Exercício 8: Previsão do Tempo

// Marina é uma entusiasta do clima. Crie um programa que represente a temperatura de cada
// dia da semana usando um array. Em seguida, exiba a previsão semanal de temperatura para
// que Marina possa se preparar.

// let temperaturaSemanal = [];

// function adicionarTemperatura() {
//   let temperatura = parseFloat(prompt("Digite a temperatura para o dia: "));
//   temperaturaSemanal.push(temperatura);
//   alert("Temperatura adicionada: " + temperatura + "°C");
// }

// function exibirPrevisao() {
//   if (temperaturaSemanal.length === 0) {
//     alert("A previsão de temperatura está vazia.");
//     return;
//   }

//   let diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
//   let previsao = "Previsão Semanal de Temperatura:\n";

//   for (let i = 0; i < temperaturaSemanal.length; i++) {
//     previsao += diasSemana[i] + ": " + temperaturaSemanal[i] + "°C\n";
//   }

//   alert(previsao);
// }

// while (true) {
//   let opcao = prompt("Escolha uma opção:\n1. Adicionar Temperatura\n2. Exibir Previsão\n3. Sair");

//   switch (opcao) {
//     case "1":
//       adicionarTemperatura();
//       break;
//     case "2":
//       exibirPrevisao();
//       break;
//     case "3":
//       alert("Até mais :)");
//       break;
//     default:
//       alert("Opção inválida.");
//   }
// }

// Exercício 9: Cadastro de Alunos
// Uma escola deseja cadastrar seus alunos. Crie um programa que permita adicionar nome e
// idade de cada aluno em arrays separados. No final, exiba a lista de alunos com suas respectivas
// idades.

// let alunos = [];
// let idades = [];

// function cadastrarAluno() {
//   let nome = prompt("Digite o nome do aluno: ");
//   let idade = parseInt(prompt("Digite a idade do aluno: "));

//   alunos.push(nome);
//   idades.push(idade);

//   alert("Aluno cadastrado: " + nome + " (" + idade + " anos)");
// }

// function exibirListaAlunos() {
//   if (alunos.length === 0) {
//     alert("A lista de alunos está vazia.");
//     return;
//   }

//   let listaAlunos = "Lista de Alunos:\n";

//   for (let i = 0; i < alunos.length; i++) {
//     listaAlunos += alunos[i] + " - " + idades[i] + " anos\n";
//   }

//   alert(listaAlunos);
// }

// while (true) {
//   let opcao = prompt("Escolha uma opção:\n1. Cadastrar Aluno\n2. Exibir Lista de Alunos\n3. Sair");

//   switch (opcao) {
//     case "1":
//       cadastrarAluno();
//       break;
//     case "2":
//       exibirListaAlunos();
//       break;
//     case "3":
//       alert("Até mais :)");
//       break;
//     default:
//       alert("Opção inválida.");
//   }
// }

// 

// Exercício 10: Playlist de Músicas
// Paulo está organizando sua playlist de músicas para uma festa. Crie um programa que permita
// que ele adicione músicas à sua playlist usando um array. No final, exiba a lista completa de
// músicas. 

// let armazenarMusica = [];

// function adicionar() {
//   let novo = prompt("Digite uma música: ");
//   armazenarMusica.push(novo);
//   alert("Música adicionada: " + novo);
// }

// function removerItem() {
//   if (armazenarMusica.length === 0) {
//     alert("Você ainda não possui nenhuma música!");
//     return;
//   }

//   let remover = prompt("Digite o número da música para removê-la (0 até " + (armazenarMusica.length - 1) + "):");
//   remover = parseInt(remover);

//   if (isNaN(remover) || remover < 0 || remover >= armazenarMusica.length) {
//     alert("Número inválido. Digite novamente.");
//     return;
//   }

//   let removido = armazenarMusica.splice(remover, 1);
//   alert("Música removida: " + removido[0]);
// }

// function exibirMusica() {
//   if (armazenarMusica.length === 0) {
//     alert("A lista está vazia.");
//     return;
//   }

//   let listaItens = "Músicas\n";
//   armazenarMusica.forEach(function (item, index) {
//     listaItens += index + ": " + item + "\n";
//   });

//   alert(listaItens);
// }

// while (true) {
//   let opcao = prompt("Escolha uma opção:\n1. Adicionar Música\n2. Remover Música\n3. Exibir a lista\n4. Sair");

//   switch (opcao) {
//     case "1":
//       adicionar();
//       break;
//     case "2":
//       removerItem();
//       break;
//     case "3":
//       exibirMusica();
//       break;
//     case "4":
//       alert("Até mais :)");
//       break;
//     default:
//       alert("Opção inválida.");
//   }
// }


