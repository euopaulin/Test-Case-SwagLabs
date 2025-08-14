describe("Teste da página SwagLabs", () => {
    it("Teste página swag labs", () => {
        cy.viewport(800, 600)
        cy.visit("https://www.saucedemo.com/v1/inventory.html")
        cy.get("#inventory_container > div > div:nth-child(1) > div.pricebar > button").should("be.visible")
        cy.get("#inventory_container > div > div:nth-child(1) > div.pricebar > button").should("be.visible").click()
        cy.get(":nth-child(2) > .pricebar > .btn_primary").should("be.visible")
        cy.get(":nth-child(2) > .pricebar > .btn_primary").should("be.visible").click()

    })
})