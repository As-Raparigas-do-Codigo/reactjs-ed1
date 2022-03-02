import { useState } from 'react';
import './App.css';
import FormularioTarefa from './componentes/FormularioTarefa/FormularioTarefa';

function App() {
  const [tarefas, setTarefas] = useState([]);
  return (
    <div className="App">
    <FormularioTarefa onTarefaCriada={ (novaTarefa) => setTarefas([...tarefas, novaTarefa]) }/>
    {
      tarefas.length > 0 ? 
      <ul>
      {
        tarefas.map((tarefa, key) => {
          return <li key={key}>{tarefa}</li>
        })
      }
      </ul> : 
      <p>Ainda não adicionaste nenhuma tarefa!</p>
    }
    </div>
  );
}
  
export default App;
