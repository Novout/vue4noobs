# Navegação

Agora, vamos criar uma rota para `'/login`, assim criando nosso formuário:

`./src/routes.js`

```js
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';

export default [
  {
    path: '/login',
    component: Login,
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

`./src/pages/Login.vue`

```html
<template>
  <p>Olá de /login</p>
</template>

<script>
export default {};
</script>
```

Agora vamos acessar o `localhost:<PORTA>/login`

<h1 align="center">
  <img src="../../../assets/Vue Router/Navegação/login-page.png" alt="Imagem mostrando a página de login" width="20%">
</h1>

* As rotas **genéricas** sempre ficam na parte de baixo do array, pois a leitura é de cima para baixo.

Agora vamos fazer nosso **container** do login:

```html
<template>
  <v-app>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="deep-purple"
                dark
                flat
              >
                <v-toolbar-title>Formulário de Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Conta"
                    type="text"
                    color="deep-purple"
                  />
                  <v-text-field
                    label="Senha"
                    type="password"
                    color="deep-purple"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-card-text >Não possui uma conta? Clique
                  <span to="/register">
                    <router-link
                      to="/register"
                      style="text-decoration: none; color: purple">
                      aqui
                    </router-link>
                  </span>
                </v-card-text>
                <v-spacer />
                <v-btn color="deep-purple" dark>Entrar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {};
</script>
```

* Como falamos até mesmo de forma redundante, leia a documentação do Vuetify, fará muita diferença!

* Iremos utilizar o sistema de **grid** do **Vuetify** para centralizar nosso **container**

Na descrição para **registrar**, implementamos com o **router-link** para redirecionar para a rota **/registrar**, como essa rota ainda não foi implementada ela irá redireciar para '/'.

Vamos implementar o **v-model** para **escutar** os input's de dados em nosso formulário:

`./src/pages/Login.vue`

```html
<template>
  <v-app>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="deep-purple"
                dark
                flat
              >
                <v-toolbar-title>Formulário de Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Conta"
                    type="text"
                    color="deep-purple"
                    v-model="conta"
                  />
                  <v-text-field
                    label="Senha"
                    type="password"
                    color="deep-purple"
                    v-model="senha"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-card-text >Não possui uma conta? Clique
                  <span to="/register">
                    <router-link
                      to="/register"
                      style="text-decoration: none; color: purple">
                      aqui
                    </router-link>
                  </span>
                </v-card-text>
                <v-spacer />
                <v-btn color="deep-purple" dark>Entrar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      conta: '',
      senha: '',
    };
  },
};
</script>
```

* Estamos disponibilizando o código direto da estrutura visual para te mostrar novos recursos, por isso demos uma seção apenas para o Vuetify.

Para submeter nosso formulário, iremos usar a diretiva **v-on** no **form**, pois futuramente iremos fazer a validação deste formulário em nosso projeto.

`./src/pages/Login.vue`

```html
<v-btn
  color="deep-purple"
  dark
  @click.prevent="enviarFormulario()"
>Entrar
</v-btn>
```

```html
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
      console.log('TUDO CERTO!');
      console.log(JSON.parse(localStorage.getItem('CONTA')));
      this.$router.push('/dashboard');
    },
  },
};
</script>
```

* Estamos mandando os dados para o localStorage e pegando eles posteriores (não é uma boa ideia mandar a senha para o localStorage sem hash, tá?).

* Também podemos redirecionar rotas acessando o `this.$router`.

Agora com a rota, já podemos implementar na nossa landing o redirecionamento para a rota:

`./src/components/header/Header.vue`

```html
<template>
  <v-app-bar
    color="deep-purple accent-2"
    dense
    dark
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>He4rt Developers</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-menu
      left
      bottom
    >
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="({ titulo, href }, index) in itemLista"
          :key="index"
          @click="redirecionar(href)"
        >
          <v-list-item-title>{{ titulo }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      itemLista: [
        { titulo: 'Registrar', href: '/register' },
        { titulo: 'Entrar', href: '/login' },
      ],
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

Na próxima seção iremos mostrar o funcionamento de rotas filhas, implementando inicialmente um protótipo de **dashboard**, te vemos lá!

[Próxima Seção](./3-Rotas%20Filhas.md)