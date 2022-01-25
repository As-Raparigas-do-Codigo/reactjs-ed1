# Aplicação de gestão de tarefas - input 

[...]

```javascript
import Button from './Button';

function FormularioTarefa({ adicionarTarefa }) {
    const [value, setValue] = React.useState("");
    function adicionarTarefa(e) {
      if (!value) return;
      adicionarTarefa(value);
      setValue("");
    };
    return (
        <div>
            <input type="text" placeholder="Introduz a tua tarefa" value={value} onChange={e => setValue(e.target.value)}/>
            <Button title="Adicionar" onClickHandler={adicionarTarefa}/>
        </div>
    );
}

export default FormularioTarefa;
```

[...]
