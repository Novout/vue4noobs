# Pre-Processadores

Nas seções de introdução, demos o exemplo que no **Vue** é possível utilizar pre-processadores de forma facilitada, agora iremos explicar como implementar:

* Nas opções de criação do projeto manual usando o **VueCLI**, é possivel adicionar os pre-processadores diretamente por lá.

## CSS

Vamos instalar primeiramente as dependencias necessárias:

`yarn add sass-loader node-sass --save-dev`

Dessa forma, podemos agora utilizar o sass:

```css
<style lang="sass">

</style>
```

## PugJS

`yarn add pug --save-dev`

```html
<template lang="pug">
main
  h1 {{ hello }}
</template>
```

Na próxima seção, iremos para as nossas considerações de tudo oque aprendemos sobre os conceitos base do **Vue**, te vemos lá!