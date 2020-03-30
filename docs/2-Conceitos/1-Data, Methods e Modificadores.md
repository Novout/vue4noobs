# Data

É o objeto de dados para a instância do Vue. O Vue converterá recursivamente suas propriedades em getters e setters para torná-lo "reativo". O objeto deve ser simples: objetos nativos, como objetos de API do navegador e propriedades de protótipo, são ignorados. Uma regra prática é que os dados devem ser apenas dados - não é recomendável observar objetos com seu próprio comportamento estável.

Agora vamos declarar o **data**

```js
<script>
export default {
  data() {
    return {
      contador: 0
    }
  }
}
</script>
```

Dessa forma, declaramos **contador** de uma forma reativa, como fala na seção passado, se **contador** for passado para uma **propriedade** e o valor de **contador** mudar, o que está sendo exibido na **propriedade** também irar mudar.

Precisamos retornar um objeto para o **data** para que cada instância possa manter uma cópia independente do objeto de dados retornado, assim mantendo a "reatividade".

No **data** podemos declarar qualquer tipo de dado(objetos, arrays, etc...)

```js
<script>
export default {
  data() {
    return {
      lista: [
        { id: 1 },
        { id: 2 },
        { id: 3 }
      ]
    }
  }
}
</script>
```

A sintaxe do **Vue** em tudo que está dentro do **export default** é baseado nos **objetos literais**

---

Na seção de **props**, passamos a string de maneira estática, mas também podemos passar dados diretamente no template:

```html
<template>
  <HelloWorld v-bind:msg="mensagem">
</template>
<script>

export default {
  data() {
    return {
      mensagem: "Hello World"
    }
  }
}
</script>
```

---

O **Vue** permite executar expressões JavaScript diretamente no template:

```html
<p>{{ concluido ? 'SIM' : 'NÃO' }}</p>
```

* No caso **concluido** pertence ao **data()**.
* Atribuições e controle de fluxo **NÃO** funcionam.

---

Podemos também preencher o que temos no **data** com dados **assíncronos** usando [LifeCycleHooks](https://br.vuejs.org/v2/guide/instance.html#Diagrama-do-Ciclo-de-Vida), mas iremos abordar esse tema mais para a frente pois precisamos ver alguns outros conceitos do **Vue** primeiramente.

## Methods

Métodos que vão juntar na instância do Vue. Você pode acessar esses métodos diretamente na instância do vue ou usá-los em expressões de diretiva. Todos os métodos terão esse contexto automaticamente vinculado à instância do Vue. O funcionamento de um **método** é basicamente ao de uma **função**, diferenciando de uma **computed** que será explicado na próxima seção.

Agora, vamos fazer um **contador** mutando a nossa variavel declarada na instância, usando **methods**:

```js
<template>
  <section>
    <button v-on:click="acrescentar()">Clique aqui</button>
    <p>Você clicou no botão {{ contador }} vezes</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contador: 0
    }
  },
  methods: {
    acrescentar() {
      this.contador++;
    }
  }
}
</script>
```

Podemos escrever **methods** de outras formas, como:

```js
<template>
  <section>
    <button v-on:click="acrescentar()">Clique aqui</button>
    <p>Você clicou no botão {{ contador }} vezes</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contador: 0
    }
  },
  methods: {
    acrescentar: function () {
      this.contador++;
    }
  }
}
</script>
```
Podemos também capturar o **event**, contendo todos os dados do emissor, ou seja, o evento do DOM nativo:

```js
<script>
export default {
  methods: {
    evento: function (event) {
      console.log(event)
    }
  }
}
</script>
```

---

Como dito na seção de fluxo e props, podemos exibir algo da instância diretamente no template.No methods podemos retornar valores para o template usando o **v-bind**.

```js
<template>
  <img v-bind:src="importLogo()">
</template>

<script>
export default {
  methods: {
    importLogo() {
      return require("@/assets/images/logo.svg")
    }
  }
}
</script>
```

## Modificadores

Para acessar variáveis que estão na instância do **data**, precisamos usar o **this**, como está sendo usado no **this.contador++**.

Usando o **v-on** podemos escutar eventos do DOM (parecido com o funcionamento do eventListener) 

O **Vue** disponibiliza **modificadores de eventos** para evitar a propagação:

```html
.stop
.prevent
.capture
.self
.once
.passive
```

Por exemplo:

```html
<form v-on:submit.prevent="submit()"></form>
```

Dessa forma, o submit não irá carregar a página devido ao **prevent**


Lembrando que a sintaxe sem o **()** também é valida:

```html
<form v-on:submit.prevent="submit"></form>
```

Também podemos acessar modificadores de teclado, como por exemplo:

```html
<input v-on:keyup.enter="submit">
```

```html
.enter
.tab
.delete
.esc
.space
.up
.down
.left
.right
```

---

Existe uma convensão de sintaxe para simplificar o **v-bind** e **v-on**

**v-on** é substituido por **@**
**v-bind** é simplificado apenas para **:**

```html
<template>
  <section>
    <button @click="submit"></button>
    <a :href="he4rt()"></a>
  </section>
</template>

<script>
export default {
  methods: {
    he4rt() {
      return "http://heartdevs.com/";
    }
  }
}
</script>
```

Mais sobre modificadores [aqui](https://br.vuejs.org/v2/guide/events.html#Modificadores-de-Evento)

---

Na próxima seção, iremos introduzir formas de manipular o que será renderizado no DOM Virtual com **v-if** e **v-for**, esperamos te ver la!