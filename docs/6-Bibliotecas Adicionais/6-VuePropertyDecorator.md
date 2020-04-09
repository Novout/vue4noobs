# Vue Property Decorator

No **Vue-CLI** é posível escolher a opção de usar o **Vue** com **Typescript**, e o [Property Decorator](https://github.com/kaorun343/vue-property-decorator) melhora esta experiência.

Exemplo:

```js
import { Vue, Component, Emit } from 'vue-property-decorator';

@Component
export default class He4rtComponent extends Vue {
  he4rt = 'He4rt';

  @Emit()
  Dev() {
    this.he4rt += ' Developers';
  }
};
```

Saiba mais sobre o **Vue** com **Typescript** clicando [aqui](https://br.vuejs.org/v2/guide/typescript.html).

Na próxima seção, iremos mostrar como utilizar o **awesome icons** no **Vue**, nos vemos lá!