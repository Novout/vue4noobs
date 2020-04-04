# Fluxo e Props

Agora vamos falar sobre o **App.vue** e a propriedade **HelloWorld.vue**.

```html
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

## Elemento Raiz

Vamos começar pelo template, a **div** é necessaria pois o **template** pode ter apenas um item em sua raiz:

Correto:
```html
<template>
  <section>
    <p>Hello</p>
    <p>He4rt</p>
  </section>
</template>
```

Errado:
```html
<template>
  <p>Hello</p>
  <p>He4rt</p>
</template>
```

O **HelloWorld** é um componente que está sendo importado por outro componente **App.vue**, para isso, precisamos registrar o componente:

```html
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  }
}
</script>
```

## Convensões de Importanção

* Curiosidade: O **Vue** reconhece tanto **PascalCase** quanto **kebab-case** e vice-versa, exemplo:

```html
<template>
  <hello-world msg="Welcome to He4rt"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  }
}
</script>
```

## Nome do Componente

O **name** significa o nome do componente que está sendo exportado, por padrão o **Vue** exporta o nome que está descrito na extensão do arquivo, neste caso, **App** seria exportado da mesmo forma.

```js
<script>
export default {
  name: 'App'
}
</script>
```

## Propriedades

Agora vamos diretamente para o componente **HelloWorld.vue**:

```js
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
```

Vamos desconsiderar as listas, pois possuem apenas a lógica padrão do **HTML**, vamos focar no que o **Vue** disponibiliza
```js
<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>
```

Primeiramente, uma **propriedade** (props) está sendo exportada, e dentro deste objeto temas a declaração de uma prop com o nome **msg**, tendo o tipo **obrigatório** String

Dessa forma, podemos atribuir um conteúdo de um componente **pai** para o componente **filho**, assim seguindo o conceito de **componentização**

No caso de **App.vue**, estamos passando a **msg** com o tipo **String**
```html
<HelloWorld msg="Welcome to He4rt"/>
```

Como obrigatoriamente indicamos que **msg** precisa ser uma **String**, se passarmos:
```html
<hello-world v-bind:msg="1"/>
```

Irá gerar o erro, pois estamos passando um **Number**, e não uma **String**

* O **v-bind** pertence ao conceito de diretivas do **Vue**, o que estamos fazendo é ao **Vue** reconhecer o que passamos como um número e não como string, por exemplo:
```html
<HelloWorld v-bind:msg="{ hello: 'world' }">
```

Neste caso, estariamos passando um **Object**. Mais para frente do curso iremos explicar o que são as diretivas, então não se preocupe :)

* Podemos também passar para as **props** outras restrições, como **required**(boolean, se a prop será obrigatória ou não), **default**(podemos definir um valor setado em caso o componente pai não mande nenhum conteúdo da prop setada).
```js
<script>
export default {
  props: {
    msg: { 
      required: true, 
      type: String
    }
  }
}
</script>
```

Agora vamos falar sobre a **msg** sendo exibida no template
```js
<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>
```

## Interpolação

A forma de exibir conteúdo da exportação no template chamamos de **interpolação**, passando dois abre e fecha conchetes `{{ <conteudo> }}` para representar

No **Vue**, conteúdos passados por **interpolação** já são reativos, ou seja, se no **componente-pai** a **msg** for alterada durante a execução do DOM, o que está sendo exibido no template, mesmo por meio de **propriedade**, irá ser automaticamente trocada pelo novo conteúdo.

Podemos também intercalar conteúdos **estáticos** sem nenhum problema

```js
<template>
  <div>
    <h1>Hello {{ world }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    world: { 
      required: false, 
      default: "World",
      type: String
    }
  }
}
</script>
```

Recomendados que dê uma olhada melhor sobre a sintaxe dos [templates](https://br.vuejs.org/v2/guide/syntax.html#Texto).

Nos próximos capítulos, iremos introduzir conceitos do **Vue**, como **data**, **methods**, **computed** e **watch**, esperamos te ver lá :)



