# Estrutura do Projeto

Agora iremos explicar sobre cada arquivo que contém no projeto. Se você optou pela opção **default**, os arquivos serão os seguintes:

```
.
├── node_modules                    # Dependências do projeto
├── public                          # Todos os arquivos públicos do projeto
|   └── favicon.icon                # Ícone do projeto
|   └── index.html                  # HTML principal da aplicação
├── src                             # Pasta source do projeto
|   └── assets                      # Todos os assets do projetos
|   └── components                  # Componentes do vue
|   └── App.vue                     # Componente principal da aplicação
|   └── main.js                     # Arquivo de montagem do componente
├── .gigignore                      # Arquivos que vão ser ignorados pelo Git
├── babel.config.js                 # Configurações do babel
├── package.json                    # Settings do projeto
├── yarn.lock                       # Se estiver usando yarn
```

## public/favicon.icon

Ícone do seu site.

## public/index.html

É a onde o virtual DOM irá transformar no DOM final, anexando no html.

## src/assets/**

Todas as imagenss e presets serão guardados aqui.

## src/components/**

Todos os componentes da aplicação ficarão aqui, as **rotas** normalmente ficam em uma pasta **pages** ou **views**, iremos abordar isso futuramente.

## src/App.vue

O componente base da aplicação. Quando usarmos o [VueRouter](https://router.vuejs.org/) este arquivo vira o **view-router** principal. Sobre o **VueRouter**, recomendamos estar sobre apenas quando acabar sobre o básico do **Vue** para não confundir conceitos.


## src/main.js

Arquivo de entrada principal, criando a [Instância](https://br.vuejs.org/v2/guide/instance.html) do **Vue** e anexando na div que possui o id **app**, que fica no **public/index.html**.

## babel.config.js

O [babel](https://babeljs.io/) é um transcompilador de JavaScript para converter códigos ES6+, assim mecanismos mais antigos conseguindo executar o código.

Na próxima seção irá ser explicado como está o fluxo inicial da aplicação e introduzindo o conceito de **props**.