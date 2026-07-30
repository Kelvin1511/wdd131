// Product Array provided by assignment
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Populate Select Options dynamically
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");

    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id; // Assign ID to value attribute
            // Capitalize product name for clean UI
            option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1);
            productSelect.appendChild(option);
        });
    }

    // Dynamic Footer Dates
    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedPara = document.getElementById("lastModified");
    if (lastModifiedPara) {
        lastModifiedPara.textContent = `Last Modified: ${document.lastModified}`;
    }
});