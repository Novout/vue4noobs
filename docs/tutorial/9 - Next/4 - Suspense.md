# Suspense

Suspense é um recurso utilizado no React.js, sendo um recurso especial assim como o `transition` e `transition-group`, seu objetivo é ser um watcher do componente e ter as informações de carregamento. Por mais que podemos monitorar a criação de um componente pelo retorno do setup() sem a necessidade de recursos adicionais, o Suspense vem para utilizar isso de uma forma elegante e que facilite para os desenvolvedores.

Até o momento(17/12/2020), o recurso está em fase beta e não é recomendável para projetos finais.

## Utilização

```html
<template>
  <Suspense>
    <template #default>
      <ComponenteEsperado>
    </template>
    <template #fallback>
      <ComponenteCarregando>
    </template>
  </Suspense>
</template>
```

* De uma forma simples, o #default é o componente que será escutado e esperado em sua construção(finalização do hook onMounted), enquanto o #fallback é o componente que será carregado enquanto o `ComponenteEsperado` está sendo criado.

* Se o componente esperado executar um erro, podemos capturar e tratar este erro:

```html
<script>
import { ref, onErrorCaptured } from 'vue';

setup () {
  const error = ref(null);
  onErrorCaptured(e => {
    error.value = e
    return true
  })};
  return { error }
</script>
```

* Lembrando que este erro retornado é genérico, tendo a necessidade de tratar o erro de alguma forma. Como a promise irá ficar infinitamente carregando, recomendamos utilizar o v-if/v-else com um erroHandler para conseguir exibir o erro sem que a promise continue a ser carregada.

[Próxima Seção](./5%20-%20JSX.md)
