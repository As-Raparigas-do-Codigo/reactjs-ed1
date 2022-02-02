# Aplicação de Gestão de Tarefas - Intro

O nosso objectivo é criar uma aplicação de gestão de tarefas, qualquer coisa como:

![image](https://user-images.githubusercontent.com/39055313/150697193-0c6b1e64-6665-4637-867c-56a9c42942aa.png)

Para isso, vamos voltar ao componente principal da aplicação - `App.js` - e vamos limpar todo o conteúdo que já não é necessário dentro da `div` principal:

```javascript
import './App.css';

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
```

O React incentiva-nos a pensar de forma modular, por isso vamos dividir cada funcionalidade da aplicação no seu próprio sub-componente, começando pela parte que nos permite criar uma nova tarefa.

Este novo componente pode chamar-se, por exemplo, `FormularioTarefa` e deve ser declarado num ficheiro `FormularioTarefa.js`.

Este componente precisa de um `input` e de um botão - para o botão podemos usar o componente `Button` que já implementamos:

```javascript
import Button from './Button';

function FormularioTarefa() {
    return (
        <div>
            <input type="text" placeholder="Introduz a tua tarefa"/>
            <Button title="Adicionar" onClickHandler={() => alert("Alguém clicou no botão")}/>
        </div>        
    );
}

export default FormularioTarefa;
```

Como consegues ver, a função `adicionarTarefa` só lança um alerta para já. 

Vamos agora voltar ao componente `App` e incluir este novo componente:

```javascript
import './App.css';
import FormularioTarefa from './FormularioTarefa';

function App() {
  return (
    <div className="App">
      <FormularioTarefa/>
    </div>
  );
}

export default App;
```

Se olhares novamente para a aplicação deves ver:

<img width="900" alt="Screenshot 2022-01-23 at 21 26 10" src="https://user-images.githubusercontent.com/39055313/150698599-067c2b7e-5c7e-4fbb-abd3-16ff5914d190.png">

Se clicares no botão deves conseguir ver o alerta.
