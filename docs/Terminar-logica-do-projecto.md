# Terminar a lógica do projecto

Ok, o que é que nos falta fazer?

Bem ... quando clicamos no botão de "Adicionar Tarefa" dentro do componente `FormularioTarefa` queremos passar essa informação ao componente "pai" - `App` - para que este actualize o array `tarefas` e mostre naquela lista que criamos.

Como é que fazemos isso?

Primeiro temos de criar uma estrutura para manter registo do valor que está escrito dentro do `input` - para isso vamos usar os `hooks` que já conhecemos:

```javascript
import { useState } from 'react';
import Botao from '../Botao/Botao';

function FormularioTarefa() {
    const [novaTarefa, setNovaTarefa] = useState("")
    return (
        <div>
            <input type="text" placeholder="Introduz a tua tarefa"/>
            <Botao type="warning" 
                   title="Adicionar" 
                   onClickHandler={() => alert("Alguém clicou no botão de adicionar tarefa")}/>
        </div>        
    );
}

export default FormularioTarefa;
```

Como consegues ver, a tarefa é inicializada como uma `String` vazia.

Ok, agora vamos criar um mecanismo que garante que a variável `novaTarefa` é actualizada sempre que alguém escreve no campo de input.

Para isso, vamos chamar a função `setTarefa` com o valor `e.target.value` - para entenderes isto tens de perceber que sempre que há uma alteração num elemento de `input` este automaticamente gera [um evento](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) que podes consultar.

```javascript
import { useState } from 'react';
import Botao from '../Botao/Botao';

function FormularioTarefa() {
    const [novaTarefa, setNovaTarefa] = useState("")
    return (
        <div>
            <input type="text" placeholder="Introduz a tua tarefa"
                   onChange={(e) => setNovaTarefa(e.target.value)}/>
            <Botao type="warning" 
                   title="Adicionar" 
                   onClickHandler={() => alert("Alguém clicou no botão de adicionar tarefa")}/>
        </div>        
    );
}

export default FormularioTarefa;
```

OK, agora vamos testar este mecanismo simplesmente lançando um alerta com o valor actualizado da variável `novaTarefa`:

```javascript
import { useState } from 'react';
import Botao from '../Botao/Botao';

function FormularioTarefa() {
    const [novaTarefa, setNovaTarefa] = useState("")
    return (
        <div>
            <input type="text" placeholder="Introduz a tua tarefa"
                   onChange={(e) => setNovaTarefa(e.target.value)}/>
            <Botao type="warning" 
                   title="Adicionar" 
                   onClickHandler={() => alert(novaTarefa)}/>
        </div>        
    );
}

export default FormularioTarefa;
```
<img width="1440" alt="Screenshot 2022-02-02 at 21 26 50" src="https://user-images.githubusercontent.com/39055313/152240070-c5bebe19-82d2-4a05-b249-99e55f3f0f6a.png">

