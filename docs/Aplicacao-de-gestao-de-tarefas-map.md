# Aplicação de gestão de tarefas - map

Portanto, a variável de estado `tarefas` foi criada para manter a lista de tarefas actualizada, mas precisamos agora de uma forma de as mostrar na interface da aplicação.

Uma das formas mais simples de iterar um array e mostrar os seus objectos numa lista é usar o método `map`.

Da mesma forma que incluímos variáveis dentro do JSX, também podemos usar funções, como consegues ver abaixo:

```javascript
import { useState } from 'react';
import './App.css';
import FormularioTarefa from './FormularioTarefa';

function App() {
  const [tarefas, setTarefas] = useState([]);
  return (
    <div className="App">
      <FormularioTarefa onTarefaCriada={ (novaTarefa) => setTarefas([...tarefas, { novaTarefa }]) }/>
      <ul>
      {
        tarefas.map((tarefa, key) => {
          return <li id={key}>{tarefa}</li>
        })
      }
      </ul>
    </div>
  );
}

export default App;
```

Há aqui algumas coisas importantes a notar:

1. Repara que o método `map` tem 2 argumentos, o objecto em si (o qual designamos `tarefa`) e o índice do objeto (o qual designamos `key`);
2. Estamos a injectar o conteúdo da tarefa em si dentro da `<div>` e o índice do objecto na propriedade `id`, o que é importante para o ReactJS - os elementos devem ser sempre únicos, e caso contrário o ReactJS lança um erro;

### Como é que isto funciona?

Vamos fazer um pequeno teste.

Em vez de inicializarmos o array `tarefas` vazio, vamos adicionar-lhe umas tarefas de teste:

```javascript
import { useState } from 'react';
import './App.css';
import FormularioTarefa from './componentes/FormularioTarefa/FormularioTarefa';

function App() {
  const [tarefas, setTarefas] = useState(['comprar leite e ovos', 'exercício']);
  return (
    <div className="App">
      <FormularioTarefa onTarefaCriada={ (novaTarefa) => setTarefas([...tarefas, { novaTarefa }]) }/>
      <ul>
      {
        tarefas.map((tarefa, key) => {
          return <li id={key}>{tarefa}</li>
        })
      }
      </ul>
    </div>
  );
}

export default App;
```

Consegues ver a lista de tarefas?

<img width="335" alt="Screenshot 2022-02-02 at 21 17 44" src="https://user-images.githubusercontent.com/39055313/152238886-d5f6a772-defd-4dbe-86e7-3a9efd78cffa.png">
