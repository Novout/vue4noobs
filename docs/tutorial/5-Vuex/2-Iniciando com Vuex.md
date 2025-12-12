# Iniciando com Vuex

Primeiramente, vamos adicionar o **Vuex** em nossa aplicação:

`vue add vuex`

* Usando o CLI do **Vue**, ele já ira estruturar o **Vuex**

Na pasta gerada `./src/store.js`, podemos ver como ficou nossa **loja**:

```ts
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
```

* Iniciamente na aplicação, iremos seguir este **padrão** de estrutura, mas no final da nossa seção do **Vuex** iremos apresentar **alternativas** mais robustas.

O **Vuex** não restringe a estrutura do seu código, sendo possível implementar qualquer tipo de estrutura necessária. Em vez disso, ele impõe um conjunto de princípios recomendados para projetos de médio-grande porte:

* O estado do nível do aplicativo é centralizado no store.

* A única maneira de mudar o estado é confirmando (ou fazendo commit das) mutações, que são transações **síncronas**.

* Os getters nos permitem uma facilidade muito grande para a formatação de conteúdos do **estado** no template.

* A lógica assíncrona deve ser encapsulada e pode ser composta com ações, e podem ser feitas apenas nas **actions**.

* Se o arquivo da loja for muito grande, basta começar a dividir as actions, mutations e getters em arquivos separados, podendo utilizar operadores de desconstrução do **JavaScript** sem problemas.

Na próxima seção, iremos mostrar formas diferentes de implementar os **estados** em nossas aplicações, nos vemos lá!

[Próxima Seção](./3-State.md)