import BotaoStyled from './Botao.styles';

function Botao(props) {
    return (
        <BotaoStyled onClick={props.onClickHandler}>{props.title}</BotaoStyled>
    );
}
  
export default Botao;