# As Diferentes Arquitecturas da Web

## Da vossa "arquitectura local" até aos princípios da Web

No módulo de Web 1 vocês construíram websites que consistiam basicamente em páginas `HTML` se ligam umas às outras por meio de hiperligações.

Ou seja, se tivessem construído 2 páginas - `index.html` e `contactos.html` - simplesmente colocavam um link numa das páginas que abre a outra.

Reparem que o protocolo que é usado neste flow é o protocolo `file`, dado que se tratam sempre de ficheiros locais:

![file_protocol](https://user-images.githubusercontent.com/39055313/150689551-0af917d8-8517-4ef5-8a73-a105fdbc2c02.gif)

No início da World Wide Web, os sites eram muito parecidos com aqueles que tens vindo a desenvolver, com a principal diferença de que os clientes/browsers carregavam estas páginas, não do próprio computador, mas sim de um servidor remoto através de **pedidos [HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP)**.

Ou seja, se o browser quiser mostrar a página `index.html` ou `contactos.html` de um qualquer site tinha sempre de fazer pedidos `HTTP` separados para ir buscar o conteúdo `HTML` respectivo.

**Saltamos do domínio do `file` para o `http`** - é normal que estes termos ainda não te digam muito mas vão começar a fazer sentido aos poucos.

**Experiência**

No teu browser, navega até [http://info.cern.ch/hypertext/WWW/TheProject.html](http://info.cern.ch/hypertext/WWW/TheProject.html) e abre as "Developer Tools" na tab de "Network".

Garante que a opção "Preserve log" está seleccionada

1. De cada vez que clicas numa hiperligação, consegues ver o pedido `HTTP` que é enviado? 
2. Consegues ver na resposta o `HTML` que corresponde à página para onde navegaste?

<img width="1440" alt="Screenshot 2022-01-23 at 16 53 12" src="https://user-images.githubusercontent.com/39055313/150689148-d052756c-e5a6-4a14-ab72-c5a8b47baa71.png">

-----

No entanto, os sites rapidamente se tornaram mais complexos, e foi necessário encontrar mecanismos para se fazer coisas mais complexas como, por exemplo, permitir que os utilizadores se autenticassem.

### Autenticação em "Web Tradicional"

Nos princípios da Web, a autenticação fazia-se da seguinte forma:

1. O utilizador queria ver o site [exemplo.com](http://exemplo.com)
2. O browser fazia um pedido `HTTP` para [exemplo.com](http://exemplo.com) e enviava juntamente algo que está guardado no browser, que comprova a autenticação do utilizador
3. O servidor analisava este valor que estava guardado no browser, validava se o utilizador estava ou não autenticado
4. Se o utilizador estivesse logado, o servidor respondia com o `HTML` que correspondia à página de login, caso contrário respondia com o `HTML` correspondente à "Home" page, por exemplo
5. Imaginando que o utilizador não estava autenticado, o browser mostrava a página de login, por exemplo: [exemplo.com/login](http://exemplo.com/login)
6. O utilizador introduzia as suas credenciais no formulário de login
7. O browser enviava um novo pedido `HTTP` com as credenciais do utilizador para [exemplo.com/login](http://exemplo.com/login)
8. Se as credencias fossem válidas, o servidor respondia com uma nova página `HTML` da "Home" page - nota que este `HTML` já vinha com informação exclusiva daquele utilizador
9. O browser renderizava esta página - [exemplo.com](http://exemplo.com)

### Autenticação em SPAs

Hoje em dia, é muito mais provável que a autenticação seja implementada da seguinte forma:
1. O browser envia um pedido `HTTP` para [exemplo.com](http://exemplo.com)
2. O servidor responde com `HTML` e outros "assets" (css, js, imagens, etc) - **nota que este é o único pedido que devolve `HTML` em todo este fluxo*
3. O browser corre o JavaScript, que pega em algo que está guardado no browser, que comprova a autenticação do utilizador, e envia-o para o servidor para perceber se este é válido
4. O servidor responde **não com HTML mas apenas com uma mensagem que responde a esta questão**
5. Se o utilizador não estiver logado, o JavaScript decide mostrar o formulário de login que está algures declarado no ficheiro `HTML` que foi inicialmente devolvido pelo servidor
6. O utilizador introduz as suas credenciais neste formulário
7. O JavaScript envia um novo pedido `HTTP` com as credenciais do utilizador
8. O servidor responde **não com HTML mas apenas com uma mensagem que responde a esta pergunta**
9. Se as credenciais estiverem OK, o JavaScript sabe que é para mostrar a "Home" page que não é mais do que outro pedaço de `HTML` que já estava presente no `HTML` que foi inicialmente devolvido pelo servidor

Como percebeste, só houve aqui um carregamento de HTML - uma única página HTML - e a isto se chama **SPA** (Single Page Application).

Os developers utilizam frequentemente React para construir SPAs, ainda que tal não seja obrigatório.

As SPAs tornaram-se possíveis com a introdução de um conceito chamado **AJAX** (Asynchronous JavaScript and `XML`), ou seja, quando se tornou possível aos browsers enviarem pedidos de JavaScript e XML assíncronamente (sem haver um novo pedido de página HTML).

![image](https://user-images.githubusercontent.com/39055313/150569545-080a9ab4-1f7c-4fb2-b89a-8c5f78fc2ef5.png)
