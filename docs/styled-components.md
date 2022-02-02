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

## Criação de pastas de componentes

Antes de começarmos a criar styled components, vamos criar algum tipo de organização.

Dentro da tua pasta `src`, cria uma pasta `componentes` e lá dentro cria duas novas pastas: `Botao` e `FormularioTarefas`.

Coloca em cada uma o componente React correspondente, como mostrado abaixo:

<img width="319" alt="Screenshot 2022-02-02 at 20 55 14" src="https://user-images.githubusercontent.com/39055313/152235940-25fd4639-0443-4a66-ad86-f1dd41ecc882.png">

Garante que actualizas as tuas importações:

- Dentro do `App.js` agora o componente `FormularioTarefa` é importado da seguinte forma:

```
import FormularioTarefa from './componentes/FormularioTarefa/FormularioTarefa';
```

- Dentro do `FormularioTarefa` o componente `Botao` é importado da seguinte forma:

```
import Botao from '../Botao/Botao';
```

## Criação de Styled Component

Dentro da pasta `Botao`, junto ao componente que já tens, cria um novo ficheiro chamado `Botao.styles.js` e adiciona o seguinte código:

```javascript
import styled from 'styled-components'
```

Nesta linha importamos a biblioteca de styled components e atribuímo-la à variável `styled`.

Agora vamos declarar o componente `StyledBotao` como podes ver abaixo:

```javascript
import styled from 'styled-components'

const StyledBotao = styled.button``
```

Agora vamos adicionar o CSS que queremos para todos os botões:

```javascript
import styled from 'styled-components'

const StyledBotao = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
```

Finalmente vamos exportar este styled component para o podermos usar no resto da aplicação:


```javascript
import styled from 'styled-components'

const StyledBotao = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

export default StyledBotao;
```


## Utilizar um styled component
