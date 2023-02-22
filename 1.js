const tempC = Number.parseFloat(prompt("Введите температуру в градусах Цельсиа?"));

alert(`Температура в градусах Цельсиа ${tempC}, температура по Фаренгейту ${СelsToFahr(tempC * 9 / 5 + 32)}`);

function СelsToFahr(tempC) {
    const tempF = tempC * 9 / 5 + 32;
    return tempF.toFixed(2);
    };