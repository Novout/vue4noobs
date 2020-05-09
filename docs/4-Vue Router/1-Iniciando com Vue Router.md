# Iniciando com Vue Router

**VueRouter** é o **router** oficial do **VueJS**, Por isso ele se integra profundamente ao núcleo do **Vue**. para facilitar a criação de aplicativos de página única com o **Vue**. Características incluem:

* Rotas aninhadas
* Configuração modular de roteador baseada em componente
* Parâmetros de rota, consulta
* Integração com efeitos de transição
* Controle de navegação refinado
* Links com classes CSS ativas automáticas
* Modo de histórico HTML5 ou modo de hash, com fallback automático no IE9
* Comportamento de rolagem personalizável

## Adicionando ao Projeto

Primeiramente, iremos instalar a dependência do **vue-router**.

`yarn add vue-router`

Criamos um arquivo `vuerouter.js` em `./src/plugins/vuerouter.js'` e adicionamos o seguinte:

`./src/plugins/vuerouter.js`

```js
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '../routes.js';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes,
});
```

* Estamos exportando o **VueRouter**, contendo nossas rotas e no modo [history](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations).

Agora vamos importar em nosso `main.js`.

Não acabamos ainda, vamos criar o arquivo `routes.js` na raiz do `src` que é a onde ficará a declaração de nossas rotas.

`./src/routes.js`

```js
import Home from './pages/Home.vue';

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '*',
    redirect: '/',
  },
];
```

* Se ele não encontrar a rota '/', irá para a genérica '*', que no caso dá um redirect para o próprio '/', isso será util quando tivermos mais rotas no projeto.

* Também seria possível criar um componente **Error.vue** por exemplo, e colocar no lugar do **redirect**.

Vamos transferir o nosso conteúdo de `App.vue` para `./src/pages/Home.vue`.

* Renomeie o import do **Header**:

`./src/pages/Home.vue`

```js
import Header from '../components/header/Header.vue';
```

E o novo conteúdo de `./src/App.vue` será:

```js
<template>
  <router-view />
</template>

<script>
export default {};
</script>
```

* O **router-view** é o que irá exibir a rota em que estamos, no caso '/' irá exibir a rota **Home** neste **router-view**.

A estrutura final ficou a seguinte:

<h1 align="center">
  <img src="../../assets/Vue Router/Iniciando com Vue Router/router-structure.png" alt="Imagem mostrando o resultado da estrutura" width="30%">
</h1>

Na próxima seção, iremos criar o nosso formulário de login, e a rota que ela irá redireciar, assim ensinando um pouco sobre **Navegação**, nos veremos lá!

[Próxima Seção](./2-Navegação.md)