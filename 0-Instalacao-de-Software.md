# 💻 Instalação de Software

No decorrer dos workshops vais precisar de um editor de texto para escreveres o teu código (HTML, CSS, JS), de um navegador (um browswer) que interprete esse código (onde vemos os resultados!), e de algumas tecnologias base que vamos utilizar. Nestes workshops iremos usar:

- [ ] Google Chrome
- [ ] Sublime Text
- [ ] NodeJS + npm


⚠️ **Nota:** Não é obrigatório usar o Google Chome ou o Sublime especificamente para acompanhar as aulas ou resolver os exercícios. É apenas mais fácil se todos os alunos utilizarem o mesmo browser e editor na resolução de bugs e apoio por parte dos mentores. Alguns aspetos podem variar entre editores e browsers, como por exemplo:

- Aceder ao menu de developer (código fonte da página, consola de javascript);
- Alguns resultados podem variar entre browsers (Chrome vs Safari);
- Comandos rápidos (abertura e fecho de tags, formatação de texto);
- Packages úteis (por exemplo, de formatação automática);

No entanto, se já tens outro browser (e.g., Firefox, Safari) ou editor de texto (e.g., VS Code, Notepad++) com que te sentes confortável, excelente! 😄

## Google Chrome
1. Acede ao [site oficial](https://www.google.com/chrome/);
2. Clica em "Transferir o Google Chrome";
3. Clica no ficheiro executável que foi descarregado;
4. Deves ter agora o Chrome instalado no computador.

- [x] Google Chrome

<br>

## Sublime Text
1. Acede ao [site oficial](https://www.sublimetext.com/);
2. Clica na opção de download que for mais indicada para o teu sistema operativo;
3. Clica no ficheiro executável que foi descarregado;
4. Escolhe o destino onde tencionas instalar o editor de código (o predefinido serve perfeitamente);
5. Clica "Next" e depois "Install";
6. Clica em "Finish" e deverás ter o "Sublime Text" instalado no teu computador.

- [x] Sublime Text

<br>

## NodeJS e npm

O [NodeJS](https://nodejs.org/en/) (também conhecido por "Node") tem várias funcionalidades.

Neste caso, vamos instalar: 
- o Node para correr aplicações construídas em [React](https://reactjs.org/) nos nossos computadores;
- um dos sub-módulos do Node, o [npm](https://www.npmjs.com/), para gerirmos as dependências do nosso projeto.

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
