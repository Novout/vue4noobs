# Vue 3

O [Vue Next](https://github.com/vuejs/vue-next) e mais conhecido como Vue 3.x vem com a proposta de agregar maior flexibilidade e utilidades gerais aos projetos Vue.

## Iniciando no Vue-Next

Atualizando o [VueCLI](https://cli.vuejs.org/), já tera disponível a opção de inicializar o projeto com a versão 3.x.

Em um projeto na versão 2.x já existente, execute o comando:

`yarn add vue@next`

### Construção da Instância

O nosso querido `main.js` possui diferenças:

```js
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

Agora utilizamos o `createApp` para criar a nossa instância, ao invés do `new Vue`

Para acrescentar dependências, utilizamos:

```js
// Exemplo utilizando vuex e vue-router
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
```

## API de Composição

A API de composição é um conjunto de funções aditivas que permite uma melhor utilização em componentes. Veio com a proposta de acrescentar a experiência principalmente em projetos grandes, que exige uma modularidade e flexibilidade dos componentes maior.

A medida que os projetos de Vue 2.x vão aumentando, cada vez mais fica complicado de entender os grandes arquivos .vue do projeto, além da falta de formas de extrair a lógica entre vários componentes devido a limitação dos mixins.

### Estado Reativo

```html
<template>
  <button @click.prevent="increment">
    {{ count }}
  </button>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0);

    const increment = () => {
      count++
    }

    return {
      count,
      increment
    }
  }
}
</script>
```

* o setup() significa a mesma coisa que o antigo hook `created()`, e podemos retornar o que queremos que o template tenha acesso.

* Utilizamos o ref para criar uma referência do `count`, e retornamos o estado.

* Diferente do Vue 2.x, não temos necessidade de utilizar o `this.**`.

* Podemos mutar a variável diretamente pelo template, como: `@click="++count"`

O setup recebe dois argumentos:

```js
setup(props, context) {
  console.log(props);
  console.log(context);
}
```

Podemos também formar grupos de objetos com o `reactive`(anterior no Vue 2.x como Vue.observable)

```html
<script>
import { reactive } from 'vue'

export default {
  setup() {
    const state = reactive({
      nome: 'Jorge',
      idade: 20
    })

    const trocarNome = nome => {
      state.nome = nome
    }

    return {
      state,
      trocarNome
    }
  }
}
</script>
```

### Computed

```html
<template>
  <button @click.prevent="increment">
    {{ total }}
  </button>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const count = ref(0);

    const increment = () => {
      count++
    }

    const total = computed(() => 'Total é: ' + count)

    return {
      count,
      total,
      increment
    }
  }
}
</script>
```

### watchEffect

O watchEffect escuta todas as alterações que estão no estado reativo:

```html
<template>
  <button @click.prevent="increment">
    {{ total }}
  </button>
</template>

<script>
import { ref, computed, watchEffect } from 'vue'

export default {
  setup() {
    const count = ref(0);

    const increment = () => {
      count++
    }

    const total = computed(() => 'Total é: ' + count)

    watchEffect(() => {
      console.log(count)
    })

    return {
      count,
      total,
      increment
    }
  }
}
</script>
```

### LifeCycleHooks

Temos os mesmos life cycles, só que agora na API:

```html
<script>
import { onBeforeMounted, onMounted, onUnmounted } from 'vue'

export default {
  setup() {
    onBeforeMounted(() => {
      console.log('ainda estou montando!')
    }

    onMounted(() => {
      console.log('montado!')
    })
  
    onUnmounted(() => {
      console.log('desmontado!')
    })

    return {}
  }
}
</script>
```

Na próxima seção iremos mostrar algumas mudanças para utilizar as lib's no Vue 3.x

[Próxima Seção](./2%20-%20Ecossistema.md)
