// Select the DOM elements for output
const yearSpan = document.getElementById("currentyear");
const lastModifiedElement = document.getElementById("lastModified");

// Dynamically output the current year
const today = new Date();
yearSpan.innerHTML = today.getFullYear();

// Dynamically output the date the document was last modified
lastModifiedElement.innerHTML = `Last Modification: ${document.lastModified}`;