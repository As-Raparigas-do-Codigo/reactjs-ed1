# Arquitectura Web Tradicional, AJAX e SPAs

![image](https://user-images.githubusercontent.com/39055313/150569545-080a9ab4-1f7c-4fb2-b89a-8c5f78fc2ef5.png)


Para percebermos o que são SPAs temos primeiro de perceber a forma como os sites funcionam agora, e funcionaram ao longo da sua (não muito longa) história.

Quando a Web nasceu, os sites normalmente funcionavam da seguinte forma:

1. O browser fazia um pedido HTTP a um servidor
2. O servidor respondia com uma página HTML
3. Sempre que havia uma alteração era feito um novo pedido HTTP ao servidor, e era devolvida uma nova página
4. Em suma, sempre que era necessário fazer uma ação a página era re-loaded

Hoje em dia, muitos poucos sites têm este comportamentos:
* Da última vez que fizeste "like" no Instagram, a tua página fez refresh?

Nesta arquitectura tradicional teria que fazer:
1. O teu browser fazia um pedido do género "faz like na foto com ID x"
2. O servidor recebia o pedido e validava se estava tudo OK
3. O servidor respondia com uma versão HTML do Instagram em que já fizeste like na foto.

## AJAX

Para evitar este tipo de flows surgiu a arquitectura AJAX.

AJAX significa Asynchronous JavaScript and XML, ou seja, os nossos sites começam a conseguir fazer ações assíncronas (sem haver reload da página) via JavaScript e XML.

## SPAs

Muito mais recentemente surgiram as SPAs que levam esta arquitectura AJAX completamente ao limite, porque **nunca fazem reload**:
* O browser faz um pedido `HTTP` inicial ao servidor que responde com todo o HTML e todo o JavaScript que a aplicação contém;
* Os dados específicos do utilizador são pedidos à medida que são necessários pelo browser via JavaScript.
