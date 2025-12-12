# Vue Awesome Icons

O [Vue FontAwesome](https://github.com/FortAwesome/vue-fontawesome) é o port do conhecido [FontAwesome](https://fontawesome.com/icons?d=gallery), assim conseguimos utilizar as fontes no **Vue**:

```ts
yarn add @fortawesome/fontawesome-svg-core
yarn add @fortawesome/free-solid-svg-icons
yarn add @fortawesome/vue-fontawesome
```

O exemplo recomendado:

```ts
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserSecret);

Vue.component('font-awesome-icon', FontAwesomeIcon);
```

* Registrando o componente **font-awesome-icon** podemos usá-lo em nosso template:

```html
<font-awesome-icon icon="user-secret" />
```

* Para usar os ícones sem ser em usa versão default(solid), verifique a documentação.

* Registre os ícones usando o `library.add(faIcone)`

Na próxima seção, iremos introduzir sobre como utilizar o **Jest** no **Vue**, te vemos lá!

[Próxima Seção](./8-VuexClassModules.md)
