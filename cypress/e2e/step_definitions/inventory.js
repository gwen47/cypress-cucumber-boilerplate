import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage'
import {inventory} from "@pages/Inventory";

Given("Un utilisateur est connecté avec le nom d'utilisateur {string}, et le mot de passe {string}", (username, password) => {
    cy.visit("/");
    loginPage.submitLogin(username, password)
});

Given("L'utilisateur est sur la page d'inventaire", () => {
   cy.url().should("contains", "/inventory");
})

When("L'utilisateur ajoute un item au panier en cliquant sur le bouton ajouter au panier", () => {
    inventory.getBoutonAjouterAuPanier('sauce-labs-backpack').click();
})

Then("Le nombre d'item affiché sur le badge du panier indique {int}", (numberOfItems) => {
    inventory.badgePanier.should('have.text', numberOfItems)
})

