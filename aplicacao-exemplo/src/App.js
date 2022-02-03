import { useState } from 'react';
import './App.css';
import FormularioTarefa from './componentes/FormularioTarefa/FormularioTarefa';

function App() {
  const [tarefas, setTarefas] = useState(['comprar leite e ovos', 'exercício']);
  return (
    <div className="App">
      <FormularioTarefa onTarefaCriada={ (novaTarefa) => setTarefas([...tarefas, novaTarefa]) }/>
      <ul>
      {
        tarefas.map((tarefa, key) => {
          return <li key={key}>{tarefa}</li>
        })
      }
      </ul>
    </div>
  );
}

export default App;