# States

Agora, vamos implementar o objeto **usuario**, para conseguirmos ter todos os dados sem precisar requisitar novamente a **API**.

Primeiramente, vamos criar em nosso estado:

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
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
```

* O estado do **Vuex** é criado **junto** com o que será montado na instância, no nosso caso **App.js**, então é possivel requisitar o localStorage diretamente, por exemplo:

```js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    autenticado: localStorage.getItem('AUTENTICADO') || '',
  },
});
```

## mapState

Para conseguirmos acessar no template, iremos utilizar o **mapState**:

```js
import { mapState } from 'vuex';

export default {
  // ...
  computed: {
    ...mapState(['usuario']);
  },
};
```

* Estamos desconstruindo para conseguirmos utilizar outros conteúdos na nossa **computed**

* o **mapState** precisa ficar na **computed** para que quando o valor que está no **store** for mudado, o **mapState** consiga escutar a alteração e exibir em tempo real no template.

## Aplicando no Projeto

Em nossa aplicação, iremos retirar o nosso localStorage com os dados do usuário e substituir para o nosso usuário do estado:

`./src/pages/Login.vue`

```js
<script>
export default {
  data() {
    return {
      conta: '',
      senha: '',
    };
  },
  methods: {
    enviarFormulario() {
      // validação futura
      // GET para a rota em uma possível API
      localStorage.setItem('AUTENTICADO', true);
      this.$router.push('/dashboard');
    },
  },
};
</script>
```

`./src/pages/Dashboard.vue`

```js
<v-list-item>
  <v-list-item-content>
    <v-list-item-title>Olá {{ usuario.conta }}!</v-list-item-title>
    <v-list-item-subtitle>Drawer</v-list-item-subtitle>
  </v-list-item-content>
</v-list-item>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      items: [
        {
          titulo: 'Dashboard',
          icon: 'mdi-view-dashboard',
          href: '/dashboard',
        },
        {
          icon: 'mdi-inbox',
          titulo: 'Inbox',
          href: '/dashboard/inbox',
        },
        {
          icon: 'mdi-star',
          titulo: 'Star',
          href: '/dashboard/star',
        },
        {
          icon: 'mdi-send',
          titulo: 'Send',
          href: '/dashboard/send',
        },
        {
          icon: 'mdi-email-open',
          titulo: 'Drafts',
          href: '/dashboard/drafts',
        },
      ],
      color: 'primary',
      right: true,
      miniVariant: false,
      expandOnHover: false,
      background: false,
    };
  },
  methods: {
    redirecionar(href) {
      this.$router.push(href);
    },
  },
  computed: {
    ...mapState(['usuario']),
  },
};
</script>
```

* Vamos exibir agora no template pelo `usuario.conta` e não por `conta`

Podemos buscar outros conteúdos que estão no estado, por exemplo:

```js
computed: {
  ...mapState([
    'a'
    'b',
    'c',
  ]),
},
```
Na próxima seção iremos implementar o **dispatch** no Login, nos vemos lá!


