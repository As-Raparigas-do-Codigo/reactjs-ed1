import Botao from '../Botao/Botao';

function FormularioTarefa() {
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