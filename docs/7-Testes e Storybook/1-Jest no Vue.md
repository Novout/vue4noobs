# Jest no Vue

O Vue-Tests-Utils é uma coleção de ferramentas do **Vue** para **testes**.]

Ele possui disponível os seguintes comandos:

```bash
# unit testing
vue add @vue/unit-jest

# or:
vue add @vue/unit-mocha

# end-to-end
vue add @vue/e2e-cypress

# or:
vue add @vue/e2e-nightwatch
```

## Jest

O [Jest](https://jestjs.io/pt-BR/) é um poderoso Framework de Testes em JavaScript com um foco na simplicidade. Pelo VueCLI o **Jest** já vem configurado, assim sendo temos que apenas escrever os testes!

## Adicionando no Projeto

Vamos utilizar o comando:

`vue add @vue/unit-jest`

Os arquivos gerados são:

`jest.config.js`

É na onde está o nosso preset do **JestVue**

`./tests`

É a onde ficará nossos testes do **Jest**

`./tests/unit/example.spec.js`

Todo arquivo de teste possui **spec.js**, para o **Jest** entender quais são os arquivos de **testes**.

```js
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
```

Esse teste gerado é o **default**, no caso ele **monta** o componente que deletamos no ínicio do nosso projeto, o *HelloWorld**, passa uma **propriedade** por padrão, no caso **msg**, e **espera**(expect) encontrar esse texto no **componente**.

* No nosso curso, iremos apenas mostrar como realizar testes no **Vue**, e não todo o **conceito** envolvido.Se quiser ler mais sobre, clique [aqui](https://medium.com/trainingcenter/uma-vis%C3%A3o-geral-de-testes-em-javascript-em-2018-8484154caf63).

## Criando testes

Primeiramente vamos renomear nosso arquivo para `Home.spec.js` e substituir seu conteúdo para:

```js
import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Home from '@/pages/Home.vue';

Vue.use(Vuetify); // Dessa forma, o nosso localVue irá conter o Vuetify

describe('Home', () => {
  const localVue = createLocalVue();

  const wrapper = shallowMount(Home, {
    localVue,
  });

  it('home existe', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
```

* Para rodar os testes, utiliza o comando `yarn test:unit`

* Criando o localVue podemos anexar as outras bibliotecas de nossa aplicação nos testes.

* Nesse caso, temos um teste simples se o componente é uma instância **Vue**.

* Sempre que o seu componente tiver bibliotecas externas, (Vue i18n, por exemplo), pesquise sobre como realizer os **mocks**.

* Você támbem pode fazer um **setup.js** com as configurações dos **testes**.

* É possível procurar as classes **css** com o **jest**, não dependendo do nome do **componente**.

Vamos fazer outros testes agora, um pouco mais elaborados:

## Header pertence ao componente

```js
it('header.vue está no componente', () => {
  expect(wrapper.find('.header-stub').exists());
});
```

* Todo componente que está dentro de outro nos testes **sem ser montado** possui o final **-stub**.

* Nesse teste, estamos apenas verificando se o **Header** é um componente de **Home**

## Texto do Vue4Noobs

```js
it('Vue4Noobs está sendo exibido', () => {
  const noobs = wrapper.find('p').text();
  expect(noobs).toBe('Vue4Noobs');
});
```

* Estamos esperando que o conteúdo da tag **p** seja **Vue4Noobs**.

Na próxima seção, iremos mostrar como utilizar o **Cypress** no **Vue**, nos vemos lá!

