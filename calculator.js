function calculate() {
    let resultLabel = document.getElementById("resultLabel");
    let result = document.getElementById("result");
    let resultText = document.getElementById("resultText");
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let calculation = weight / (height * height);


    if (isFinite(calculation)) {
        resultLabel.innerHTML = "Seu IMC é:";
        result.innerHTML = calculation.toFixed(2).toString() + "<span class=\"fs-5\">kg/m²</span>";

        if (calculation < 18.5) {
            resultText.innerHTML = "Magreza";
        }
        else if ((calculation >= 18.5) && (calculation <= 24.9)) {
            resultText.innerHTML = "Normal";
        }
        else if ((calculation >= 25.0) && (calculation <= 29.9)) {
            resultText.innerHTML = "Sobrepeso";
        }
        else if ((calculation >= 30.0) && (calculation <= 34.9)) {
            resultText.innerHTML = "Obesidade grau I";
        }
        else if ((calculation >= 35.0) && (calculation <= 39.9)) {
            resultText.innerHTML = "Obesidade grau II";
        }
        else {
            resultText.innerHTML = "Obesidade grau III";
        }
    }
    else {
        resultLabel.innerHTML = "Informe os valores como o exemplo abaixo:";
        result.innerHTML = "<i class=\"bi bi-exclamation-triangle-fill\"></i>";
        resultText.innerHTML = "Peso = 83.3 <br> Altura = 1.86";
    }
    
  }