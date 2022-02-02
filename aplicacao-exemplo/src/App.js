import { useState } from 'react';
import './App.css';
import FormularioTarefa from './componentes/FormularioTarefa/FormularioTarefa';

function App() {
  const [tarefas, setTarefas] = useState([]);
  return (
    <div className="App">
      <FormularioTarefa onTarefaCriada={ (novaTarefa) => setTarefas([...tarefas, { novaTarefa }]) }/>
      {
        tarefas.map((tarefa, key) => {
          return <div id={key}>{tarefa}</div>
        })
      }
    </div>
  );
}

export default App;