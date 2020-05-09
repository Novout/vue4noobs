# Transições no VueRouter

O **VueRouter** aceita o componente **transition** nas rotas, dessa forma conseguimos fazer animações diretamente na **rota**

## VueRouter Principal

Podemos adicionar um **transition** em nosso **App.js**, por exemplo:

`./src/App.vue`

```html
<template>
  <transition name="router" mode="out-in">
    <router-view />
  </transition>
</template>

<script>
export default {};
</script>

<style scoped>
.router-enter-active, .router-leave-active {
  transition: opacity 0.2s ease;
}

.router-enter, .router-leave-to  {
  opacity: 0;
}
</style>
```

## VueRouter do Dashboard

Agora vamos implementar um efeito parecido nas rotas filhas de **dashboard**:

```html
<v-col cols="9" overflow>
  <transition name="router" mode="out-in">
    <router-view />
  </transition>
</v-col>

<style scoped>
.router-enter-active {
  animation: enter-and-leave 0.15s;
}
.router-leave-active {
  animation: enter-and-leave 0.15s reverse;
}
@keyframes enter-and-leave {
  0% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
</style>
```

No próximo capítulo iremos inicializar com **Vuex**, explicando o fluxo e implementando uma simples autenticação, nos vemos lá!

[Próxima Seção](../5-Vuex/1-Gerenciamento%20de%20Estado.md)
