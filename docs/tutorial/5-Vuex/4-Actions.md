## Actions

Agora iremos implementar nossa **action** do **usuario**.

Primeiramente, vamos criar o **dispatch**:

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
      localStorage.setItem('AUTENTICADO', true);
      this.$store.dispatch('usuarioLogado', {
        conta: this.conta,
        senha: this.senha,
      });
      this.$router.push('/dashboard');
    },
  },
};
</script>
```

Agora precisamos criar a action **USUARIO_LOGADO** em nossa **loja**:

`./src/store/index.js`

```ts
export default new Vuex.Store({
  // ...
  actions: {
    usuarioLogado(context, usuario) {
      context.commit('usuarioLogado', usuario);
    },
  },
  // ...
});
```

* O context terá tudo o que podemos precisar para executar na nossa action, no caso estamos utilizando o `commit` que irá mandar para nossa `mutation`.

* O **usuario** é o que estamos recebendo do `dispatch`

Podemos simplificar o uso também:

```ts
export default new Vuex.Store({
  // ...
  actions: {
    usuarioLogado({ commit }, usuario) {
      commit('usuarioLogado', usuario);
    },
  },
  // ...
});
```

Na próxima seção iremos criar a nossa **mutation**, nos vemos lá!

[Próxima Seção](./5-Mutations.md)