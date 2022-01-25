# Tornar o comportamento dinâmico

Ok, já sabemos como adicionar comportamento ao nosso botão, mas se o comportamento está "hardcoded", isso significa que este botão não é reutilizável ... 🤔

... e a ideia do React é tornar os componentes reutilizáveis, por isso como é que nós garantimos que é este o caso do `Button`?

A resposta é adicionando comportamento dinâmico, ou seja, o botão não tem o seu comportamento definido internamente, mas é-lhe **passado pelo componente pai** que corresponde ao componente onde este é declarado.

```javascript
function Button(props) {
   ...
}
```

A variável [props](https://reactjs.org/docs/components-and-props.html#function-and-class-components) é um objecto, e como tal, podes referir-te a cada uma das suas propriedades desta forma: `props.<nome-da-propriedade>`.

Ou seja, em vez de termos:

```javascript
<button onClick={() => alert("Alguém clicou no botão!")}>Click me</button>
```

... passamos a ter:

```javascript
<button onClick={props.onClickHandler}>{props.title}</button>
```

E depois o componente "pai" - o `App.js` - tem que passar as propriedades ao "filho" da seguinte forma:

```javascript
import logo from './logo.svg';
import './App.css';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button title="Click me" onClickHandler={() => alert("Alguém clicou no botão")}></Button>
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
