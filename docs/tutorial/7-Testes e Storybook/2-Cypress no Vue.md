# Cypress no Vue

O Cypress é uma ferramente para testes e2e, dessa forma não precisamos "testar na mão", porquê não ter esses testes documentados? Dessa forma conseguimos evitar imprevistos em nossas aplicações frontend.

* O **Vue** tambem possui suporte para o [NightWatch](https://nightwatchjs.org/)

Para adicionar o [Cypress](https://www.cypress.io/) em nosso projeto, iremos usar o seguinte comando:

`vue add @vue/e2e-cypress`

Os arquivos gerados:

`cypress.json`

Entrypoint para os testes

`./tests/e2e/specs/`

Onde ficará nossos testes

`./tests/e2e/specs/index.js`

```ts
describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Welcome to Your Vue.js App');
  });
});
```

* Neste teste, é visitado a rota `/` procurando pelo h1 que contén `Welcome to Your Vue.js App`.

* Renomeie o teste de `test.js` para `landing.js`.

Agora vamos reformular para a nossa página:

```ts
describe('Página Inicial', () => {
  it('Visitando a página inicial', () => {
    cy.visit('/');
    cy.contains('span', 'Pela: He4rt Developers');
  });
  it('Indo para o repositório', () => {
    cy.visit('/');
    cy.contains('Repositório').click();
  });
  it('Indo para o discord da He4rt', () => {
    cy.visit('/');
    cy.contains('He4rt Discord').click();
  });
});
```

* O primeiro verifica se o span no site possui o conteúdo `Pela: He4rt Developers`.

* O segundo verifica se o botão Repositório existe e abre.

* O terceiro verifica se o botão He4rt Discord existe e abre.

Agora vamos criar o `register.js`, com o seguinte:

```ts
describe('Registrar', () => {
  it('Criando conta', () => {
    cy.visit('/register');
    cy.get('.conta').type('novout@hotmail.com');
    cy.get('.senha').type('123456789');
    cy.get('.repetirSenha').type('123456789');
    cy.contains('Entrar').click();
    cy.contains('Olá novout@hotmail.com');
  });
});
```

* O Cypress irá colocar os dados necessários e entrar no dashboard

Após rodarmos o comando `yarn test:e2e`, abrirá a segunte tela:

<h1 align="center">
  <img src="../../../assets/Testes e Storybook/Cypress no Vue/e2e.png" alt="Imagem selecionando o vuetify" width="60%">
</h1>

<h1 align="center">
  <img src="../../../assets/Testes e Storybook/Cypress no Vue/e2e-tests.png" alt="Imagem selecionando o vuetify" width="80%">
</h1>

* Para executar os testes basta clicar no nome deles ou em **Rodar todos os testes**.

* O **Cypress** tem muitos recursos disponíveis, recomendamos muito que dê uma olhada na [documentação](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Cypress-Can-Be-Simple-Sometimes).

Na próxima seção, iremos mostrar como configurar o **Storybook** em nosso projeto, nos vemos lá!

[Próxima Seção](./3-Storybook.md)