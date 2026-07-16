document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamic Footer Dates
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    // 2. Wind Chill Calculation Setup
    // Get the static values from the HTML
    const tempCelsius = parseFloat(document.getElementById("temp").textContent);
    const windSpeedKmh = parseFloat(document.getElementById("wind").textContent);
    const windChillElement = document.getElementById("windchill");

    // Strictly required: One-line function to calculate Metric Wind Chill factor
    const calculateWindChill = (t, v) => 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16));

    // Metric Conditions: Temp <= 10 °C and Wind Speed > 4.8 km/h
    if (tempCelsius <= 10 && windSpeedKmh > 4.8) {
        const chillFactor = calculateWindChill(tempCelsius, windSpeedKmh);
        windChillElement.textContent = `${chillFactor.toFixed(1)} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
});