# SCSS Avançado

Nessa seção vamos abordar alguns conceitos mais avançados do SCSS, como extend, placeHolders, module mode e arquitetura de pastas.

## Extend

O extend é um recurso em que você replica o mesmo estilo de uma classe em outra.

Mas qual a diferença entre o @mixin e o @extend?

O mixin vai gerar uma copia daquele estilo em outro componente na hora da compilação.
Já o extends gera uma referência para a classe original.

> Mixin

```scss
/// Mixin input

@mixin placeHolder {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.classe1 {
  @include placeholder;
}
.classe2 {
  @include placeholder;
}

/// Mixin output
.classe1 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.classe2 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
```

> Extend

```scss
/// Extend input
%placeHolder {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}

.classe1 {
  @extend %placeHolder;
}

.classe2 {
  @extend %placeHolder;
}

/// Extend output
.classe1,
.classe2 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
```

Apesar do @extend ser mais simples, ele é tão poderoso quanto @mixin. Mas isso pode causar alguns problemas.

Como a classe `%placeHolder` é copiada para duas classes, elas são independentes e não se comportam como se fossem uma única classe.
Dependendo do comportamento da classe, a classe pai pode não ser a classe original.

### Quando usar ou não o @extend?

- Mixin: Utilize para gerar seu código de modo dinâmico através de variáveis;
- Extend: Utilize para elementos comuns mas que haverá pouca repetição;
- Quando for necessário criar algum tipo de automatização utilize o @mixin, caso contrario utilize o @extend, ou até mesmo os dois juntos.

## PlaceHolders

PlaceHolders ou seletores fantasmas são como classes, porém, não são geradas no CSS final. Eles são utilizados para reutilizar propriedades de um seletor em outro.

Para poder aplicar isso, precisamos utilizar o `@extend`:

```scss
// _card.scss

%default-border-style {
  border: 1px solid #ccc;
  border-radius: 5px;
}

.card {
  @extend %default-border-style;
  padding: 10px;
  background-color: #ccc;
}

.card__button {
  @extend %default-border-style;
  background-color: #ccc;
}
```

Os placeholders são muito úteis para reutilizar estilos no contexto do seu componente.

## Module Mode

A uns anos atrás foi lançado um feature no scss que é chamado de scss modules basicamente ela permite que o seu estilo funcione como um modulo da aplicação assim liberando alguns recursos interessantes.

Existem duas formas de se utilizar o sass module:

`nome.module.scss` ou `_nome.scss`

Nas duas formas você vai poder usufruir de todos os recursos do sass module.

As novidades que vieram foi justamente o ***@use*** que permite que você importe um arquivo de estilo dentro de outro, para ser utilizado naquele contexto.

***@foward*** que permite que você importe um arquivo de estilo dentro de outro e que ele seja passado para frente na importação.

### Porque o *@import* é um problema ?

Usando o ***@import*** no scss encontramos um problema, um arquivo que possui por exemplo `margin: 5rem;` no final pode ficar com `margin: 10rem;`, caso tenha alguma variável com o mesmo nome da qual alimenta aquela propriedade, visto que o ***@import*** na hora da compilação leva em consideração a ordem.

EXAMPLE:

```scss
@import "spacings"; // margin: 10rem;
@import "variables";// margin: 5rem;
@import "mixins";
@import "colors";


.container {
  margin: var(--margin); // essa margin vem do variables
}
```

Caso a gente altere a ordem de importação, na hora que ocorrer a compilação será alterado o valor.

```scss
@import "variables";// margin: 5rem;
@import "spacings"; // margin: 10rem;
@import "mixins";
@import "colors";


.container {
  margin: var(--margin); // essa margin vem do spacings
}
```

O sass compila de forma procedural, ou seja, o valor da propriedade vai ser alterado de acordo com a última variável encontrada.

### O problema que o ***@use*** e ***@foward*** resolve

#### @foward

Ele é similar ao @import, você vai passar para frente oque estiver em um contexto, não haverá sobre escrita. O ***@foward*** levará somente estruturas não complexas. Funções, mixins e blocos condicionais não serão levados para frente.

#### @use

É utilizado no contexto e recebe um namespace, então se o meu arquivo se chama util tudo que eu utilizar ali será necessário passar o util como prefixo.

EXAMPLE:

```scss
@use "_util";

.container {
  margin: util.$margin;
}
```

Caso não queria usar o namespace, esteja em processo de migração ou deseja utilizar outro nome porque o atual é grande, basta utilizar as e colocar um alias.

```scss
@use "_util" as u; // o prefixo agora é `u`
@use "_animations" as *; // não será necessário passar o namespace
```

## Arquitetura de projetos

### 7-1 Pattern

*"One file to RULE them all.

One file to FIND them.

One file to BRING them all.

And in the sass way MERGE them".*

[Esse é o pattern mais utilizado](https://sass-guidelin.es/pt/#o-padro-7-1) para desfrutar do scss modules, ou seja, o scss modules é um modo de modularizar, cada arquivo é um componente, e cada componente é um modulo. A sua estrutura é a seguinte:
abstracts, vendors, base, layout, components, pages e themes

Existem vários patterns 4-1, 5-1 etc. Tudo vai depender da sua necessidade.

```zsh
styles/
|
|– base/
|   |– _reset.scss       # Reset/normalize
|   |– _color.scss       # Paleta de cores da aplicação
|   |– _typography.scss  # Typography rules
|   |– _index.scss       # File used to import all base
|
|– layout/
|   |– _navigation.scss   # Navigation
|   |– _grid.scss         # Grid system
|   |– _header.scss       # Header
|   |– _footer.scss       # Footer
|   |– _sidebar.scss      # Sidebar
|   |– _forms.scss        # Forms
|
|– pages/                # Base views -> HOME, ABOUT, CONTACT etc.
|   |– _home.scss        # Home specific styles
|   |– _contact.scss     # Contact specific styles
|
|– themes/
|   |– _theme.scss       # Default theme
|
|– abstract/
|   |– _variables.scss   # Sass Variables
|   |– _functions.scss   # Sass Functions
|   |– _mixins.scss      # Sass Mixins
|   |– _index.scss       # File used to import all abstracts
|
`– _index.scss           # Main Sass file
```

## Próximos passos

Sua jornada não termina aqui, agora é hora de você praticar e se aprofundar mais no assunto.

> Recomendações de leitura:

- [Sass Guidelines](https://sass-guidelin.es/pt/) by *community*
- [SCSS como você nunca viu](https://dev.to/deverebor/scss-como-voce-nunca-viu-1d99) by *@deverebor*
- [Sass Basics](https://sass-lang.com/guide) by *Sass*

---

[Próxima Seção](./14-Considerações.md)
