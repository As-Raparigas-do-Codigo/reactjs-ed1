# Adicionar comportamento ao botão

Vamos agora definir o que acontece quando clicamos no componente que criamos na aula anterior.

Para já, vamos assumir que este comportamento é sempre igual, sempre que se clica no botão.

Olhando para esta função, consegues perceber onde adicionar esta funcionalidade?

```javascript
function Botao() {
    return (
        <button>Click me</button>
    );
}
  
export default Botao;
```

Se te lembras das aulas de JavaScript, então sabes que funções podem ser declaradas dentro de outras funções.

Neste caso, faz sentido declarar a função que vai gerir o comportamento do click (ao qual vamos chamar `onClickHandler`) dentro da função `Button`, imediatamente antes do `return`.

Isto porque **o return só deve conter o código `JSX` que vai ser devolvido pelo componente.**

Como podes ver, no elemento `<button>` esta função é passada ao evento de `onClick`, que é a forma como nos referimos ao [evento onclick](https://www.w3schools.com/jsref/event_onclick.asp) em React.

```javascript
function Botao() {
    var onClickHandler = function() {   // podes usar "let" em vez de "var"
        alert("Alguém clicou no botão!");
    }
    return (
        <button onClick={onClickHandler}>Click me</button>
    );
}
  
export default Botao;
```

<img width="1440" alt="Screenshot 2022-02-02 at 20 29 43" src="https://user-images.githubusercontent.com/39055313/152232334-93a7705a-5564-48b9-9b77-8cde83942ccb.png">

### Síntaxe Alternativa

Quando uma função é tão pequena como a função `onClickHandler`, é muito comum declará-la "inline", ou seja, dentro da declaração do próprio elemento.

```javascript
function Botao() {
    return (
        <button onClick={function() { alert("Alguém clicou no botão!") } }>Click me</button>
    );
}
```

Como consegues ver, esta função não tem nome - é uma **função anónima**.

Uma forma ainda mais simples de escrever este tipo de funções utiliza [arrow functions](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions), também designadas "fat arrows":

```javascript
function Botao() {
    return (
        <button onClick={() => alert("Alguém clicou no botão!")}>Click me</button>
    );
}
  
export default Botao;
```
