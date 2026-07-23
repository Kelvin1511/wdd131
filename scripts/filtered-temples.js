// Array containing required original temples + 3 additional Utah temples (Local Images)
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/aba.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/manti.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/payson.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "images/yigo.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "images/washington.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "images/lima.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "images/mexico.jpg"
  },
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "images/saltlake.jpg"
  },
  {
    templeName: "Provo City Center Utah",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl: "images/provo.jpg"
  },
  {
    templeName: "Draper Utah",
    location: "Draper, Utah, United States",
    dedicated: "2009, March, 20",
    area: 58300,
    imageUrl: "images/draper.jpg"
  }
];

// Select DOM elements
const templeCardsContainer = document.querySelector("#temple-cards");
const filterTitle = document.querySelector("#filter-title");

// Function to dynamically display temple cards
function displayTemples(filteredTemples) {
  templeCardsContainer.innerHTML = "";

  filteredTemples.forEach((temple) => {
    let card = document.createElement("section");
    card.classList.add("card");

    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;

    // Native Lazy Loading requirement
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "400");
    img.setAttribute("height", "250");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    templeCardsContainer.appendChild(card);
  });
}

// Initial render
displayTemples(temples);

// Filter event listeners
document.querySelector("#home").addEventListener("click", () => {
  if (filterTitle) filterTitle.textContent = "Home";
  displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
  if (filterTitle) filterTitle.textContent = "Old Temples (Built before 1900)";
  const oldTemples = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1900;
  });
  displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", () => {
  if (filterTitle) filterTitle.textContent = "New Temples (Built after 2000)";
  const newTemples = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year > 2000;
  });
  displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", () => {
  if (filterTitle) filterTitle.textContent = "Large Temples (Over 90,000 sq ft)";
  const largeTemples = temples.filter((temple) => temple.area > 90000);
  displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", () => {
  if (filterTitle) filterTitle.textContent = "Small Temples (Under 10,000 sq ft)";
  const smallTemples = temples.filter((temple) => temple.area < 10000);
  displayTemples(smallTemples);
});

// Responsive hamburger navigation menu
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

if (hambutton && mainnav) {
  hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
  });
}

// Footer dynamic dates
const yearSpan = document.querySelector("#currentyear");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

const lastMod = document.querySelector("#lastModified");
if (lastMod) lastMod.textContent = `Last Modified: ${document.lastModified}`;