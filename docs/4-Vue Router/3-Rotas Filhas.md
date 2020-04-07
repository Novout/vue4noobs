# Rotas Filhas

Primeiramente, vamos criar a nossa rota `/dashboard` e sua rota **filha**:

`./src/routes.js`

```js
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Dashboard from './pages/Dashboard.vue';

import DashboardHome from './components/dashboard/DashboardHome.vue';

export default [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      { path: '/', component: DashboardHome },
    ],
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '*',
    redirect: '/',
  },
];
```

* Dessa forma, iremos ter outro **router-view**, só que esse dentro da view **dashboard**, dessa forma podermos alterar o conteúdo do dashboard mantendo o nosso **drawer**

* Como apenas estamos indo para `/dashboard`, o '/' é considerado a rota filha padrão do componente `Dashboard.vue`

Agora em `./pages/Dashboard.vue`

```js
<template>
  <v-app>
    <v-container fluid>
      <v-row
        justify="center"
        align="center"
        rows="12"
      >
        <v-col justify="center" align="start" cols="3">
          <v-card>
            <v-list class="py-0">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>He4rt Dashboard</v-list-item-title>
                  <v-list-item-subtitle>Drawer</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>

              <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                @click="redirecionar(item.href)"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.titulo }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="9" overflow>
          <router-view />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          titulo: 'Dashboard',
          icon: 'mdi-view-dashboard',
          href: '/',
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
    };
  },
  methods: {
    redirecionar(href) {
      this.$router.push(href);
    },
  },
};
</script>
```

Calma, respira fundo que iremos explicar o que está acontecendo:

* O primeiro **v-col** indica o **drawer** de itens, esse que carrega os **items** que estão em nosso **data**.

* Pela lista, estamos anexando nosso **href** para redirecionar para as rotas filhas.

* Fizemos o mesmo método que usamos na landing para **redirecionar**, existe outras formas de mudar de rota como o **replace()**, e outras manipulações como o **back()**, mas focaremos apenas no **push()** para ficar simples.

* Na outra coluna, estamos usando o **router-view** para exibir nossa rota **filha**.

No caso, a rota filha terá o seguinte conteúdo: 

`./src/components/dashboard/DashboardHome.vue`

```js
<template>
  <v-card
    class="mx-auto"
  >
    <v-container class="pa-1">
      <v-item-group
        v-model="selected"
      >
        <v-row rows="12">
          <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="12"
            md="6"
            overflow
          >
            <v-item v-slot:default="{ active, toggle }">
              <v-img
                :src="`https://cdn.vuetifyjs.com/images/${item.src}`"
                height="150"
                class="text-right pa-2"
                @click="toggle"
              >
                <v-btn
                  icon
                  dark
                >
                  <v-icon>
                    {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
                  </v-icon>
                </v-btn>
              </v-img>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'backgrounds/bg.jpg',
        },
        {
          src: 'backgrounds/md.jpg',
        },
        {
          src: 'backgrounds/bg-2.jpg',
        },
        {
          src: 'backgrounds/md2.jpg',
        },
      ],
      selected: [],
    };
  },
};
</script>
```

* Estamos fazendo um ternário para exibir o ícone correto

* Pegando o elemento da lista e **concatenando** para requisitar as **imagens**

E como resultado final, o nosso dashboard ficará assim:

<h1 align="center">
  <img src="../../assets/Vue Router/Rotas Filhas/dashboard-home.png" alt="Imagem mostrando o dashboard" width="90%">
</h1>