# Reutilizar o botão

Agora que sabemos criar botões com comportamento e estilo dinâmicos, vamos criar vários botões para testar esta lógica.

Vamos voltar ao componente principal da aplicação - `App.js` - e vamos limpar o resto do conteúdo dentro do `body` para além dos nosso botões:

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

