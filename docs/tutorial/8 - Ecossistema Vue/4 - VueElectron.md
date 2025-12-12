# Vue-Electron Boilerplate

O [VueElectron](https://github.com/SimulatedGREG/electron-vue) é um boilerplate configurado para utilizar o **Vue** junto com o [Electron](https://www.electronjs.org/).

## Instalação

```bash
yarn global add vue-cli
vue init simulatedgreg/electron-vue seu-projeto
```

* Até a data quando essa seção foi feita(10/04/2020), o **Vuex** ainda não está funcionando em conjunto com o **VueElectron**.

* Recomendamos que estude sobre o **Electron** para o maior aproveitamento da plataforma.

## vue-cli-electron-builder

O Boilerplate acima está desatualizado e não é mais mantido, então recomendamos utilizar o [VueCli](https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/) para usar o electron.

A sua utilização é bem simples, em um projeto já existênte execute o comando:

`vue add electron-builder`

Dessa forma, já ira ser criado o `background.js` que é o ponto de criação da interface inicial do electron

* Podemos utilizar qualquer plugin externo como **vue-router**, **vuex**, **vuetify** e outros normalmente, diferente do boilerplate mostrado anteriormente.

* Para utilizar os renders em conjunto com a instância vue, recomendamos que olhe a [documentação](https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/configuration.html#webpack-configuration) para a sua implementação.

* O [Electron](https://www.electronjs.org/) por mais que seja sem dúvidas uma das tecnologias desktop de mais fácil implementação(se for comparado com as opções do C++) ainda sim exige um estudo a parte, a sua documentação é bem completa e possui diversos exemplos para seus recursos.

O electron-builder já vem com algumas definições de reconhecimento de sistemas e de privilégios, mas o que recomendamos dar uma olhada a fundo é nisso daqui:

```ts
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {

    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')

    win.loadURL('app://./index.html')
  }

  win.on('closed', () => {
    win = null
  })
}
```

O `win` será a nossa janela inicial, onde **BrowserWindow** é um componente do electron, e dentro das opções definimos a altura, largura e preferências da janela(no caso, a integração com o node para conseguirmos usar recursos internos, como o fs por exemplo).

* As opções adicionais do BrowserWindow estão disponíveis [aqui](https://www.electronjs.org/docs/api/browser-window).

A condição seguinte é relacionada ao modo desenvolvedor(ou não), carregando a URL de nosso html base que está em `./public/index.html`.

* Podemos chamar o electron normalmente dentro do `<script></script>` dos componentes do Vue e utilizar com os métodos, computed's normalmente, exemplo:

```ts
...
<script>
const { BrowserWindow } = require('electron').remote;

data() {
  return {
    win: BrowserWindow.getCurrentWindow();
  }
}
...
```

Diferente do Electron normal onde definimos o **build** do electron no **package.json**, aqui podemos utilizar o próprio webpack do vue.

No arquivo `vue.config.js` na raiz de nosso projeto(ou criá-lo na raiz), podemos inserir o seguinte:

```ts
module.exports = {
  // ...
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        productName: "Vue4Noobs - Electron"
      },
      mainProcessFile: "src/background.js"
    }
    // ...
  }
};
```

Dessa forma, o comando `yarn electron:build` que está em nosso **package.json** irá compilar o .exe do electron(e o instalador também).

* O `mainProcessFile` está relacionado a renderização do electron, e não da instância vue em `./src/main.js`.

* Para realizar o build, obrigatoriamente precisamos setar o `productName` nas opções.

Na próxima seção, iremos mostrar uma opção para **PWA**, te esperamos lá!

[Próxima Seção](./5%20-%20Quasar.md)
