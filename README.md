# web2-ed-1

Bem-vinda ao segundo módulo de Web.

## Utilização básica do terminal

Ao longo deste módulo vamos descrever uma série de instruções, algumas das quais envolvem ter conhecimento básico de utilização do terminal.

1. Se quiseres saber em que pasta estás corre `pwd`:

```
~ pwd
> ~/Desktop
```

2. Se quiseres listar os conteúdos da pasta corre `ls`:

```
~ ls
> a-minha-pasta/
```

3. Se quiseres navegar para uma pasta corre `cd <o nome da pasta>`:
```
~ cd a-minha-pasta/
~ pwd
> ~/Desltop/a-minha-pasta
```

4. Se quiseres navegar para trás corre `cd ..`:

```
~ cd ..
~ pwd
> ~/Desktop
```

## Instalação do NodeJS e NPM

O [NodeJS](https://nodejs.org/en/) (também conhecido por "Node") é um "JavaScript runtime" que tem várias funcionalidades.
Neste caso, vamos instalar o Node para correr aplicações construídas em [React](https://reactjs.org/) nos nossos computadores, e vamos ainda instalar um dos seus sub-módulos - o [NPM](https://www.npmjs.com/) - para gerirmos as dependências do nosso projeto.

Para instalar o NodeJS e o NPM segue os seguintes passos:
1. Vai a [https://nodejs.org/en/](https://nodejs.org/en/) e instala a versão do Node correspondente para o teu Sistema Operativo.
2. Quando terminares a instalação abre o teu terminal e corre `node -v`
 * Se estiver tudo OK deves ver a versão do node, por exemplo: `v14.17.0`;
3. Se o NodeJS estiver correctamente instalado corre `npm -v` para validar a versão do NPM:
 * Se estiver tudo OK deves ver a versão do NPM, por exemplo: `8.3.0`;

## Criar o esqueleto do projecto

Todos os projectos React têm muitas coisas em comum, e como tal, existem formas de criar esta "base" de forma rápida - este projecto é muitas vezes designado por "scaffolding".

Para criar esta base abre novamente o teu terminal, navega até à pasta que queres utilizar (podes ter que pedir ajuda para fazer este projecto) e corre:

```
create-react-app
```
