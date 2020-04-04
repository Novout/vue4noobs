# Instância Vue

Já vimos um pouco sobre a instância **new Vue**, agora vamos aprofundar mostrando os diversos recursos que o **Vue** disponibiliza para sua manipulação.

## Vue.component

Podemos definir componentes diretamente na instância utilizando o **.component**:

```js
Vue.component('card', {
  props: ['titulo'],
  template: '<p>{{ titulo }}</p>',
})
```

* O template anexa uma string ao template do componente, **NÃO** recomendamos utilizar na maioria das situações devido a **mutações** de estado.

## Vue.use

Para a utilização de plugins, utilizamos o **.use** antes ta **instanciação** do **Vue**. Vamos usar o exemplo de instalação do plugin [Vuelidate](https://vuelidate.js.org).

```js
import Vue from 'vue';
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

//...

new Vue({
  ...
});
```

## Vue.prototype

Com o **Vue** podemos criar variaveis globais para a manipulação de forma facilitada, com a convensão **$**.

```js
import Vue from 'vue';
import axios from 'axios';

Vue.http = Vue.prototype.$http = axios;

//...

new Vue({
  ...
});
```

* Dessa forma conseguimos utilizar **bibliotecas** de forma **padronizada**.

## Vue.config

Para conseguirmos alterar configurações padrões no **Vue**, utilizamos o **.config** para conseguir acessar estas configurações

```js
Vue.config.productionTip = false;

//...

new Vue({
  ...
});
```

Na próxima seção iremos explicar o funcionamento de um **BusEvent**, te vemos lá!




