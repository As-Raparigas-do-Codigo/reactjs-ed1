# Aplicação de gestão de Tarefas - Hooks

## Declaração das Variáveis de Estado

Para conseguirmos gerir as tarefas precisamos de as manter numa estrutura de dados, mais especificamente num `array`.

Para gerir o estado deste array vamos usar as chamadas "variáveis de estado" que sã disponibilizadas pela funcionalidade de [Hooks](https://reactjs.org/docs/hooks-intro.html) do React.

Portanto, dentro do componente `App` vamos declarar uma nova variável de estado chamada `tarefas`, da seguinte forma:

```javascript
import { useState } from 'react';
import './App.css';
import FormularioTarefa from './FormularioTarefa';

function App() {
  const [tarefas, setTarefas] = useState([]);
  return (
    <div className="App">
      <FormularioTarefa/>
    </div>
  );
}

export default App;
```

Esta linha tem uma síntaxe especial, lembra-te dela!

Nesta linha o [hook de estado](https://reactjs.org/docs/hooks-state.html) cria uma nova variável `tarefas`, que é actualizada chamando a função `setTarefas`, e que está a ser inicializada como um `array` vazio:

```javascript
const [tarefas, setTarefas] = useState([]);
```

## Declaração do Evento onTarefaCriada

Sempre que uma nova tarefa for criada dentro do componente `FormularioTarefa` queremos que este componente passe essa informação ao pai - `App` -, de forma a que este possa actualizar a lista que é mostrada ao utilizador. 

Para isso, dentro do componente `App` vamos dizer ao componente filho `FormularioTarefa` que queremos que ele nos notifique sempre que uma nova tarefa for criada.

Para tal, na declaração do componente `FormularioTarefa` adicionamos um novo evento `onTarefaCriada` - por convenção, chamamos aos eventos `onNomeDoEvento`, para seguir a lógica de outros eventos nativos como `onClick`, `onMouseOver`, etc.

```javascript
import { useState } from 'react';
import './App.css';
import FormularioTarefa from './FormularioTarefa';

function App() {
  const [tarefas, setTarefas] = useState([]);
  return (
    <div className="App">
      <FormularioTarefa onTarefaCriada={adicionarTarefa}/>
    </div>
  );
}

export default App;
```

## Declaração do "Event Handler"

Como consegues ver acima, quando este evento for executado dentro do componente, estamos a dizer que queremos executar a função `adicionarTarefa`.

Esta função ainda não existe, por isso vamos criá-la:

```javascript
import { useState } from 'react';
import './App.css';
import FormularioTarefa from './FormularioTarefa';

function App() {
  const [tarefas, setTarefas] = useState([]);
  let adicionarTarefa = function(novaTarefa) {
    var tarefasTmp = this.state.tarefas;
    tarefasTmp.push(novaTarefa);
    setTarefas(tarefasTmp);
  }
  return (
    <div className="App">
      <FormularioTarefa onTarefaCriada={adicionarTarefa}/>
    </div>
  );
}

export default App;
```

Esta função vai buscar a lista atual de tarefas e adiciona-lhe a nova tarefa, que foi criada dentro do comportamento `FormularioTarefa`.

------

## Spread Operator

[https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

Nota que usando a síntaxe mais recente do JavaScript podemos simplificar a função `adicionarTarefa` da seguinte forma:

```javascript
function adicionarTarefa(novaTarefa) {
  setTarefas([...tarefas, { novaTarefa }]);
}
```

Quando a função tem apenas uma linha, podemos chamá-la diretamente na declaração do evento, simplificando ainda mais o componente:

```javascript
import { useState } from 'react';
import './App.css';
import FormularioTarefa from './FormularioTarefa';

function App() {
  const [tarefas, setTarefas] = useState([]);
  return (
    <div className="App">
      <FormularioTarefa onTarefaCriada={ (novaTarefa) => setTarefas([...tarefas, { novaTarefa }]) }/>
    </div>
  );
}

export default App;
```

No próximo módulo vamos ver como listar estas tarefas!
