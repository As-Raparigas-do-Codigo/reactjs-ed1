# Arquitectura Web Tradicional, AJAX e SPAs

vOs developers utilizam frequentemente React para construir **SPAs** (Single Page Applications), ainda que tal não seja obrigatório.

Para percebermos o que são SPAs temos primeiro de perceber a forma como os sites funcionam agora, e funcionaram ao longo da sua (não muito longa) história.

----------

![image](https://user-images.githubusercontent.com/39055313/150641570-a2bf8095-1f87-43a9-b344-e7be6429e23b.png)

[Source](https://www.google.com/url?sa=i&url=https%3A%2F%2Finnovationm.co%2Fhttp-protocol%2F&psig=AOvVaw0LR2w7ZDd20N2xvERBePqT&ust=1642946636973000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDYn6jDxfUCFQAAAAAdAAAAABA1)

Até agora, vocês construíram websites que consistiam basicamente em páginas `HTML` se ligam umas às outras por meio de hiperligações.

Ou seja, se tiverem 2 páginas - o `index.html` e o `contactos.html` - vocês simplesmente colocam um link numa das páginas que abre a outra.

Isto é a forma como os sites funcionavam quando a Web nasceu, a grande diferença é que em vez de carregarmos uma nova página `HTML` que está alojada no nosso computador, na Web o nosso browser envia um pedido `HTTP` ao servidor, que lhe responde com a nova pagina `HTML`.

Mas rapidamente se percebeu a necessidade de **enviar e receber dados** e **alterar o estado** de uma aplicação, por exemplo, mostrar uma página diferente aos utilizadores quando estão autenticados e quando não estão.

### Autenticação em "Web Tradicional" vs "AJAX"

Nos princípios da Web, a autenticação fazia-se da seguinte forma:
1. O browser fazia um pedido `HTTP` a um servidor: "dá-me a página inicial"
2. O servidor valida que o utilizador não está logado e responde com o `HTML` que correspondia à página de login 
3. O browser mostrava esta página
4. O utilizador introduzia as suas credenciais
5. O browser enviava um novo pedido `HTTP` com as credenciais do utilizador, e pedia a nova página
6. O servidor respondia com uma nova página `HTML` que poderia ser a página "Home" se as credenciais fossem válidas ou a página de login com uma mensagem de erro, se as credenciais estivessem erradas;
7. Sempre que havia uma alteração era feito um novo pedido `HTTP` ao servidor, e era devolvida uma nova página

Hoje em dia, muitos poucos sites têm este comportamentos, é muito mais provável que a autenticação seja implementada da seguinte forma:

1. O browser fazia um pedido `HTTP` a um servidor: "dá-me a página inicial"
2. O servidor envia um único ficheiro `HTML` independentemente do estado de autenticação do user, juntamente com `JavaScript`, `CSS` e todos os outros recursos;
3. O browser corre o JavaScript que decide que interface mostrar ao utilizador
4. Para tomar esta decisão o JavaScript pega na cookie ou token de autenticação e envia-o para o servidor para perceber se este é válido
5. O servidor responde **não com HTML mas apenas com uma mensagem que responde à pergunta**
6. Se o utilizador não estiver logado, o JavaScript decide mostrar o formulário de login que está algures declarado no ficheiro `HTML` que foi inicialmente devolvido pelo servidor;
8. O utilizador introduzia as suas credenciais
10. O browser envia um novo pedido `HTTP` com as credenciais do utilizador
11. O servidor responde **não com HTML mas apenas com uma mensagem que responde à pergunta**
12. Se as credenciais estiverem OK, o JavaScript sabe que é para mostrar outro pedaço de `HTML` que já estava presente no `HTML` que foi inicialmente devolvido pelo servidor;

AJAX significa Asynchronous JavaScript and `XML`, ou seja, os nossos sites começam a conseguir fazer ações assíncronas (sem haver reload da página) via JavaScript e XML.

## SPAs

Muito mais recentemente surgiram as SPAs que levam esta arquitectura AJAX completamente ao limite, porque **nunca fazem reload**:
* O browser faz um pedido `HTTP` inicial ao servidor que responde com todo o HTML e todo o JavaScript que a aplicação contém;
* Os dados específicos do utilizador são pedidos à medida que são necessários pelo browser via JavaScript.


![image](https://user-images.githubusercontent.com/39055313/150569545-080a9ab4-1f7c-4fb2-b89a-8c5f78fc2ef5.png)
