# Gerenciamento de Estado

Agora vamos introduzir sobre o **Vuex**, o **gerenciador de estado** do **Vue**. O **Vuex** pode ser relacionado com o **Redux**, mas possuem diferenças cruciais.

Ele é um padrão de gerenciamento de estado + biblioteca para a. Ele serve como uma loja centralizada para todos os componentes em uma aplicação, com regras garantindo que o estado só possa ser mutado de forma previsível. Ou seja, dessa forma conseguimos salvar dados temporários que podem ser úteis ao longo da aplicação. Por exemplo, o id de um usuário ou produto, que precisamos consultar em vários componentes diferentes!

## Fluxo

<h1 align="center">
  <img src="../../assets/Vuex/Gerenciamento de Estado/vuex.png" alt="Imagem mostrando o resultado da estrutura" width="80%">
</h1>

Todo o **Vuex** funciona em torno deste ciclo, mas, oque É esse ciclo você me pergunta:

## Vue Components

Seria todos os nossos componentes **.vue**, seja ela **propriedade** ou **page** o **vuex** irá realizar uma série de ações até chegar novamente no nosso componente.

Para mandar uma ação para o **vuex**, usamos o **dispatch**, que irá conter o nome para onde queremos mandar, e como segundo parâmetro o conteúdo.

Exemplo:

`dispatch('nome_da_action', { hello: world });`

Podemos enviar o que quisermos, como objetos, booleanos, etc. **NÃO** recomendamos mandar **templates**.

## Action

As actions é a onde o **dispatch** irá enviar o conteúdo. As actions servem para realizar código **assíncrono** no **Vuex**.

Em caso de não ter necessidade de realizar código assíncrono, podemos apenas enviar o conteúdo diretamente para a **Mutation**.

Depois de executarmos o que for preciso, vamos **commitar** para a **Mutation**, como o próprio nome sugere, ele que irá **mutar** o estado.

Exemplo:

`commit('nome_da_mutation', objeto);`

* Para mandar para uma **action** usamos o **dispatch** e para uma **mutation** usamos o **commit**, possuem nomes diferentes exatamente para não confundir o desenvolvedor.

## Mutations

Na **mutation**, teremos acesso ao **estado** do **Vuex**, assim conseguindo **mutar**. Iremos explicar detalhadamente na seção de **Mutations**.

## State

Aqui é a onde estará os nossos estados, por exemplo:

```js
state: {
  contador: 0
}
```

* Apenas isso? Sim!

## Getters

Os **getters** funcionam com a mesma lógia das **computeds**, podemos fazer uma **cópia** do estado para modificação sem a **mutação** do **estado**

## Estrutura da Loja

A estrutura de nossa loja é bem simples, nada distante do que já vimos no **Vue**:

**Vue**

```js
new Vue({
  data: {

  },
  methods: {

  },
  computed: {

  },
});
```

**Vuex**

```js
new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters: {

  },
});
```

* O **Vuex** **NÃO** irá substituir a estrutura dos componentes do **Vue**, é recomendável só utilizar o **Vuex** quando realmente necessitamos acessar um mesmo **conteúdo** em várias partes diferentes da **aplicação**.

Na próxima seção, iremos implementar a **loja** em nosso projeto atual, nos vemos lá!

[Próxima Seção](./2-Iniciando%20com%20Vuex.md)