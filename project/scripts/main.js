// Array of Objects representing Attractions (Data structure)
const attractions = [
    {
        id: 1,
        name: "Cristo de la Concordia",
        category: "Monuments",
        description: "One of the tallest statues of Jesus Christ in the world, offering panoramic views of Cochabamba.",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        name: "Tunari National Park",
        category: "Nature",
        description: "A stunning mountain range offering hiking trails, diverse flora, and breathtaking high-altitude vistas.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        name: "Palacio Portales",
        category: "Culture",
        description: "An elegant historic mansion built by Simon I. Patiño featuring eclectic European architectural styles.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 4,
        name: "La Pampa Market",
        category: "Culture",
        description: "One of South America's largest open-air markets, rich in colors, local produce, and traditional foods.",
        image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=400&q=80"
    }
];

// Function 1: Render Footer Dates
function setFooterInfo() {
    const yearSpan = document.querySelector("#currentyear");
    const lastModifiedPara = document.querySelector("#lastModified");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    if (lastModifiedPara) {
        lastModifiedPara.textContent = `Last Modified: ${document.lastModified}`;
    }
}

// Function 2: Mobile Navigation Toggle
function setupNavigation() {
    const menuBtn = document.querySelector("#menu-btn");
    const navMenu = document.querySelector("#nav-menu ul");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }
}

// Function 3: Render Attractions with Template Literals & DOM Manipulation
function renderAttractions(items) {
    const grid = document.querySelector("#attractions-grid");
    if (!grid) return;

    grid.innerHTML = "";

    // Array method: forEach
    items.forEach((item) => {
        const card = document.createElement("article");
        card.classList.add("card");

        // Exclusive Template Literals used for string HTML creation
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" loading="lazy" width="400" height="180">
            <h3>${item.name}</h3>
            <p><strong>Category:</strong> ${item.category}</p>
            <p>${item.description}</p>
        `;
        grid.appendChild(card);
    });
}

// Function 4: Setup Category Filtering (Conditional branching + Array filter)
function setupFilters() {
    const buttons = document.querySelectorAll(".filter-btn");
    if (buttons.length === 0) return;

    buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            buttons.forEach((b) => b.classList.remove("active"));
            e.target.classList.add("active");

            const filterValue = e.target.getAttribute("data-filter");

            // Conditional Branching
            if (filterValue === "all") {
                renderAttractions(attractions);
            } else {
                // Array method: filter
                const filtered = attractions.filter((item) => item.category === filterValue);
                renderAttractions(filtered);
            }
        });
    });
}

// Function 5: LocalStorage and Spotlight Feature on Home Page
function setupSpotlight() {
    const spotlightContainer = document.querySelector("#spotlight-container");
    if (!spotlightContainer) return;

    // Pick first item or read saved item
    const featured = attractions[0];

    // Save to localStorage
    localStorage.setItem("featuredSpot", JSON.stringify(featured));

    // Get from localStorage
    const savedSpot = JSON.parse(localStorage.getItem("featuredSpot"));

    spotlightContainer.innerHTML = `
        <article class="card">
            <h3>Featured: ${savedSpot.name}</h3>
            <p>${savedSpot.description}</p>
        </article>
    `;
}

// Function 6: Form Handling & LocalStorage
function setupForm() {
    const form = document.querySelector("#travel-form");
    const feedback = document.querySelector("#form-feedback");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nameInput = document.querySelector("#fullname").value;
        const emailInput = document.querySelector("#email").value;

        const userData = {
            name: nameInput,
            email: emailInput,
            submittedAt: new Date().toISOString()
        };

        localStorage.setItem("userInquiry", JSON.stringify(userData));

        feedback.classList.remove("hidden");
        feedback.innerHTML = `<p class="btn">Thank you, ${nameInput}! Your trip inquiry has been received.</p>`;
        form.reset();
    });
}

// Initialization on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    setFooterInfo();
    setupNavigation();
    renderAttractions(attractions);
    setupFilters();
    setupSpotlight();
    setupForm();
});