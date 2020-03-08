function getHeight(a, b, c){

    /*
    Retorna todo o processo em uma única String e a altura relativa de um triângulo retângulo.
    Fórmula: a * h = b * c
    */

    var text = "";

    text += "a * h = b * c <br>";
    text += `${a} * h = ${b} * ${c} <br>`;
    text += `${a} * h = ${b * c} <br>`;
    text += `h = ${b * c} / ${a} <br>`;
    text += `h = ${b * c / a} <br>`;

    return [text, b * c / a];
}

function getHypotenuse(b, c){

    /*
    Retorna todo o processo em uma única String e a hipotenusa de um triângulo retângulo.
    Fórmula: a² = b² + c²
    */

    var text = "";

    text += "a² = b² + c² <br>";
    text += `a² = ${b}² + ${c}² <br>`;
    text += `a² = ${b ** 2} + ${c ** 2} <br>`;
    text += `a² = ${(b ** 2) + (c ** 2)}  <br>`;
    text += `a = √${(b ** 2) + (c ** 2)}  <br>`;
    text += `a = ${((b ** 2) + (c ** 2)) ** 0.5}`;

    return [text, ((b ** 2) + (c ** 2)) ** 0.5];
}

function getLeg(a, x, r = "b", r2 = "c"){

    /*
    Retorna todo o processo em uma única String e o cateto de um triângulo retângulo.
    Fórmula: x² = a² - c²
    */

    var text = "";

    text += "a² = b² + c² <br>";
    text += `${r2}² = a² - ${r}² <br>`;
    text += `${r2}² = ${a}² - ${x}² <br>`;
    text += `${r2}² = ${a ** 2} - ${x ** 2} <br>`;
    text += `${r2}² = ${(a ** 2) - (x ** 2)} <br>`;
    text += `${r2} = √${(a ** 2) - (x ** 2)} <br>`;
    text += `${r2} = ${((a ** 2) - (x ** 2)) ** 0.5}`;

    return [text, ((a ** 2) - (x ** 2)) ** 0.5]; 
}

function getProjection(a, x, r = "b", r2 = "m"){

    /*
    Retorna todo o processo em uma única String e a projeção de um cateto de um triângulo retângulo.
    Fórmula: c² = a * x
    */

    var text = "";

    text += `${r}² = a * ${r2} <br>`;
    text += `${x}² = ${a} * ${r2} <br>`;
    text += `${x ** 2} = ${a} * ${r2} <br>`;
    text += `${r2} = ${x ** 2} / ${a} <br>`;
    text += `${r2} = ${x ** 2 / a}`;

    return [text, x ** 2 / a];

}