# Módulos

Não iremos aplicar os módulos do **Vuex** em nosso projeto pois ele é pequeno demais no momento para essa necessidade, mas mostrar novos recursos nunca é demais!

Os módulos do **Vuex** são basicamente "namespaces" em uma camada mais no objeto da nossa loja, assim conseguimos dividir grupos e estruturar de uma forma mais satisfatória nossos projetos.

Uma estrutura básica usando módulos:

```ts
const moduloA = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduloB = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduloA,
    b: moduloB
  }
})

store.state.a // -> Conseguimos acesso ao state do módulo 'a'
store.state.b // -> Conseguimos acesso ao state do módulo 'b'
```

* O primeiro argumento recebido é o estado local do módulo, **não o do root**. Para acessarmos o root, podemos facilmente desconstruir o objeto:

```ts
const modulo = {
  // ...
  actions: {
    actionNoModulo ({ state, commit, rootState }) {
      commit('continuar')
    }
  }
  // ...
}
```

* Sendo os getters o terceiro argumento.

* Utilizando `namespaced: true`, nossos módulos  não serão mais registrados em um namespace global, dessa forma conseguimos componentes mais independentes um do outro.

```ts
const store = new Vuex.Store({
  modules: {
    grupo: {
      namespaced: true,
      state: () => ({ he4rt: "He4rt" }), // o estado do módulo já está aninhado e não é afetado pela opção de namespace
      getters: {
        getHe4rt (state) { return state.he4rt } // -> getters['grupo/getHe4rt']
      },
      mutations: {
        setHe4rt (state) { state.he4rt += " Developers" } // -> commit('grupo/setHe4rt')
      },
    }
  }
})
```

Na próxima seção, iremos começar a mostrar bibliotecas adicionais para auxiliar o seu desenvolvimento! Nos vemos lá!

[Próxima Seção](../6-Bibliotecas%20Adicionais/1-Vuelidate.md)