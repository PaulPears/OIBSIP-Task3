document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperatureInput");
    const unitSelect = document.getElementById("unitSelect");
    const convertButton = document.getElementById("convertButton");
    const convertedTemperature = document.getElementById("convertedTemperature");

    convertButton.addEventListener("click", function () {
        const inputTemperature = parseFloat(temperatureInput.value);
        const inputUnit = unitSelect.value;
        let resultTemperature;
        let resultUnit;

        if (isNaN(inputTemperature)) {
            alert("Please enter a valid number.");
            return;
        }

        if (inputUnit === "celsius") {
            resultTemperature = inputTemperature * 9/5 + 32;
            resultUnit = "°F";
        } else if (inputUnit === "fahrenheit") {
            resultTemperature = (inputTemperature - 32) * 5/9;
            resultUnit = "°C";
        } else if (inputUnit === "kelvin") {
            resultTemperature = inputTemperature - 273.15;
            resultUnit = "K";
        }

        convertedTemperature.textContent = `${resultTemperature.toFixed(2)} ${resultUnit}`;
    });
});
