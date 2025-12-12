## Mutations

Agora iremos implementar nossa **mutation** do **usuario**.

Vamos no nosso store:

`./src/store/index.js`

```ts
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuario: {
      conta: '',
      senha: '',
    },
  },
  actions: {
    usuarioLogado(context, usuario) {
      context.commit('usuarioLogado', usuario);
    },
  },
  mutations: {
    usuarioLogado(state, payload) {
      state.usuario = payload;
    },
  },
  modules: {
  },
});
```

* O primeira argumento, **state** é a forma que iremos acessar o nosso **estado**, assim causando **mutação**.

* O segundo argumento, **payload** é tudo oque estamos recebendo da nossa **action**.

Causando mutação, o estado irá emitir o evento para o **mapState** (podemos também acessar a loja diretamente por this.$store.state.usuario, por exemplo).

Acessando o `/dashboard`, poderá ver que nosso `Olá ...` voltou a funcionar!

* IMPORTANTE!: A loja só ira **existir** em quanto o usuario estiver navegando, ele NÃO possui o mesmo funcionamento do **localStorage**. Uma forma de resolver esse problema é sempre que App.vue for construido, requisitar o localStorage que está com o id do usuário, buscar o usuário na API e dar **dispach** para o **Vuex**, assim conseguimos fazer que a conta do usuário seja lembrada até ele querer deslogar.

Exemplo:

`./src/App.vue`

```ts
<template>
  <transition name="router" mode="out-in">
    <router-view />
  </transition>
</template>

<script>
export default {
  mounted() {
    const id = localStorage.getItem('ID');
    this.$http.get('/users', { headers: id })
    .then(res => {
      this.$store.dispatch('USUARIO', res.data());
    })
    .catch(err => {
      console.error(err);
    })
  },
};
</script>
```

* Iremos ensinar a como configurar o **axios** e até mesmo usar o **http** padrão do **Vue**, não se preocupe.

Na próxima seção, iremos introduzir o conteúdo sobre **Getters**, nos vemos lá!

[Próxima Seção](./6-Getters.md)