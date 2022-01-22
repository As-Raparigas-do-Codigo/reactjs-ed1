# O nosso primeiro componente ReactJS

Dentro da pasta `src` cria um novo ficheiro `Button.js` com o seguinte conteúdo:

```javascript
function Button(title, onClickHandler) {
    return (
        <button onClick={onClickHandler}>{title}</button>
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
        <Button title="Click me" onClickHandler={alert("Hello")}></Button>
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

Como podes ver passamos o título `"Click me"` e `onclick` queremos que a função nativa do JavaScript `alert` seja chamada, com o conteúdo "Hello":

```
<Button title="Click me" onClickHandler={alert("Hello")}></Button>
````

Se tudo correr bem, agora deverás ver o seguinte:


