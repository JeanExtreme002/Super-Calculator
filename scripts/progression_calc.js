function getAnFromPA(a1, n, r){

    /*
    Retorna todo o processo em uma única String e o "An" da PA.
    Fórmula: An = a1 + (n - 1) * r
    */

    var text = "";

    text += "An = a1 + (n - 1) * r <br>";
    text += `An = ${a1} + (${n} - 1) * ${r} <br>`;
    text += `An = ${a1} + ${n - 1} * ${r} <br>`;
    text += `An = ${a1} + ${(n - 1) * r} <br>`;
    text += `An = ${a1 + (n - 1) * r}`;

    return [text, a1 + (n - 1) * r];
}

function getSnFromPA(a1, n, r){

    /*
    Retorna todo o processo em uma única String e o "Sn" da PA.
    Fórmula: Sn = (a1 + an) * n / 2
    */

    const an = getAnFromPA(a1, n, r)[1];
    var text = "";

    text += "Sn = (a1 + an) * n / 2 <br>";
    text += `Sn = (${a1} + ${an}) * ${n} / 2 <br>`;
    text += `Sn = ${a1 + an} * ${n} / 2 <br>`;
    text += `Sn = ${(a1 + an) * n} / 2 <br>`;
    text += `Sn = ${(a1 + an) * n / 2}`;

    return [text, (a1 + an) * n / 2]
}

function getAnFromPG(a1, n, q){

    /*
    Retorna todo o processo em uma única String e o "An" da PG.
    Fórmula: An = a1 * q ^ (n – 1)
    */

    var text = "";

    text += "An = a1 * q ^ (n – 1) <br>";
    text += `An = ${a1} * ${q} ^ (${n} - 1) <br>`;
    text += `An = ${a1} * ${q} ^ ${n - 1} <br>`;
    text += `An = ${a1} * ${q ** (n - 1)} <br>`;
    text += `An = ${a1 * (q ** (n - 1))}`;

    return [text, a1 * (q ** (n - 1))];
}

function getSnFromPG(a1, n, q){

    /*
    Retorna todo o processo em uma única String e o "Sn" da PG.
    Fórmula: Sn = a1 * (q ^ n - 1) / q - 1
    */

    var text = "";

    text += "Sn = a1 * (q ^ n - 1) / q - 1 <br>";
    text += `Sn = ${a1} * (${q} ^ ${n} - 1) / ${q} - 1 <br>`;
    text += `Sn = ${a1} * (${q ** n} - 1 ) / ${q} - 1 <br>`;
    text += `Sn = ${a1} * ${q ** n - 1} / ${q} - 1 <br>`;
    text += `Sn = ${a1 * (q ** n - 1)} / ${q} - 1 <br>`;
    text += `Sn = ${a1 * (q ** n - 1)} / ${q - 1} <br>`;
    text += `Sn = ${a1 * (q ** n - 1) / (q - 1)}`;

    return [text, a1 * (q ** n - 1) / (q - 1)];
}