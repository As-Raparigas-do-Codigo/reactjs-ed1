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

Este vai ser o nosso componente `Botao`, que não é mais do que uma função chamada "Botao", só que em vez de retornar um booleano ou uma string (como a maior parte das funções JavaScript que conhecemos) **retorna `JSX`**.

Nota que no `return` desta função tem que haver um elemento `JSX` que agregue todos os outros, ou seja, isto não seria possivel:

```jsx
return (
    <button>Click me 1</button>
    <button>Click me 2</button>
);
```

Como tal, se queremos retornar 2 botões, podemos simplesmente colocá-los dentro de uma `div`:

```jsx
return (
    <div>
        <button>Click me 1</button>
        <button>Click me 2</button>
    <div/>
);
```

... ou podemos usar [Fragments](https://reactjs.org/docs/fragments.html#short-syntax) (aquelas tags vazias):

```jsx
return (
    <>
        <button>Click me 1</button>
        <button>Click me 2</button>
    </>
);
```

Para podermos usar este componente `Botao` dentro da nossa aplicação, temos de decidir onde é que ele vai aparecer.

Neste momento, a nossa aplicação só tem uma página, e todo o conteúdo desta página está declarado no componente `App`, por isso se queremos que o `Botao` apareça na página principal, temos de o colocar dentro do componente `App`.

O primeiro passo é ir ao componente `App` e importar o componente `Botao`:

```javascript
import logo from './logo.svg';
import './App.css';
import Botao from './Botao';
```

Nota que nós importamos o `Botao` e atribuímos-lhe o nome `Botao`.
Mas seria possível também importar o componente e chamar-lhe outra coisa qualquer, exemplo:


```javascript
import logo from './logo.svg';
import './App.css';
import Batatas from './Botao';
```

Só que neste caso, teríamos de usar a palavra `Batatas` sempre que quisessemos usar o componente `Botao`.

Depois de o importarmos, temos de declarar o componente no sítio onde queremos que ele apareça:

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


É comum dizermos nestas situações que o componente `App` é agora o **pai** do `Botao`.

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
