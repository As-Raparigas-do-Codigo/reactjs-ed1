# web2-ed-1

Bem-vinda ao segundo módulo de Web.

## Utilização básica do terminal

Ao longo deste módulo vamos descrever uma série de instruções, algumas das quais envolvem ter conhecimento básico de utilização do terminal.

Em primeiro lugar é crucial que saibas identificar que aplicação de terminal está disponível no teu Sistema Operativo. 

Em princípio:
- se estás a usar Windows, deves ter a Shell ou a PowerShell instalada;
- se estás a usar MacOS ou Linux, deves ter o Terminal instalado;

Depois de lançares a aplicação, é importante que saibas navegar entre pastas e listar os seus conteúdos.

- se quiseres saber em que pasta estás corre `pwd`;
- se quiseres listar os conteúdos da pasta corre `ls` (macOS/Linux) ou `dir` (Windows);
- se quiseres navegar para dentro de uma pasta corre `cd <o nome da pasta>`;
- se quiseres navegar para trás corre `cd ..`.

## Instalação do NodeJS e npm

O [NodeJS](https://nodejs.org/en/) (também conhecido por "Node") tem várias funcionalidades.

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

Todos os projectos React têm muitas coisas em comum, e como tal, existem formas de criar um projecto base de forma rápida - este processo é muitas vezes designado por "scaffolding".

Para criar um projecto base, abre novamente o teu terminal, navega até à pasta onde queres trabalhar (por exemplo, o teu Ambiente de Trabalho) e corre:
* Nota que deves substituir `my-app` pelo nome que queres dar à aplicaçao.

```shell
npx create-react-app my-app
```

Logo a seguir vais ver no terminal a seguinte pergunta:

```
Need to install the following packages:
  create-react-app
Ok to proceed? (y)
```

Introduz `y` e depois clica Enter.

![Screenshot 2022-01-20 at 12 19 49](https://user-images.githubusercontent.com/39055313/150339979-b2e01a93-72c8-4ca0-bb0c-d7502288bd5a.png)

Quando este processo chegar ao fim corre:

```shell
cd <nome-do-teu-projecto>
```

Depois de estares dentro da tua nova pasta corre:

```shell
npm start
```

Se tudo correr bem deves ver uma nova _tab_ no teu browser com o endereço [http://localhost:3000/](http://localhost:3000/), e uma aplicação assim:

![Screenshot 2022-01-21 at 15 35 47](https://user-images.githubusercontent.com/39055313/150554959-f21b7ba2-a618-4770-9534-864c067897d3.png)

#### Notas Importantes

![image](https://user-images.githubusercontent.com/39055313/150566529-7eb6c06d-de58-4e58-b06d-b7cb56e8aac1.png)

O `localhost` é uma forma alternativa do teu computador se referir ao IP `127.0.0.1`, que é o endereço que todos os computadores usam para se referirem a eles próprios.

Ou seja, quando vês uma página a correr em [http://localhost:3000/](http://localhost:3000/), isto significa que o teu browser está a "servir" um site que está alojado no teu computador, e mais especificamente está a correr na porta 3000. 

O teu computador tem 65535 portas onde os serviços podem correr mas muitas delas estão reservadas para certos serviços. Por exemplo, o teu browser usa `80` para HTTP, `443` para HTTPS por defeito.

Neste caso, a aplicação escolheu a porta `3000`, mas podia ter escolhido qualquer outra das portas disponíveis.

---------

### Hello, world

Abre a pasta no teu IDE preferido.

O teu projecto deve estar organizado da seguinte forma:
- `node_modules`: tem todas as dependências do projecto, que vamos organizar usando o `npm`
- `public`: contém o código que vai ser usado na versão final do site
- `src`: contém o código-fonte, que vai depois ser optimizado e processado, de forma a ir para a pasta `public`
- `.gitignore`: o ficheiro que é usado pelo `git` para ignorar certos ficheiros e pastas
- `package-lock.json`: versão não editável do ficheiro `package.json`
- `package.json`: ficheiro usado pelo Node para adicionar uma série de configurações sobre o projecto

Durante o desenvolvimento do projecto vais sempre trabalhar sobre a pasta `src`.

Dentro desta pasta podes ver o ficheiro `App.js` que contém o componente `App` (não te preocupes para já se não o compreenderes):

```
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

O componente `App` é por convenção o principal componente em todas as aplicações ReactJS.

Para veres como funciona este ambiente de desenvolvimento, experimenta mudar a frase "Learn React" pelo teu nome e guarda o ficheiro.

Olha para o teu browser novamente e vê que as alterações foram imediatamente reflectidas no site:

![Screenshot 2022-01-21 at 16 19 19](https://user-images.githubusercontent.com/39055313/150562242-b2bf1789-3b5d-4a7f-9d5a-ed550b81c09d.png)

### SPAs and where to find them

