# Getters

Os **getters** funcionam da mesma forma que as **computeds**, e no nosso caso iremos usar para concatenar a string que será exibida no nosso `/dashboard`:

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
  getters: {
    usuarioBemVindo(state) {
      return `Olá ${state.usuario.conta}!`;
    },
  },
  modules: {
  },
});
```

Dessa forma, podemos utilizar o `usuarioBemVindo` no template:

`./src/pages/Dashboard.vue`

```js
<v-list-item>
  <v-list-item-content>
    <v-list-item-title>{{ usuarioBemVindo }}</v-list-item-title>
    <v-list-item-subtitle>Drawer</v-list-item-subtitle>
  </v-list-item-content>
</v-list-item>

// ...

import { mapGetters } from 'vuex';

computed: {
  ...mapGetters(['usuarioBemVindo']),
},
```

* Trocamos o **mapState** por **mapGetters**