# Ionic Vue 3

O [Ionic](https://ionicframework.com/docs/vue/overview) lançou uma versão compatível com o Vue 3, trazendo uma nova forma de criar aplicativos.

## Iniciando com Ionic Vue 3.x

Primeiramente, precisamos instalar as dependência do Ionic:

`yarn global add -g @ionic/cli@latest native-run cordova-res`

ou

`npm install -g @ionic/cli@latest native-run cordova-res`

Para criar o nosso primeiro aplicatio, usamos:

`ionic start heart-project tabs --type vue --capacitor`

Devido ao [Capacitor](https://capacitorjs.com/), precisamos instalar os elementos para PWA:

`yarn add install @ionic/pwa-elements`

ou

`npm install @ionic/pwa-elements`

em nosso `main.ts`, adicionamos:

```ts
import { defineCustomElements } from '@ionic/pwa-elements/loader';

defineCustomElements(window);
```

Agora só precisamos rodar:

`ionic serve`

* Plugins externos do Ionic funcionam da mesma forma com o Vue 3.x

[Próxima Seção](./11%20-%20Obrigado.md)
