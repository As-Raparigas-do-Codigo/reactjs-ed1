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
            <Button title="Adicionar" onClickHandler={() => alert("Alguém clicou no botão de adicionar tarefa")}/>
        </div>        
    );
}

export default FormularioTarefa;
```

Como consegues ver, quando o botão é clickado, para já só lança um alerta. 

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

<img width="1440" alt="Screenshot 2022-02-02 at 20 40 07" src="https://user-images.githubusercontent.com/39055313/152233780-858543b6-dc35-434a-abf0-323203a4fbff.png">

Se clicares no botão deves conseguir ver o alerta.

<img width="1440" alt="Screenshot 2022-02-02 at 20 39 59" src="https://user-images.githubusercontent.com/39055313/152233772-f43b745d-f6e6-418d-b0e6-1bcab6a8c77c.png">
