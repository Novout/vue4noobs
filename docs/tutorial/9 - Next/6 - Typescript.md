# Typescript

Uma dos pontos bastante criticados do Vue 2.x é a falta de suporte direto ao Typescript, onde a utilização de classes com `vuex-class-modules` e `vue-class-components` era necessária, agora temos opções adicionais, principalmente devido ao Vue 3.x ser escrito no próprio Typescript.

## Configuração

Se estiver utilizando o Vue-CLI, utilizamos o comando `vue add typescript` em um projeto já existente, e agora podemos utilizar como `<script lang="ts">` em todos os componentes que quisermos usar o typescript.

Se não estiver usando o cli, recomendamos que siga a [documentação](https://v3.vuejs.org/guide/typescript-support.html#webpack-configuration)

### Props

Agora podemos tipar as props de uma forma mais direta:

```ts
import { defineComponent, computed, ref } from '@vue/composition-api'

interface User {
  firstName: string
  lastName: string
}

export default defineComponent({
  props: {
    user: {
      type: Object as () => User,
      required: true
    }
  },

  setup (props) {
    const fullName = computed(() => `${props.user.firstName} ${props.user.lastName}`)

    return { fullName }
  }
})
```

Também podemos utilizar os `PropTypes`:

```ts
import { PropType } from 'vue';

props: {
  subject: {
    type: String as PropType<string>, // string
    required: true
  },
  body: {
    type: Object as PropType<Record<any, any>>, // qualquer objeto
    required: true
  }
}
```

## Geral

O Typescript no Vue 3.x não possui limitações iguais ao Vue 2.x, podendo tipar da forma que preferir.

[Próxima Seção](./7%20-%20Vite.md)
