# Cypress SauceDemo — QA Automation

Projeto de automação de testes desenvolvido com **Cypress e JavaScript**, utilizando o padrão **Page Object Model (POM)**.

O objetivo deste projeto é validar funcionalidades essenciais de uma aplicação de comércio eletrónico, desde o login até à finalização de uma compra.

## Tecnologias utilizadas

- Cypress
- JavaScript
- Page Object Model (POM)
- GitHub

## Cenários de teste

### 1. Teste de Login
Automação do processo de autenticação na aplicação SauceDemo, com preenchimento das credenciais e validação do acesso.

### 2. Teste do Carrinho
Automação da adição de um produto ao carrinho de compras, utilizando métodos reutilizáveis definidos no Page Object.

### 3. Teste de Checkout
Automação do fluxo completo de compra:

- Realizar login na aplicação;
- Adicionar um produto ao carrinho;
- Aceder ao carrinho de compras;
- Iniciar o checkout;
- Preencher os dados do comprador;
- Avançar para o resumo da compra;
- Finalizar a compra;
- Validar a mensagem de confirmação.

## Estrutura do projeto

O projeto utiliza o padrão **Page Object Model (POM)**, permitindo separar os elementos e as ações das páginas dos cenários de teste.

- `cypress/e2e` — Cenários de testes automatizados.
- `cypress/pages` — Page Objects com métodos reutilizáveis.
- `cypress/support` — Comandos personalizados e configurações de suporte.
- `cypress.config.js` — Configuração do Cypress.

## Como executar o projeto

É necessário ter o Node.js instalado.

No terminal, dentro da pasta do projeto, executar:

```bash
npm install
npx cypress open
```

Selecionar **E2E Testing** e executar os testes desejados.

## Resultados

O cenário de checkout completo foi executado com sucesso no Cypress, apresentando:

- 1 teste aprovado
- 0 falhas

## Autora

**Katiuscia Balbino Coco**

Quality Assurance | Testes Manuais e Automatizados

[LinkedIn](https://www.linkedin.com/in/katiuscia-balbino-coco-94327b316)
