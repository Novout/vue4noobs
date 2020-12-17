# Hooks

Os Hooks que já tiveram uma participação no Vue 2.x e agora devido a nova composição da API sendo integrado diretamente, é uma forma de reaproveitar código, substituindo os antigos mixins.

Inspirado nos Hooks do React.js, todas as lib's compatíveis com o Vue 3.x veem com a mesma base padronização a utilizar de bibliotecas.

Já mostramos os hooks padrões, como a nova forma de utilizar os `LifeCycleHooks`, mas agora também podemos criar os nossos próprios.

## Nova Sintaxe

Diferente do Vue 2.x em que utilizamos o `this.*` para acessar os plugins internos, agora nos importamos separadamente e instânciamos o que queremos:

```js
import { defineComponent, onBeforeDestroy } from 'vue';
import { useRouter } from 'vue-router-next';

export default defineComponent({
  setup() {
    const router = useRouter(); // instanciação do router

    onBeforeDestroy(() => { // life cycle hook
      router.push('/');
    })

    return { router } // acessível ao template
  }
})
```

* Além de utilizaremos apenas o que precisamos, a grande vantagem de utilizar hook's é que podemos criar a nossa lógica de forma separada, sem ser dependente do template.

## Hooks Próprios

Podemos separar por arquivos a nossa lógica, assim conseguindo criar uma estrutura interessante nos nossos projetos:

```js
// './src/use/state.js'
import { reactive } from 'vue';

export const useState = () => {
  const state = reactive({
    value: 0
  });

  // convertendo para uma referência
  return toRefs(state)
}
// ./src/pages/home.vue
import { useState } from '@/use/state';

export default {
  setup() {
    // Diferente de desconstruir uma prop, aqui não perdemos a referência, já que estamos retornando com toRefs(...)
    const { value } = useState();

    return { value }
  }
}
```

* Uma grande vantagem dos hook's é que o nosso código fica menos poluido do que utilizar `this.*` sempre que queremos acessar um prototype.

* Em hook's assíncronos, recomendamos que tenha cuidado pois o componente não vai ser criado até a instância do setup() ser retornada, ou seja, se a promise não retornar, o componente vai ficar eternamente carregando.

* Podemos criar arquivos de hook's extensos e com qualquer recurso que o vue nos disponibiliza:

```ts
import { ref, reactive, UnwrapRef } from 'vue';

// Simulando React hook utilizando a Api de Composição do Vue em Typescript

const useStateObject = <T extends object>(entryObj: T) => {
    const obj = reactive(entryObj); // criando o objeto reativo
    const set = (valueObj: T) => { // percorrendo todas as chaves da tupla para mutar uma por uma
      Object.entries(valueObj).forEach(([key, val]) => {
          obj[key] = val;
      });
    };

    return [obj, set];
}


export const useState = <T>(entryValue: T) => {
    if (typeof entryValue === 'object') { // se for um objeto, iremos utilizar outra lógica
        return useStateObject(entryValue);
    }
    const state = ref(entryValue); // referência criada
    const set = (value: T) => { // mutando a referência
        state.value = value as UnwrapRef<T>;
    };

    return [state, set];
};
```

```ts
<template>
  <button @click.prevent='setCount(++count)'>Contador: {{ count }}</button>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useState } from '@/use/react.ts';

export default defineComponent({
  name: 'Hook',
  setup() {
    const [count, setCount] = useState(0);

    return { count, setCount };
  }
})
</script>
```

* Não é um exemplo útil na prática, já que podemos mutar o `count` diretamente pelo template, sem a necessidade do `setCount`, usamos apenas para fins didáticos.

## VueUse

Recentemente atuailizado para uma versão compatível com o Vue 3.x, temos uma gama de hook's já prontos para utilizar em nosso projeto com o [VueUse](https://github.com/antfu/vueuse)

```js
import { useMouse } from '@vueuse/core';

setup() {
  const { x, y } = useMouse(); // posição do cursor

  return { x, y }
}
```

* Recomendamos fortemente que dê uma olhada nesta lib, pois possui muitos recursos comuns e que podem te "salvar" em um futuro projeto.

[Próxima Seção](./4%20-%20Suspense.md)
