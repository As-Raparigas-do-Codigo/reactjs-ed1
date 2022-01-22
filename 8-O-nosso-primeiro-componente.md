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

Se tudo correr bem, deves agora conseguir ver o teu botão:

<img width="1440" alt="Screenshot 2022-01-22 at 13 16 14" src="https://user-images.githubusercontent.com/39055313/150640002-0b082461-551f-4b2d-a0fc-ec5593365ca0.png">
