# Renderização Condicional

O `JSX` permite-nos misturar lógica escrita em `JavaScript` com componentes de UI escritos em `HTML`, o que é uma ferramenta poderosa quando queremos renderizar alguma coisa condicionalmente.

Um típico cenário de "conditional rendering" são os "empty states", isto é: o que a aplicação mostra quando não tem dados para mostrar, exemplo:

![facebook-empty-state](https://user-images.githubusercontent.com/39055313/156448028-f9cf6d3e-b0c8-43c4-a305-74635f069942.png)

Imagina que queremos exibir uma mensagem específica ao utilizador quando não existem tarefas.

Para começar, temos de retirar do hook aquelas tarefas que tínhamos "hardcoded":

```javascript
import { useState } from 'react';
import './App.css';
import FormularioTarefa from './componentes/FormularioTarefa/FormularioTarefa';

function App() {
  const [tarefas, setTarefas] = useState([]);
  [...]
}
```

Depois, dentro do componente `App` podemos adicionar uma regra que mostra uma frase específica quando não há tarefas, por exemplo:

```javascript
import { useState } from 'react';
import './App.css';
import FormularioTarefa from './componentes/FormularioTarefa/FormularioTarefa';

function App() {
  const [tarefas, setTarefas] = useState([]);
  return (
    <div className="App">
    <FormularioTarefa onTarefaCriada={ (novaTarefa) => setTarefas([...tarefas, novaTarefa]) }/>
    {
      tarefas.length > 0
        ? <ul>
          {
            tarefas.map((tarefa, key) => {
              return <li key={key}>{tarefa}</li>
            })
          }
          </ul>
        : <p>Ainda não adicionaste nenhuma tarefa!</p>
    }
    </div>
  );
}
  
export default App;
```

O resultado final é este:

![conditional-rendering](https://user-images.githubusercontent.com/39055313/156449299-a59f4161-7f63-44b1-91bb-7eea94262c0d.gif)

É importante perceber que estamos aqui a usar o [operador condicional ternário](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator), que funciona da seguinte forma:

```
"a condição a validar" ? "se a condição for verdadeira, executa isto" : "se a condição for falsa, executa isto" 
```

Neste caso:

```
tarefas.length > 0 ? "mostra a lista de tarefas" : "mostra a frase"
```
