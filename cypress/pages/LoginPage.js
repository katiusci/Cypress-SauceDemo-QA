const elements = {
  input: {
    username: '#user-name',
    password: '#password'
  },

  button: {
    login: '#login-button'
  }
};
export default {

  preencherUsuario(usuario) {
    cy.get(elements.input.username).type(usuario);
  },

  preencherSenha(senha) {
    cy.get(elements.input.password).type(senha);
  },

  clicarLogin() {
    cy.get(elements.button.login).click();
  }

};