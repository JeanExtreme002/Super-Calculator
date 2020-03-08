function getBhaskara(a, b, c){

    /*
    Retorna todo o processo em uma única String e o resultado da fórmula de Bhaskara.
    Fórmula: x = -b ± √Δ / 2 * a
    */

    var text = "";
    const delta = getDelta(a, b, c)[1];

    text += "x = -b ± √Δ / 2 * a <br>";
    text += `x = ${-b} ± √${delta} / 2 * ${a} <br>`;

    // Verifica se delta é menor que zero. Se for, ele não prossegue o cálculo.
    if (delta < 0){
        text += "x = NaN";
        return [text, NaN];
    } 

    text += `x = ${-b} ± ${delta ** 0.5} / 2 * ${a} <br>`;
    text += `x = ${-b} ± ${delta ** 0.5} / ${2 * a} <br>`;


    // Se delta for igual a zero, será retornado uma única raíz.
    if (delta == 0){

        text += `x = ${-b + delta ** 0.5} / ${2 * a} <br>`;
        text += `x = ${(-b + delta ** 0.5) / 2 * a} <br>`;
        return [text, (-b + delta ** 0.5) / (2 * a)];

    // Senão serão retornadas duas raízes.
    }else{

        // Primeira raíz.
        text += "-".repeat(20) + "<br>";
        text += `x1 = ${-b} + ${delta ** 0.5} / ${2 * a} <br>`;
        text += `x1 = ${-b + delta ** 0.5} / ${2 * a} <br>`;
        text += `x1 = ${(-b + delta ** 0.5) / (2 * a)} <br>`;

        // Segunda raíz.
        text += "-".repeat(20) + "<br>";
        text += `x2 = ${-b} - ${delta ** 0.5} / ${2 * a} <br>`;
        text += `x2 = ${-b - delta ** 0.5} / ${2 * a} <br>`;
        text += `x2 = ${(-b - delta ** 0.5) / (2 * a)} <br>`;

        x1 = (-b + delta ** 0.5) / (2 * a);
        x2 = (-b - delta ** 0.5) / (2 * a);

        return [text, x1, x2];
    }
}


function getDelta(a, b, c){

    /*
    Retorna todo o processo em uma única String e o resultado da fórmula do Delta.
    Fórmula: Δ = b² - 4 * a * c
    */

    var text = "";

    text += "Δ = b² - 4 * a * c <br>";
    text += `Δ = ${b ** 2} - 4 * ${a} * ${c} <br>`;
    text += `Δ = ${b ** 2} - 4 * ${a} * ${c} <br>`;
    text += `Δ = ${b ** 2} - 4 * ${a * c} <br>`;
    text += `Δ = ${b ** 2} - ${4 * a * c} <br>`;
    text += `Δ = ${b ** 2 - 4 * a * c}`;

    return [text, b ** 2 - 4 * a * c];
}
