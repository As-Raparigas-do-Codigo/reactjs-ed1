# 🚀 Próximos Passos

E agora? O que é que podes aprender a seguir?

## Roteamento/Routing

Como viste no decorrer deste workshop, as aplicações "single-page" (SPA) podem utilizar apenas um único URL. No entanto, é comum ver SPAs que suportam múltiplas "rotas".

As rotas não são páginas típicas já que qualquer uma delas devolve o mesmo `HTML` e assets. No entanto, a própria lógica da aplicação decide que conteúdo mostrar com base no URL que está aberto.

Essencialmente o **roteamento** consistem em definir as rotas (os URLs) que queremos que a aplicação suporte, e que conteúdo é que deve ser exibido quando se navega para cada uma.

Nota que as rotas podem ser:
* completamente estáticas, por exemplo: `/home` ou `/profile`;
* parcialmente ou totalmente dinâmicas, por exemplo `/users/:username`, onde `:username` corresponde ao username de cada utilizador.

O roteamento é algo que tendencialmente é feito com a ajuda de uma biblioteca - podes ver uma lista das mais populares [aqui](https://pt-br.reactjs.org/community/routing.html).

## Bibliotecas de componentes UI para React

Quando queres criar aplicações com aspecto profissional muito rapidamente, algo que pode ser super útil é a utilização de bibliotecas de UI que são construídas específicamente para React, entre elas:
* [React Bootstrap](https://react-bootstrap.github.io/) 
* [MUI (Material-UI)](https://mui.com/pt/)

## Testes

Algo que vais ter de aprender eventualmente é como tornar as tuas aplicações mais robustas através da escrita de testes. 

Os testes ajudam-nos a perceber se fizemos erros, ou mesmo se algo mudou numa dependência que afectou a nossa aplicação.

Uma aplicação robusta tem uma boa "code coverage" (ou "cobertura de código"), ou seja, uma grande percentagem de linhas de código cobertas por testes unitários. 

Se reparares, o teu ficheiro `package.json` tem já algumas referências a uma das bibliotecas de teste mais populares para Javascript, o [Jest](https://jestjs.io/):

```json
{
  "name": "aplicacao-exemplo",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.1",
    [...]
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
}
```

Sempre que na tua aplicação tens um cenário que consegues descrever da seguinte forma: "Eu sei que dadas as condições x e y, deveria acontecer z", então consegues traduzir isso para um teste.

Por exemplo: "Eu sei que quando somo 1 mais 2, deveria obter o resultado 3".

Isto seria traduzido num teste unitário escrito em Jest da seguinte forma:

```js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

## TypeScript e Transpilers

Algo que vais reparar quando começares a explorar outros projectos React, é que em vez de ficheiros com extensão `.js` muitos dos ficheiros têm extensão `.ts`, o que significa que estes ficheiros são escritos em [TypeScript](https://www.typescriptlang.org/), quje é uma versão tipada do JavaScript.

O que é uma [linguagem tipada](https://pt.wikipedia.org/wiki/Linguagem_tipada)? De forma simples "é uma linguagem de programação que usa variáveis com tipos específicos." 

Neste momento já sabes que uma variável em JavaScript pode conter `strings`, números inteiros, `arrays`, objectos, etc. Imagina agora uma linguagem em que tens de especificar o tipo de dados que vai ser guardado numa variável quando a declaras, e nunca podes mudar o tipo da variável depois dela ser declarada.

Pode parecer limitador neste momento, mas a verdade é que acaba por impedir que muitos erros "parvos" aconteçam, daí a popularidade do TypeScript.

Quando ouvires falar de TypeScript vais provavelmente também ouvir falar de [Babel](https://babeljs.io/) ou de outro "transpiler".

Um transpiler é um tradutor de código fonte numa linguagem para código fonte noutra linguagem. Nós precisamos sempre de traduzir de TypeScript para JavaScript **porque os browsers não sabem interpretar (ler) TypeScript, nem JSX ... só JavaScript!**

## Outros Hooks

À medida que fores desenvolvendo funcionalidades cada vez mais complexas vai ser útil conhecer outros hooks como:
- [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)
- [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
- [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)

## Webpack

Outra tecnologia essencial no contexto das aplicações React modernas é o [Webpack](https://webpack.js.org/).

Sem te aperceberes tens estado a usar Webpack desde que configuraste o projecto, é por isso que consegues importar os teus recursos usando a síntaxe:

```
import bar from './bar.js';
```

No entanto, o Webpack é muito mais do que isso, e requer um grande investimento de tempo para se conseguir perceber o seu potencial.

## React + Fetch

Quando estiveres confortável com a construção de uma aplicação "front-end", vais provavelmente começar a enviar/receber dados através de pedidos `HTTP`.

Uma das formas mais simples de conseguir fazer isto é usando o [fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch), uma função que é suportada nativamente pelos browsers modernos.

Por exemplo, imagina que querias conseguir pesquisar por pacotes `npm` dentro da tua aplicação, podias usar a API pública do `npm` da seguinte forma:

```javascript
const [pacotes, setPacotes] = useState([]);

useEffect(() => {
    fetch('https://api.npms.io/v2/search?q=react')
        .then(response => response.json())
        .then(data => setPacotes(data.total));
}, []);
```

## Avançados

- [Redux](https://redux.js.org/)
- [Flux](https://facebook.github.io/flux/)
