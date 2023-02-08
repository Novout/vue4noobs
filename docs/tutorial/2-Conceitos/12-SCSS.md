# SCSS - SASS

> Preprocessador de CSS para desenvolvimento mais rápido e organizado.

## Antes de começar

Precisamos entender oque é um **Pre-Processador**.

Um pre-processador é uma ferramenta que nós permite escrever um determinado pedaço de código que será ***transpilado*** para a linguagem base deste pre-processador.

No nosso caso, escreveremos código com a syntax do **SCSS** ou **SASS** e será ***transpilado*** para **CSS** no build do código.

### Oque é SCSS e SASS ?

O **SCSS** é uma extensão do **CSS** que nos permite escrever código de forma mais organizada e com mais recursos, como por exemplo, variáveis, mixins, funções, etc.

O compilador do **SCSS** é o mesmo do **SASS** a única diferença é a syntax, no **SCSS** usamos a abertura e fechamento de tags e no **SASS** ordenação do estilo por tabulação.

EXEMPLO:

```scss
// SCSS
$color: #f00;
$size: 12px;

.box {
  color: $color;
  font-size: $size;
}
```

```sass
// SASS

$color: #f00
$size: 12px

.box
  color: $color
  font-size: $size.
```

## Instalação no seu projeto

> pode ser utilizado yarn, npm ou pnpm

```zsh
 yarn add sass-loader sass --save-dev
```

Agora em qualquer arquivo `.vue` que você queira utilizar o **SCSS** ou **SASS** basta adicionar o atributo `lang="sass"` no tag `<style>`.

```vue
<template>
  <div class="box">
    <h1>SCSS</h1>
  </div>
</template>
<style lang="sass">
  $color: #f00;
  $size: 12px;

  .box {
    color: $color;
    font-size: $size;
  }
</style>
```

## Conceitos básicos

Pelo SCSS ser um pre-processador de CSS, ele nos permite utilizar recursos do CSS e também recursos do SASS. Dessa maneira você consegue fazer migrações de projeto que hoje utilizam CSS para SCSS sem precisar reescrever todo o código.

A diferença primordial entre essas tecnologias é que o SCSS permite a criação de variáveis, mixins, funções, nesting e etc. enquanto o CSS não.
Dito isto, vamos destrinchar um pouco mais sobre cada um desses recursos.

### Variáveis

Variáveis são uma forma de armazenar valores que podem ser reutilizados em diferentes partes do código. No SCSS, as variáveis são declaradas com o símbolo `$` e podem ser utilizadas em qualquer lugar do código.

Diferente do CSS puro, o SCSS permite a criação de variáveis globais, que podem ser utilizadas em qualquer lugar do código. Para isso, basta declarar a variável fora de qualquer bloco de código.

Vamos entender primeiro como fária isso no CSS puro:

> Variáveis Globais

```css
:root {
  --color: #f00;
  --size: 12px;
}

/* Agora é possível utilizar em qualquer arquivo da aplicação */
```

> Variáveis Locais

```css
.box {
  --color: #f00;
  --size: 12px;

  color: var(--color);
  font-size: var(--size);
}

/* Agora é possível utilizar apenas dentro do bloco .box */
```

Já no SCSS, vamos utilizar bastante o conceito de módulos de estilo.
Onde cada arquivo `.vue` ou `.scss` é um módulo de estilo e não é possível e será injetado como dependência em outros arquivos.

> Modulo de variáveis (Varáveis globais)

```scss
// variables.scss

$color: #f00;
$size: 12px;
```

> Nosso componente

```scss
// box.scss

@import './variables.scss';

.box {
  color: $color;
  font-size: $size;
}

.panel {
  background-color: $color;
  margin: $size;
}
```

> Modulo do Componente (Variáveis locais)

Vamos supor que utilizaremos cores diferentes nesse contexto
das que existem no nosso módulo de variáveis.

```scss
// box.scss

@import './variables.scss';

$background: #f00; // Como foi dito lá em cima utilizaremos ``$`` para declarar variáveis.
$spacing: 5.2rem;

.box {
  color: $color;
  font-size: $size;
}

.panel {
  background-color: $background;
  margin: $spacing;
}
```

### Mixins

Mixins são uma forma de reutilizar blocos de código. No SCSS, os mixins são declarados com o símbolo `@mixin` e podem ser utilizados com o símbolo `@include`.

