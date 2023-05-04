class Inventory {
    get badgePanier() {
        return cy.get('.shopping_cart_badge');
    }

    getBoutonAjouterAuPanier(produit) {
        return cy.get(`button[data-test="add-to-cart-${produit}"]`);
    }
}
export const inventory = new Inventory();