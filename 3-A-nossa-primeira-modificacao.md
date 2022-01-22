# A nossa primeira modificação

Abre a pasta do projecto no teu IDE preferido.

Repara que o teu projecto está organizado da seguinte forma:
- `node_modules`: tem todas as dependências do projecto, que vamos organizar usando o `npm`
- `public`: a pasta que contém os conteúdos que vão ser públicos quando o site for publicado
- `src`: contém o código-fonte da aplicação, ou seja, é a **pasta onde vão trabalhar**
- `.gitignore`: o ficheiro que é usado pelo `git` para não versionar certos ficheiros e pastas
- `package-lock.json`: versão não editável do ficheiro `package.json` que é gerada automaticamente
- `package.json`: ficheiro usado pelo Node para adicionar uma série de configurações sobre o projecto, incluindo a declaração de todas as dependências e suas respectivas versões

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
