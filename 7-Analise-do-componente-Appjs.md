# Análise do componente App.js

Quando criamos o esqueleto do nosso projeto já vimos que o componente principal se chama `App`, vamos agora olhar para ele em detalhe:

* Em primeiro lugar podemos ver que no topo do documento estão a ser importados 2 ficheiros - `logo.svg` e `App.css` - usando uma funcionalidade nativa do JavaScript que é o [import](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import).

```javascript
import logo from './logo.svg';
import './App.css';
```

* Isto permite-nos ir buscar estes 2 ficheiros e utilizá-los ao longo deste ficheiro.

* Depois vemos uma declaração de uma função chamada `App` que não recebe argumentos e simplesmente retorna o que parece `HTML`:

```javascript
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
          Inês Martins
        </a>
      </header>
    </div>
  );
}
```

* Na verdade isto não é `HTML`, é `JSX`, uma linguagem de templating que se recomenda utilizar em ReactJS (ainda que não seja obrigatório), e que nos ajuda a concatenar `HTML` com variáveis e dados dinâmicos.

* A única coisa aqui que não é `HTML` válido é esta linha, porque contém a expressão `{logo}`, que em `JSX` significa que o conteúdo da variável `logo` vai ser injectado aqui:

```HTML
<img src={logo} className="App-logo" alt="logo" />
```

* Finalmente vemos esta linha, que basicamente está a exportar esta função - `App` - para poder ser utilizada no resto da app.

```
export default App;
```
