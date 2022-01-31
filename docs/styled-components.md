# Styled Components

Os [styled components](https://styled-components.com/) são uma forma alternativa de escrever CSS.

O conceito essencial é que cada componente de UI -  - botão, formulário, modal - tem o seu CSS associado e isolado.

Vamos voltar ao nosso botão e vamos tirar-lhe tudo o que está relacionado com CSS:

```javascript
import Button from './Button';

function FormularioTarefa() {
    function adicionarTarefa() {
        // TBD        
    }
    return (
        <div>
            <input placeholder="Introduz a tua tarefa"/>
            <Button title="Adicionar" onClickHandler={adicionarTarefa}/>
        </div>        
    );
}

export default FormularioTarefa;
```

E agora vamos criar um botão _a la_ styled component.

Para isso vamos criar um ficheiro `Button.sc` com a seguinte declaração:

```javascript
const Button = styled.button``
```

E agora vamos adicionar-lhe todo o CSS que queremos para todos os botões, e.g:

```javascript
const Button = styled.button`
  padding: 5px;
`
```

Agora vamos adicionar estilos específicos do tipo de botão:


```javascript
const Button = styled.button`
  padding: 5px;
  ${props => props.style && props.style === 'info' && css`
    background: blue;
    color: tomato;
  `}
  ${props => props.style && props.style === 'warning' && css`
    background: kaki;
    color: tomato;
  `}
  ${props => props.style && props.style === 'danger' && css`
    background: white;
    color: tomato;
  `}
`
```
