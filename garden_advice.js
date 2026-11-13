// Ask the user for the current season and plant type
let season = prompt("Enter the season:"); // TODO: Replace with prompt() to allow user interaction.
let plantType = prompt("Enter the plant type:"); // TODO: Replace with prompt() to allow user interaction.

// Store advice for different seasons
let seasonalAdvice = {
    summer: "Water your plants regularly and provide some shade.",
    winter: "Protect your plants from frost with covers."
};

// Store advice for different plant types
let plantAdvice = {
    flower: "Use fertiliser to encourage blooms.",
    vegetable: "Keep an eye out for pests!"
};

// Gets advice based on the season
function getSeasonalAdvice(season) {
    return seasonalAdvice[season] || "No advice for this season.";
}

// Gets advice based on the plant type
function getPlantAdvice(plantType) {
    return plantAdvice[plantType] || "No advice for this type of plant.";
}

// Log the generated advice to the console
function displayAdvice() {
    let seasonalAdviceText = getSeasonalAdvice(season);
    let plantAdviceText = getPlantAdvice(plantType);
    let combinedAdvice = seasonalAdviceText + "\n" + plantAdviceText;

    console.log(combinedAdvice);
}

// Displays combined advice.
displayAdvice();

