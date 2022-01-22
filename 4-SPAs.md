# Arquitectura Web Tradicional, AJAX e SPAs

![image](https://user-images.githubusercontent.com/39055313/150641570-a2bf8095-1f87-43a9-b344-e7be6429e23b.png)

[Source](https://www.google.com/url?sa=i&url=https%3A%2F%2Finnovationm.co%2Fhttp-protocol%2F&psig=AOvVaw0LR2w7ZDd20N2xvERBePqT&ust=1642946636973000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDYn6jDxfUCFQAAAAAdAAAAABA1)

Até agora, vocês construíram websites que consistiam basicamente em páginas `HTML` se ligam umas às outras por meio de hiperligações.

Ou seja, se tiverem 2 páginas - o `index.html` e o `contactos.html` - vocês simplesmente colocam um link numa das páginas que abre a outra.

Isto é a forma como os sites funcionavam quando a Web nasceu, a grande diferença é que em vez de carregarmos uma nova página `HTML` que está alojada no nosso computador, na Web o nosso browser envia um pedido `HTTP` ao servidor, que lhe responde com a nova pagina `HTML`.

Mas rapidamente se percebeu a necessidade de **enviar e receber dados** e **alterar o estado** de uma aplicação, por exemplo, mostrar uma página diferente aos utilizadores quando estão autenticados e quando não estão.

### Autenticação em "Web Tradicional" vs SPAs

Nos princípios da Web, a autenticação fazia-se da seguinte forma:
1. O browser fazia um pedido `HTTP` a um servidor: "dá-me a página inicial"
2. O servidor valida que o utilizador não está logado e responde com o `HTML` que correspondia à página de login 
3. O browser mostrava esta página
4. O utilizador introduzia as suas credenciais
5. O browser enviava um novo pedido `HTTP` com as credenciais do utilizador, e pedia a nova página
6. O servidor respondia com uma nova página `HTML` que poderia ser a página "Home" se as credenciais fossem válidas ou a página de login com uma mensagem de erro, se as credenciais estivessem erradas;
7. Sempre que havia uma alteração era feito um novo pedido `HTTP` ao servidor, e era devolvida uma nova página

Hoje em dia, é muito mais provável que a autenticação seja implementada da seguinte forma:

1. O browser fazia um pedido `HTTP` a um servidor: "dá-me a página inicial"
2. O servidor envia um ficheiro `HTML` (juntamente com o resto dos "assets") independentemente do estado de autenticação do user - **nota que este é o único pedido que devolve `HTML`!**.
3. O browser corre o JavaScript decide que interface mostrar ao utilizador
4. Para tomar esta decisão o JavaScript pega na cookie ou token de autenticação que está guardado no browser e envia-o para o servidor para perceber se este é válido
5. O servidor responde **não com HTML mas apenas com uma mensagem que responde à pergunta**
6. Se o utilizador não estiver logado, o JavaScript decide mostrar o formulário de login que está algures declarado no ficheiro `HTML` que foi inicialmente devolvido pelo servidor;
7. O utilizador introduzia as suas credenciais
8. O browser envia um novo pedido `HTTP` com as credenciais do utilizador
9. O servidor responde **não com HTML mas apenas com uma mensagem que responde à pergunta**
10. Se as credenciais estiverem OK, o JavaScript sabe que é para mostrar outro pedaço de `HTML` que já estava presente no `HTML` que foi inicialmente devolvido pelo servidor;

Como percebeste, só houve aqui um carregamento de HTML - uma única página HTML - e a isto se chama **SPA** (Single Page Application).

Os developers utilizam frequentemente React para construir SPAs, ainda que tal não seja obrigatório.

As SPAs tornaram-se possíveis com a introdução de um conceito chamado **AJAX** (Asynchronous JavaScript and `XML`), ou seja, quando se tornou possível aos browsers enviarem pedidos de JavaScript e XML assíncronamente (sem haver um novo pedido de página HTML).

![image](https://user-images.githubusercontent.com/39055313/150569545-080a9ab4-1f7c-4fb2-b89a-8c5f78fc2ef5.png)
