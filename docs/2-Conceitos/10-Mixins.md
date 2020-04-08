# Mixins

Quando o seu projeto Vue começar a crescer, você pode copiar e colar os mesmos dados, métodos e observadores repetidamente, se tiver componentes semelhantes. Esse tipo de ideia "quebra" a ideia de componentização que uma framework oferece, por isso **mixins** são úteis. Claro, você pode escrever todos esses **arquivos separados** como um único componente e usar adereços para tentar personalizá-los, mas o uso desses adereços pode facilmente ficar **confuso**. 

Incrivelmente existe muitos códigos que ainda são feito com o famoso ctrc + ctrv de um componente a outro, então **recomendamos fortemente** o seu aprendizado com mixins para melhor utilização da framework.

Felizmente, os **Mixins** do **Vue** são bem simples de se usar (assim como a maioria das coisas no **Vue** comparando com outras frameworks).O componente terá acesso a todas as opções no mixin como se fosse declarado no próprio componente.

```js
// arquivo mixin.js
export default {
  data () {
    idade: 18
  },
  created() {
    console.log('Mixin existe!');
  },
  methods: {
    mostrarIdade() {
      console.log('Agora printando de uma função do mixin!');
    }
  }
}

// arquivo main.js
import mixin from './mixin.js'

new Vue({
  mixins: [mixin],
  created() {
    console.log(this.$data);
    this.mostrarIdade();
  }
});
// "Mixin existe!"
// { idade: 18 }
// "Agora printando de uma função do mixin!"
```

Dessa forma, temos acesso ao mixin apenas pelo **$data**, evitando problemas com declarações no próprio componente que está utilizando o **mixin**.

```js
// mixin.js file
export default {
  data () {
    return {
      title: 'pertenco ao mixin'
    }
  }
}
// -----------------------------------------------------------

// main.js file
import mixin from './mixin.js';
export default {
  mixins: [mixin],
  data() {
    return {
      title: '>NÃO< estou no mixin'
    }
  },
  created() {
    console.log(this.title);
  }
}
// => ">NÃO< pertenco ao mixin"
```

# Mixins Globais

Podemos criar mixins globais utilizando o **Vue.mixin**:

```js
// irá jogar o 'importante' para as opções
Vue.mixin({
  created() {
    const importante = this.$options.importante;
    if (importante) {
      console.log(importante);
    }
  }
})

new Vue({
  importante: 'he4rt'
});
// "he4rt"
```

* Quando for criar mixins globais, tome muito cuidado pelo fato de ser algo global que estará na instância sempre.

Na próxima seção, iremos ensinar a como utilizar os pre-processadores no **Vue**.