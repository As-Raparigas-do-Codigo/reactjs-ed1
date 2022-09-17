# O nosso primeiro componente

Dentro da pasta `src` cria um novo ficheiro `Botao.js` com o seguinte conteúdo:

```javascript
function Botao() {
    return (
        <button>Click me</button>
    );
}

export default Botao;
```

Nota que não é possível retornar 2 elementos JSX no `return` de uma função, ou seja, isto não seria possivel:

```javascript
return (
    <button>Click me 1</button>
    <button>Click me 2</button>
);
```

Como tal, por vezes usamos [Fragments](https://reactjs.org/docs/fragments.html#short-syntax) para encapsular múltiplos elementos:

```javascript
return (
    <>
        <button>Click me 1</button>
        <button>Click me 2</button>
    </>
);
```

Para podermos usar este componente dentro da nossa aplicação, temos de encontrar o componente que queremos que seja o seu pai - neste caso o componente principal da aplicação, o `App` - e temos de o importar, e depois de o declarar no sítio onde queremos que ele apareça:

```javascript
import logo from './logo.svg';
import './App.css';
import Botao from './Botao';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Botao/>
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

<img width="1440" alt="Screenshot 2022-02-02 at 20 28 23" src="https://user-images.githubusercontent.com/39055313/152232142-8f5133b1-9306-4bd6-8abe-bfa200ed886d.png">

## Componentes de classe vs Componentes funcionais

Nota que esta é só uma de várias síntaxes que podemos utilizar para declarar componentes em React, e é conhecida como React funcional, porque cada componente é declarado como uma função.

No entanto, é bastante comum ver componentes declarados da seguinte forma:

```javascript
class Botao extends React.Component {
  render() {
    return <button>Click me</button>;
  }
}
```

Como podes reparar este componente é declarado através da criação de uma [classe](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), que é uma das funcionalidades introduzidas numa das últimas versões de JavaScript, o EcmaScript 2015 ou ES6.
