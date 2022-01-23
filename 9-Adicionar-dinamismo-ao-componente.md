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

Se nós soubermos que o botão tem sempre o mesmo comportamento ao clicar, podemos fazer algo deste género:

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

<img width="1439" alt="Screenshot 2022-01-23 at 10 49 15" src="https://user-images.githubusercontent.com/39055313/150675154-78b48605-3b66-48a0-a2eb-dcaa52295901.png">

**ES6**

Uma forma alternativa de escrever isto foi introduzida com o EcmaScript 2015 (ES6), que é uma das versões mais recentes do JavaScript:

```javascript
function Button() {
    return (
        <button onClick={() => alert("Alguém clicou no botão!")}>Click me</button>
    );
}
  
export default Button;
```

Como podes ver, dentro do evento `onClick` estamos a passar a seguinte função anónima: 

```javascript
() => alert("Alguém clicou no botão!")
```

Não te preocupes se não perceberes para já esta síntaxe, iremos explorar isto mais à frente.
