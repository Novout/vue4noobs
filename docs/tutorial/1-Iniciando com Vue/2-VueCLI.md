# Vue CLI

Neste tutorial iremos utilizar **vue-cli** para a criação do nosso projeto, pois ele irá facilitar a instalação de plugins além de ter uma interface agradável.

Primeiramente, abre o terminal para instalar o **vue-cli**
```sh
yarn global add @vue/cli
# ou por npm
npm install -g @vue/cli
```

Agora para verificar se o cli foi instalado:
```sh
vue --version
```

Podemos criar o nosso projeto de duas formas:
```sh
vue create <nome-do-projeto>
```

Ou podemos usar a UI:
```sh
vue ui
```

* O cli irá criar o projeto na onde o comando foi usado, certifique-se que está na pasta correta
  
Usando o comando `vue create vue4noobs` teremos a seguinte tela:

<h1 align="center">
  <img src="../../../assets/Iniciando com Vue/VueCLI/vuecreate.png" alt="Imagem mostrando as opções do vue create">
</h1>

Vamos escolher a **default**, mas se quiser dar uma olhada no que o cli pode acrescentar no seu projeto escolhendo a opção manual, fique a vontade!

Quando a instalação dos pacotes for concluida, execute os comandos:
```sh
cd vue4noobs
yarn serve
```

Assim que o servidor terminar de ligar, aparece o **localhost** disponível para acessar a aplicação:
<h1 align="center">
  <img src="../../../assets/Iniciando com Vue/VueCLI/vuelocalhost.png" alt="Imagem mostrando o localhost">
</h1>

Agora acessamos o **localhost** e teremos a página inicial do projeto gerado pelo CLI:
<h1 align="center">
  <img src="../../../assets/Iniciando com Vue/VueCLI/vueproject.png" alt="Imagem mostrando o projeto inicial" width="400px">
</h1>

Na próxima seção iremos explicar todos os arquivos que estão no projeto, nos vemos lá!

[Próxima Seção](./3-Estrutura%20do%20Projeto.md)




