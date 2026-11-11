

const elements = {
    buttons: {
        carrinho: '.shopping_cart_link',
        checkout: '#checkout',
        continuar: '[data-test="continue"]',
        finalizar: '[data-test="finish"]'
    },

    input: {
        nome: '[data-test="firstName"]',
        apelido: '[data-test="lastName"]',
        codigoPostal: '[data-test="postalCode"]'
    }
}

export default {

    // Abrir o carrinho de compras
    clicarCarrinho() {
        cy.get(elements.buttons.carrinho).click()
    },

    // Iniciar o checkout
    clicarCheckout() {
        cy.get(elements.buttons.checkout).click()
    },

    // Preencher o nome
    preencherNome(nome) {
        cy.get(elements.input.nome).type(nome)
    },

    // Preencher o apelido
    preencherApelido(apelido) {
        cy.get(elements.input.apelido).type(apelido)
    },

    // Preencher o código postal
    preencherCodigoPostal(codigoPostal) {
        cy.get(elements.input.codigoPostal).type(codigoPostal)
    },

    // Clicar no botão Continue para avançar
    clicarContinuar() {
        cy.get(elements.buttons.continuar).click()
    },
    
// Clicar no botão Finish para finalizar a compra
clicarFinalizar() {
    cy.get(elements.buttons.finalizar).click()
}

}

