function calculateBAC() {
    const weight = document.getElementById('weight').value;
    const gender = document.getElementById('gender').value;
    const drinks = document.getElementById('drinks').value;
    const alcoholPercentage = document.getElementById('alcoholPercentage').value;
    const hours = document.getElementById('hours').value;

    // Constants for gender-based alcohol distribution ratio
    const maleRatio = 0.68;
    const femaleRatio = 0.55;

    // 1 standard drink contains approximately 14 grams of alcohol
    const standardDrink = 14; // in grams
    const alcoholGrams = drinks * standardDrink * (alcoholPercentage / 100);

    // Weight in kg to grams conversion
    const weightInGrams = weight * 1000;

    // Use gender ratio to determine body water percentage
    const bodyWater = (gender === "male") ? maleRatio : femaleRatio;

    // BAC Formula
    let bac = (alcoholGrams / (weightInGrams * bodyWater)) * 100;

    // Subtract alcohol metabolism rate (approx. 0.015 per hour)
    bac -= (hours * 0.015);

    // If BAC is negative, set it to 0
    bac = Math.max(0, bac);

    // Show result
    document.getElementById('result').innerHTML = `Your BAC is approximately: ${bac.toFixed(4)}`;
}
