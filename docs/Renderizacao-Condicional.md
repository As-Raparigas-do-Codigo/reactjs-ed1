# Renderização Condicional

O `JSX` nos permite misturar regras de JavaScript com `HTML`, o que é uma ferramenta poderosa quando queremos renderizar alguma coisa condicionalmente.

Um típico cenário de "conditional rendering" são os "empty states", isto é: o que a aplicação mostra quando ainda não tem dados.

Alguns exemplos de empty states incluem:

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

