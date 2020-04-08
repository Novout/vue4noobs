# Estrutura

Iremos melhor o nosso **store**, para a seguinte estrutura:

```js
index.js
state.js
actions.js
mutations.js
mutations_types.js
getters.js
```

`./src/store/index.js`

```js
import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  ...state,
  ...actions,
  ...mutations,
  ...getters,
});
```

Agora iremos passar o conteudo de nosso **store** para cada arquivo:

`./src/store/state.js`

```js
export default {
  state: {
    usuario: {
      conta: '',
      senha: '',
    },
  },
};
```

`./src/store/actions.js`

```js
export default {
  actions: {
    usuarioLogado(context, usuario) {
      context.commit('usuarioLogado', usuario);
    },
  },
};
```

`./src/store/getters.js`

```js
export default {
  getters: {
    usuarioBemVindo(state) {
      return `Olá ${state.usuario.conta}!`;
    },
  },
};
```

`./src/store/mutations.js`

```js
import types from './mutations_types';

export default {
  mutations: {
    [types.USUARIO_LOGADO](state, payload) {
      state.usuario = payload;
    },
  },
};
```

`./src/store/mutations_types.js`

```js
export default {
  USUARIO_LOGADO: 'USUARIO_LOGADO',
};
```

* Mapeando as mutations, conseguimos ter uma organização melhor.

No próxima capítulo iremos mostrar algumas bibliotecas que podem ser o **game changer** de seu projeto, nos vemos lá!