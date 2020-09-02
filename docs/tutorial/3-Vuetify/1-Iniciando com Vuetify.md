# O que e Vuetify

[Vuetify](https://vuetifyjs.com/pt-BR/) é uma Biblioteca Vue UI com Material Components para a sua aplicação, tirando a necessidade de conhecimentos sobre UI.

## Instalação

Lembra do começo do nosso curso que usamos o **Vue-CLI** para criar nosso projeto? Iremos utilizar novamente ele!

Estando em um diretório para criar o projeto, execute o comando `vue ui` para iniciar a UI. Na outra vez fizemos por comando, agora quero te mostrar como fazer isso diretamente da UI.

* Para adicionar uma biblioteca em um projeto existente, podemos usar o add: `vue add vuetify`
  
Irá aparecer esta tela:

<h1 align="center">
  <img src="../../../assets/Vuetify/O que e Vuetify/create_project_details.png" alt="Imagem mostrando os detalhes" width="50%">
</h1>

Crie o projeto com o nome de sua **preferência** e clique em **Next**.

Na próxima tela selecione a opção **Manual** e de **Next**.

<h1 align="center">
  <img src="../../../assets/Vuetify/O que e Vuetify/create_project_features.png" alt="Imagem mostrando as features" width="80%">
</h1>

Vamos deixar selecionado o **Babel** e o **Linter** no momento e de **Next**.

* No nosso tutorial, foi usado o preset do airbnb `@vue/eslint-config-airbnb`

Na próxima tela, escolha as suas preferências de linter, e depois de **Next**.

Após avançar, você terá a opção de **salvar seu preset**:

<h1 align="center">
  <img src="../../../assets/Vuetify/O que e Vuetify/create_project_preset.png" alt="Imagem mostrando como salvar seu preset" width="50%">
</h1>

Depois se salvar(ou não) seu preset, o vue começará a carregar as depedências (aka yarn install / npm run install).

<h1 align="center">
  <img src="../../../assets/Vuetify/O que e Vuetify/create_project_dependencies.png" alt="Imagem mostrando as dependências" width="30%">
</h1>

Após isso, teremos o **dashboard** principal do ui:

<h1 align="center">
  <img src="../../../assets/Vuetify/O que e Vuetify/project_dashboard.png" alt="Imagem mostrando o dashboard" width="100%">
</h1>

## Adicionando Vuetify

Para conseguirmos adicionar o **Vuetify**, iremos em **Plugin**, e no canto superior direito em **Add Plugin**

<h1 align="center">
  <img src="../../../assets/Vuetify/O que e Vuetify/project_plugin.png" alt="Imagem mostrando as opções de plugin" width="80%">
</h1>

Procuramos por **Vuetify**, clicamos e depois em `Install vue-cli-plugin-vuetify`

<h1 align="center">
  <img src="../../../assets/Vuetify/O que e Vuetify/project_vuetify.png" alt="Imagem selecionando o vuetify" width="80%">
</h1>

<h1 align="center">
  <img src="../../../assets/Vuetify/O que e Vuetify/project_vue_cli.png" alt="Imagem mostrando como avançar" width="20%">
</h1>

Escolha a opção padrão e espere instalar.

Agora podemos executar o comando **yarn serve** em nosso projeto, e acesse o localhost que será exibido:

<h1 align="center">
  <img src="../../../assets/Vuetify/O que e Vuetify/project_helloworld.png" alt="Imagem mostrando o site do vuetify" width="100%">
</h1>

## Estrutura

Vamos dar uma olhada no `./src/App.vue`. De início parece ser algo muito complicado mas entendendo o que cada componente está fazendo irá facilitar a compreensão:

O nosso componente está envolvido com o container *v-app* e possui dois filhos:

**v-app-bar** que é o nosso header que está na aplicação.

**v-container** que está carregando o componente **HelloWorld**, que está centralizado no meio de nossa aplicação.

## Header

Vamos pegar só o header para analizar:

```html
<v-app-bar
  app
  color="primary"
  dark
>
  <div class="d-flex align-center">
    <v-img
      alt="Vuetify Logo"
      class="shrink mr-2"
      contain
      src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
      transition="scale-transition"
      width="40"
    />

    <v-img
      alt="Vuetify Name"
      class="shrink mt-1 hidden-sm-and-down"
      contain
      min-width="100"
      src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
      width="100"
    />
  </div>

  <v-spacer></v-spacer>

  <v-btn
    href="https://github.com/vuetifyjs/vuetify/releases/latest"
    target="_blank"
    text
  >
    <span class="mr-2">Latest Release</span>
    <v-icon>mdi-open-in-new</v-icon>
  </v-btn>
</v-app-bar>
```

Temos a **div** que junta tanto o **icon** quanto o nome do **Vuetify**, dessa forma estando ao lado **esquerdo** do header**.

o **v-spacer** separa a nossa **div** e o **v-btn**, mantendo cada um de um lado diferente.

o **v-btn** leva a página de últimos lançamentos do **Vuetify**, tendo em seu conteúdo o ícone e a descrição do **v-btn**.

## HelloWorld

Não temos nada muito diferente do que já estamos acostumados, o funcionamento dos **v-row** e **v-col** é muito parecido com o display **grid** de nosso querido CSS, iremos também abordar sobre este sistema do **Vuetify** na próxima seção.

* Recomendamos **>MUITO<** que explore a [documentação](https://vuetifyjs.com/pt-BR/getting-started/quick-start/) do **Vuetify**, pois ele possui uma gama muito vasta que pode resolver um problema específico seu.Felizmente muito conteúdo da documentação do **Vuetify** possui tradução para PT-BR!

Nas próximas seções do **Vuetify**, iremos ensinar a como extrair o conteúdo dessa framework UI.

[Próxima Seção](./2-Criando%20Componentes.md)
