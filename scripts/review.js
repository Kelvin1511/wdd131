document.addEventListener("DOMContentLoaded", () => {
    // LocalStorage Review Counter
    let reviewCount = localStorage.getItem("numReviews") || 0;
    reviewCount = parseInt(reviewCount, 10) + 1;
    localStorage.setItem("numReviews", reviewCount);

    const countDisplay = document.getElementById("reviewCount");
    if (countDisplay) {
        countDisplay.textContent = reviewCount;
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