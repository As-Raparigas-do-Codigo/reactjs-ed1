# Análise do componente App.js

Quando criamos o esqueleto do nosso projeto já vimos que o componente principal se chama `App`, vamos agora olhar para ele em detalhe:

### Importação
Mesmo no topo do documento vemos que está a ser utilizada uma funcionalidade nativa do JavaScript - o [import](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import).

```javascript
import logo from './logo.svg';
import './App.css';
```

Nota que, na primeira linha, é usada a expressão `import x from y`, o que significa que o conteúdo do ficheiro `logo.svg` está a ser atribuído à variável `logo`.

Na segunda linha, simplesmente está a ser importado tudo o que está dentro do ficheiro `App.css` sem nenhuma atribuição.

### Declaração da Função

Depois das importações vemos uma declaração de uma função chamada `App` que não recebe argumentos e simplesmente retorna o que parece `HTML`:

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

Na verdade isto não é `HTML`, é [JSX](https://reactjs.org/docs/introducing-jsx.html), que é uma "extensão do JavaScript" que se recomenda utilizar em ReactJS (ainda que não seja obrigatório), e que nos ajuda a concatenar criar templates com dados dinâmicos.

Um exemplo disso é o código abaixo:

```HTML
<img src={logo} className="App-logo" alt="logo" />
```

Como podemos ver esta linha não é `HTML` válido, porque contém a expressão `{logo}`.

Em `HTML` este código geraria um erro no browser, mas em `JSX` isto significa que o conteúdo da variável `logo` vai ser injectado dentro do componente `<img>`:
 
### Exportação da Função

No final do documento vemos que basicamente está a exportar esta função - `App` - para poder ser utilizada no resto da app.

```javascript
export default App;
```
