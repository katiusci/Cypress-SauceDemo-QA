import CarrinhoPage from "../pages/CarrinhoPage"

describe("incluir itens no carrinho de compras", () => {

    beforeEach("visitar o site e fazer o login",() => {
        cy.visit('/')
        cy.login()
    })

    it("tc-01 incluir produto no carrinho ",() => {
        CarrinhoPage.clicarBtnMochila()
    })

})
{}
