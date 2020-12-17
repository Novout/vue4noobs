# JSX

Um recurso que já existia no Vue 2.x, agora podemos de uma forma mais complementada em utilizar o tão famoso [JSX](https://github.com/vuejs/jsx-next), onde instânciamos um `defineComponent` e executamos o template dentro do próprio componente.

## Instalação

Execute o comando:

`npm install @vue/babel-plugin-jsx -D`

e no seu .babelrc na raíz do projeto:

```jsx
{
  "plugins": ["@vue/babel-plugin-jsx"]
}
```

* Também podemos utilizar o JSX com Typescript(TSX)

Exemplo básico:

```jsx
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  render() {
    return (
      <>
        <router-view />
      </>
    )
  }
});
```

Podemos utilizar diretamente pelo retorno do setup():

```jsx
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    return () => (
      <>
        <router-view />
      </>
    )
  }
});
```

## Diretivas e Modificadores

A sintaxe acaba mudando, ficando readaptada para o JSX:

```jsx
```jsx
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  render() {
    return (
      <>
        <router-view />
      </>
    )
  }
});
```

Podemos utilizar diretamente pelo retorno do setup():

```jsx
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    let show = ref(false);

    const toggleBestGroup = () => show.value = !show.value;

    return () => (
      <>
        <button onClick={toggleBestGroup}>Clique Aqui</button>
        <span v-show={show}>Olá He4rt!</span>
      </>
    )
  }
});
```

* Utilizando o V-Model:

```jsx
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    let text = ref("");

    return () => (
      <>
        <input vModel={text} type="text"></input>
        <span>{text}</span>
      </>
    )
  }
});
```

## Usando Componentes

Não precisamos importar os componentes com `components: {...}`, podendo utilizar diretamente:

```jsx
import { ref, defineComponent } from "vue";
//...
const Header = defineComponent({...});
//...
const Content = defineComponent({...});
//...
export default defineComponent({
  name: "App",
  setup() {
    return () => (
      <>
        <Header />
        <Content />
      </>
    )
  }
});
```

[Próxima Seção](./6%20-%20Typescript.md)
