API de uma loja de itens medievais utilizando TypeScript.

A aplicação foi desenvolvida em três camadas: Models, Service e Controllers. Com a API é possível realizar as operações básicas em um banco de dados MySQL: Criação, Leitura, Atualização e Exclusão (CRUD). 

## Orientações ##

Você pode rodar a aplicação localmente ou utilizando containers em docker para o node e o banco 
 
 ### Se optar pelo Docker ###
 
 **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior**
 > Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.
  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;
  - Esses serviços irão inicializar um container chamado trybesmith e outro chamado trybesmith_db;
  - A partir daqui você pode rodar o container `trybesmith` via CLI com o comando:

> `docker exec -it trybesmith bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

 > A partir do terminal do docker, instale as dependências com `npm install`
 > Inicie a aplicação com npm start
  
 - **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container

  ### Se optar por rodar a aplicação localmente  ###

  > Instale as dependências com `npm install`
  > Inicie a aplicação com npm start
