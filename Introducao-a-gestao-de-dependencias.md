# Introdução à gestão de dependências

Ainda antes de arrancarmos as aulas pedimos que instalasses o [npm](https://www.npmjs.com/), um gestor de dependências, e ainda que não tenhas reparado já o usaste por várias vezes:
1. para criar o projecto correste um comando que começava com `npx`
2. para arrancar o servidor local correste `npm start`
3. a pasta `node_modules` contem uma série de bibliotecas que estás a usar no projecto, incluindo o React em si

Vamos perceber como é que estas coisas estão relacionadas e como é que o npm funciona, começando pelo ficheiro `package.json`.

No início do ficheiro consegues ver alguma informação básica sobre o teu projecto, incluindo o nome e a versão, que podes editar à vontade:

```json
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
```

De seguida, consegues ver as dependências que o projecto está a usar:

```json
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.1",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.3"
  },
```

**Experiência**

1. Elimina a pasta `node_modules` e corre `npm install`
2. Nota que a pasta foi criada de novo com o mesmo conteúdo.

Uma nota importante sobre esta pasta é que, dada a sua dimensão esta normalmente não é versionada usando o `git` e como tal é adicionada por defeito ao `.gitignore`.

Finalmente consegues ver alguns scripts, um dos quais já deves reconhecer, o `start`:

```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

Sempre que corres `npm start` - que é um atalho para `npm run start` - no fundo estás a correr `react-scripts start` que é um script desenvolvido pelos criadores do projecto base e que fazem todos os passos necessários para correr o servidor local.

Há mais algumas coisas no ficheiro `package.json`, mas não são relevantes para já.
