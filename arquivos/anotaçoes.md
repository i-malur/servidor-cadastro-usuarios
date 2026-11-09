# Funcionamento da internet

* Dentro de uma aplicação, fazemos requisições no fronend (ex: cadastro, autenticação de login, pesquisas e etc).
* Essas requisições que fazemos chega ao servidor por meio de APIs. O servidor / backend entende, executa e retorna a solicitação feita.
![alt text](image.png)
![alt text](image-1.png)


# O que é o node?
* Ecossistema que "traduz" JavaScript para os servidores.
* Cria um servidor web para a execução de código JavaScript sem precisar de um navegador web.

## Iniciando o node:
1. Instalação --> versão LTS
2. Iniciando o node dentro do projeto ```npm init -y```. O -y serve para aceitar todas as perguntas padrão ("yes"), agilizando a criação do arquivo package.json.
3. O package.json é criado com todas as informações básicas do projeto.


# O que é o npm?
* Local onde temos acesso a várias bibliotecas. "Play Store" ou "Apple Store" que permite a instalação de bibliotecas de códigos.

## npm express
* Framework de código que permite a construção de aplicações web e APIs.
* O package-lock.json criado armazena todas as versões de tecnologias que estamos usando. 
* O node_modules é uma pasta com outras bibliotecas para o funcionamento do express.

# Rotas
* Caminhos criados para atender as requisições e respostas.

# Métodos HTTP
* GET - Listar (ex: listar todos os usuários)
* POST - Criar (ex: criar usuário novo)
* PUT - Editar vários (ex: editar 10 usuários existentes)
* PATCH - Editar um (ex: editar usuária chamada "Maria")
* DELETE - Deletar (ex: deletar usuária "Maria")

# Tipos de requisições (tipos de envio de dados)
## Query Params (GET) - CONSULTAS
*  Colocamos informações ou parâmetros na URL --> EX: servidor.com/usuarios?**estado=bahia&cidade=salvador**
* Serve para informações não confidenciais

## Route Params (GET/PUT/DELETE)
* Buscar, deletar ou editar algo específico
* Diferente do Query Params, aqui enviamos uma informação
* get servidor.com/usuarios/13 (buscando usuário ID=13)
* put servidor.com/usuarios/13 (editando usuário ID=13)
* delete servidor.com/usuarios/13 (editando usuário ID=13)

## Body Params (POST e PUT)
* Enviar e editar
* Enviamos dados (muitos dados ou dados sensíveis) por meio dentro do corpo

```md
{
    "nome":"Rodolfo",
    "ID":"22"
}
```

# Status HTTP
* 2XX -> Sucesso
* 4XX -> Erro cliente (frontend)
* 5XX -> Erro servidor (backend)

* https://http.cat/

# Prisma

## O que é?

O Prisma é um ORM (*Object-Relational Mapping*) que facilita a
comunicação e a manipulação de bancos de dados por meio do código, sem
precisar escrever todas as consultas SQL manualmente.

Ele permite realizar operações como:

-   Cadastrar dados (Create).
-   Consultar dados (Read).
-   Atualizar dados (Update).
-   Excluir dados (Delete).

## Instalação

### 1. Remover versões anteriores

``` bash
npm uninstall prisma @prisma/client
```

Desinstalamos versões anteriores para evitar conflitos de
compatibilidade.

### 2. Instalar o Prisma CLI

``` bash
npm install -D prisma@6.19.3
```

Instalamos o Prisma CLI na versão 6.19.3 como dependência de
desenvolvimento.

### 3. Instalar o Prisma Client

``` bash
npm install @prisma/client@6.19.3
```

Instalamos a biblioteca responsável por permitir que nossa aplicação
interaja com o banco de dados.

### 4. Inicializar o Prisma

``` bash
npx prisma init
```

Inicializamos o Prisma, criando os arquivos de configuração e a pasta
`prisma`, que contém o arquivo `schema.prisma`.

## Principais comandos

  Comando                 Função
  ----------------------- -------------------------------------------
  `npx prisma -v`         Verifica a versão instalada.
  `npx prisma generate`   Gera o Prisma Client.
  `npx prisma db push`    Sincroniza o schema com o banco de dados.

## Pacotes instalados

-   **`prisma`** -- Ferramenta CLI utilizada para inicializar,
    configurar e gerenciar o Prisma.
-   **`@prisma/client`** -- Biblioteca utilizada no código JavaScript
    para realizar operações no banco de dados.

## Configuração do banco de dados

No arquivo `schema.prisma`, definimos o banco utilizado e os modelos que
representam nossas coleções.

Exemplo com MongoDB:

``` prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}
```

No arquivo `.env`, armazenamos a URL de conexão com o MongoDB Atlas:

``` env
DATABASE_URL="mongodb+srv://USUARIO:SENHA@cluster.mongodb.net/node_api"
```

**Observação:** utilizamos `db push` para sincronizar as alterações com
o MongoDB, pois o Prisma não utiliza migrations tradicionais para esse
banco.

## Versão utilizada

Neste projeto, utilizamos **Prisma 6.19.3** e **MongoDB Atlas**. O
Prisma 7 não oferece suporte ao MongoDB, por isso optamos pela versão
6.19.3.

# REACT

## Vite
* Cria o ambiente de desenvolvimento em react