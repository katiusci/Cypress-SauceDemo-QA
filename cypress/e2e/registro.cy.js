import LoginPage from '../pages/LoginPage';



describe('Testes de Login - SauceDemo', () => {

  beforeEach('Visitar o site', () => {
    cy.visit('/');
  });

   it('TC-01 - Login com sucesso', () => {

    LoginPage.preencherUsuario('standard_user');
    LoginPage.preencherSenha('secret_sauce');
    LoginPage.clicarLogin();

    cy.url().should('include', '/inventory.html');

  });

});