Vamos supor que em diversos componentes você possui a mesma lógica de estilo, por exemplo, um bloco de código que define a cor e o tamanho da fonte.

```scss
// box.scss
.box {
  color: #f00;
  font-size: 12px;
}
```

```scss
// panel.scss
.panel {
  color: #f00;
  font-size: 12px;
}
```

```scss
// card.scss
.card {
  color: #f00;
  font-size: 12px;
}
```

Em vez de repetir esse bloco de código em todos os componentes, você pode criar um mixin para reutilizar esse código, dessa forma não haverá a necessidade de reescrever o mesmo código em vários lugares e sim injetar a dependência do mixin.

> Modulo responsável por criar o mixin

```scss
// mixins.scss
@mixin default-color-and-font-size {
  color: #f00;
  font-size: 12px;
}
```

> Nossos componentes

```scss
// box.scss

@import './mixins.scss';

.box {
  @include default-color-and-font-size;
}
```

```scss
// panel.scss

@import './mixins.scss';

.panel {
  @include default-color-and-font-size;
}
```

```scss

// card.scss

@import './mixins.scss';

.card {
  @include default-color-and-font-size;
}
```

Dessa maneira você consegue reutilizar blocos de código em vários lugares do seu projeto e como a lógica está centralizada em um único lugar, você consegue alterar o código em apenas um lugar e não em vários.

### Funções

Funções são uma forma de reutilizar blocos de código que recebem parâmetros. No SCSS, as funções são declaradas com o símbolo `@function` e podem ser utilizadas com o símbolo `@return`.

O SCSS nos permite criar funções e estruturas complexas utilizando blocos condicionais e afins, esse tipo de feature é utilizada para criação de helpers de estilos.

Vamos supor que você precise criar uma função que recebe um valor em pixels e retorna o mesmo valor em rems.

```scss
// functions.scss

@function px-to-rem($px) {
  @return $px / 16px * 1rem;
}
```

> Nosso componente

```scss
// box.scss

@import './functions.scss';

.box {
  font-size: px-to-rem(12px);
}
```

Interessante, não é mesmo? Agora você pode reutilizar essa função em vários lugares do seu projeto.

Agora utilizando blocos condicionais e afins, vamos supor que você precise criar uma função que recebe um valor em pixels e retorna o mesmo valor em rems, porém, se o valor for menor que 16px, o valor retornado será 1rem.

```scss
// functions.scss

@function px-to-rem($px) {
  @if $px < 16px {
    @return 1rem;
  } @else {
    @return $px / 16px * 1rem;
  }
}
```

> Nosso componente

```scss
// card.scss

@import './functions.scss';

.footer {
  font-size: px-to-rem(20px); // 1.25rem
}

.card {
  font-size: px-to-rem(12px); // 1rem
}
```

### Nesting

O nesting é uma forma de aninhar seletores. No SCSS, o nesting é declarado com o símbolo `&`.

Vamos supor que você precise criar um componente que possui um título e um conteúdo.

```scss
// box.scss

.box {
  &__title {
    font-size: 12px;
  }

  &__content {
    font-size: 10px;
  }
}
```

> Nosso componente

```html
<div class="box">
  <h1 class="box__title">Título</h1>
  <p class="box__content">Conteúdo</p>
</div>
```

Dessa maneira você deixa o seu código mais organizado e legível, além de não precisar repetir o nome do componente em todos os seletores.

#### Nesting com variáveis

O nesting também pode ser utilizado com variáveis.

Vamos supor que você precise criar um componente que possui um título e um conteúdo, porém, o tamanho da fonte do título e do conteúdo é dinâmico.

```scss
// box.scss

$font-size: 12px;

.box {
  &__title {
    font-size: $font-size;
  }

  &__content {
    font-size: $font-size - 2px;
  }
}
```

Agora você pode alterar o valor da variável `$font-size` e o tamanho da fonte do título e do conteúdo será alterado.

Além disso também é possível se utilizar nesting em seletores *"fantasmas"* chamado de ***placeholder selectors***. Vamos falar deles na próxima seção.

```scss
// box.scss

%fonts {
  &-title {
    font-size: 12px;
  }

  &-content {
    font-size: 10px;
  }
}

.box {
  &__title {
    font-size: @extend %fonts-title;
  }

  &__content {
    font-size: @extend %fonts-content;
  }
}
```

[Próxima seção - SCSS Avançado](./13-SCSS-Avançado.md)
