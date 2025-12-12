# Vue 3

O [Novo Vue](https://github.com/vuejs/vue-next) e mais conhecido como Vue 3.x vem com a proposta de agregar maior flexibilidade e utilidades gerais aos projetos Vue, sem mudar drasticamente o Vue.

## Iniciando no Vue com Vite

Use `pnpm create vite my-vue-app --template vue`

### Construção da Instância

O nosso querido `main.js` possui diferenças:

```ts
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
```

Agora utilizamos o `createApp` para criar a nossa instância, ao invés do `new Vue`

Para acrescentar dependências, utilizamos:

```ts
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

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('foo'); // criando uma referencia

const log = () => { // criando um método
  console.log(text)
}
</script>
```

* Utilizamos o ref para criar uma referência do `text`, e retornamos o estado.

* Diferente do Vue 2.x, não temos necessidade de utilizar o `this.**`.

O setup recebe dois argumentos:

```ts
setup(props, context) {
  console.log(props);
  console.log(context);
}
```

Podemos também formar grupos de objetos com o `reactive`(anterior no Vue 2.x como Vue.observable)

```html
<script setup lang="ts">
import { reactive } from 'vue'

const state = reactive({
  nome: 'Jorge',
  idade: 20
})

const trocarNome = nome => {
  state.nome = nome
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

const count = ref(0);

const increment = () => {
  count.value++
}

const total = computed(() => 'Total é: ' + count.value)
</script>
```

### watch

Mantendo a sintaxe parecido com o Vue 2.x, o primeiro parâmetro é o que será escutado e o segundo um callback com a execução da lógica, recebendo o novo valor como parâmetro do callback:

```html
<script setup lang="ts">
// Switch básico de tema
import { ref, watch } from "vue";
import { useDefaultStore } from "@/config"; // Store usando Pinia, explicado em seções futuras
import { JsonWriteFile } from "@/services/fs"; // Serviço básico para fs/path
import { useToast } from "vue-toastification"; // vue-toastification já está pronto para Vue 3.x

const toast = useToast(); // Sintaxe de Hook, explicado na terceira seção
const store = useDefaultStore(); // Sintaxe de Hook, explicado na terceira seção
const theme = ref(store.base.theme);

watch(theme, (newTheme) => {
  newTheme === "dark" 
    ? document.querySelector("html").classList.add("dark")
    : document.querySelector("html").classList.remove("dark");

  store.base.theme = newTheme;

  const msg = newTheme === "dark" ? "Escuro" : "Claro";

  toast.success(`Tema ${msg} selecionado!`);

  JsonWriteFile("config/base.json", store.base);
});

</script>
```

### LifeCycleHooks

Temos os mesmos life cycles, só que agora na API:

```ts
<script setup lang="ts">
import { onBeforeMounted, onMounted, onUnmounted, ref } from 'vue'

const item = ref({ foo: 'bar' });

onBeforeMounted(() => {
  console.log('foo/bar/baz');
}

onMounted(() => {
  localStorage.setItem('item', JSON.stringify(item.value));
})

onUnmounted(() => {
  localStorage.removeItem('item');
})
cript>
```

### Nuxt

O [Nuxt 4](https://nuxtjs.org/) introduzou o [módulo da API de Composição](https://composition-api.nuxtjs.org/), dessa forma conseguimos utilizar as novas features em nossos projetos:

```ts
<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
</script>

<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>
```

* Se quiser se aprofundar na API, recomendamos a [documentação](https://composition-api.vuejs.org/#summary).

Na próxima seção iremos mostrar algumas mudanças para utilizar as lib's no Vue 3.x

[Próxima Seção](./2%20-%20Ecossistema.md)
