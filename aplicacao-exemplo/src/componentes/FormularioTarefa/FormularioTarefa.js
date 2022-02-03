import { useState } from 'react';
import Botao from '../Botao/Botao';

function FormularioTarefa(props) {
    const [novaTarefa, setNovaTarefa] = useState("")
    return (
        <div>
            <input type="text" placeholder="Introduz a tua tarefa"
                   onChange={(e) => setNovaTarefa(e.target.value)}/>
            <Botao type="warning" 
                   title="Adicionar" 
                   onClickHandler={() => props.onTarefaCriada(novaTarefa)}/>
        </div>        
    );
}

export default FormularioTarefa;