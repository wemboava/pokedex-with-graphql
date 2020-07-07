
<p align="center">
  <img width="300" height="300" src="https://pngimg.com/uploads/pokeball/pokeball_PNG24.png">
</p>

<h1 align="center">Pokedex</h1>
<p align="center">
  Simples PWA desenvolvido com React, GraphQL e Apollo!<br />
  <a href="https://agitated-hawking-8d98fe.netlify.app/">DEMO</a>
</p>

## 💡 Projeto
Uma pokedex que te possibilita listar pokemons, pesquisar por nome, favoritar e ver diversas informações de um pokemon específico, desenvolvida com algumas features de PWA, podendo assim ser instalado em seu aparelho celular como se fosse um aplicativo.

## ⚙️ Instalação local
  - ```yarn install```
  - ```yarn start```

## 📱 Instale em seu smartphone
Após alguns segundos, clique no botão que irá aparecer para adicionar na tela inicial, ou vá até as opções do browser e clique em "Adicionar à tela inicial"

![image](https://user-images.githubusercontent.com/23389358/86695384-de38cd00-bfe2-11ea-861c-9f56409c8f7f.png)
![image](https://user-images.githubusercontent.com/23389358/86695590-0e806b80-bfe3-11ea-95cc-c8bd184333d5.png)




## 🖥 Telas
![image](https://user-images.githubusercontent.com/23389358/86689247-32d94980-bfdd-11ea-9c20-23c58fff2dbe.png)
![image](https://user-images.githubusercontent.com/23389358/86689449-6025f780-bfdd-11ea-9160-36b8248eb79f.png)
![image](https://user-images.githubusercontent.com/23389358/86689640-8e0b3c00-bfdd-11ea-8eb7-cdcd47dff7e1.png)
![image](https://user-images.githubusercontent.com/23389358/86689793-b5fa9f80-bfdd-11ea-8a0e-3bccf9cbf60c.png)


## ⚛️ Tecnologias
Para gerenciar os estados da aplicação, foi utilizado o local state management do apollo client
- React
- Apollo Client
- GraphQL
- PWA

## :rocket: Deploy
Utilizando o espelhamento de repositorio do gitlab, criei uma pipeline que quando esse repo é alterado, automaticamente a pipeline é iniciada no gotlab, passando pelos processos de code-quality => test => build => deploy

![image](https://user-images.githubusercontent.com/23389358/86683214-b7c16480-bfd7-11ea-9082-57142905059f.png)
