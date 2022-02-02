# O nosso primeiro componente

Dentro da pasta `src` cria um novo ficheiro `Button.js` com o seguinte conteúdo:

```javascript
function Button() {
    return (
        <button>Click me</button>
    );
}
  
export default Button;
```

Para podermos usar este componente dentro da nossa aplicação, temos de encontrar o componente que queremos que seja o seu pai - neste caso o componente principal da aplicação, o `App` - e temos de o importar, e depois de o declarar no sítio onde queremos que ele apareça:

```javascript
import logo from './logo.svg';
import './App.css';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button/>
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

Se tudo correr bem, deves agora conseguir ver o teu botão:

<img width="1440" alt="Screenshot 2022-01-22 at 13 16 14" src="https://user-images.githubusercontent.com/39055313/150640002-0b082461-551f-4b2d-a0fc-ec5593365ca0.png">

## Componentes de classe vs Componentes funcionais

Nota que esta é só uma de várias síntaxes que podemos utilizar para declarar componentes em React, e é conhecida como React funcional, porque cada componente é declarado como uma função.

No entanto, é bastante comum ver componentes declarados da seguinte forma:

```javascript
class Button extends React.Component {
  render() {
    return <button>Click me</button>;
  }
}
```

Como podes reparar este componente é declarado através da criação de uma [classe](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), que é uma das funcionalidades introduzidas numa das últimas versões de JavaScript, o EcmaScript 2015 ou ES6.
