# Vue Resource

O **VueResource** é um http client para o **Vue**. Em uma das seções já mostramos em como configurar o **http** para utilizar junto com o **axios**, mas podemos usar o próprio **VueResource**

Instalação: `yarn add vue-resource`

## Configuração

```js
new Vue({
  http: {
    root: '/root',
    headers: {
      Authorization: 'Bearer'.
    }.
  }.
});
```

## Exemplo

```js
this.$http.get('/url')
  .then(res => {

    console.log(res.body());
  }, res => {
    console.error(err);
  }
```

Para mais detalhes sobre o **VueLoader** clique [aqui](https://github.com/pagekit/vue-resource)

Na próxima seção, iremos mostrar como utilizar o **TypeScript** no **Vue** com o auxílio do **PropertyDecorator**, nos vemos lá!