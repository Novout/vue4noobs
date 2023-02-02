# Vitest

> A ferramenta de testes mais rápida!

## Antes de começar

Assim como no jest para utilizarmos o Vitest precisamos instalar o VueTestUtils, uma ferramenta que nos ajuda por meio de helpers e funcionalidades a testar e montar nossos componentes.

> pode ser utilizado yarn, npm ou pnpm

```bash
npm i @vue/test-utils
```

> apos a instalação do VueTestUtils, vamos instalar o Vitest

```bash
npm i -D vitest
```

## Oque é o Vitest ?

O Vitest é uma ferramenta de testes que utiliza o Vite como base, e por isso é muito mais rápida que o Jest, e também é muito mais simples de configurar.

## Configuração do Vitest

Para rodar os testes é necessário adicionar o seguinte script no package.json:

```json
{
  "scripts": {
    "test": "vitest",
    "coverage": "vitest run --coverage"
  }
}
```

## Como utilizar o Vitest ?

Para criar um teste com o Vitest, basta criar um arquivo com a extensão .test.ts ou .spec.ts se o seu projeto é vue + typescript dentro da pasta de testes, e dentro do arquivo, basta importar o método test do Vitest e criar um teste.

```ts
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import { describe, it, expect } from "vitest";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";

    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });

    expect(wrapper.text()).toMatch(msg);
  });
});
```

Assim como no Jest o Vitest também possui o describe e o it, e também o expect, que é o que utilizamos para fazer as asserções.

> O describe é utilizado para agrupar os testes, e o it é utilizado para criar um teste, e o expect é utilizado para fazer as asserções.

Depois de criar o teste, basta rodar o comando:

```bash
npm run test
```

## Testando componentes

Depois de entender o básico do Vitest, vamos criar um teste para um componente, para isso vamos criar um componente chamado Button.vue dentro da pasta components, e vamos criar um teste para ele.

Vamos criar um componente chamado Button.vue dentro da pasta components, e vamos criar um teste para ele.

```vue
<template>
  <div>
    <button data-testid="increment-count-button" @click="count++">
      Click me
    </button>
    <span>Count: {{ message }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  data() {
    return {
      count: 0
    };
  },

  computed: {
    message() {
      return `Count: ${this.count}`;
    }
  },

  methods: {
    increment() {
      this.count++;
    }
  }
});
</script>
```

Agora vamos criar um teste para esse componente, para isso vamos criar um arquivo chamado Button.test.ts dentro da pasta tests, e vamos criar um teste para ele.

```ts
import Vue from "vue";
import { shallowMount, Wrapper } from "@vue/test-utils";

import { describe, it, expect } from "vitest";
import Button from "@/components/Button.vue";

interface IButton extends Vue {
  message: string;
  increment: () => void;
}

describe("Button.vue", () => {
  it("should render props.msg when passed", () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        msg: "new message"
      }
    }) as Wrapper<IButton>;

    expect(wrapper.find("button").text()).toMatch("Click me");
  });

  it("should increment count when button is clicked", async () => {
    const wrapper = shallowMount(Button);

    await wrapper.find("button").trigger("click");

    expect(wrapper.vm.message).toBe("Count: 1");
  });
});
```

Que teste grande não é ? Mas vamos entender o que está acontecendo.

Primeiro vamos entender o que é o shallowMount, o shallowMount é utilizado para montar o componente, e ele recebe como parâmetro o componente que queremos montar, e também podemos passar o propsData, que é utilizado para passar os props para o componente.

Depois de montar o componente, podemos utilizar o find para encontrar um elemento dentro do componente, e também podemos utilizar o trigger para disparar um evento, e também podemos utilizar o vm para acessar os dados do componente.

### Vamos entender mais afundo o que está acontecendo no teste

> Porque fizemos uma interface para o componente ?

Porque o componente não tem tipagem, e para que possamos acessar os dados do componente, precisamos tipar o componente, e para isso criamos uma interface para o componente.

```ts
interface IButton extends Vue {
  message: string;
  increment: () => void;
}
```

Estendemos a interface do Vue para que o componente tenha acesso a todos os métodos e propriedades do Vue. E também criamos uma interface para o componente, e dentro dessa interface criamos as **`computeds`** e **`methods`** que existem no nosso componente.

> shallowMount é utilizado para montar o componente ?

Sim, o shallowMount é utilizado para montar o componente, e ele recebe como parâmetro o componente que queremos montar, e também podemos passar as props, mocks e tudo relacionado ao componente que estamos testando.

```ts
const wrapper = shallowMount(Button, {
  propsData: {
    msg: "new message"
  }
}) as Wrapper<IButton>;
```

Caso seu componente tenha contatos com Vuex ou Vuetify, você pode passar os mocks para o shallowMount, e assim você consegue testar o componente e suas dependências.

```ts
import { createLocalVue, shallowMount, Wrapper } from "@vue/test-utils";

const localVue = createLocalVue();

localVue.use(Vuetify);
localVue.use(Vuex);

describe("Button.vue", () => {
  const wrapper = shallowMount(Button, {
    localVue,
    propsData: {
      msg: "new message"
    }
  }) as Wrapper<IButton>;

  // Teste...
});
```

Dessa maneira, você consegue testar o componente com as dependências do vuex como chamadas na store, e também consegue testar o componente com o vuetify como os breaking points.

> Como acessamos os dados do componente ?

Para acessar os dados do componente, podemos utilizar o **`vm`**, e para ter acesso a todas as propriedades do componente, precisamos tipar o componente, e para isso criamos uma interface para o componente.

## Dando um passo além

### Testando renderização do componente utilizando data-testid

Para testar a renderização do componente, podemos utilizar o **`data-testid`**, e para isso precisamos adicionar o **`data-testid`** no elemento que queremos testar.

```vue
<template>
  <div>
    <button data-testid="increment-count-button" @click="count++">
      Click me
    </button>
    <span>Count: {{ message }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  data() {
    return {
      count: 0
    };
  },

  computed: {
    message() {
      return `Count: ${this.count}`;
    }
  },

  methods: {
    increment() {
      this.count++;
    }
  }
});
</script>
```

Depois de adicionar o **`data-testid`** no elemento, podemos utilizar o **`find`** para encontrar o elemento, e também podemos utilizar o **`trigger`** para disparar um evento.

```ts
import Vue from "vue";

import { describe, it, expect } from "vitest";
import { shallowMount, Wrapper } from "@vue/test-utils";

import Button from "@/components/Button.vue";

interface IButton extends Vue {
  message: string;
  increment: () => void;
}

const DATA_TEST_ID = {
  INCREMENT_COUNT_BUTTON: "[data-testid='increment-count-button']"
};

describe("Button.vue", () => {
  it("should render props.msg when passed", () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        msg: "new message"
      }
    }) as Wrapper<IButton>;

    expect(wrapper.find(DATA_TEST_ID.INCREMENT_COUNT_BUTTON).text()).toMatch(
      "Click me"
    );
  });

  it("should increment count when button is clicked", async () => {
    const wrapper = shallowMount(Button);

    await wrapper.find(DATA_TEST_ID.INCREMENT_COUNT_BUTTON).trigger("click");

    expect(wrapper.vm.message).toBe("Count: 1");
  });
});
```

Usando o data-testid, além de facilitar encontrar o elemento que você deseja testar, você também auxilia na criação de testes e2e(Cypress), pois você consegue identificar os elementos que você deseja testar.
