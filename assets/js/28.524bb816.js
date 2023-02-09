(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{410:function(s,a,t){"use strict";t.r(a);var e=t(43),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"scss-avancado"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scss-avancado"}},[s._v("#")]),s._v(" SCSS Avançado")]),s._v(" "),t("p",[s._v("Nessa seção vamos abordar alguns conceitos mais avançados do SCSS, como extend, placeHolders, module mode e arquitetura de pastas.")]),s._v(" "),t("h2",{attrs:{id:"extend"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extend"}},[s._v("#")]),s._v(" Extend")]),s._v(" "),t("p",[s._v("O extend é um recurso em que você replica o mesmo estilo de uma classe em outra.")]),s._v(" "),t("p",[s._v("Mas qual a diferença entre o @mixin e o @extend?")]),s._v(" "),t("p",[s._v("O mixin vai gerar uma copia daquele estilo em outro componente na hora da compilação.\nJá o extends gera uma referência para a classe original.")]),s._v(" "),t("blockquote",[t("p",[s._v("Mixin")])]),s._v(" "),t("div",{staticClass:"language-scss extra-class"},[t("pre",{pre:!0,attrs:{class:"language-scss"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// Mixin input")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@mixin")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("placeHolder ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -webkit-box"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -ms-flexbox"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -webkit-flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".classe1 ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@include")]),s._v(" placeholder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".classe2 ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@include")]),s._v(" placeholder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// Mixin output")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".classe1 ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -webkit-box"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -ms-flexbox"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -webkit-flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".classe2 ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -webkit-box"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -ms-flexbox"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -webkit-flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("Extend")])]),s._v(" "),t("div",{staticClass:"language-scss extra-class"},[t("pre",{pre:!0,attrs:{class:"language-scss"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// Extend input")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[t("span",{pre:!0,attrs:{class:"token placeholder"}},[s._v("%placeHolder")]),s._v(" ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -webkit-box"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -ms-flexbox"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -webkit-flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".classe1 ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@extend")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token placeholder selector"}},[s._v("%placeHolder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".classe2 ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@extend")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token placeholder selector"}},[s._v("%placeHolder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// Extend output")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".classe1,\n.classe2 ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -webkit-box"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -ms-flexbox"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -webkit-flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("Apesar do @extend ser mais simples, ele é tão poderoso quanto @mixin. Mas isso pode causar alguns problemas.")]),s._v(" "),t("p",[s._v("Como a classe "),t("code",[s._v("%placeHolder")]),s._v(" é copiada para duas classes, elas são independentes e não se comportam como se fossem uma única classe.\nDependendo do comportamento da classe, a classe pai pode não ser a classe original.")]),s._v(" "),t("h3",{attrs:{id:"quando-usar-ou-nao-o-extend"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quando-usar-ou-nao-o-extend"}},[s._v("#")]),s._v(" Quando usar ou não o @extend?")]),s._v(" "),t("ul",[t("li",[s._v("Mixin: Utilize para gerar seu código de modo dinâmico através de variáveis;")]),s._v(" "),t("li",[s._v("Extend: Utilize para elementos comuns mas que haverá pouca repetição;")]),s._v(" "),t("li",[s._v("Quando for necessário criar algum tipo de automatização utilize o @mixin, caso contrario utilize o @extend, ou até mesmo os dois juntos.")])]),s._v(" "),t("h2",{attrs:{id:"placeholders"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#placeholders"}},[s._v("#")]),s._v(" PlaceHolders")]),s._v(" "),t("p",[s._v("PlaceHolders ou seletores fantasmas são como classes, porém, não são geradas no CSS final. Eles são utilizados para reutilizar propriedades de um seletor em outro.")]),s._v(" "),t("p",[s._v("Para poder aplicar isso, precisamos utilizar o "),t("code",[s._v("@extend")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-scss extra-class"},[t("pre",{pre:!0,attrs:{class:"language-scss"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// _card.scss")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[t("span",{pre:!0,attrs:{class:"token placeholder"}},[s._v("%default-border-style")]),s._v(" ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1px solid #ccc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-radius")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 5px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".card ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@extend")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token placeholder selector"}},[s._v("%default-border-style")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("padding")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #ccc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".card__button ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@extend")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token placeholder selector"}},[s._v("%default-border-style")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #ccc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("Os placeholders são muito úteis para reutilizar estilos no contexto do seu componente.")]),s._v(" "),t("h2",{attrs:{id:"module-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#module-mode"}},[s._v("#")]),s._v(" Module Mode")]),s._v(" "),t("p",[s._v("A uns anos atrás foi lançado um feature no scss que é chamado de scss modules basicamente ela permite que o seu estilo funcione como um modulo da aplicação assim liberando alguns recursos interessantes.")]),s._v(" "),t("p",[s._v("Existem duas formas de se utilizar o sass module:")]),s._v(" "),t("p",[t("code",[s._v("nome.module.scss")]),s._v(" ou "),t("code",[s._v("_nome.scss")])]),s._v(" "),t("p",[s._v("Nas duas formas você vai poder usufruir de todos os recursos do sass module.")]),s._v(" "),t("p",[s._v("As novidades que vieram foi justamente o "),t("em",[t("strong",[s._v("@use")])]),s._v(" que permite que você importe um arquivo de estilo dentro de outro, para ser utilizado naquele contexto.")]),s._v(" "),t("p",[t("em",[t("strong",[s._v("@foward")])]),s._v(" que permite que você importe um arquivo de estilo dentro de outro e que ele seja passado para frente na importação.")]),s._v(" "),t("h3",{attrs:{id:"porque-o-import-e-um-problema"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#porque-o-import-e-um-problema"}},[s._v("#")]),s._v(" Porque o "),t("em",[s._v("@import")]),s._v(" é um problema ?")]),s._v(" "),t("p",[s._v("Usando o "),t("em",[t("strong",[s._v("@import")])]),s._v(" no scss encontramos um problema, um arquivo que possui por exemplo "),t("code",[s._v("margin: 5rem;")]),s._v(" no final pode ficar com "),t("code",[s._v("margin: 10rem;")]),s._v(", caso tenha alguma variável com o mesmo nome da qual alimenta aquela propriedade, visto que o "),t("em",[t("strong",[s._v("@import")])]),s._v(" na hora da compilação leva em consideração a ordem.")]),s._v(" "),t("p",[s._v("EXAMPLE:")]),s._v(" "),t("div",{staticClass:"language-scss extra-class"},[t("pre",{pre:!0,attrs:{class:"language-scss"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spacings"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// margin: 10rem;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"variables"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// margin: 5rem;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mixins"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"colors"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("var")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("--margin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// essa margin vem do variables")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("Caso a gente altere a ordem de importação, na hora que ocorrer a compilação será alterado o valor.")]),s._v(" "),t("div",{staticClass:"language-scss extra-class"},[t("pre",{pre:!0,attrs:{class:"language-scss"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"variables"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// margin: 5rem;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spacings"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// margin: 10rem;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mixins"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"colors"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("var")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("--margin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// essa margin vem do spacings")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("O sass compila de forma procedural, ou seja, o valor da propriedade vai ser alterado de acordo com a última variável encontrada.")]),s._v(" "),t("h3",{attrs:{id:"o-problema-que-o-use-e-foward-resolve"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#o-problema-que-o-use-e-foward-resolve"}},[s._v("#")]),s._v(" O problema que o "),t("em",[t("strong",[s._v("@use")])]),s._v(" e "),t("em",[t("strong",[s._v("@foward")])]),s._v(" resolve")]),s._v(" "),t("h4",{attrs:{id:"foward"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#foward"}},[s._v("#")]),s._v(" @foward")]),s._v(" "),t("p",[s._v("Ele é similar ao @import, você vai passar para frente oque estiver em um contexto, não haverá sobre escrita. O "),t("em",[t("strong",[s._v("@foward")])]),s._v(" levará somente estruturas não complexas. Funções, mixins e blocos condicionais não serão levados para frente.")]),s._v(" "),t("h4",{attrs:{id:"use"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use"}},[s._v("#")]),s._v(" @use")]),s._v(" "),t("p",[s._v("É utilizado no contexto e recebe um namespace, então se o meu arquivo se chama util tudo que eu utilizar ali será necessário passar o util como prefixo.")]),s._v(" "),t("p",[s._v("EXAMPLE:")]),s._v(" "),t("div",{staticClass:"language-scss extra-class"},[t("pre",{pre:!0,attrs:{class:"language-scss"}},[t("code",[t("span",{pre:!0,attrs:{class:"token atrule"}},[t("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_util"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n.container")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" util."),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$margin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("Caso não queria usar o namespace, esteja em processo de migração ou deseja utilizar outro nome porque o atual é grande, basta utilizar as e colocar um alias.")]),s._v(" "),t("div",{staticClass:"language-scss extra-class"},[t("pre",{pre:!0,attrs:{class:"language-scss"}},[t("code",[s._v("@use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_util"')]),s._v(" as u"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// o prefixo agora é `u`")]),s._v("\n@use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_animations"')]),s._v(" as *"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// não será necessário passar o namespace")]),s._v("\n")])])]),t("h2",{attrs:{id:"arquitetura-de-projetos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arquitetura-de-projetos"}},[s._v("#")]),s._v(" Arquitetura de projetos")]),s._v(" "),t("h3",{attrs:{id:"_7-1-pattern"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-pattern"}},[s._v("#")]),s._v(" 7-1 Pattern")]),s._v(" "),t("p",[s._v('*"One file to RULE them all.')]),s._v(" "),t("p",[s._v("One file to FIND them.")]),s._v(" "),t("p",[s._v("One file to BRING them all.")]),s._v(" "),t("p",[s._v('And in the sass way MERGE them".*')]),s._v(" "),t("p",[t("a",{attrs:{href:"https://sass-guidelin.es/pt/#o-padro-7-1",target:"_blank",rel:"noopener noreferrer"}},[s._v("Esse é o pattern mais utilizado"),t("OutboundLink")],1),s._v(" para desfrutar do scss modules, ou seja, o scss modules é um modo de modularizar, cada arquivo é um componente, e cada componente é um modulo. A sua estrutura é a seguinte:\nabstracts, vendors, base, layout, components, pages e themes")]),s._v(" "),t("p",[s._v("Existem vários patterns 4-1, 5-1 etc. Tudo vai depender da sua necessidade.")]),s._v(" "),t("div",{staticClass:"language-zsh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("styles/\n|\n|– base/\n|   |– _reset.scss       # Reset/normalize\n|   |– _color.scss       # Paleta de cores da aplicação\n|   |– _typography.scss  # Typography rules\n|   |– _index.scss       # File used to import all base\n|\n|– layout/\n|   |– _navigation.scss   # Navigation\n|   |– _grid.scss         # Grid system\n|   |– _header.scss       # Header\n|   |– _footer.scss       # Footer\n|   |– _sidebar.scss      # Sidebar\n|   |– _forms.scss        # Forms\n|\n|– pages/                # Base views -> HOME, ABOUT, CONTACT etc.\n|   |– _home.scss        # Home specific styles\n|   |– _contact.scss     # Contact specific styles\n|\n|– themes/\n|   |– _theme.scss       # Default theme\n|\n|– abstract/\n|   |– _variables.scss   # Sass Variables\n|   |– _functions.scss   # Sass Functions\n|   |– _mixins.scss      # Sass Mixins\n|   |– _index.scss       # File used to import all abstracts\n|\n`– _index.scss           # Main Sass file\n")])])]),t("h2",{attrs:{id:"proximos-passos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proximos-passos"}},[s._v("#")]),s._v(" Próximos passos")]),s._v(" "),t("p",[s._v("Sua jornada não termina aqui, agora é hora de você praticar e se aprofundar mais no assunto.")]),s._v(" "),t("blockquote",[t("p",[s._v("Recomendações de leitura:")])]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://sass-guidelin.es/pt/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Sass Guidelines"),t("OutboundLink")],1),s._v(" by "),t("em",[s._v("community")])]),s._v(" "),t("li",[t("a",{attrs:{href:"https://dev.to/deverebor/scss-como-voce-nunca-viu-1d99",target:"_blank",rel:"noopener noreferrer"}},[s._v("SCSS como você nunca viu"),t("OutboundLink")],1),s._v(" by "),t("em",[s._v("@deverebor")])]),s._v(" "),t("li",[t("a",{attrs:{href:"https://sass-lang.com/guide",target:"_blank",rel:"noopener noreferrer"}},[s._v("Sass Basics"),t("OutboundLink")],1),s._v(" by "),t("em",[s._v("Sass")])])]),s._v(" "),t("hr"),s._v(" "),t("p",[t("RouterLink",{attrs:{to:"/tutorial/2-Conceitos/14-Considerações.html"}},[s._v("Próxima Seção")])],1)])}),[],!1,null,null,null);a.default=n.exports}}]);