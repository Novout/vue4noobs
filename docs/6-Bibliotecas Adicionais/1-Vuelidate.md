# Vuelidate

**Vuelidate** é uma biblioteca para validação dos dados de entrada **v-model**

Com ele, conseguimos fazer validação de formulários de uma forma intuitiva.

## Adicionando no Projeto

`yarn add vuelidate`

Agora utilizando o `Vue.use()` iremos registrar nossa **biblioteca**:

`./src/main.js`

```js
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './plugins/vuerouter';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuelidate);

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
```

* O **Vuelidate** não tem necessidade de registrar dentro da instância **Vue**, igual o **Vuetify**, **VueRouter** e **Vuex**.

Antes de aplicar as validações no formulário de login, vamos fazer o formulário de registrar!

``./src/routes.js`

```js
import Register from './pages/Register.vue';
// ...
{
  path: '/register',
  component: Register,
  beforeEnter: multiguard([deslogado]),
},
// ...
```

`./src/pages/Register.vue`

```js
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
                <v-toolbar-title>Cadastre sua Conta!</v-toolbar-title>
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
                  <v-text-field
                    label="Repetir Senha"
                    type="password"
                    color="deep-purple"
                    v-model="repetirSenha"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-card-text >Já possui uma conta? Clique
                  <span>
                    <router-link
                      to="/login"
                      style="text-decoration: none; color: purple">
                      aqui
                    </router-link>
                  </span>
                </v-card-text>
                <v-spacer />
                <v-btn
                  color="deep-purple"
                  dark
                  @click.prevent="enviarFormulario()"
                >Entrar
                </v-btn>
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
      repetirSenha: '',
    };
  },
  methods: {
    enviarFormulario() {},
  },
};
</script>
```

Bem parecido com o nosso **Login**, agora vamos aplicar o **Vuelidate**

## Validators

O **Vuelidate** trabalha com **validators**, ele irá **escutar** toda alteração no **v-model** e retornando **true** ou *false** dependendo do que estiver como **condição** nos **validators**

Vamos fazer o nosso **validator** do **Register.vue**:

```js
<script>
import {
  required,
  sameAs,
  minLength,
  email,
} from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      conta: '',
      senha: '',
      repetirSenha: '',
    };
  },
  validations: {
    conta: {
      email,
    },
    senha: {
      required,
      minLength: minLength(8),
    },
    repetirSenha: {
      sameAsPassword: sameAs('senha'),
    },
  },
  methods: {
    enviarFormulario() {
      if (!this.$v.$invalid) {
        // POST para a rota em uma possível API
        localStorage.setItem('AUTENTICADO', true);
        this.$store.dispatch('usuarioLogado', {
          conta: this.conta,
          senha: this.senha,
        });
        this.$router.push('/dashboard');
      }
    },
  },
};
</script>
```

* Importamos os **validators**.

* Colocamos o tipo de validação.

* Verificamos se o formulário é válido no **enviarFormulario()**.

* Também podemos utilizar as validações em nosso template:

```html
<template>
  <p v-if="!$v.senha.required">Digite a senha!</p>
</template>
```

Recomendamos FORTEMENTE que olhe a documentação do [Vuelidate](https://vuelidate.js.org/#sub-form-submission).

Na próxima seção iremos apresentar a forma de fazer **internacionalização** no **Vue**!
