# Customização

Vamos agora customizar o nosso **tema**, para conseguirmos seguir uma padronização.

Quando instalamos o **Vuetify**, foi criado uma pasta **plugins** contendo o **vuetify.js**:

```js
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
});
```

Dentro do **Vuetify** podemos passar configurações por padrão.

Por exemplo, vamos passar o tema padrão para a aplicação:

```js
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
  },
});
```

## Cores

Podemos também customizar diretamente as **cores**:

```js
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  themes: {
    light: {
      primary: '#a142f5',
      secondary: '#f5f5f5',
      accent: '#c463e6',
      error: '#e66365',
    },
  },
  theme: {
    light: true,
  },
});
```

Dessa forma, podemos acessar as cores globais do **Vuetify** de uma forma já **definida**

Na próxima seção iremos discutir um pouco sobre o que virá nas próximas seções, te vemos lá!