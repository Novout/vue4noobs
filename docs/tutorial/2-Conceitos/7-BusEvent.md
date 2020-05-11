# BusEvent

Dependendo da situação exige a necessidade de uma solução rápida e fácil para transmitir dados entre os componentes do **Vue**.

Existe o [Vuex](https://vuex.vuejs.org/) para gerenciamento centralizado do estado. Assim, pode fornecer ao aplicativo uma única fonte de verdade.

Mas para um aplicativo com arquitetura simples, basta comunicar-se entre componentes usando eventos. Para isso, podemos criar uma solução rápida e implementar o **EventBus**. Ele nos permite emitir um evento em um componente filho para outro componente filho(ambos possuindo o mesmo pai).

Primeiro de tudo, precisamos de um mecanismo para transferir eventos entre componentes. Devido à simplicidade do **Vue**, ele nos permite criar uma nova **instância** com facilidade:

```js
// ./src/event-bus.js
import Vue from 'vue';

const EventBus = new Vue();

export default EventBus;
```

Aqui temos um componente que importa o Vue e o EventBus. Quando o método **emitirEvento** do componente é chamado, ele emite um novo evento chamado **FORMULARIO** e passa uma carga útil junto com ele.

```js
// primeiro-componente.js
import Vue from 'vue';
import EventBus from './event-bus';

Vue.component('primeiro-componente', {
  ...
  methods: {
    emitirEvento() {
      EventBus.$emit('FORMULARIO', {
        nome: 'João',
        email: 'joao@hotmail.com'
      });
    }
  }
});
```

* O exemplo acima funcionaria normalmente em um **.vue**.

Em outro componente, podemos registrar um ouvinte que escuta o evento **FORMULARIO** a ser transportado usando o EventBus. Assim que o evento aparecer, podemos executar o JavaScript com o payLoad recebido como argumento.

```js
// segundo-componente.js
import Vue from 'vue';
import EventBus from './event-bus';
Vue.component('segundo-componente', {
  ...
  mounted () {
    EventBus.$on('FORMULARIO', payload => {
      console.log(payload.nome, payload.email);
    });
  }
});
```

E pronto! Dessa forma conseguimos comunicar dois componentes filhos se a necessidade de **anexar** o fluxo de ambos os componentes.

Para anexar os componentes:

```js
<script>
import PrimeiroComponente from './primeiro-componente';
import SegundoComponente from './segundo-componente';

export default: {
  components: {
    PrimeiroComponente,
    SegundoComponente
  }
}
</script>
```

Na próxima seção iremos de apresentar as transições, te vemos lá!

[Próxima Seção](./8-Transições.md)

