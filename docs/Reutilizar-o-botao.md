# Reutilizar o botão

Agora que sabemos criar botões com comportamento e estilo dinâmicos, vamos criar vários botões para testar esta lógica.

Vamos voltar ao componente principal da aplicação - `App.js` - e vamos limpar o resto do conteúdo dentro da `div` principal:

```javascript
import logo from './logo.svg';
import './App.css';
import Button from './Button';

function App() {
  function adicionarTarefa() {
    alert("Adicionar tarefa")
  }
  function removerTarefa() {
    alert("Remover tarefa")
  }
  return (
    <div className="App">
        <Button title="Adicionar tarefa" onClickHandler={adicionarTarefa}></Button>
        <Button title="Remover tarefa" onClickHandler={removerTarefa}></Button>
    </div>
  );
}

export default App;
```

<img width="851" alt="Screenshot 2022-01-23 at 20 36 22" src="https://user-images.githubusercontent.com/39055313/150697085-bce32e92-f7a1-40a7-83f7-6aed92eee1ee.png">

