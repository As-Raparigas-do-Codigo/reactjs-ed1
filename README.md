# web2-ed-1

Bem-vinda ao segundo módulo de Web.

## Utilização básica do terminal

Ao longo deste módulo vamos descrever uma série de instruções, algumas das quais envolvem ter conhecimento básico de utilização do terminal.

1. Se quiseres saber em que pasta estás corre `pwd`:

![Screenshot 2022-01-20 at 12 30 12](https://user-images.githubusercontent.com/39055313/150339282-6125bb77-275f-406c-b4c8-aed4e57e2d81.png)

2. Se quiseres listar os conteúdos da pasta corre `ls` ou (com mais informação) `ls -la`:

![Screenshot 2022-01-20 at 12 30 00](https://user-images.githubusercontent.com/39055313/150339775-ea1f558b-84db-4987-9ccc-8f5b24afa2f2.png)

3. Se quiseres navegar para uma pasta corre `cd <o nome da pasta>`:

![Screenshot 2022-01-20 at 12 23 34](https://user-images.githubusercontent.com/39055313/150338210-a2328044-2fbf-497c-8dfb-513d3546a00e.png)

4. Se quiseres navegar para trás corre `cd ..`:

![Screenshot 2022-01-20 at 12 30 26](https://user-images.githubusercontent.com/39055313/150339413-8b0af3b9-e939-4806-a36d-25227861106b.png)


## Instalação do NodeJS e npm

O [NodeJS](https://nodejs.org/en/) (também conhecido por "Node") é um "JavaScript runtime" que tem várias funcionalidades.
Neste caso, vamos instalar o Node para correr aplicações construídas em [React](https://reactjs.org/) nos nossos computadores, e vamos ainda instalar um dos seus sub-módulos - o [npm](https://www.npmjs.com/) - para gerirmos as dependências do nosso projeto.

Para instalar o NodeJS e o npm segue os seguintes passos:
1. Vai a [https://nodejs.org/en/](https://nodejs.org/en/) e instala a versão do Node correspondente para o teu Sistema Operativo.
2. Quando terminares a instalação abre o teu terminal e corre `node -v`:

![Screenshot 2022-01-20 at 12 18 19](https://user-images.githubusercontent.com/39055313/150337367-eaa1e7f2-b542-494f-b334-ebaf0e4b3157.png)
  - Se estiver tudo OK deves ver a versão do node, por exemplo: `v14.17.0`;
  - Para poderes usar o projecto "Create React App" a tua versão do Node tem de ser >= `14.0.0`;

3. Corre `npm -v` para validar a versão do npm:

![Screenshot 2022-01-20 at 12 18 37](https://user-images.githubusercontent.com/39055313/150337392-17ee6f89-f432-42d9-9e19-c2e465890883.png)

  - Se estiver tudo OK deves ver a versão do npm, por exemplo: `8.3.0`;
  - Para poderes usar o projecto "Create React App" a tua versão do Node tem de ser >= `5.6`;

## Criar o esqueleto do projecto

Todos os projectos React têm muitas coisas em comum, e como tal, existem formas de criar esta "base" de forma rápida - este projecto é muitas vezes designado por "scaffolding".

Para criar esta base abre novamente o teu terminal, navega até à pasta que queres utilizar (podes ter que pedir ajuda para fazer este projecto) e corre `npx create-react-app <o nome da app>`:

```
npx create-react-app my-app
```

Logo a seguir vais ver no terminal a seguinte pergunta:

```
Need to install the following packages:
  create-react-app
Ok to proceed? (y)
```

Introduz `y` e depois clica Enter.

![Screenshot 2022-01-20 at 12 19 49](https://user-images.githubusercontent.com/39055313/150337542-ce269c9e-e392-4665-b090-676a9fe36318.png)

Quando este processo chegar ao fim corre:

```
cd my-app
npm start
```
