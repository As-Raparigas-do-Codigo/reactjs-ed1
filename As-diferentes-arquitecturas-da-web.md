# As Diferentes Arquitecturas da Web

## Da vossa "arquitectura local" até aos princípios da Web

No módulo de Web 1 vocês construíram websites que consistiam basicamente em páginas `HTML` se ligam umas às outras por meio de hiperligações.

Ou seja, se tivessem construído 2 páginas - `index.html` e `contactos.html` - simplesmente colocavam um link numa das páginas que abre a outra.

Reparem que o protocolo que é usado neste flow é o [protocolo `file://`](https://en.wikipedia.org/wiki/File_URI_scheme), dado que se tratam sempre de ficheiros locais:

![file_protocol](https://user-images.githubusercontent.com/39055313/150689551-0af917d8-8517-4ef5-8a73-a105fdbc2c02.gif)

No início da World Wide Web, os sites eram muito parecidos com aqueles que tens vindo a desenvolver, com a principal diferença de que os clientes/browsers carregavam estas páginas, não do próprio computador, mas sim de um servidor remoto através de **pedidos [HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP)**.

Ou seja, para o browser mostrar a página `index.html` ou `contactos.html` de um qualquer site tinha sempre de fazer pedidos `HTTP` separados para ir buscar o conteúdo `HTML` respectivo.

**Saltamos do domínio do `file` para o `http`** - é normal que estes termos ainda não te digam muito mas vão começar a fazer sentido aos poucos.

**Experiência**

No teu browser, navega até [http://info.cern.ch/hypertext/WWW/TheProject.html](http://info.cern.ch/hypertext/WWW/TheProject.html) e abre as "Developer Tools" na tab de "Network".

Garante que a opção "Preserve log" está seleccionada

1. De cada vez que clicas numa hiperligação, consegues ver o pedido `HTTP` que é enviado? 
2. Consegues ver na resposta o `HTML` que corresponde à página para onde navegaste?

<img width="1440" alt="Screenshot 2022-01-23 at 16 53 12" src="https://user-images.githubusercontent.com/39055313/150689148-d052756c-e5a6-4a14-ab72-c5a8b47baa71.png">

-----

No entanto, os sites rapidamente se tornaram mais complexos, e foi necessário encontrar mecanismos para se fazer coisas mais complexas como, por exemplo, permitir que os utilizadores se autenticassem.

### Flow "Web Tradicional"

![Screenshot 2022-01-24 at 11 05 35](https://user-images.githubusercontent.com/39055313/150771791-5c40ea3a-91f4-4b5e-b84b-1df615f44b9b.png)

1. O utilizador queria ver o site [exemplo.com](http://exemplo.com)
2. O browser fazia um pedido `HTTP` para este servidor e incluía automaticamente a cookie que comprova a sua identidade
3. O servidor analisava esta cookie, validava a identidade do utilizador e respondia, ou com o `HTML` que correspondia à página de login, ou com o `HTML` correspondente à "Home" page
4. O browser renderizava esta página - [exemplo.com](http://exemplo.com)
5. Se o utilizador quisesse navegar para a página de perfil, seria enviado outro pedido `HTTP` para a página `profile` por exemplo, juntamente com a cookie, e o servidor voltaria a validar a identidade do utilizador, e responderia com o `HTML` correspondente à página de perfil com a informação do utilizador.

### Flow SPAs

![Screenshot 2022-01-24 at 11 15 17](https://user-images.githubusercontent.com/39055313/150773076-4443a77d-adbf-40bf-bfbe-5d63d0f86164.png)

1. O browser envia um pedido `HTTP` para [exemplo.com](http://exemplo.com)
2. O servidor responde com `HTML` e outros "assets" (css, js, imagens, etc) - **nota que este é o único pedido que devolve `HTML` em todo este fluxo*
3. O browser corre o JavaScript, que pega no cookie ou token de sessão, e envia-o para o servidor para validar a sua identidade, normalmente para um endpoint de uma **API**
4. O servidor responde com um código correspondente
5. Se o utilizador estiver logado, o JavaScript sabe que é para mostrar a "Home" page que não é mais do que outro pedaço de `HTML` que já estava presente no `HTML` que foi inicialmente devolvido pelo servidor
6. Se o utilizador quisesse navegar para a página de perfil, seria enviado outro pedido `HTTP` **que apenas pede os dados do utilizador**, juntamente com o token/cookie, e o servidor voltaria a validar a identidade do utilizador, e responderia com o `JSON` correspondente aos dados do utilizador
7. O JavaScipt pega nesse `JSON` e injecta-o num pedaço de `HTML` que já estava presente no `HTML` que foi inicialmente devolvido pelo servidor

Como percebeste, só houve aqui um carregamento de HTML - uma única página HTML - e a isto se chama **SPA** (Single Page Application).

Os developers utilizam frequentemente React para construir SPAs, ainda que tal não seja obrigatório.

As SPAs tornaram-se possíveis com a introdução de um conceito chamado **AJAX** (Asynchronous JavaScript and `XML`), ou seja, quando se tornou possível aos browsers enviarem pedidos de JavaScript e XML assíncronamente (sem haver um novo pedido de página HTML).
