# Aplicação de gestão de tarefas - map

Portanto, a variável de estado `tarefas` foi criada para manter a lista de tarefas actualizada, mas precisamos agora de uma forma de as mostrar na interface da aplicação.

Uma das formas mais simples de iterar um array e mostrar os seus objectos numa lista é usar o método `map`:

```javascript
import { useState } from 'react';
import './App.css';
import FormularioTarefa from './FormularioTarefa';

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
```

Há aqui algumas coisas importantes a notar:

1. Repara que o método `map` tem 2 argumentos, o objecto em si (o qual designamos `tarefa`) e o índice do objeto (o qual designamos `key`);
2. Estamos a injectar o conteúdo da tarefa em si dentro da `<div>` e o índice do objecto na propriedade `id`, o que é importante para o ReactJS - os elementos devem ser sempre únicos, e caso contrário o ReactJS lança um erro;


