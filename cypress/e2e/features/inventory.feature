Feature: Inventory

  Background:
    Given Un utilisateur est connecté avec le nom d'utilisateur "standard_user", et le mot de passe "secret_sauce"

  Scenario: Ajouter un item au panier
    Given L'utilisateur est sur la page d'inventaire
    When L'utilisateur ajoute un item au panier en cliquant sur le bouton ajouter au panier
    Then Le nombre d'item affiché sur le badge du panier indique 1

