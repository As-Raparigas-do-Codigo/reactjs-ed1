# 🚀 Próximos Passos

E agora? O que é que podes aprender a seguir?

## Routing

As aplicações "single-page" podem de facto ter apenas uma página, ou seja, apenas utilizam um único URL.

Mas é muito comum ver SPAs que suportam múltiplas "rotas".

As rotas não são páginas "verdadeiras" mas servem para emular o sistema clássico de ligações `HTML`.

O roteamento é algo que tendencialmente é feito com a ajuda de uma biblioteca - podes ver uma lista das mais populares [aqui](https://pt-br.reactjs.org/community/routing.html).

Essencialmente o roteamento consistem em definir as rotas que queremos que a aplicação suporte, e que conteúdo é que deve ser exibido em cada uma.

Nota que as rotas podem ser:
* completamente estáticas, por exemplo: `/home` ou `/profile`;
* parcialmente dinâmicas, por exemplo `/users/:username`, onde `:username` corresponde ao username de cada utilizador.

## Bibliotecas de componentes UI para React

Quando queres criar aplicações rapidamente, algo que pode ser super útil é a utilização de bibliotecas de UI que são construídas específicamente para React, entre elas:
* [React Bootstrap](https://react-bootstrap.github.io/) 
* [MUI (Material-UI)](https://mui.com/pt/)

Aprender a utilizá-las e customizá-las é uma forma simples de fazer com o teu site pareça mais profissional, de forma super rápida.

## Testes

Algo que vais ter de aprender eventualmente é como tornar as tuas aplicações mais robustas através da escrita de testes. 

Os testes ajudam-nos a perceber se fizemos erros na lógica da aplicação, ou se algo mudou que afectou a nossa aplicação.

Se reparares, o teu ficheiro `package.json` tem já algumas referências a uma das bibliotecas de teste mais populares para Javascript, o Jest:

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

## TypeScript e Transpilers

Algo que vais reparar quando começares a explorar outros projectos React, é que em vez de ficheiros com extensão `.js` muitos dos ficheiros têm extensão `.ts`, o que significa que estes ficheiros são escritos em [TypeScript](https://www.typescriptlang.org/), quje é uma versão tipada do JavaScript.

O que é uma linguagem tipada? Ora, isso envolve perceber alguns conceitos adicionais sobre programação Orientada a Objectos, mas é importante saberes para já que o TypeScript é muito popular porque é muito mais improvável que faças alguns erros "parvos", que tendem a acontecer em Javascript.

Quando ouvires falar de TypeScript vais provavelmente também ouvir falar de [Babel](https://babeljs.io/) ou de outro "transpiler".

Um transpiler é um tradutor de código fonte numa linguagem para código fonte noutra linguagem, neste caso preciamos de traduzir de JavaScript para TypeScript **porque os browsers não sabem interpretar (ler) TypeScript, só JavaScript!**

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

No entanto, o Webpack é muito mais do que isso, e requer um investimento grande para perceber como funciona completamente.

## Redux


## Fetch e Interação com Servidor/APIs

