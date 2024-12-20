Este projeto foi desenvolvido como parte do Challenge Front-End 4ª Edição promovido pela Alura. Durante quatro semanas, os participantes tiveram a oportunidade de praticar e expandir seus conhecimentos em desenvolvimento web, resultando na criação do AdoPet, uma plataforma que conecta adotantes a ONGs que resgatam animais de rua. Este README contém informações detalhadas sobre as funcionalidades, recursos e instruções para a execução da aplicação.

<hr>

## Índice

-   [Descrição](#descricao)
-   [Páginas e Componentes](#building_construction-páginas-e-componentes)
    -   [Página Inicial](#página-inicial)
    -   [Página de Cadastro](#página-de-cadastro)
    -   [Página de Login](#página-de-login)
    -   [Página Home](#página-home)
    -   [Página de Contato](#página-de-contato)
    -   [Página de Perfil](#página-de-perfil)
-   [Funcionalidades e Recursos](#rocket-funcionalidades-e-recursos)
    -   [Navegação e Usabilidade](#navegação-e-usabilidade)
    -   [Cadastro e Autenticação](#cadastro-e-autenticação)
    -   [Exploração e Visualização](#exploração-e-visualização)
    -   [Comunicação e Contato](#comunicação-e-contato)
    -   [Gerenciamento de Perfil](#gerenciamento-de-perfil)
    -   [Validações](#validações)
    -   [Interface Responsiva](#interface-responsiva)
-   [Desenvolvimento e Implementação](#toolbox-desenvolvimento-e-implementação)
    -   [Desenvolvimento com React](#desenvolvimento-com-react)
    -   [Tipagem com TypeScript](#tipagem-com-typescript)
    -   [Roteamento com React Router](#roteamento-com-react-router)
    -   [Gerenciamento de Estado com Context API](#gerenciamento-de-estado-com-context-api)
    -   [Manipulação de Formulários com React Hook Form](#manipulação-de-formulários-com-react-hook-form)
    -   [Validação de Dados com Zod](#validação-de-dados-com-zod)
    -   [Comunicação com API via Axios](#comunicação-com-api-via-axios)
    -   [Estilização com Styled Components](#estilização-com-styled-components)
    -   [Construção de Layout](#construção-de-layout)
    -   [Utilização de Pacotes](#utilização-de-pacotes)
-   [Ferramentas Utilizadas](#computer-ferramentas-utilizadas)
-   [Acesso ao Projeto](#open_file_folder-acesso-ao-projeto)
-   [Instruções](#clipboard-instruções)
-   [Sobre o Challenge](#trophy-sobre-o-challenge)
    -   [O que é um Challenge?](#o-que-é-um-challenge)
    -   [História do Projeto](#história-do-projeto)
    -   [Desenvolvimento Ágil com Trello](#desenvolvimento-ágil-com-trello)

<h1 align="center" id="descricao"><img width="250px" src="https://github.com/GabrielVeroneze/adopet/assets/95183901/f4d380e9-2dea-4ba4-b5d5-754191321d9d"></h1>

<p align="center">A AdoPet é uma plataforma digital desenvolvida para conectar adotantes de animais com ONGs dedicadas ao resgate e acolhimento de animais de rua.</p>

<p align="center">Através da AdoPet, os usuários podem interagir facilmente com representantes das ONGs, facilitando o processo de adoção e aumentando a visibilidade dos animais disponíveis para adoção.</p>

<p align="center">A plataforma permite que os adotantes visualizem informações detalhadas sobre cada animal, incluindo fotos, nomes, idades, portes, características e regiões, além de possibilitar o envio de mensagens diretamente às ONGs.</p>

## :building_construction: Páginas e Componentes

### Página Inicial

A página inicial da AdoPet é a porta de entrada da plataforma. Nesta página, os usuários podem escolher entre duas opções principais: "Já tenho conta" para acessar suas contas existentes e "Quero me cadastrar" para iniciar o processo de cadastro.

<details>
    <summary><b>:camera: Visualizar Screenshot</b></summary>
    <br />
    <img src="https://github.com/GabrielVeroneze/adopet/assets/95183901/928be07d-75a0-4af3-ab80-77a736eebad1" />
</details>

### Página de Cadastro

A página de cadastro é onde os novos usuários podem criar suas contas na plataforma. Nesta página, os usuários devem preencher os campos de Email, Nome e Senha. Após preencher os campos, os usuários podem finalizar o processo de registro ao clicar em "Cadastrar".

<details>
    <summary><b>:camera: Visualizar Screenshot</b></summary>
    <br />
    <img src="https://github.com/GabrielVeroneze/adopet/assets/95183901/81dded34-127e-4b2e-b384-8f59234f7428" />
</details>

### Página de Login

A página de login fornece uma interface para os usuários acessarem suas contas na plataforma. A página contém dois campos onde os usuários devem inserir seu email e senha. Após preencher os campos, os usuários podem clicar em "Entrar" para acessar suas contas.

<details>
    <summary><b>:camera: Visualizar Screenshot</b></summary>
    <br />
    <img src="https://github.com/GabrielVeroneze/adopet/assets/95183901/99c7590d-c943-4bb2-abc1-ee78fbf8e18d" />
</details>

### Página Home

A página home é o ponto central da plataforma, onde os usuários podem explorar os animais disponíveis para adoção. Nesta página, são exibidos perfis de diversos animais, cada um apresentando uma imagem, nome, idade, porte, características e localização.

<details>
    <summary><b>:camera: Visualizar Screenshot</b></summary>
    <br />
    <img src="https://github.com/GabrielVeroneze/adopet/assets/95183901/d50ff6f8-7a01-4b26-908e-91df36d22906" />
</details>

### Página de Contato

A página de contato possibilita os usuários se comunicar diretamente com a pessoa ou instituição responsável pelo animal. Nela, encontra-se um formulário que inclui campos para Nome, Telefone e Mensagem. Após o preenchimento, os usuários podem clicar em "Enviar" para encaminhar a mensagem ao responsável.

<details>
    <summary><b>:camera: Visualizar Screenshot</b></summary>
    <br />
    <img src="https://github.com/GabrielVeroneze/adopet/assets/95183901/d7d2c717-db06-45b1-8387-6f78c7c2aa4d" />
</details>

### Página de Perfil

A página de perfil é onde os usuários podem visualizar e editar suas informações pessoais. Nesta página, os usuários encontram campos para inserir ou atualizar informações como Foto, Nome, Telefone, Cidade e Sobre. Após preencher ou atualizar os campos desejados, os usuários podem salvar suas informações clicando em "Salvar".

<details>
    <summary><b>:camera: Visualizar Screenshot</b></summary>
    <br />
    <img src="https://github.com/GabrielVeroneze/adopet/assets/95183901/990ed62b-8232-404b-9527-f2d7e0b258a4" />
</details>

## :rocket: Funcionalidades e Recursos

### Navegação e Usabilidade

-   `Navegação`: Fornece botões de acesso rápido para as páginas Home e Contato. Quando o usuário está logado, exibe um ícone de usuário que direciona para a página de Perfil.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/GabrielVeroneze/adopet/assets/95183901/56a22642-1f7b-4746-bc8b-117984818e06" />
    </details>

### Cadastro e Autenticação

-   `Cadastro de Usuários`: Permite o registro de novos usuários na plataforma com campos para email, nome e senha. Após o cadastro, o usuário é redirecionado para a página de login.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/GabrielVeroneze/adopet/assets/95183901/4257e27e-06bb-4dda-9c73-85e633c87d0f" />
    </details>

-   `Login de Usuários`: Permite que usuários registrados acessem a plataforma ao inserir email e senha, com opção de recuperação de senha. Após o login, o usuário é redirecionado para a página principal.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/GabrielVeroneze/adopet/assets/95183901/570a7acf-580e-4729-a3b9-d8320b663e08" />
    </details>

### Exploração e Visualização

-   `Catálogo de Animais`: Exibe animais disponíveis para adoção com detalhes como imagem, nome, idade, porte, características e localização, além de um botão para contato direto com o responsável.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/GabrielVeroneze/adopet/assets/95183901/1598e758-7027-4fc3-a8cd-661daa6ca371" />
    </details>

### Comunicação e Contato

-   `Contato com o Responsável`: Permite aos usuários enviar mensagens diretamente para a pessoa ou instituição responsável pelo animal em questão, possibilitando a comunicação e esclarecimento de dúvidas.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/GabrielVeroneze/adopet/assets/95183901/063179a1-8ea6-4169-b401-485fef4706bd" />
    </details>

### Gerenciamento de Perfil

-   `Edição de Perfil`: Permite que os usuários visualizem e editem suas informações pessoais, como foto, nome, telefone, cidade e descrição. As alterações são salvas e atualizadas automaticamente.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/GabrielVeroneze/adopet/assets/95183901/0dd924c8-9a69-42b6-a4cb-7e551388ddc7" />
    </details>

### Validações

-   `Validação de Formulários`: Garante que todos os campos dos formulários sejam preenchidos corretamente, mostrando mensagens de erro e orientações para correção quando houver falhas no preenchimento.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/GabrielVeroneze/adopet/assets/95183901/bd8699e8-7642-4f34-8e63-bc5503fb80eb" />
    </details>

### Interface Responsiva

-   `Design Responsivo`: A plataforma se ajusta automaticamente a diferentes tamanhos de tela, oferecendo uma experiência consistente em dispositivos móveis, tablets e desktops.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/GabrielVeroneze/adopet/assets/95183901/d311d779-0530-47a1-87f6-e3ad93b9c2ac" />
    </details>

## :toolbox: Desenvolvimento e Implementação

### Desenvolvimento com React

-   `Componentes Funcionais e JSX`: Utiliza componentes funcionais e JSX para estruturar a interface do usuário de forma declarativa e reutilizável.

-   `Hooks e Hooks Customizados`: Utiliza hooks como `useState`, `useEffect`, `useCallback`, para gerenciar estado e efeitos colaterais, além de criar hooks customizados para encapsular lógicas reutilizáveis.

-   `Componentização`: Cria interfaces modulares e reutilizáveis, com cada componente responsável por uma parte específica da UI, encapsulando lógica, estado e renderização.

-   `Renderização Dinâmica`: Implementa renderização condicional e mapeamento de listas para exibir conteúdo de forma dinâmica, adaptando-se a diferentes condições e dados externos.

-   `Eventos`: Implementa diversos eventos, como `onClick`, `onSubmit`, entre outros, para interagir com elementos da interface e responder às ações do usuário.

-   `Operações Assíncronas`: Utiliza `async` e `await`, além dos métodos `then` e `catch`, para gerenciar operações assíncronas, como requisições HTTP e manipulação de dados.

### Tipagem com TypeScript

-   `Definições de Tipos`: Utiliza `interfaces` e `type aliases` para definir a estrutura e os tipos de dados, garantindo a segurança e a integridade do código.

-   `Basic Types`: Utiliza tipos básicos como `string`, `number`, `boolean`, entre outros, para representar dados simples e garantir a integridade dos mesmos em toda a aplicação.

-   `Operadores de Tipo`: Utiliza Optional Chaining `?` e Non-null Assertion Operator `!` para lidar com tipos opcionais e evitar erros de acesso a propriedades nulas.

-   `Type Assertions`: Utiliza asserções de tipo `as` para informar ao compilador do TypeScript que determinado valor deve ser tratado como um tipo específico.

-   `Inferência de Tipos`: Utiliza a capacidade de inferência do TypeScript para deduzir tipos automaticamente com base nos dados fornecidos.

### Roteamento com React Router

-   `Configuração de Rotas`: Utiliza `BrowserRouter` para controlar a navegação, `Routes` para organizar as rotas e `Route` para associar caminhos aos componentes.

-   `Rotas Aninhadas e Privadas`: Implementa rotas aninhadas para organizar o layout da aplicação e rotas privadas para controle de acesso.

-   `Navegação`: Utiliza os componentes `Link` e `Navigate` para realizar a navegação e o redirecionamento entre diferentes páginas da aplicação.

-   `Navegação Programática`: Utiliza o hook `useNavigate` para realizar navegação programática dentro dos componentes.

-   `Acesso à Localização`: Utiliza o hook `useLocation` para acessar informações sobre a localização atual da aplicação, como o `pathname` e o `search`.

### Gerenciamento de Estado com Context API

-   `Criação de Contexto`: Utiliza `createContext` para criar contextos que permitem compartilhar dados de forma eficiente entre componentes.

-   `Provedor de Contexto`: Utiliza `Context.Provider` para envolver componentes e fornecer o contexto criado para toda a árvore de componentes descendentes.

-   `Hooks de Contexto`: Implementa `useContext` para consumir contextos dentro dos componentes, facilitando o acesso aos dados globais da aplicação.

-   `Definição de DisplayName`: Utiliza `displayName` para definir um nome descritivo para o contexto criado com `createContext`.

### Manipulação de Formulários com React Hook Form

-   `Manipulação de Formulários`: Utiliza `useForm`, `handleSubmit`, `register` para gerenciar estados e interações com formulários, incluindo validação de dados.

-   `Validação com formState`: Utiliza o `formState` para controlar os estados de validação e exibir mensagens de erro aos usuários.

-   `Reset e Watch`: Utiliza `reset` para redefinir e limpar os dados dos formulários e `watch` para acompanhar e monitorar alterações nos campos.

-   `Integração com Zod`: Utiliza `zodResolver` para integrar validação de formulários com o Zod, uma biblioteca de validação de esquemas.

### Validação de Dados com Zod

-   `Validações`: Utiliza `z.object`, `z.string`, `z.min`, `z.max`, `z.email`, entre outros, para validar dados com esquemas robustos e personalizados.

-   `Expressões Regulares`: Utiliza `z.regex` para validar strings usando expressões regulares, permitindo validações precisas como formatos de telefone, senha, entre outros.

-   `Refinamento de Validações`: Utiliza o `z.refine` para criar validações personalizadas, adaptadas a critérios específicos definidos na aplicação.

-   `Mensagens de Erro`: Configura mensagens de erro detalhadas e personalizadas utilizando o atributo `message` nos esquemas definidos com Zod.

-   `Inferência de Tipos`: Utiliza `z.infer` para inferir automaticamente os tipos de dados com base nos esquemas de validação definidos.

### Comunicação com API via Axios

-   `Requisições HTTP`: Utiliza Axios para realizar requisições HTTP, como `get`, `post`, `put`, `delete`, para interagir com APIs RESTful.

-   `Instância Personalizada`: Utiliza `axios.create` para criar instâncias personalizadas do Axios com configurações globais, como `baseURL` e `headers`.

### Estilização com Styled Components

-   `Criação de Componentes Estilizados`: Utiliza `styled` e `css` para criar componentes estilizados, encapsulando estilos diretamente nos componentes.

-   `Tema para Estilização`: Implementa tema para centralizar a definição de cores, fontes, espaçamentos e outros estilos, garantindo consistência na interface.

-   `Estilos Dinâmicos`: Implementa estilos baseados em `$props` para criar componentes dinâmicos que se adaptam a diferentes estados.

-   `Definição de Estilos Base`: Define estilos base para componentes sem a necessidade de repetir código, garantindo consistência visual.

-   `Extensão de Estilos`: Utiliza extensão de estilos em componentes estilizados para criar variantes personalizadas, sem modificar o estilo original.

-   `Estilos Globais`: Aplica estilos globais utilizando `createGlobalStyle` para definir estilos que se aplicam a todos os elementos da página.

### Construção de Layout

-   `Flexbox e CSS Grid`: Utiliza Flexbox (`flex-direction`, `justify-content`, `align-items`) e CSS Grid (`grid-template-columns`, `grid-template-rows`, `grid-template-areas`) para criar layouts responsivos e dinâmicos.

-   `Media Queries`: Utiliza `@media` para aplicar estilos específicos com base no tamanho da tela, garantindo uma experiência consistente em diferentes dispositivos.

### Utilização de Pacotes

-   `React Toastify`: Utiliza `react-toastify` para exibir notificações na interface da aplicação, informando usuários sobre operações importantes.

-   `Json Server`: Utiliza `json-server` para simular uma API RESTful localmente durante o desenvolvimento da aplicação.

## :computer: Ferramentas Utilizadas

| React | TypeScript | Styled Components | React Router | Axios | React Hook Form | Zod | Vite | 
| :---: | :--------: | :---------------: | :----------: | :---: | :-------------: | :-: | :--: |
<img height="65px" src="https://github.com/GabrielVeroneze/adopet/assets/95183901/0e873759-6b09-45e1-9fd2-527af32b7a17"> | <img height="65px" src="https://github.com/GabrielVeroneze/adopet/assets/95183901/274514dc-5872-4da0-8a0b-8552c4b8fd9d"> | <img height="80px" src="https://github.com/GabrielVeroneze/adopet/assets/95183901/5c085c6f-9da1-4779-a897-52c25a35c170"> | <img height="50px" src="https://github.com/GabrielVeroneze/adopet/assets/95183901/7f9dffdb-402f-44ba-831a-9617bcf174c4"> | <img height="65px" src="https://github.com/GabrielVeroneze/adopet/assets/95183901/f5d0a7d7-b169-452a-9a53-88f24c6f4371"> | <img height="65px" src="https://github.com/GabrielVeroneze/adopet/assets/95183901/b5eca5ad-ab0a-4ef9-9d71-0439e292e33c"> | <img height="65px" src="https://github.com/GabrielVeroneze/adopet/assets/95183901/5e1d6e0f-54f3-4c62-a6b0-a9e69445ad96"> | <img height="65px" src="https://github.com/GabrielVeroneze/adopet/assets/95183901/23a2d06b-2fbd-400b-ba3d-10f2aafd1e1b">

## :open_file_folder: Acesso ao Projeto

Você pode baixar o projeto diretamente:

[Baixar código fonte](https://github.com/GabrielVeroneze/adopet/archive/refs/heads/main.zip)

Também é possível clonar o repositório usando o seguinte comando:

```
git clone https://github.com/GabrielVeroneze/adopet.git
```

## :clipboard: Instruções

Para usar este projeto em seu computador localmente, você precisará seguir estas etapas:

1. Certifique-se de que o Node.js está instalado em seu computador. Caso não esteja, realize o download e a instalação a partir do site oficial:

    https://nodejs.org/

2. Abra o terminal e navegue até a pasta raiz do projeto utilizando o comando `cd`. Por exemplo:

    ```
    cd adopet
    ```

3. Antes de iniciar a aplicação, é necessário instalar as dependências necessárias. Execute o seguinte comando no terminal:

    ```
    npm install
    ```

    Este comando instalará todas as dependências listadas no arquivo `package.json`.

4. Após a instalação das dependências, inicie o servidor JSON Server para disponibilizar os dados da API. Utilize o seguinte comando:

    ```
    npx json-server --watch mock/db.json
    ```

    Isso iniciará o JSON Server na porta 3000 usando o arquivo `db.json` como banco de dados.

5. Após a inicialização do JSON Server, inicie o servidor de desenvolvimento executando o seguinte comando:

    ```
    npm run dev
    ```

    Você receberá uma mensagem com a URL de execução da aplicação, geralmente em http://localhost:5173.

## :trophy: Sobre o Challenge

A 4ª Edição do Challenge Front-End proporciona uma experiência prática e desafiadora, permitindo que os participantes apliquem seus conhecimentos desenvolvendo um projeto completo do início ao fim.

### O que é um Challenge?

O Challenge Front-End é uma abordagem baseada em desafios, onde os participantes se envolvem com um problema específico e exploram soluções por meio de cursos, conteúdos, interações e seus próprios conhecimentos. É uma simulação de um desafio real do mundo profissional, incentivando a aplicação prática e criativa das habilidades dos participantes.

### História do Projeto

A empresa AdoPet tem como objetivo fazer o intermédio entre adotantes de animais e ONGs focadas em retirar animais da rua. Para alcançar esse objetivo, AdoPet deseja implementar uma plataforma digital que aumente a interação entre possíveis adotantes e representantes de ONGs.

Essa plataforma deve incluir páginas de login, cadastro, lista detalhada de animais para adoção com opções de contato, além de funcionalidades para enviar mensagens e editar perfil com upload de foto do usuário.

### Desenvolvimento Ágil com Trello

Durante o período de quatro semanas, o projeto foi desenvolvido seguindo uma metodologia ágil, utilizando o Trello para gerenciar as tarefas desde o início até a conclusão do projeto.

Ao longo de cada semana, foram estabelecidas metas específicas, direcionando o esforço para diferentes áreas do projeto. Abaixo, estão listadas as principais tarefas de cada semana:

#### Semana 1

-   Desenvolvimento das páginas inicial, cadastro, login e home, seguindo a metodologia mobile-first.

-   Implementação do header e footer para a versão mobile.

-   Estruturação dos formulários de login e cadastro para mobile.

#### Semana 2

-   Criação das páginas de contato e perfil do usuário, adaptadas para mobiles, tablets e desktops.

-   Adaptação das páginas inicial, cadastro, login e home, para tablets e desktops.

-   Implementação do header e footer para tablet e desktop.

-   Desenvolvimento do background das páginas com diferentes imagens.

#### Semanas 3 & 4

-   Integração do JavaScript para tornar as páginas dinâmicas e adicionar funcionalidades avançadas.

-   Validação dos formulários de cadastro, login, contato e perfil.

-   Implementação das funcionalidades de cadastro de novos usuários e validação de dados de login.

-   Desenvolvimento da listagem dinâmica de animais utilizando API.

-   Configuração da funcionalidade de edição de usuário, permitindo atualizações de perfil.
