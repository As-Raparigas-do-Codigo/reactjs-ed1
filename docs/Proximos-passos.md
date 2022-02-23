# Próximos Passos

E agora? O que é que podemos fazer a seguir?

## Routing

Algo que pode ser super útil é ter várias páginas na tua aplicação.

Para conseguires navegar entre elas, precisas de aprender como funciona o "routing" ou roteamento.

Isto é algo que tendencialmente é feito com a ajuda de uma biblioteca - podes ver uma lista das bibliotecas de routing mais populares [aqui](https://pt-br.reactjs.org/community/routing.html).

A essência do roteamento é muito simples: tu defines as "rotas" (páginas) que queres que a tua aplicação deve suportar e que conteúdo é que deve ser exibido em cada uma.

Nota que as rotas podem ser:
* completamente estáticas, por exemplo: `/home` ou `/profile`;
* parcialmente dinâmicas, por exemplo `/users/:username`, onde `:username` corresponde ao username de cada utilizador.

## Bibliotecas de componentes UI para React

Quando queres criar aplicações rapidamente, algo que pode ser super útil é a utilização de bibliotecas de UI que são construídas específicamente para React, entre elas:
* [React Bootstrap](https://react-bootstrap.github.io/) 
* [MUI (Material-UI)](https://mui.com/pt/)

## Testes

Algo que vais ter de aprender eventualmente é como tornar as tuas aplicações mais robustas através da escrita de testes. 

Se reparares, o teu ficheiro `package.json` deve ter algumas referências a uma das bibliotecas de teste mais populares para Javascript, o Jest:

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

Algo que vais reparar quando começares a explorar outros projectos React, é que em vez de ficheiros com extensão `.js` muitos dos ficheiros têm extensão `.ts`, o que significa que estes ficheiros são escritos em [TypeScript](https://www.typescriptlang.org/), uma linguagem tipada para JavaScript.

O que é uma linguagem tipada? Ora, isso envolve perceber alguns conceitos adicionais sobre programação Orientada a Objectos, mas é importante saberes para já que o TypeScript é muito popular porque é muito mais improvável que faças alguns erros "parvos", que tendem a acontecer em Javascript.

Quando ouvires falar de TypeScript vais provavelmente ouvir falar de Babel ou outro "transpiler", que é uma forma muito chique de nos referirmos a um programa que converte TypeScript em Javascript - **lembra-te que os browsers não sabem interpretar TypeScript, só JavaScript!**

## Outros Hooks

À medida que fores desenvolvendo funcionalidades cada vez mais complexas vai ser útil conhecer outros hooks como:
- [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)
- [useCallback](useCallback)
- [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)

## Outros
- redux
- webpack
- fetch e interação com APIs
