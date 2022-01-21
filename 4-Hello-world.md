
# Hello, world

Abre a pasta no teu IDE preferido.

Repara que o teu projecto está organizado da seguinte forma:
- `node_modules`: tem todas as dependências do projecto, que vamos organizar usando o `npm`
- `public`: contém o código que vai ser usado na versão final do site
- `src`: contém o código-fonte, que vai depois ser optimizado e processado, de forma a ir para a pasta `public`
- `.gitignore`: o ficheiro que é usado pelo `git` para ignorar certos ficheiros e pastas
- `package-lock.json`: versão não editável do ficheiro `package.json`
- `package.json`: ficheiro usado pelo Node para adicionar uma série de configurações sobre o projecto

**Durante o desenvolvimento do projecto vais sempre trabalhar dentro da pasta `src`.**

Dentro desta pasta podes ver o ficheiro `App.js` que contém o componente `App` (não te preocupes para já se não o compreenderes):

```js
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
