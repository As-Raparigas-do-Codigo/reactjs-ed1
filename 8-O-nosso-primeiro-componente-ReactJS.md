# O nosso primeiro componente ReactJS

Dentro da pasta `src` cria um novo ficheiro `Button.js` com o seguinte conteúdo:

```javascript
function Button() {
    return (
        <button>Click me</button>
    );
}
  
export default Button;
```

Este é tecnicamente um componente válido, que recebe o texto a exibir - `title` - e uma função que vai ser executada `onclick` - `onClickHandler`.

Vamos adicioná-lo dentro do componente `App`, dentro do header (nota que temos de o importar para isto ser possível):

```javascript
import logo from './logo.svg';
import './App.css';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button></Button>
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
          Inês Martins
        </a>
      </header>
    </div>
  );
}

export default App;
```
