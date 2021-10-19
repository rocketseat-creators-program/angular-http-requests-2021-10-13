<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />

# Implementando requisições HTTP em sua aplicação Angular com HttpClient, Loader, Toast, Exception Handler e Retry.

Nessa aula iremos implementar requisições HTTP em nossa aplicação Angular para que seja possível trocar e receber informações de uma API Rest. Além disso, aprenderemos também como mostrar uma tela de carregamento para cada requisição feita, mensagens com Toast, tratamento de erros e retentativas.

- [Template utilizado na aula](https://github.com/rocketseat-experts-club/angular-http-requests-2021-10-13/tree/template)

## Funcionalidades

- Listar alunos
- Deletar aluno
- Editar aluno
- Cadastrar novo aluno
- Lazy loading
- HTTP Requests
    - Exception Handler
    - Retry Policy
    - Loader Screen
    - Toast message

## Tecnologias

- [Angular](https://angular.io/)
- [Node](https://nodejs.org/en/)

## Links úteis

- [Angular CLI](https://angular.io/cli)
    - [new](https://angular.io/cli/new)
    - [generate](https://angular.io/cli/generate)
- [NG Bootstrap](https://ng-bootstrap.github.io/#/home)
- [Font Awesome](https://fontawesome.com)
- [RxJS](https://rxjs.dev/guide/operators#creation-operators)

## Ambiente, recursos e requisitos necessários

- Node 14.17.5 (LTS);
- Seu editor de código de preferência (No meu caso, Visual Studio Code);
- Familiaridade com HTML, CSS e JavaScript;
- Vontade de aprender :D

## Comandos utilizados
- npm install --save ngx-toastr
- npm install --save ngx-spinner

## Testando a aplicação
- Clone o repositório para a sua máquina
- Abra um terminal na pasta principal da aplicação
- Instale todas as dependências da aplicação utilizando o seguinte comando:
    ```
    npm install
    ```
- Antes de inicializar nossa aplicação, é necessário subir nossa fake API (Back-end server):
    ```
    npm run server
    ```
- Para rodar a aplicação, execute o comando:
    ```
    npm start
    ```
- Abra o seu browser na seguinte URL: http://localhost:4200

## Configuração

### Folha de estilo do Toastr
Caso você esteja desenvolvendo sua própria aplicação para estudo, após a instalação do ngx-toastr ```npm install --save ngx-toastr```, é necessário realizar o apontamento para os arquivos .css dentro do arquivo **angular.json**.
```
"architect": {
    "build": {
        ...
        "styles": [
            "node_modules/ngx-toastr/toastr.css",
            ...
        ]
    },
    ...
```
