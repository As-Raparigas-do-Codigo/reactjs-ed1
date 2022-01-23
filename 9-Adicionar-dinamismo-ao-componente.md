# Adicionar dinamismo ao componente

Vamos agora definir o que acontece quando clicamos no `<Button>` que criamos na aula anterior.

Olhando para esta função, consegues perceber onde adicionar esta funcionalidade?

```javascript
function Button() {
    return (
        <button>Click me</button>
    );
}
  
export default Button;
```

Se nós soubermos que ao clicar, o botão tem sempre o mesmo comportamento podemos fazer algo deste género:

```javascript
function Button() {
    var onClickHandler = function() {
        alert("Alguém clicou no botão!");
    }
    return (
        <button onClick={onClickHandler}>Click me</button>
    );
}
  
export default Button;
```

Como podes ver, a função `onClickHandler` está a ser declarada dentro da função `Button` **antes do `return`** - sim, funções podem conter outras funções!

Depois, no componente `<button>` esta função é passada ao evento de `onClick`, que é a forma como nos referimos ao [evento onclick](https://www.w3schools.com/jsref/event_onclick.asp) em React.

Nota que é importante ter em conta que este código está escrito em `JSX` e não em `HTML`, e como tal temos de passar esta variável dentro de `{}`.
