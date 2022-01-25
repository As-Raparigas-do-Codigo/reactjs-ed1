# Adicionar Estilo ao Botão

Nas aplicações ReactJS, em vez de indicarmos a class usando o atributo `class`, usamos o atributo `className`. 

Para podemos reutilizar o botão com vários estilos, vamos especificar uma classe que é passada pelo componente pai:

```javascript
function Button(props) {
    return (
        <button className={props.type} onClick={props.onClickHandler}>{ props.title }</button>
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

De volta ao componente `FormularioTarefa`, podemos passar o estilo que queremos ao botão:

```javascript
import Button from './Button';

function FormularioTarefa() {
    function adicionarTarefa() {
        // TBD        
    }
    return (
        <div>
            <input type="text" placeholder="Introduz a tua tarefa"/>
            <Button type="warning" title="Adicionar" onClickHandler={adicionarTarefa}/>
        </div>        
    );
}

export default FormularioTarefa;
```

O resultado, como podes ver, é que o botão é renderizado com a classe "warning":

![Screenshot 2022-01-25 at 17 35 05](https://user-images.githubusercontent.com/39055313/151029068-2411cc23-e8b3-4925-b6e6-cb51de6dd2e9.png)

