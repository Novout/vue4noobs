# Nuxt

O [Nuxt](https://nuxtjs.org/) é uma framework **progressiva** para o **Vue**. Além de perfomático e modular ele permite o **SSR**(também é possível utilizar SPA com o Nuxt).Ele também já possui integrado o **VueRouter** e o **Vuex** com um funcionamento próprio.

## Criando Projeto

Criar uma projeto **Nuxt** é bem facil, apenas utilizamos o **NPX**:

`npx create-nuxt-app <project-name>`

* As configurações base, como `head`, `plugins` e opções gerais ficam em `nuxt.config.js` na raiz do projeto.

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

## Store

O Nuxt muda a forma de como utilizar o **Vuex**, mapeando os arquivos dentro da pasta **store**:

`store/index.js`

```js
export const state = () => ({
  grupo: "He4rt";
})

export const mutations = {
  add(state) {
    state.grupo += " Developers"
  }
}
```

## Geração Estática

Para gerarmos páginas estáticas com o **Nuxt**, executamos os seguintes passos:

1: Utilize a versão 2.14.0 ou maior
2: Coloque `target: "static"` em `nuxt.config.js`
3: Executa o comando `nuxt generate`

Para criar módulos, utilizamos `store/<nome-do-modulo>.js`:

`store/game.js`

```js
export const state = () => ({
  players: []
})
```

É a mesma coisa que:

```js
new Vuex.Store({
  modules: {
    game: {
      namespaced: true,
      state: () => ({
        players: []
      })
    }
  }
})
```

Na próxima seção, iremos te apresentar o **Gridsome**, um gerador de **paginas estáticas**, nos vemos lá!

[Próxima Seção](./2%20-%20Gridsome.md)