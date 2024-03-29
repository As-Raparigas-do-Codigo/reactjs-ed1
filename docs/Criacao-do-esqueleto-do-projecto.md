
# Criação do esqueleto do projecto

O nosso projecto vai ser construído em [ReactJS](https://reactjs.org/), que é actualmente a biblioteca de desenvolvimento "front-end" mais popular no mercado (lê mais [aqui](5-Bibliotecas-e-Frameworks-de-Front-End.md)).

Como podem imaginar, todos os projectos React partilham muita coisas em comum, e como tal, não faria sentido que os programadores começassem do zero sempre que quisessem criar um novo projecto.

Como tal é comum os programadores irem buscar "projectos base" ao Github e outras plataformas semelhantes, ou mesmo usar ferramentas para **gerar projectos-base**, que é o que nós vamos fazer usando uma ferramenta desenvolvida pelo Facebook chamada [create-react-app](https://github.com/facebook/create-react-app).

Se já souberes usar a linha de comandos, navega até ao diretório onde queres criar a pasta do projecto.

Alternativamente, abre o Visual Studio Code e abre a pasta que vai conter o teu projecto, por exemplo, o Ambiente de Trabalho, fazendo "File" > "Open":

<img width="1440" alt="Screenshot 2022-02-02 at 20 14 09" src="https://user-images.githubusercontent.com/39055313/152230299-6eabf905-e0b4-4626-ac26-79b501de0949.png">

Escolhe a pasta e clicka "Open":

<img width="1440" alt="Screenshot 2022-02-02 at 20 14 21" src="https://user-images.githubusercontent.com/39055313/152230341-f9ee03a3-6c26-4f06-aede-3b6ff781d91a.png">

... e depois, abre o Terminal integrado:

<img width="1440" alt="Screenshot 2022-02-02 at 20 18 40" src="https://user-images.githubusercontent.com/39055313/152231093-50ac1f6e-a83b-4b57-848a-72ca897d03ba.png">

Agora podes correr:

```shell
npx create-react-app my-app
```

Nota que deves substituir `my-app` pelo nome que queres dar à aplicaçao (não uses caracteres especiais e espaços).

Logo a seguir vais ver no terminal a seguinte pergunta:

```
Need to install the following packages:
  create-react-app
Ok to proceed? (y)
```

Introduz `y` e depois clica Enter.

![Screenshot 2022-01-20 at 12 19 49](https://user-images.githubusercontent.com/39055313/150339979-b2e01a93-72c8-4ca0-bb0c-d7502288bd5a.png)

Quando este processo chegar ao fim deves ter uma nova pasta no teu diretório, com o nome que escolheste para o projecto. Se estiver tudo ok, corre:

```shell
cd <nome-do-teu-projecto>
```

Depois de estares dentro da tua nova pasta corre:

```shell
npm start
```

Se o processo correr com sucesso deves ver uma nova _tab_ no teu browser com o endereço [http://localhost:3000/](http://localhost:3000/), e uma aplicação assim:

![Screenshot 2022-01-21 at 15 35 47](https://user-images.githubusercontent.com/39055313/150554959-f21b7ba2-a618-4770-9534-864c067897d3.png)

## Notas Importantes

`localhost` é um termo que o computador usa para se referir a si próprio.

Ou seja, quando vês uma página a correr em [http://localhost:3000/](http://localhost:3000/), isto significa que o teu browser está a "servir" um site que está alojado no teu computador, e mais especificamente está a correr na porta 3000.

O teu computador tem 65535 portas onde os serviços podem correr mas muitas delas estão reservadas para certos serviços. Por exemplo, o teu browser usa `80` para HTTP, `443` para HTTPS por defeito.

Neste caso, a aplicação escolheu a porta `3000`, mas podia ter escolhido qualquer outra das portas disponíveis.

Podes comprovar isto abrindo uma nova tab dentro do diretório do teu projecto, e correndo novamente `npm start` - em princípio terás um erro a dizer que essa porta está ocupada:

```shell
? Something is already running on port 3000. Probably:
  /usr/local/bin/node ./Desktop/my-app/node_modules/react-scripts/scripts/start.js (pid 3167)
  in ./Desktop/my-app

Would you like to run the app on another port instead? › (Y/n)
```



