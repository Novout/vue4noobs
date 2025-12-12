# Vue i18n

O [Vuei18n](https://kazupon.github.io/vue-i18n/) é um plugin para internacionalização que o **Vue** nos disponibiliza.

## Estrutura

Todas as mensagens irão ficar em arquivos como **objetos literais**

```ts
const messages = {
  en: {
    message: {
      hello: 'Hello'
    }
  },
  pt_BR: {
    message: {
      hello: 'Olá!'
    }
  }
}
```

E exibir no template como:

```ts
<p>{{ $t('message.hello') }}</p>
```

Dessa forma, tudo oque for estático em nossa aplicação irá ser exibido a partir de um objeto, então:

* É recomendável começar o projeto JÁ utilizando o i18n, pois para reestruturar tudo pode ser uma dor de cabeça

* Mensagens em certas linguagens podem ficar muito grande ou muito pequeno do que o originalmente esperado.

* Apenas utilize i18n se o seu projeto seja **REALMENTE** internacional, pois pode perder muito tempo no projeto sem necessidade.

* NÃO iremos mostrar a aplicação do i18n no nosso projeto atual pois iria precisar refazer algumas coisas, o que quebraria a ideia do curso, mas fique á vontade para utilizá-lo!

Na próxima seção iremos aplicar notificações com AWN, nos vemos lá!

[Próxima Seção](./3-VueAWN.md)