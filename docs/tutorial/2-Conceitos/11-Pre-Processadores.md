# Pre-Processadores

Nas seções de introdução, demos o exemplo que no **Vue** é possível utilizar pre-processadores de forma facilitada, agora iremos explicar como implementar:

* Nas opções de criação do projeto manual usando o **VueCLI**, é possível adicionar os pre-processadores diretamente por lá.

## SCSS - SASS

Vamos instalar primeiramente as dependências necessárias:

```zsh
 yarn add sass-loader sass --save-dev
```

Dessa forma, podemos agora utilizar o sass:

```vue
<style lang="sass">

</style>
```

Para essa estilização se manter apenas no seu escopo, é necessário que você adicione o `scoped` no seu `style`:

```vue
<style lang="sass" scoped>

</style>
```

Dessa maneira o estilo que for escrito aqui não passara para outro componente.

Caso a estilização do seu componente se torne grande ou você deseja organizar melhor seus estilos é possível criar um arquivo `.scss` adicionamos como dependência:

```vue
<style src="./MyComponentStyle" lang="sass" scoped />
```

## PugJS

```zsh
  yarn add pug --save-dev
```

```html
<template lang="pug">
main
  h1 {{ hello }}
</template>
```

Na próxima seção, iremos para as nossas considerações de tudo oque aprendemos sobre os conceitos base do **Vue**, te vemos lá!

[Próxima Seção](./12-SCSS.md)
