 Documentação do Processo de Desenvolvimento do Jogo da Forca

 1. *Objetivo do Projeto*
O objetivo deste projeto foi desenvolver um jogo da forca simples utilizando HTML, CSS e JavaScript. O jogo possui uma interface interativa onde o jogador tenta adivinhar uma palavra escolhida aleatoriamente, com a ajuda de letras. O jogador tem 6 tentativas para acertar a palavra. O jogo termina quando o jogador acerta todas as letras ou esgota as tentativas.

 2. *Tecnologias Utilizadas*
- *HTML*: Para estruturar o conteúdo da página.
- *CSS*: Para estilizar o layout e torná-lo visualmente agradável.
- *JavaScript*: Para implementar a lógica do jogo, como a escolha de palavras, contagem de tentativas e validação das letras digitadas.

 3. *Estrutura do Projeto*
O projeto foi dividido em três arquivos principais:
- *index.html*: Contém a estrutura da página.
- *styles.css*: Define o estilo visual da página.
- *script.js*: Contém a lógica do jogo, incluindo a escolha de palavras, verificação das tentativas e o gerenciamento do estado do jogo.

 4. *Desenvolvimento do Jogo*
O desenvolvimento do jogo foi realizado em várias etapas:

 *Etapa 1: Estrutura HTML*
A primeira etapa consistiu em criar a estrutura básica do HTML. Isso incluiu a criação de um título, campos para exibir a palavra a ser adivinhada, o número de tentativas restantes, letras erradas e uma área para entrada de letras. Também foi incluído um botão para o jogador clicar ao tentar adivinhar uma letra.

 *Etapa 2: Estilização com CSS*
Após a estrutura do HTML, a parte estética do jogo foi trabalhada com CSS. O objetivo foi criar um layout simples, mas agradável visualmente. Utilizei flexbox para centralizar os elementos da página e adicionei bordas e sombras para dar um efeito de profundidade ao jogo. Também criei um botão estilizado e ajustei o tamanho da fonte para facilitar a leitura.

 *Etapa 3: Lógica do Jogo em JavaScript*
A parte mais importante do projeto foi implementar a lógica do jogo em JavaScript:
- *Escolha de palavra*: Criei um array de palavras possíveis e uma função para escolher uma palavra aleatória.
- *Gerenciamento das tentativas*: Mantive uma contagem de tentativas restantes e implementei a lógica para verificar se o jogador acertou ou errou uma letra.
- *Exibição das letras*: A cada letra acertada, a palavra foi atualizada para refletir as letras corretas e os espaços onde as letras ainda precisavam ser adivinhadas.
- *Fim de jogo*: O jogo verifica se o jogador venceu (quando não há mais underscores) ou se perdeu (quando as tentativas chegaram a zero).
- *Interatividade*: O jogo foi configurado para reagir tanto ao clicar no botão "Adivinhar" quanto ao pressionar a tecla "Enter".

 *Etapa 4: Testes*
Durante o desenvolvimento, realizei testes contínuos para garantir que o jogo funcionasse corretamente. Isso incluiu testar a entrada de letras, verificar se o jogo reconhecia corretamente as letras certas e erradas, e testar a funcionalidade do reinício do jogo.

 5. *Desafios Enfrentados*
Durante o desenvolvimento do projeto, alguns desafios surgiram:

- *Gerenciamento de tentativas e letras erradas*: Inicialmente, encontrei dificuldades para gerenciar a entrada do usuário de forma eficiente, especialmente na parte de verificar se a letra já havia sido tentada. Para resolver isso, criei listas para armazenar as letras corretas e erradas.
  
- *Reinício automático do jogo*: Quando o jogo termina, o projeto exige que o jogo reinicie automaticamente após alguns segundos. Eu precisei usar o setTimeout para implementar esse comportamento.

- *Validação de entradas*: Uma das primeiras falhas que encontrei foi permitir que o jogador digitasse mais de uma letra ou letras inválidas. Para resolver isso, implementei uma verificação que valida se a entrada é uma única letra e se é uma letra válida.

 6. *Como o Git Ajudou a Gerenciar o Projeto*

O Git foi fundamental para o gerenciamento do projeto. Aqui estão alguns benefícios que ele proporcionou:

- *Controle de Versão*: O Git permitiu manter um histórico completo do projeto, facilitando o controle das mudanças feitas ao longo do desenvolvimento. Eu criei commits frequentes para registrar marcos importantes no projeto, como quando finalizei a estrutura HTML, quando implementei a lógica do jogo, etc.
  
- *Desenvolvimento Seguro*: Como o projeto foi desenvolvido de forma incremental, o Git permitiu que eu experimentasse novas funcionalidades e refatorações sem medo de perder o trabalho anterior. Caso algo não funcionasse, eu poderia facilmente reverter para uma versão anterior.

- *Trabalho Colaborativo*: Embora eu tenha desenvolvido o projeto sozinho, o Git teria sido extremamente útil se tivesse que colaborar com outros desenvolvedores. Eu poderia facilmente compartilhar o código, revisá-lo e integrar modificações de diferentes colaboradores.

- *Acompanhamento de Bugs e Melhorias*: Através do Git, pude isolar problemas de forma eficiente, criando branches para testar funcionalidades e corrigir bugs. Ao finalizar uma funcionalidade ou correção, eu mesclava as alterações de volta para a branch principal.

 7. *Conclusão*

O desenvolvimento do Jogo da Forca foi um desafio interessante que me permitiu aprender mais sobre a manipulação de DOM em JavaScript e como criar uma aplicação interativa com HTML, CSS e JavaScript. O uso do Git foi essencial para gerenciar o progresso do projeto e garantir que cada modificação fosse documentada e controlada.

Este projeto serviu como uma excelente prática para melhorar minhas habilidades de programação e uso de ferramentas de controle de versão, além de fornecer uma aplicação funcional e divertida.
