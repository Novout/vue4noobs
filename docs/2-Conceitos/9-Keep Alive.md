# Keep Active

Ao alternar entre esses componentes, às vezes, precisamos manter o estado deles ou evitar a nova renderização por motivos de desempenho. Por exemplo, ao expandir um pouco a nossa interface com guias.

Por padrão, se alterarmos de um componente para outro, o componente será destruido e terá que ser criado novamente.

A recriação de componentes dinâmicos normalmente é um comportamento útil, mas se precisássemos que as instâncias de componentes fossem armazenadas em cache depois que elas fossem criadas pela primeira vez. Para resolver esse problema, podemos agrupar nosso componente dinâmico com um elemento `<keep-alive>`:

```html
<keep-alive>
  <component v-bind:is="componente"></component>
</keep-alive>
```

* Observe que o **keep-alive** exige que os componentes alternados tenham nomes globais.

## Máximo de renderizações

Podemos delimitar o numero máximo de componentes que terão sua instância salva, descartando os componentes seguindo o padrão de uma [Fila](https://www.cos.ufrj.br/~rfarias/cos121/filas.html).

```html
<keep-alive :max="3">
  <component :is="componente"></component>
</keep-alive>
```

## Limitações aos componentes

Conseguimos delimitar quais componentes terão suas instâncias salvas utilizando o **include**:

```html
<keep-alive :include="['componenteA', 'componenteB']">
  <component :is="componente"></component>
</keep-alive>
```

Na próximo seção iremos abordar sobre **mixins** no **Vue**, te esperamos lá!

[Próxima Seção](./10-Mixins.md)
