# Vuex Class Modules

O [Vuex Class Modules](https://github.com/gertqin/vuex-class-modules) é um pacote que traz type-safe em conjunto com o Typescript sendo simples para o **Vuex**.

Para adicionar em nosso projeto, utilize o comando `yarn add vuex-class-modules`

Com ele, conseguimos utilizar os módulos do **Vuex** de uma forma diferente:

`modulo-usuario.ts`

```ts
import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";

@Module
class ModuloUsuario extends VuexModule {
  nome = "Joãozinho123";

  get nomeInteiro() {
    return this.nome += "456789";
  }

  @Mutation
  setNome(nome: string) {
    this.nome = nome;
  }

  @Action
  async carregarUsuarioNome() {
    const { nome } = await fetchUsuario();
    this.setNome(nome);
  }
}

//Registrar o módulo
import store from "@/store";
export const moduloUsuario = new ModuloUsuario({ store, name: "usuario" });
```

`MeuComponente.vue`

```ts
import Vue from "vue";
import { ModuloUsuario } from "path/to/modulo-usuario.ts";

export class MeuComponente extends Vue {
  get nome() {
    return ModuloUsuario.nome; // -> é igual a store.state.usuario.nome
  }
  get nomeInteiro() {
    return ModuloUsuario.fullName; // -> é igual a store.getters["usuario/nomeInteiro]
  }

  mounted() {
    ModuloUsuario.carregarUsuarioNome(); // -> é igual a store.dispatch("usuario/carregarUsuarioNome")
  }
}
```

* Chamamos o this.setNome(nome) na Action pois o fluxo do Vuex necessita de commitar para a mutation, por isso não podemos fazer this.nome = nome dentro de uma action.

* Precisamos dos getters em nossos componentes pois dessa forma em caso aconteça uma mutação em nosso store em quanto um item do template está sendo exibido o seu conteúdo não fica estático e acaba sendo aplicado a mundaça no template.

[Próxima Seção](./9-AntDesignVue.md)
