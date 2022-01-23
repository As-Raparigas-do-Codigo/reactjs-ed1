# Aplicação de gestão de Tarefas - Hooks

Como indicamos no módulo anterior, para conseguirmos gerir as tarefas precisamos de as manter numa estrutura de dados, mais especificamente num `array`.

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
      <FormularioTarefa onTarefaAdicionada={}/>
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

--------

Sempre que uma nova tarefa for criada dentro do componente `FormularioTarefa` queremos que este componente passe essa informação ao pai - `App` -, de forma a que este possa actualizar a lista que é mostrada ao utilizador. 

Para isso, dentro doo componente `App` vamos passar uma função de "callback" ao componente filho `FormularioTarefa`:

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

Como consegues ver, na declaração do componente `FormularioTarefa` estamos a declarar um novo evento `onTarefaCriada` e quando este evento for executado dentro do componente, a função `adicionarTarefa` vai ser executada - é por isso que lhe chamamos uma função de "callback", porque vai do pai para o filho, e de volta para o pai.

Esta função `adicionarTarefa`  ainda não existe, por isso vamos criá-la:

```javascript
import { useState } from 'react';
import './App.css';
import FormularioTarefa from './FormularioTarefa';

function App() {
  const [tarefas, setTarefas] = useState([]);
  function adicionarTarefa(novaTarefa) {
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

Nota que podemos simplificar a função `adicionarTarefa` da seguinte forma:

```javascript
...
  function adicionarTarefa(novaTarefa) {
    setTarefas([...tarefas, { novaTarefa }]);
  }
...
```

... o que significa que podemos simplificar ainda mais o componente:


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
