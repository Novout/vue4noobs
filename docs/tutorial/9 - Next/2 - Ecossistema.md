# Ecossistema

Vamos demonstrar as mudanças que ocorreram nas novas versões do Vue-Router e Vuex!

## Vue-Router

Tivemos uma mudança na estrutura de base no novo [VueRouter](https://github.com/vuejs/vue-router-next) para utilizar a base:

```js
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
```

* Utilizamos `createRouter` e passamos um objeto com opções, no caso agora o `history` precisamos passar `createWebHistory` para utilizarmos o modo `history`. Temos outras opções como `createHashHistory` para usar no modo hash ou o `createMemoryHistory` para SSR.

* Se estiver utilizando `<transition>`, necessita esperar o router ficar pronto para criar a instância. Utilize `router.isReady().then(() => app.mount('#app'))` por exemplo.

Temos o `useRouter` para conseguirmos utilizar as coisas do router no setup:

```js
import { useRouter } from 'vue-next-router';

setup() {
  const router = useRouter();

  router.push({ name: 'he4rt' }));
}
```

Podemos agora criar rotas nos próprios componentes, por mais que seja um uso bem específico é uma adição muito válida:

```js
import { defineComponent } from 'vue';
import { useRouter } from 'vue-next-router';

export default defineComponent({
  setup() {
    const router = useRouter();

    const createRoute = id => {
      router.addRoute({
        path: `/he4rt/${id}`,
        name: `he4rt-${id}`,
        component: () => import('@/views/He4rt.vue');
      });
    }
  
    return { createRoute }
  }
});
```

As guardas de rota tiveram uma mudança em seu retorno, agora retornam o valor primeiramente do que o `next()`. No exemplo abaixo, podemos determinar se a rota será renderizada ou não apenas pelo retorno do booleano:

```js
router.beforeEach(() => booleanAuthenticated);
```

### Vuex

O [Vuex 4](https://github.com/vuejs/vuex) trouxe algumas novas adições:

Agora podemos utilizar o `createStore` para a loja:

```js
import { createStore } from "vuex";

export const store = createStore({
  state: {},
  mutations: {},
  actions: {}
});
```

Com o logger podemos com facilidade encontrar problemas no fluxo:

```js
import { createLogger } from 'vuex';

export const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  plugins: [
    createLogger()
  ]
});
```

[Próxima Seção](./3%20-%20Hooks.md)
