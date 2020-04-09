# Cypress no Vue

Para adicionar o [Cypress](https://www.cypress.io/) em nosso projeto, iremos usar o seguinte comando:

`vue add @vue/e2e-cypress`

Os arquivos gerados:

`cypress.json`

Entrypoint para os testes

`./tests/e2e/specs/`

Onde ficará nossos testes

`./tests/e2e/specs/index.js`

```js
describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Welcome to Your Vue.js App');
  });
});
```

* Neste teste, é visitado a rota `/` procurando pelo h1 que contén `Welcome to Your Vue.js App`.

Agora vamos reformular para a nossa página:

```js
describe('Página Inicial', () => {
  it('Visitando a página inicial', () => {
    cy.visit('/');
    cy.contains('span', 'Pela: He4rt Developers');
  });
});
```

Após rodarmos o comando `yarn test:e2e`, teremos esta resposta:

<h1 align="center">
  <img src="../../assets/Testes e Storybook/Cypress no Vue/e2e-tests.png" alt="Imagem selecionando o vuetify" width="100%">
</h1>

* O **Cypress** tem muitos recursos disponíveis, recomendamos muito que dê uma olhada na [documentação](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Cypress-Can-Be-Simple-Sometimes).

Na próxima seção, iremos mostrar como configurar o **Storybook** em nosso projeto, nos vemos lá!