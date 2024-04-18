# Apresentação e Contextualização

> Falaaa meus bons! Esta aula teve como principal intuito dar um resumo de como funciona o desenvolvimento web e, porque, os tópicos de 🔶JS, 🔷TS & 🤝 HTTPS são mega importantes no mundo de software.

## Conteúdo da Aula:

### Frontend…

- Interação dos usuários diretamente
  - Definição de layout, imagens, formulários, botões e chamada da comunicação com o backend

### HTTPS…

- Protocolo de comunicação entre frontend & backend
- Realiza transferência segura de dados (representado pela seta na imagem acima)
- Tem padrões definidos para solicitar informações e/ou retorná-las

### Backend & Banco de Dados…

- Faz processamento e gerenciamento das informações
- Lida com as requisições do frontend e retorna respostas para o frontend
- Compõe regras de negócio da aplicação
  - Regras de negócio → lógicas que sua aplicação devem seguir compondo especificações de autenticação, papéis no sistema, acesso e etc.

### Exemplo da Comunicação:

**🐦 Twitter:**

Ao realizar um tweet na tela do seu computador ou celular estamos **interagindo** com o **frontend**.

O frontend compõe ali o display das informações, recursos que você pode fazer uso e visualizar, etc.

Ao clicar o botão de twittar o **HTTPS**, o frontend irá tratar esse “click” para poder **enviar** essas informações do seu post para o **backend** através do HTTPS.

O HTTPS garante a **segurança** através de **criptografia** das suas informações e consegue fazer com que o seu post chegue onde ele precisa.

O backend então vê as suas **regras de negócio**, um exemplo poderia ser verificar se sua postagem tem palavrão.

Caso tenha, ele **retornaria** para o frontend falando que não pode → não é o caso do Twitter kkkk. Caso não tenha, ele **armazenaria** esse seu post no banco de dados para futuramente poder mostrar para os seus seguidores.
