import { useState } from 'react';
import './App.css';
import FormularioTarefa from './FormularioTarefa';

function App() {
  const [tarefas, setTarefas] = useState([]);
  function adicionarTarefa(novaTarefa) {
    setTarefas([...tarefas, { novaTarefa}]);
  }
  return (
    <div className="App">
      <FormularioTarefa onTarefaCriada={adicionarTarefa}/>
      {
        tarefas.map((tarefa, key) => {
          return <div id={key}>{tarefa}</div>
        })
      }
    </div>
  );
}

export default App;