// Attend que le DOM soit chargé
document.addEventListener("DOMContentLoaded", function () {
    // Sélectionne tous les boutons "add to cart"
    const addToCartButtons = document.querySelectorAll(".btn");

    // Sélectionne l'élément qui affiche la quantité dans le panier
    const quantityElement = document.querySelector(".quantity");

    // Initialise le compteur
    let cartQuantity = 0;

    // Ajoute un gestionnaire de clic pour chaque bouton
    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Incrémente le compteur
            cartQuantity++;

            // Met à jour l'affichage de la quantité dans le panier
            quantityElement.textContent = cartQuantity;
        });
    });
});


