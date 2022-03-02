# Renderização Condicional

O `JSX` nos permite misturar regras de JavaScript com `HTML`, o que é uma ferramenta poderosa quando queremos renderizar alguma coisa condicionalmente.

Um típico cenário de "conditional rendering" são os "empty states", isto é: o que a aplicação mostra quando ainda não tem dados.

Alguns exemplos de empty states incluem:

![facebook-empty-state](https://user-images.githubusercontent.com/39055313/156448028-f9cf6d3e-b0c8-43c4-a305-74635f069942.png)

![no-results](https://user-images.githubusercontent.com/39055313/156448037-7900ce7a-07b3-49cc-8a0d-584f68d4ca51.png)

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

