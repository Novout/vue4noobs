# Componentização

Resumindo: `Se você está copiando código, falta componentização.`

Agora falando um pouco mais sério:

Um componente é algo que sozinho tem um sentido, ele pode ser único, ou um conjunto de vários outros components.Por exemplo, o cabeçalho de um site ele é unico, por mais que pode variar quando o usuario ta logado/deslogado, ele continua sendo um cabeçalho, então continua possuindo um único sentido.

A vantagem da componentização é a reutilização de código e padronização, pois se for necessário alguma alteração no cabeçalho, por exemplo, não teremos que procurar todos os cabeçalhos na aplicação inteira.

É comum que um aplicativo seja organizado em uma árvore de componentes aninhados de forma parecido com uma [Árvore](https://pt.wikibooks.org/wiki/Algoritmos_e_Estruturas_de_Dados/%C3%81rvore):

<h1 align="center">
  <img src="../../assets/Iniciando com Vue/Componentização/componentization.png" alt="Imagem mostrando o sentido de componentização" width="70%">
</h1>

Na próxima seção iremos iniciar o estudo dos conceitos do vue, mostrando as suas vantagens em relação ao VanillaJS.

[Próxima Seção](../2-Conceitos/1-Data,%20Methods%20e%20Modificadores.md)