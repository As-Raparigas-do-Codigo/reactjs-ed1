# Aplicação de gestão de Tarefas - Hooks



```javascript
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
