
import CarrinhoPage from '../pages/CarrinhoPage'
import CheckoutPage from '../pages/CheckoutPage'

describe('Testes de Checkout - SauceDemo', () => {

    beforeEach('Visitar o site e fazer login', () => {
        cy.visit('/')
        cy.login()
    })

    it('TC-01 - Iniciar checkout', () => {

        // Adicionar a mochila ao carrinho
        CarrinhoPage.clicarBtnMochila()

        // Abrir o carrinho
        CheckoutPage.clicarCarrinho()

        // Clicar no botão Checkout
        CheckoutPage.clicarCheckout()


        // Preencher os dados do comprador
        CheckoutPage.preencherNome('Maria')
        CheckoutPage.preencherApelido('Silva')
        CheckoutPage.preencherCodigoPostal('1234-567')

        // Clicar no botão Continue
        CheckoutPage.clicarContinuar()

        // Validar se avançou para o resumo da compra
        cy.url().should('include', '/checkout-step-two.html')


        // Clicar no botão Finish para finalizar a compra
        CheckoutPage.clicarFinalizar()

        // Validar se abriu a página de confirmação
        cy.url().should('include', '/checkout-complete.html')

        // Verificar a mensagem de compra concluída
        cy.get('[data-test="complete-header"]')
          .should('have.text', 'Thank you for your order!')


        // Validar se a compra foi concluída
        cy.url().should('include', '/checkout-complete.html')

    })

})
