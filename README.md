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
    <img src="" />
</details>

### Página de Cadastro

A página de cadastro é onde os novos usuários podem criar suas contas na plataforma. Nesta página, os usuários devem preencher os campos de Email, Nome e Senha. Após preencher os campos, os usuários podem finalizar o processo de registro ao clicar em "Cadastrar".

<details>
    <summary><b>:camera: Visualizar Screenshot</b></summary>
    <br />
    <img src="" />
</details>

### Página de Login

A página de login fornece uma interface para os usuários acessarem suas contas na plataforma. A página contém dois campos onde os usuários devem inserir seu email e senha. Após preencher os campos, os usuários podem clicar em "Entrar" para acessar suas contas.

<details>
    <summary><b>:camera: Visualizar Screenshot</b></summary>
    <br />
    <img src="" />
</details>

### Página Home

A página home é o ponto central da plataforma, onde os usuários podem explorar os animais disponíveis para adoção. Nesta página, são exibidos perfis de diversos animais, cada um apresentando uma imagem, nome, idade, porte, características e localização.

<details>
    <summary><b>:camera: Visualizar Screenshot</b></summary>
    <br />
    <img src="" />
</details>

### Página de Contato

A página de contato possibilita os usuários se comunicar diretamente com a pessoa ou instituição responsável pelo animal. Nela, encontra-se um formulário que inclui campos para Nome, Telefone e Mensagem. Após o preenchimento, os usuários podem clicar em "Enviar" para encaminhar a mensagem ao responsável.

<details>
    <summary><b>:camera: Visualizar Screenshot</b></summary>
    <br />
    <img src="" />
</details>

### Página de Perfil

A página de perfil é onde os usuários podem visualizar e editar suas informações pessoais. Nesta página, os usuários encontram campos para inserir ou atualizar informações como Foto, Nome, Telefone, Cidade e Sobre. Após preencher ou atualizar os campos desejados, os usuários podem salvar suas informações clicando em "Salvar".

<details>
    <summary><b>:camera: Visualizar Screenshot</b></summary>
    <br />
    <img src="" />
</details>

## :rocket: Funcionalidades e Recursos

### Navegação e Usabilidade

-   `Navegação`: Fornece botões de acesso rápido para as páginas Home e Contato. Quando o usuário está logado, exibe um ícone de usuário que direciona para a página de Perfil.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="" />
    </details>

### Cadastro e Autenticação

-   `Cadastro de Usuários`: Permite que novos usuários se registrem na plataforma preenchendo os campos de email, nome, senha e confirmar senha. O campo de senha oferece a opção de exibir ou ocultar a senha digitada. Após o registro, o usuário é automaticamente redirecionado para a página de login.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="" />
    </details>

-   `Login de Usuários`: Permite que os usuários registrados façam login na plataforma inserindo suas credenciais de email e senha, com a opção de recuperação de senha. Após o login bem-sucedido, o usuário é direcionado para a página principal.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="" />
    </details>

### Exploração e Visualização

-   `Catálogo de Animais`: Apresenta uma variedade de animais disponíveis para adoção, exibindo detalhes como imagem, nome, idade, porte, características, localização e um botão para contato direto com o responsável pelo animal.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="" />
    </details>

### Comunicação e Contato

-   `Contato com o Responsável`: Permite aos usuários enviar mensagens diretamente para a pessoa ou instituição responsável pelo animal em questão, possibilitando a comunicação e esclarecimento de dúvidas.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="" />
    </details>

### Gerenciamento de Perfil

-   `Edição de Perfil`: Permite que os usuários visualizem e editem suas informações pessoais, incluindo foto, nome, telefone, cidade e uma breve descrição pessoal. Os dados são salvos e atualizados automaticamente após cada edição.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="" />
    </details>

### Validações

-   `Validação de Formulários`: Implementa validações em todos os formulários da plataforma para garantir o preenchimento correto dos campos. Exibe mensagens de erro quando os campos não são preenchidos adequadamente, orientando os usuários sobre como corrigir os erros.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="" />
    </details>

### Interface Responsiva

-   `Design Responsivo`: A plataforma se adapta automaticamente a diferentes tamanhos de tela, incluindo dispositivos móveis, tablets e desktops, proporcionando uma experiência de usuário consistente e otimizada em qualquer dispositivo.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="" />
    </details>

## :toolbox: Desenvolvimento e Implementação

### Desenvolvimento com React

-   `Componentes Funcionais e JSX`: Utiliza componentes funcionais e JSX para estruturar a interface do usuário de forma declarativa e reutilizável.

-   `Hooks`: Utiliza os Hooks do React, como useState, useEffect, useCallback, para gerenciar o estado local dos componentes, realizar efeitos colaterais e otimizar o desempenho.

-   `Hooks Customizados`: Cria hooks customizados para encapsular lógicas específicas e reutilizáveis em vários componentes da aplicação.

-   `Renderização Condicional e Mapeamento de Listas`: Implementa renderização condicional e mapeamento de listas para exibir conteúdo de forma dinâmica com base em condições e dados externos.

-   `Eventos`: Implementa diversos eventos, como onClick, onSubmit, para interagir com elementos da interface e responder às ações do usuário.

-   `Operações Assíncronas`: Utiliza async/await, .then e .catch para lidar com operações assíncronas, como requisições HTTP e manipulação de dados.

-   `Armazenamento Local`: Utiliza a API localStorage para armazenar dados localmente no navegador do usuário.

### Tipagem com TypeScript

-   `Definições de Tipos`: Utiliza interfaces e type aliases para definir a estrutura e os tipos de dados, garantindo a segurança e a integridade do código.

-   `Tipagem de Props`: Define tipos para props de componentes, garantindo consistência e prevenindo erros durante o desenvolvimento.

-   `Operadores de Tipo`: Utiliza Optional Chaining (?) e Non-null Assertion Operator (!) para lidar com tipos opcionais e evitar erros de acesso a propriedades nulas.

-   `Inferência de Tipos`: Utiliza infer para deduzir tipos automaticamente com base nos dados fornecidos.

### Roteamento com React Router

-   `Configuração de Rotas`: Utiliza BrowserRouter, Route e Routes para definir e gerenciar rotas na aplicação.

-   `Rotas Aninhadas e Privadas`: Implementa rotas aninhadas para organizar o layout da aplicação e rotas privadas para controle de acesso.

-   `Navegação`: Utiliza Link, Navigate e useNavigate para navegação entre diferentes páginas e manipulação programática de rotas.

### Context API

-   `Criação de Contexto`: Utiliza createContext para criar contextos que permitem compartilhar dados entre componentes sem passar props manualmente.

-   `Hooks de Contexto`: Implementa useContext para consumir contextos dentro dos componentes, facilitando o acesso aos dados globais da aplicação.

### React Hook Form

-   `Manipulação de Formulários`: Utiliza useForm, handleSubmit, register para gerenciar estados e interações com formulários, incluindo validação de dados.

-   `Validação com formState`: Utiliza formState para gerenciar estados de validação e exibir erros aos usuários.

-   `Reset e Watch`: Implementa reset para limpar dados de formulários e watch para observar mudanças nos campos.

