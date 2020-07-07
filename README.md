<p align="center">
  ![image](https://user-images.githubusercontent.com/23389358/86684328-d2480d80-bfd8-11ea-9281-0a7026f07c19.png)
</p>

<h1 align="center">Pokedex</h1>
<p align="center">
  Simples PWA desenvolvido com React, GraphQL e Apollo!<br />
  <a href="https://agitated-hawking-8d98fe.netlify.app/">DEMO</a>
</p>


## 💻 Project
Uma pokedex que te possibilita listar pokemons, pesquisar por nome, favoritar e ver diversas informações de um pokemon específico, desenvolvida com algumas features de PWA, podendo assim ser instalado em seu aparelho celular como se fosse um aplicativo.

## :rocket: Tecnologias
Para gerenciar os estados da aplicação, foi utilizado o local state management do apollo client
- React
- Apollo Client
- GraphQL
- PWA

## :rocket: Deploy
Utilizando o espelhamento de repositorio do gitlab, criei uma pipeline que quando esse repo é alterado, automaticamente a pipeline é iniciada no gotlab, passando pelos processos de code-quality => test => build => deploy

![image](https://user-images.githubusercontent.com/23389358/86683214-b7c16480-bfd7-11ea-9082-57142905059f.png)
