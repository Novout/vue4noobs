# Transições

As transições não servem apenas para adicionar um toque bonito ao seu aplicativo(juro). Uma boa transição pode ser a diferença entre um usuário se inscrever, fazer uma compra ou sair completamente do site.

O Vue.js oferece várias maneiras de animar seu aplicativo, incluindo transições e animações CSS, e usando JavaScript para manipular o DOM durante ganchos de transição. Você pode até conectar-se a bibliotecas de terceiros, como [GSAP](https://greensock.com/gsap/) ou [VelocityJS](http://velocityjs.org/).

Uma transição ocorre quando um elemento passa de A para B. Eles estão entre dois estágios: do **estado inicial** (A) ao **estado final** (B). Eles funcionam muito bem para coisas como passar o mouse sobre links e botões ou adicionar um novo item a uma lista. O principal objetivo das transições é criar uma demonstração natural de que algo mudou. Um bom **exemplo** de uma transição no mundo real seria **portas automáticas**. Eles **começam fechados** e quando você pisa na frente deles, eles **passam** automaticamente para o estado **aberto**.

## Elementos de Transição

O **Vue** possui o elemento `<transition>` que facilita o manuseio de animações JavaScript, animações CSS e demais transições em seus elementos ou componentes.
No caso de transições CSS, o elemento `<transition>` cuida da aplicação e da não aplicação de classes. Tudo o que você precisa fazer é definir a aparência do elemento durante a transição.
Ele age como qualquer outro componente do Vue.js e você pode usar as mesmas diretivas como **v-if e **v-show**.

Para isso, o **Vue** usa **classes de transição** padrões para facilitar(talvez nem tanto) o manuseio de todo o estado da transição.

* Exemplo de uma transição simples que envolve a opacidade do elemento:

<h1 align="center">
  <img src="../../assets/Conceitos/Transições/simple_transition.png" alt="Imagem mostrando todo o funcionamento de um transition" width="70%">
</h1>

O *-active é na onde definimos o **tempo de transição** da nossa transição, e nas pontas o **estado** que irá ocorrer no começo ou no fim.

## Transições CSS

Iremos agora mostrar um exemplo na prática usando as **transições**:

```js
<template>
  <div>
    <button @click="mostrar = !mostrar">Clique aqui</button>
    <transition name="opacity">
      <p v-if="mostrar">Oiiiiiiiiiiiiiiiiiiiii</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrar: true
    }
  }
};
</script>

<style scoped>
.opacity-enter-active,
.opacity-leave-active {
  transition: opacity 1s ease;
}
.opacity-enter,
.opacity-leave-to {
  opacity: 0;
}
</style>
```

* Podemos criar nossos próprios nomes para as transições, no caso atribuimos o name="opacity", assim o **vue-loader** irá pesquisar a tag `opacity-**` para carregar as classes na transição.

* Como no nosso exemplo tanto a entrada quanto a saida possuem a mesma lógica, podemos economizar código juntando em um mesmo escopo.

* Nesse caso, omitimos o estado inicial do componente, pois se não colocarmos o **Vue** considera o estado inicial dos atributos, no caso por padrão temos a opacidade em 1.

## Animações

Assim como as transições, podemos usar **animações** de uma forma parecido em nossos componentes **transition**:

```js
<template>
  <div>
    <button @click="mostrar = !mostrar">Clique aqui</button>
    <transition name="cor">
      <p v-if="mostrar">Oiiiiiiiiiiiiiiiiiiiii</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrar: true
    };
  }
};
</script>

<style scoped>
.cor-enter-active,
.cor-leave-active {
  animation: cor 0.5s ease-in;
}

@keyframes cor {
  0% {
    color: red;
  }
  50% {
    color: blue;
  }
  100% {
    color: red;
  }
}
</style>
```

## Out-in

Utilizando o **Out-in**, podemos **esperar** a transição de um componente, assim evitando **mutações** inesperadas(na verdade, esperadas) no template:

```js
<transition name="cor" mode="out-in">
  ...
</transition>
```

## Transições entre componentes

```js
<transition name="troca" mode="out-in">
  <component v-bind:is="componente"></component>
</transition>
```

* O **component** irá buscar o nome **componente** nos componentes que estão registrados na instância.

## Transição em grupos

Quando temos mais de um elemento dentro de um **transition**(no caso mais que 1 elemento filho na transição), temos que usar o **transition-group**:

```js
<transition-group name="list" tag="p">
  <article v-for="(item, index) in lista" :key="index">
    {{ item }}
  </article>
</transition-group>
```

* No caso **item** irá assumir a tag **p** passada no **transition-group**.

## Move

Usando o **move** é aplicado diretamente um evento de transição a uma lista que possui elementos sendo alterados.
```css
.classe-move {
  transition: transform 1s;
}
```

## Transições em methods

Podemos anexar transições em nosso template:

```js
@before-enter="beforeEnter"
// ou
v-on:before-enter="beforeEnter"
methods: {
  beforeEnter(el) {
    el.style.opacity = 0
    el.style.height = 0
  }
}
```

Te esperamos na próxima seção, falaremos sobre o **Keep Alive** e como ele pode ser útil, nos vemos lá!

[Próxima Seção](./9-Keep%20Alive.md)