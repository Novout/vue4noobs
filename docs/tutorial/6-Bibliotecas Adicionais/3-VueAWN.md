# Vue Awesome Notifications

O [Vue Awesome Notifications](https://f3oall.github.io/awesome-notifications/docs/toasts/general) permite criar notificações interativas para o usuário.

## Instalação no Projeto

Comando: `yarn add vue-awesome-notifications`

`./src/main.js`

```ts
import Vue from 'vue';
import VueAWN from 'vue-awesome-notifications';

Vue.use(VueAWN, {});
// ...
```

Vamos adicionar o css global:

`./src/App.vue`

```ts
<style>
@import '~vue-awesome-notifications/dist/styles/style.css';

.router-app-enter-active, .router-app-leave-active {
  transition: opacity 0.2s ease;
}
.router-app-enter, .router-app-leave-to  {
  opacity: 0;
}
</style>
```

Vamos utilizar o AWS para mostrar a verificação de nosso formulário:

`./src/pages/Register.vue`

```ts
// ...
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
    } else {
      this.$awn.alert('Formulário Inválido');
    }
  },
},
// ...
```

* Usando o **$awn** conseguimos emitir os eventos customizáveis.

Recomendamos MUITO que acesse a documentação do [AWN](https://f3oall.github.io/awesome-notifications/docs/toasts/general).

Na próxima seção, iremos mostrar como utilizar **Dark Theme** de forma facilitada no **Vue**, nos vemos lá!

* Agora iremos apenas mostrar outras bibliotecas que podem ajudar o desenvolvimento de aplicações, vamos voltar a mecher no projeto apenas na seção de **Testes e Documentação**

[Próxima Seção](./4-VueDarkMode.md)