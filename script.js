const image = document.getElementById('image');
const textSimulation = document.getElementById('text-simulation');
const slider = document.getElementById('astigmatism-level');
const degreeValueDisplay = document.getElementById('degree-value');
const lensDegreeInput = document.getElementById('lens-degree');
const checkButton = document.getElementById('check-button');
const validationResult = document.getElementById('validation-result');

// Conversão de desfoque (px) para graus (aproximadamente 1px = 0.25 graus)
function convertPxToDegree(px) {
    return (px * 0.25).toFixed(2);
}

// Atualiza o desfoque e exibe o valor em graus
slider.addEventListener('input', () => {
    const blurValue = slider.value;
    const degreeValue = convertPxToDegree(blurValue);
    image.style.filter = `blur(${blurValue}px)`;
    textSimulation.style.filter = `blur(${blurValue}px)`;
    degreeValueDisplay.textContent = `${degreeValue}`;
});

// Valida o grau informado pelo usuário
checkButton.addEventListener('click', () => {
    const lensDegree = parseFloat(lensDegreeInput.value);
    const currentDegree = parseFloat(degreeValueDisplay.textContent);

    if (!lensDegree || lensDegree <= 0) {
        validationResult.textContent = "Por favor, insira um valor válido!";
        validationResult.style.color = "#d32f2f";
    } else if (Math.abs(lensDegree - currentDegree) <= 0.25) {
        validationResult.textContent = "O grau dos seus óculos está bem próximo!";
        validationResult.style.color = "#00796b";
    } else {
        validationResult.textContent = "Pode haver uma diferença significativa no grau!";
        validationResult.style.color = "#d32f2f";
    }
});
