# Pinia

[Pinia](https://github.com/posva/pinia) é um gerenciador de estado que já existia para Vue 2.x, feito pelo mesmo criador do `VueRouter`, com o objetivo de trazer um gerenciador de fácil utilizar e reaproveitação, seguindo alguns padrões do `Vuex`.

## Utilização

Execute o comando:

`yarn add pinia@next`

no main.js:

```js
import { createPinia } from 'pinia';

app.use(createPinia());// sintaxe diferente de outras bibliotecas
```

Agora, vamos criar nossa primeira loja:

```js
// ./src/store/default
import { defineStore } from 'pinia';

export const useDefaultStore = defineStore({
  id: 'default',
  state: () => ({
    counter: 0,
  }),
  getters: {
    boostedCount() {
      return this.counter + Math.floor(Math.random() * 10);
    },
    // Um getter dentro do outro
    boostedCountPlusPlus() {
      return this.boostedCount + Math.floor(Math.random() * 10);
    }
  },
  actions: {
    reset() {
      this.counter = 0
    },
  },
})
```

* Não temos `mutation` no Pinia, já que podemos mutar diretamente nosso state.

* Diferente do Vuex, não precisamos centralizar nossas lojas, podendo utilizá-las diretamente nos nossos componentes.

* Cada loja é separada, mas podemos interligá-las normalmente.

* Usamos a nova sintaxe de Hook's:

```js
import { useDefaultStore } from '@/store/default'

export default defineComponent({
  setup() {
    const main = useDefaultStore() // instanciando a loja

    main.counter++; // mutando diretamente a loja antes de retornar ao template, para mutar mais de uma variável utilizamos o main.$patch({ ... })

    return {
      // retornando o state inteiro
      main,
      // apenas a um único elemento do state
      state: computed(() => main.counter),
      // apenas a um específico getter
      boosted: computed(() => main.boostedCountPlusPlus),
    }
  },
})
```

## Interligando Lojas

Podemos interligar as lojas de uma maneira muito fácil:

```js
import { defineStore } from 'pinia';
import { useUserStore } from './user';
import { useHe4rtStore } from './heart';

export const useMainStore = defineStore({
  id: 'main',
  getters: {
    member() {
      const user = useUserStore();
      const heart = useHe4rtStore();

      return `${user.name} é membro da ${heart.fullName}!`
    },
  },
})
```

* O Pinia ainda está em alpha(17/12/2020), não recomendados para utilizar em produção.

[Próxima Seção](./9%20-%20Vuetelemetry.md)
