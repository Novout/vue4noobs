## CSS

O **CSS** no **Vue** não se diferencia muito do **CSS** utilizado normalmente, apenas com algumas modificações.

## Scoped

Quando uma tag `<style>` tem o atributo scoped (`<style scoped>`), o seu **CSS** irá ser aplicado apenas no componente atual de uma forma parecida com o **Shadow DOM**. 

```html
<style scoped>
.container {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <section class="container">
    <p>He4rt Developers</p>
  </section>
</template>
```

Dessa forma, irá ser feito um "hash" do componente para o **DOM final** (ou seja, depois de ser transformado pelo **Virtual DOM**).

Exemplo:

```css
.container[data-v-f84hf]
```

* Você consegue observar isso facilmente olhando o html final no console de desenvolvedor.

## Module

Módulos CSS é um sistema para modularização e composição de CSS no **Vue**. O **vue-loader** fornece integração de alto nível com módulos CSS como uma alternativa para parecida com a de escopos **CSS**.

```html
<style module>
.container {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <section :class="$style.container">
    <p>He4rt Developers</p>
  </section>
</template>
```

Por conta da propriedade ser computada, é possível utilizar usando o **v-bind**

```html
<button :class="[$style.button, $style.button--red]">
  Botão vermelho
</button>
```

## Estilos anexados

Existe outras formas de utilziar o **v-bind** para anexar nossos estilos:

Objeto:

```html
<template>
  <div v-bind:style="{ color: cor }"></div>
</template>

<script>
export default {
  data() {
    return {
      cor: 'yellow',
    }
  }
};
</script>
```

Array(mostrado anteriormente em **module**):

```html
<div v-bind:style="[button, button--red]"></div>
```

Valores múltiplos(Vue v2.3.0+):

```html
<div v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```

[Próxima Seção](./5-Instância%20Vue.md)