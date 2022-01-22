# Instalação do NodeJS e npm

![image](https://user-images.githubusercontent.com/39055313/150638124-c000eb1e-a832-43cb-b641-81c13b2a87f1.png)
[Source](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.luiztools.com.br%2Fpost%2Fcomo-rodar-nodejs-em-servidor-windows%2F&psig=AOvVaw3OeRAoRpR2MZwSXJEl_b5s&ust=1642940021981000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNjFodaqxfUCFQAAAAAdAAAAABAD)

O [NodeJS](https://nodejs.org/en/) (também conhecido por "Node") tem várias funcionalidades.

Neste caso, vamos instalar o Node para correr aplicações construídas em [React](https://reactjs.org/) nos nossos computadores, e vamos ainda instalar um dos seus sub-módulos - o [npm](https://www.npmjs.com/) - para gerirmos as dependências do nosso projeto.

Em programação designam-se por dependências todas as bibliotecas que são importadas pelos projectos.

Um gestor de dependências não é mais do que uma ferramenta que nos ajuda a organizar estas bibliotecas e as suas versões.

Para instalar o NodeJS e o npm segue os seguintes passos:
1. Vai a [https://nodejs.org/en/](https://nodejs.org/en/) e instala a versão do Node correspondente para o teu Sistema Operativo.
2. Quando terminares a instalação abre o teu terminal e corre `node -v`:

![Screenshot 2022-01-20 at 12 18 19](https://user-images.githubusercontent.com/39055313/150337367-eaa1e7f2-b542-494f-b334-ebaf0e4b3157.png)
  - Se estiver tudo OK deves ver a versão do node, por exemplo: `v14.17.0`;
  - Para poderes usar o projecto "Create React App" a tua versão do Node tem de ser >= `14.0.0`;

3. Corre `npm -v` para validar a versão do npm:

![Screenshot 2022-01-20 at 12 18 37](https://user-images.githubusercontent.com/39055313/150337392-17ee6f89-f432-42d9-9e19-c2e465890883.png)

  - Se estiver tudo OK deves ver a versão do npm, por exemplo: `8.3.0`;
  - Para poderes usar o projecto [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) a tua versão do Node tem de ser >= `5.6`;
