# Adicionar Estilo ao Botão

Nas aplicações ReactJS, em vez de indicarmos a class usando o atributo `class`, usamos o atributo `className`. 

Para podemos reutilizar o botão com vários estilos, vamos especificar uma classe que é passada pelo componente pai:

```javascript
function Button(props) {
    return (
        <button className={props.style} onClick={props.onClickHandler}>{ props.title }</button>
    );
}

export default Button;
```

Vamos definir alguns estilos possíveis, por exemplo:
* `info`
* `warning`
* `danger`

E agora, no ficheiro `App.css` podemos limpar os estilos que já vinham com o projecto-base e declará-los usando `CSS` - esta parte deve ser familiar:

```css
button.info {
  background-color: cadetblue;
  color: white;
}

button.warning {
  background-color: khaki;
  color: black;
}

button.danger {
  background-color: tomato;
  color: white;
}
```

De volta ao ficheiro `App.js`, podemos passar o estilo que queremos ao botão:

```javascript
<Button style="warning" title="Click me" onClickHandler={() => alert("Alguém clicou no botão")}></Button>
```

O resultado, como podes ver, é que o botão é renderizado com a classe "warning":

![Screenshot 2022-01-25 at 17 28 52](https://user-images.githubusercontent.com/39055313/151028124-8d2ef279-fb4b-4e37-9936-5d9af0a9e2a5.png)

