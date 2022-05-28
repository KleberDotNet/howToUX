function textSwap() {
    var jumbotronText = document.getElementById("jumbotronText");
    if (jumbotronText.className  === "fs-4") 
    {
        jumbotronText.innerHTML = "Esse é um parágrafo extenso que por si só já é desanimador. Além de não estar separado com palavras em pequenos grupos.";
        jumbotronText.className  = "fs-5";
    } 
    else 
    {
        jumbotronText.innerHTML = "O usuário escaneia da direita para esquerda. <br>Separe seu texto em pequenos <br>grupos de palavras.";
        jumbotronText.className  = "fs-4";
    }
  }