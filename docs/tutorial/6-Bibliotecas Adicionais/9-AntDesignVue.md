# Ant Design Vue

[Ant](https://www.antdv.com/docs/vue/introduce/) é uma framework que possui componentes de alta qualidade para os seus projetos, sendo essa sua versão para o Vue, funcionando de uma forma diferente do [Vuetify](https://vuetifyjs.com/).

Para instalar em um projeto já existente:

`vue add ant-design`

Para um novo projeto:

`vue create antd-demo`

Apenas instalar a dependência:

`yarn add ant-design-vue`

O Ant exige que se instale os componentes, vamos usar o exemplo usando o [Botão](https://www.antdv.com/components/button/):

```js
import { Button } from 'ant-design-vue';
Vue.use(Button);
```

Na próxima seção, iremos introduzir sobre como utilizar o **Jest** no **Vue**, te vemos lá!

[Próxima Seção](../7-Testes%20e%20Storybook/1-Jest%20no%20Vue.md)
