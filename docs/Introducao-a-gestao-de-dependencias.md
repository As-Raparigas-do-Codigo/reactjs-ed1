# Introdução à gestão de dependências

Ainda antes de arrancarmos as aulas pedimos que instalasses o [npm](https://www.npmjs.com/), um gestor de dependências, e ainda que não tenhas reparado já o usaste por várias vezes:
1. para criar o projecto correste um comando que começava com `npx`
2. para arrancar o servidor local correste `npm start`
3. a pasta `node_modules` contem uma série de bibliotecas que estás a usar no projecto, incluindo o React em si

## O ficheiro `package.json`

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

## Como instalar dependências usando o npm

Para conseguirmos instalar uma dependência usando o `npm` temos primeiro que identificar o nome do pacote debaixo do qual a dependência é distribuída.

Para tal, podemos ir ao [site oficial do npm](https://www.npmjs.com/) e procurar, por exemplo, pelo React:

![Screenshot 2022-01-31 at 13 56 05](https://user-images.githubusercontent.com/39055313/151806423-47711b45-8693-4329-a70e-d17f8fba5362.png)

Se clicarmos [no primeiro resultado](https://www.npmjs.com/package/react) vemos a descrição da dependência e, do lado direito, o comando que temos de correr para instalá-la:

![Screenshot 2022-01-31 at 13 56 52](https://user-images.githubusercontent.com/39055313/151806576-99c3bd60-aecb-4d8e-bbd1-19fff5ee6202.png)

Ou seja, se corrermos `npm i react` dentro da raíz do nosso projecto, passamos a poder usar o `react`.

Algumas considerações importantes:
* `npm i react` é só uma versão abreviada de `npm install react`;
* Para instalarmos uma ferramenta globalmente podemos correr `npm i react -g`

No entanto, normalmente não é este com


