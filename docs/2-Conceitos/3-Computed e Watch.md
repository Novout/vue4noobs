# Computed

As **expressões** no template são muito convenientes, mas são destinadas a operações simples. Colocar muita lógica em seus modelos pode torná-los inchados e difíceis de manter. Por exemplo:

```html
<section>
  {{ message.toLowerCase().split('').reverse().join('') }}
</section>
```

Neste ponto, o modelo **não** é mais simples e declarativo. Você precisa examiná-lo por um segundo antes de perceber que ele exibe a mensagem ao contrário. O problema é agravado quando você deseja incluir a mensagem invertida em seu modelo mais de uma vez.

É por isso que, para qualquer lógica complexa, você deve usar uma **propriedade computada**(computed properties):

```js
<template>
  <div id="example">
    <p>Mensagem inicial: "{{ hello }}"</p>
    <p>Mensagem computada: "{{ helloInvertido }}"</p>
  </div>
</template>


<script>
export default {
  data() {
    return {
      hello: 'Hello'
    }
  },
  computed: {
    helloInvertido() {
      return this.hello.toLowerCase().split('').reverse().join('')
    }
  }
}
</script>
```

O **Vue** está ciente de que **vm.helloInvertido** depende de **vm.hello**, portanto, ele atualizará todas as ligações que dependem de **vm.helloInvertido** quando o **vm.hello** for alterado. E a melhor parte é que criamos esse relacionamento de dependência declarativamente: a função getter acaba não tem efeitos colaterais, o que facilita a compreensão.

---

## Computed x Methods


Em vez de uma propriedade computada, podemos definir a mesma função no formato de um **method**. Para o resultado final, as duas abordagens são exatamente iguais. No entanto, a diferença é que as propriedades calculadas são armazenadas em cache com base em suas dependências reativas. Uma propriedade computada somente reavaliará quando algumas de suas dependências reativas forem alteradas. 

Isso significa que, enquanto a mensagem não tiver sido alterada, o acesso múltiplo à propriedade computada reversedMessage retornará imediatamente o resultado calculado anteriormente sem precisar executar a função novamente.

```html
<template>
  <p>Computed reversed message: "{{ helloInvertido() }}"</p>
</template>


<script>
export default {
  data() {
    return {
      hello: "Hello"
    };
  },
  methods: {
    helloInvertido() {
      return this.hello.toLowerCase().split("").reverse().join("");
    }
  }
};
</script>
```

Também podemos usar **methods** dentro de **computeds** normalmente:

```html
<template>
  <main>
    <form>
      <input v-model="nome" type="text">
      <input v-model="senha" type="password">
    </form>
    {{ validacao }}
  </main>
</template>


<script>
export default {
  data() {
    return {
      nome: "",
      senha: ""
    };
  },
  methods: {
    validarFormulario() {
      return this.nome.includes("João") && this.senha.length >= 7;
    }
  },
  computed: {
    validacao() {
      return this.validarFormulario()
        ? this.nome.toUpperCase()
        : this.nome.toLowerCase();
    }
  }
};
</script>
```

---

Podemos usar as **computeds** em conjunto com o **v-bind**, além de outras **diretivas**:

```html
<template>
  <div v-bind:class="tipo"></div>
</template>


<script>
export default {
  data() {
    return {
      ativo: true,
      error: {
        descricao: 'fatal'
      }
    }
  },
  computed: {
    tipo() {
      return {
        'texto--ativo': this.ativo && !this.error,
        'texto--erro': this.error.descricao === 'fatal'
      }
    }
  }
};
```

## Watch

Embora as propriedades calculadas sejam mais apropriadas na maioria dos casos, há momentos em que um observador personalizado é necessário. É por isso que o Vue fornece uma maneira mais genérica de reagir às alterações de dados por meio da opção de exibição. Isso é mais útil quando você deseja executar operações assíncronas ou caras em resposta à alteração de dados:

```html
<template>
  <main>
    <form>
      <input v-model="nome" type="text">
    </form>
  </main>
</template>


<script>
export default {
  data() {
    return {
      nome: ""
    };
  },
  watch: {
    nome: function(novoNome, velhoNome) {
      if (this.nome.includes("João")) {
        this.nome = "João Cardoso";
      }
    }
  }
};
</script>
```

* Os **Watchers** são recomendados para usar quando a necessidade de utilizar código **assíncrono** e quando não há necessidade de **retorno**.

Na próxima seção iremos abordar o funcionamento do **CSS** no **Vue**, te vemos lá!

[Próxima Seção](./4-CSS.md)