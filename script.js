document.addEventListener("DOMContentLoaded", function () {
    const chocolateOptions = [
        { name: "Milk Chocolate", price: 50 },
        { name: "Snickers Chocolate", price: 100 },
        { name: "Kit Kit Chocolate", price: 80 },
        // Add more chocolate options as needed
    ];

    const chocolateOptionsContainer = document.getElementById("chocolate-options");
    const selectedChocolatesContainer = document.getElementById("selected-chocolates");
    const totalPriceElement = document.getElementById("total-price");

    let selectedChocolates = [];

    // Dynamically create chocolate options
    chocolateOptions.forEach((chocolate, index) => {
        const chocolateDiv = document.createElement("div");
        chocolateDiv.classList.add("chocolate");
        chocolateDiv.textContent = `${chocolate.name} - ${chocolate.price.toFixed(2)}`;
        chocolateDiv.addEventListener("click", () => addChocolateToPack(chocolate, index));
        chocolateOptionsContainer.appendChild(chocolateDiv);
    });

    // Function to add chocolate to the custom pack
    function addChocolateToPack(chocolate, index) {
        if (selectedChocolates.length < 8) {
            selectedChocolates.push(chocolate);
            updateCustomPack();
        }
    }

    // Function to update the custom pack and total price
    function updateCustomPack() {
        selectedChocolatesContainer.innerHTML = "";
        let totalPrice = 0;

        selectedChocolates.forEach(chocolate => {
            const listItem = document.createElement("li");
            listItem.textContent = `${chocolate.name} - ${chocolate.price.toFixed(2)}`;
            selectedChocolatesContainer.appendChild(listItem);
            totalPrice += chocolate.price;
        });

        totalPriceElement.textContent = totalPrice.toFixed(2);
    }
});
