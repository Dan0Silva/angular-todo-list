# 📝 Angular Todo List

Este é um projeto simples de **Todo List** desenvolvido com [Angular](https://angular.io/) com o intuito de estudos e práticas com a ferramenta. Nele, você pode adicionar, remover, marcar como concluída e listar tarefas.

> 📚 **Objetivo**: Aprender os conceitos básicos de Angular, organização de pastas, criação de componentes, comunicação entre eles e boas práticas no desenvolvimento front-end com TypeScript.

- Versãso do NodeJS: **v20.18.0**
- Versão do Angular CLI: **v17.3.17**

---

### 🚀 Como rodar o projeto

Certifique-se de ter o [Node.js](https://nodejs.org/) e o [Angular CLI](https://angular.io/cli) instalados.

#### Instalação

```bash
# Clonar o repositório
git clone https://github.com/Dan0Silva/angular-todo-list.git

# Entrar na pasta do projeto
cd angular-todo-list

# Instalar as dependências
npm install
```

#### Rodando o projeto

```bash
# Iniciar o servidor de desenvolvimento
ng serve

# Acesse no navegador
http://localhost:4200/

```

---

### 💬 Convenção de commits

Utilizamos a convenção **Conventional Commits**, que é simples, padronizada e compatível com ferramentas de changelog automático e versionamento semântico. Nesse projeto, optaremos por **não** utilizar a definição de escopo no commit.

Exemplo de commit:

```bash
<type>: <description>
```

| Tipo do commit | Descrição                                             |
| -------------- | ----------------------------------------------------- |
| feat           | Adicionar uma nova feature                            |
| fix            | Correção de algo já produzido                         |
| docs           | Adicionar ou editar itens relacionados a documentação |
| style          | Adicioanr ou editar itens relacionados a documentação |

### 📚 Documentação dos componentes

Este projeto utiliza [**Storybook**](https://storybook.js.org/) para a documentação visual e interativa dos componentes. Para conferir a documentação dos componentes, siga os passos abaixo:

```bash
# instalando as dependências
npm install

# rodando o storybook
npm run storybook

```

Após executar os comandos, a documentação estará disponivel na porta [6006](http://localhost:6006/) da sua maquina.
