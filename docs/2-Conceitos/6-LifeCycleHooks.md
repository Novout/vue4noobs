# LifeCycleHooks

Os **LifeCycleHooks** são uma parte importante para todos os componentes do **Vue**. Você geralmente precisa saber quando seu componente é criado, adicionado ao DOM, atualizado ou destruído. Os ganchos do ciclo de vida são uma janela de como a biblioteca que você está usando funciona nos bastidores e, como tal, tendem a invocar sentimentos de ansiedade ou inquietação para os recém-chegados.

<h1 align="center">
  <img src="../../assets/Conceitos/LifeCycleHooks/lifecyclehooks.png" alt="Imagem mostrando todo o funcionamento de um hook" width="70%">
</h1>

Na próxima seção iremos explicar o funcionamento de um **BusEvent**, te vemos lá!

## Inicialização

Ganchos(hooks) de criação são os primeiros ganchos que são executados em seu componente. Eles permitem que você execute ações antes mesmo de o seu componente ser adicionado ao **DOM**. Diferentemente de qualquer outro gancho, os ganchos de criação também são executados durante a renderização no servidor.

Use ganchos de criação se precisar configurar coisas em seu componente durante a renderização do cliente e a renderização do servidor.Por exemplo, não faça requisição no localStorage, você não terá acesso ao DOM ou ao elemento de montagem de destino (a instância do **Vue**) dentro dos ganchos de criação.

```html
<script>
export default {
  beforeCreate() {
    console.log('Só existe eu!');
  }
}
</script>
```

* Os **hooks** tem o funcionamento parecido com um **método**.

## Created

No hook criado, agora temos acesso aos dados reativos e os eventos. Os modelos e o DOM virtual **ainda** não foram montados ou renderizados.

```js
<script>
export default {
  data() {
    return {
      nome: "João"
    }
  }

  created() {
    console.log(`Bem-Vindo ${this.nome}`);
  }
};
</script>
```

## Mount

Hooks de montagem são geralmente os ganchos mais usados(não necessariamente da forma correta). Eles permitem que você acesse seu componente imediatamente antes e após a primeira renderização. No entanto, eles não são executados durante a renderização no servidor.

O Mount é util quando precisa acessar ou modificar o **DOM** do seu componente **imediatamente** antes ou depois da renderização inicial.

POR FAVOR(Sério mesmo): Se você precisa buscar alguns dados para o seu componente na inicialização utilize o **created** para isso, especialmente se você precisar desses dados durante a renderização no servidor(por exemplo, exibir dados em um dashboard).

A diferença do **beforeMount** e **mounted** é que temos acesso total ao elemento nativo(new Vue()), sendo **mounted** o hook mais utilizado, geralmente usado para motificar o **DOM**.

```js
<script>
export default {
  beforeMount() {
    console.log(this.$el.textContent);
  },
  mounted() {
    console.log(this.$el.textContent);
  }
}
</script>
```

## Re-render com UpdateHook

Os ganchos de atualização são chamados sempre que uma propriedade **reativa** usada por seu componente é **alterada**, ou qualquer outra coisa faz com que seja renderizada novamente. Dessa forma conseguimos trabalhar ao ciclo de **computer-render** do seu componente.

```js
<script>
export default {
  data() {
    return {
      contador: 0
    }
  },

  beforeUpdate() {
    console.log(this.contador)
  },

  created() {
    setInterval(() => {
      this.contador++
    }, 1000);
  }
}
</script>
```

## Destroy

Quando você alcança o gancho destruído, vai restar pouca coisa em seu componente. Tudo o que foi anexado a ela já foi destruído, mas você pode usar o gancho destruído para fazer alguma limpeza necessária.

```js
<script>
export default {
  destroyed() {
    console.log(this);
  }
}
</script>
```

## Outros Hook's

Existem outros dois ganchos: **activated** e **deactivated**. Estes são para componentes keep-alive, que será abordado futuramente em nosso paper. 

Na próxima seção iremos abordar sobre o **BusEvent**, uma forma para conseguirmos transitar dados de componentes filhos mantendo a persistência dos dados, nos vemos lá!