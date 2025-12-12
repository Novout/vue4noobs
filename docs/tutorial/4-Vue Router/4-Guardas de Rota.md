# Guardas de Rota

O guarda de rota irá verificar alguma condição quando alguem entrar ou sair da rota, assim podemos garantir a segurança destas.

## Guardas Globais

Primeiramente, vamos setar uma nova chave no localStorage:

`./src/pages/Login.vue`

```ts
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
      localStorage.setItem('CONTA', JSON.stringify({
        conta: this.conta,
        senha: this.senha,
      }));
      localStorage.setItem('AUTENTICADO', true);
      this.$router.push('/dashboard');
    },
  },
};
</script>
```

Adicionando o **AUTENTICADO**, podemos usá-lo para verificação.

Agora vamos utilizar o **beforeEnter** nas **rotas** para fazer uma verificação **ANTES** do usuário poder acessar a rota, ou seja, antes do **created()** ser executado.

O **beforeRouter** e **afterRouter** possuem três parâmetros por padrão: to, from e next. to e from são as referência da rota de onde está vindo(from) e para onde está indo(to). o **next** é a condição se o redirecionamento da rota continuará ou não.

`./src/routes.js`

```ts
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Dashboard from './pages/Dashboard.vue';

import DashboardHome from './components/dashboard/DashboardHome.vue';

export default [
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('AUTENTICADO')) {
        next();
      } else {
        next({
          path: '/',
        });
      }
    },
    children: [
      { path: '/', component: DashboardHome },
    ],
  },
];
```

Dessa forma, se acessarmos sem estar com autenticado, iremos ser redireciados **ANTES** de entrar na rota, evitando problemas.

* Essa é uma forma simples, o correto seria armazenar o booleano em um gerenciador de estado(Vuex) e verificar a entrada e saida de todas as rotas, vamos falar um pouco sobre quando chegarmos nas seções do Vuex.

## VueRouter Multiguard

Também podemos criar grupos de autenticação:

Adicionamos um novo package: `yarn add vue-router-multiguard`

E aplicamos no router:

```ts
import multiguard from 'vue-router-multiguard';

import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Dashboard from './pages/Dashboard.vue';

import DashboardHome from './components/dashboard/DashboardHome.vue';

const logado = (to, from, next) => {
  if (localStorage.getItem('AUTENTICADO')) {
    next();
  } else {
    next({
      path: '/',
    });
  }
};

const deslogado = (to, from, next) => {
  if (!localStorage.getItem('AUTENTICADO')) {
    next();
  } else {
    next({
      path: '/dashboard',
    });
  }
};

export default [
  {
    path: '/login',
    component: Login,
    beforeEnter: multiguard([deslogado]),
  },
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: multiguard([logado]),
    children: [
      { path: '/', component: DashboardHome },
    ],
  },
];
```

* Adicionamos o **deslogado**, pois dessa forma o usuário que já esta na aplicação não consigo acessar o login novamente.

* Futuramente iremos implementar a mesma lógica no **Header** para não exibir as opções de **entrar** e **registrar**, e sim para ir no **dashboard**.

Dessa forma podemos fazer vários tipos e reaproveitar verificações.

Na próxima seção iremos explicar um pouco sobre transições em rotas, estaremos te esperando!

[Próxima Seção](./5-Transições%20no%20VueRouter.md)
