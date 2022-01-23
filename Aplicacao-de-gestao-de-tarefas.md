# Aplicação de Gestão de Tarefas

O nosso objectivo é criar uma aplicação de gestão de tarefas, qualquer coisa como:

![image](https://user-images.githubusercontent.com/39055313/150697193-0c6b1e64-6665-4637-867c-56a9c42942aa.png)

Para isso, vamos voltar ao componente principal da aplicação - `App.js` - e vamos limpar todo o conteúdo dentro da `div` principal:

```javascript
import logo from './logo.svg';
import './App.css';
import Button from './Button';

function App() {
  function adicionarTarefa() {
    alert("Adicionar tarefa")
  }
  function removerTarefa() {
    alert("Remover tarefa")
  }
  return (
    <div className="App">
    </div>
  );
}

export default App;
```

Sabemos que vamos querer um campo de `input` seguido de um botão para adicionar as tarefas, por isso vamos adicioná-los:

```javascript
import logo from './logo.svg';
import './App.css';
import Button from './Button';

function App() {
  function adicionarTarefa() {
    alert("Adicionar tarefa")
  }
  return (
    <div className="App">
      <div>
        <input type="text" placeholder="Introduz a tua tarefa"/>
        <Button title="Adicionar" onClickHandler={adicionarTarefa}/>
      </div>
    </div>
  );
}

export default App;
```

Como consegues ver, a função `adicionarTarefa` só lança um alerta, mas queremos que quando o utilizador clickar neste botão a nova tarefa apareça na lista de tarefas!
