# Adicionar Estilo ao Botão

Nas aplicações ReactJS, em vez de indicarmos a class usando o atributo `class`, usamos o atributo `className`. 

Para podemos reutilizar o botão com vários estilos, vamos especificar uma classe que é passada pelo componente pai:

```javascript
function Button(props) {
    return (
        <button className={props.style} onClick={props.onClickHandler}>{ props.title }</button>
    );
}

export default Button;
```

Vamos definir alguns estilos possíveis, por exemplo:
* `info`
* `warning`
* `danger`

E agora, no ficheiro `App.css` podemos limpar os estilos que já vinham com o projecto-base e declará-los usando `CSS` - esta parte deve ser familiar:

```css
button {

}

button.info {
  background-color: cadetblue;
  color: white;
}

button.warning {
  background-color: khaki;
  color: black;
}

button.danger {
  background-color: tomato;
  color: white;
}
```

De volta ao ficheiro `App.js`, podemos passar o estilo que queremos ao botão:

```
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
        <Button style="warning" title="Click me" onClickHandler={() => alert("Alguém clicou no botão")}></Button>
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

