# Styled Components

Os [styled components](https://styled-components.com/) são uma forma alternativa de escrever CSS.

O conceito essencial é que cada componente de UI - botão, formulário, modal - tem o seu CSS associado e isolado.

## Preparação

Vamos voltar ao nosso botão e vamos tirar-lhe o atributo `className`:

```javascript
function Button(props) {
    return (
        <button onClick={props.onClickHandler}>{ props.title }</button>
    );
}

export default Button;
```

## Instalação de dependência

Agora que sabes como é que se instalam dependências, vamos por este conhecimento à prova!

Vai ao terminal, acede à pasta onde tens o projecto e garante que estás na raíz - para validar corre o comando `ls` e garante que vês qualquer coisa do género:

```shell
README.md         package.json      src
package-lock.json public
```

Agora corre o comando de instalação:

```shell
~ npm i styled-components --save 
```

Como resultado deves ver esta entrada no ficheiro `package.json`:

```json
"dependencies": {
    [...]
    "styled-components": "^5.3.3",
    [...]
},
```

## Criação de um Botão _a la_ Styled Component

E agora vamos criar um botão _a la_ styled component.

Para isso vamos criar um ficheiro `Button.styles` com a seguinte declaração:

```javascript
const Button = styled.button``
```

E agora vamos adicionar o CSS que queremos para todos os botões, e.g:

```javascript
const Button = styled.button`
  padding: 5px;
`
```

Agora vamos adicionar estilos específicos do tipo de botão:

```javascript
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const InfoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const WarningButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const DangerButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
```

## Utilizar um styled component
