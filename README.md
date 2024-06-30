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

-   `Hooks e Hooks Customizados`: Utiliza hooks como useState, useEffect, useCallback, para gerenciar estado e efeitos colaterais, além de criar hooks customizados para encapsular lógicas reutilizáveis.

-   `Componentização`: Cria interfaces modulares e reutilizáveis, com cada componente responsável por uma parte específica da UI, encapsulando lógica, estado e renderização.

-   `Renderização Condicional e Mapeamento de Listas`: Implementa renderização condicional e mapeamento de listas para exibir conteúdo de forma dinâmica com base em condições e dados externos.

-   `Eventos`: Implementa diversos eventos, como onClick, onSubmit, para interagir com elementos da interface e responder às ações do usuário.

-   `Operações Assíncronas`: Utiliza async/await, .then e .catch para lidar com operações assíncronas, como requisições HTTP e manipulação de dados.

### Tipagem com TypeScript

-   `Definições de Tipos`: Utiliza interfaces e type aliases para definir a estrutura e os tipos de dados, garantindo a segurança e a integridade do código.

-   `Interfaces Globais`: Utiliza interfaces globais para definir contratos de tipos consistentes em toda a aplicação.

-   `Basic Types`: Utiliza tipos básicos (string, number, boolean, etc.) para representar dados simples e garantir a integridade dos mesmos em toda a aplicação.

-   `Operadores de Tipo`: Utiliza Optional Chaining (?) e Non-null Assertion Operator (!) para lidar com tipos opcionais e evitar erros de acesso a propriedades nulas.

-   `Type Assertions`: Utiliza asserções de tipo (as) para informar ao compilador do TypeScript que determinado valor deve ser tratado como um tipo específico.

-   `Inferência de Tipos`: Utiliza infer para deduzir tipos automaticamente com base nos dados fornecidos.

### Roteamento com React Router

-   `Configuração de Rotas`: Utiliza BrowserRouter, Route e Routes para definir e gerenciar rotas na aplicação.

-   `Rotas Aninhadas e Privadas`: Implementa rotas aninhadas para organizar o layout da aplicação e rotas privadas para controle de acesso.

-   `Navegação`: Utiliza os componentes Link e Navigate para navegação entre diferentes páginas da aplicação.

-   `Navegação Programática`: Utiliza o hook useNavigate para realizar navegação programática dentro dos componentes.

-   `Acesso à Localização`: Utiliza o hook useLocation para acessar informações sobre a localização atual da aplicação, como o pathname e o search.

### Gerenciamento de Estado com Context API

-   `Criação de Contexto`: Utiliza createContext para criar contextos que permitem compartilhar dados entre componentes sem passar props manualmente.

-   `Provedor de Contexto`: Utiliza Context.Provider para envolver componentes e fornecer o contexto criado para toda a árvore de componentes descendentes.

-   `Hooks de Contexto`: Implementa useContext para consumir contextos dentro dos componentes, facilitando o acesso aos dados globais da aplicação.

-   `Definição de DisplayName`: Utiliza displayName para definir um nome descritivo para o contexto criado com createContext.

### Manipulação de Formulários com React Hook Form

-   `Manipulação de Formulários`: Utiliza useForm, handleSubmit, register para gerenciar estados e interações com formulários, incluindo validação de dados.

-   `Validação com formState`: Utiliza formState para gerenciar estados de validação e exibir erros aos usuários.

-   `Reset e Watch`: Implementa reset para limpar dados de formulários e watch para observar mudanças nos campos.

-   `Integração com Zod`: Utiliza zodResolver para integrar validação de formulários com o Zod, uma biblioteca de validação de esquemas.

### Validação de Dados com Zod

-   `Validações`: Utiliza z.object, z.string, z.min, z.max, z.email para validar dados com esquemas robustos e personalizados.

-   `Validação com Expressões Regulares`: Utiliza z.regex para validar strings usando expressões regulares, permitindo validações precisas como formatos de telefone, senha, entre outros.

-   `Refinamento de Validações`: Utiliza z.refine para criar validações customizadas baseadas em critérios específicos.

-   `Inferência de Tipos`: Utiliza z.infer para inferir automaticamente tipos a partir dos esquemas de validação.

-   `Mensagens de Erro`: Personaliza mensagens de erro usando o atributo message em esquemas Zod.

### Comunicação com API via Axios

-   `Requisições HTTP`: Utiliza Axios para realizar requisições HTTP, como get, post, put, delete, para interagir com APIs RESTful.

-   `Instância Personalizada`: Utiliza axios.create para criar instâncias personalizadas do Axios com configurações globais, como baseURL e headers.

### Estilização com Styled Components

-   `Criação de Componentes Estilizados`: Utiliza styled e css para criar componentes estilizados, encapsulando estilos diretamente nos componentes.

-   `Estilos Dinâmicos`: Implementa estilos baseados em props ($prop) para criar componentes dinâmicos que se adaptam a diferentes estados.

-   `Tema para Estilização`: Implementa tema para estilização, permitindo mudanças de estilo em toda a interface.

-   `Definição de Estilos Base`: Define estilos base para componentes sem a necessidade de repetir código, garantindo consistência visual.

-   `Extensão de Estilos e Componentes`: Estende estilos de componentes e estilos base, criando variantes personalizadas sem modificar o estilo base.

-   `Estilos Globais`: Aplica estilos globais utilizando createGlobalStyle para definir estilos que se aplicam a todos os elementos da página.

### Construção de Layout

-   `Flexbox e CSS Grid`: Utiliza Flexbox (flex-direction, justify-content, align-items) e CSS Grid (grid-template-columns, grid-template-rows, grid-template-areas) para criar layouts responsivos e dinâmicos.

-   `Media Queries`: Utiliza @media para aplicar estilos específicos com base no tamanho da tela, garantindo uma experiência consistente em diferentes dispositivos.

### Utilização de Pacotes

-   `React Toastify`: Utiliza react-toastify para exibir notificações na interface da aplicação, informando usuários sobre operações importantes.

-   `Json Server`: Utiliza json-server para simular uma API RESTful localmente durante o desenvolvimento da aplicação.
