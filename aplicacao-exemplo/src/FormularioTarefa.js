import Button from './Button';

function FormularioTarefa() {
    function adicionarTarefa() {
        // TBD        
    }
    return (
        <div>
            <input type="text" placeholder="Introduz a tua tarefa"/>
            <Button title="Adicionar" onClickHandler={adicionarTarefa}/>
        </div>        
    );
}

export default FormularioTarefa;