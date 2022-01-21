
# Criação do esqueleto do projecto

Todos os projectos React têm muitas coisas em comum, e como tal, existem formas de criar um projecto base de forma rápida - este processo é muitas vezes designado por "scaffolding".

Para criar um projecto base, abre novamente o teu terminal, navega até à pasta onde queres trabalhar (por exemplo, o teu Ambiente de Trabalho) e corre:

```shell
npx create-react-app my-app
```

Nota que deves substituir `my-app` pelo nome que queres dar à aplicaçao.

Logo a seguir vais ver no terminal a seguinte pergunta:

```
Need to install the following packages:
  create-react-app
Ok to proceed? (y)
```

Introduz `y` e depois clica Enter.

![Screenshot 2022-01-20 at 12 19 49](https://user-images.githubusercontent.com/39055313/150339979-b2e01a93-72c8-4ca0-bb0c-d7502288bd5a.png)

Quando este processo chegar ao fim corre:

```shell
cd <nome-do-teu-projecto>
```

Depois de estares dentro da tua nova pasta corre:

```shell
npm start
```

Se tudo correr bem deves ver uma nova _tab_ no teu browser com o endereço [http://localhost:3000/](http://localhost:3000/), e uma aplicação assim:

![Screenshot 2022-01-21 at 15 35 47](https://user-images.githubusercontent.com/39055313/150554959-f21b7ba2-a618-4770-9534-864c067897d3.png)

## Notas Importantes

![image](https://user-images.githubusercontent.com/39055313/150566529-7eb6c06d-de58-4e58-b06d-b7cb56e8aac1.png)

O `localhost` é uma forma alternativa do teu computador se referir ao IP `127.0.0.1`, que é o endereço que todos os computadores usam para se referirem a eles próprios.

Ou seja, quando vês uma página a correr em [http://localhost:3000/](http://localhost:3000/), isto significa que o teu browser está a "servir" um site que está alojado no teu computador, e mais especificamente está a correr na porta 3000. 

O teu computador tem 65535 portas onde os serviços podem correr mas muitas delas estão reservadas para certos serviços. Por exemplo, o teu browser usa `80` para HTTP, `443` para HTTPS por defeito.

Neste caso, a aplicação escolheu a porta `3000`, mas podia ter escolhido qualquer outra das portas disponíveis.
