# Vue

Sejam bem vindos ao paper de Vue da [He4rt Developers](discord.io/He4rt), aqui nós iremos dar uma introdução ao framework **Vue**, mostrando todo o seu conceito e mostrando como utilizar de maneira efetiva.

O **Vue**(se pronuncia **view**) é um framework para a construção de sites de forma progressiva, sendo diferente de outros tipo de estrutura monolítica. O ecossistema do **Vue** é extenso posibilitando ao desenvolvedor construir aplicações de forma escalável.

## Comunidade

A comunidade do **Vue** vem crescendo cada vez mais, iremos estar disponibilizando alguns links da comunidade para auxiliar seu estudo sobre a framework.

[Fórum](https://forum.vuejs.org)

[VueJSBrasil](http://vuejs-brasil.com.br/)

[VueSchool](https://vueschool.io/)

[VueMastery](https://www.vuemastery.com)

[MadeWithVue](https://madewithvuejs.com)

[LearnVue](https://twitter.com/LearnVuejs2)

## Virtual DOM

Virtual DOM é um framework para manipulação do DOM(Document Object Model) que é utilizado pelo **Vue**, ele faz uma representação do DOM real na linguagem JavaScript, ou seja, o DOM verdadeiro é gerado a partir do DOM Virtual.Por conta disso, o **Vue** utiliza o **vue-loader** para fazer todo o ciclo do Virtual DOM e conseguir transformar no DOM final.

## VueLoader
O **vue-loader** irá analisar o arquivo, pegar cada bloco de linguagem e montá-lo de volta em um módulo CommonJs cujo module.exports seja um objeto de opções do componente **Vue.js**.

Para manipular, o **Vue** utiliza um sistemas de componentes com a extensão **.vue**. O arquivo é um formato de arquivo personalizado que usa a sintaxe parecido com o HTML para descrever um componente Vue. Cada arquivo é dividido em três partes: `<template>, <script>, <style>`.
```vue
<template>
  <div class="exemplo">He4rt Developers</div>
</template>

<script>
export default {
  ...
}
</script>

<style>
.example {
  color: purple;
}
</style>
```

Também suporta o uso de linguagens não-padrão, tais como pré-processadores CSS e linguagem que compila para HTML a partir de um template, especificando o atributo lang para um bloco de linguagem. Por exemplo, você pode usar Sass para o estilo do seu componente como este:
```vue
<template lang="pug">
</template>
<style lang="sass">
</style>
```