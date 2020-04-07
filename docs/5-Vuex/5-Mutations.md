## Mutations

Agora iremos implementar nossa **mutation** do **usuario**.

Vamos no nosso store:

`./src/store/index.js`

```js
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

Na próxima seção, iremos introduzir o conteúdo sobre **Getters**, nos vemos lá!