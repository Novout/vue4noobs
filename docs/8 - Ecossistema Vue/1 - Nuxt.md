# Nuxt

O [Nuxt](https://nuxtjs.org/) é uma framework **progressiva** para o **Vue**. Além de perfomático e modular ele permite o **SSR**(também é possível utilizar SPA com o Nuxt).Ele também já possui integrado o **VueRouter** e o **Vuex** com um funcionamento próprio

## Criando Projeto

Criar uma projeto **Nuxt** é bem facil, apenas utilizamos o **NPX**:

`npx create-nuxt-app <project-name>`

## Rotas

O **Nuxt** gera **automaticamente** as **rotas**, dependendo da estrutura utilizada:

pages/
  |>produto/
    |> _id.vue
  |> index.vue

Será convertido para:

```js
router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'produto',
      path: '/produto',
      component: 'pages/user/index.vue'
    },
    {
      name: 'produto_id',
      path: '/produto/:id',
      component: 'pages/produto/_id.vue'
    }
  ]
}
```

## Plugins

Para adicionar **bibliotecas externas** no **Nuxt**, podemos usar a pasta **plugins** e configurar o **nuxt.config.js**

```js
import Vue from 'vue'
import VueLib from 'vue-lib'

Vue.use(VueLib)
```

```js
export default {
  plugins: ['~/plugins/vue-lib']
}
```

Na próxima seção, iremos te apresentar o **Gridsome**, um gerador de **paginas estáticas**, nos vemos lá!