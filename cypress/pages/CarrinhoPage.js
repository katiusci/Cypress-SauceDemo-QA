const element={
    buttons:{
        mochila: '#add-to-cart-sauce-labs-backpack',
    }
}

export default{
    clicarBtnMochila(){
        cy.get(element.buttons.mochila).click()
    }
}