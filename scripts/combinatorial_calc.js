function getCombination(n, r){

    var text = "";

    text += "C (n, r) = n! / r! * (n - r)! <br>";
    text += `C (${n}, ${r}) = ${n}! / ${r}! * (${n} - ${r})! <br>`;
    text += `C (${n}, ${r}) = ${n}! / ${r}! * ${n - r}! <br>`;
    text += `C (${n}, ${r}) = ${fact(n)[1]} / ${r}! * ${n - r}! <br>`;
    text += `C (${n}, ${r}) = ${fact(n)[1]} / ${fact(r)[1]} * ${n - r}! <br>`;
    text += `C (${n}, ${r}) = ${fact(n)[1]} / ${fact(r)[1]} * ${fact(n - r)[1]} <br>`;
    text += `C (${n}, ${r}) = ${fact(n)[1]} / ${fact(r)[1] * fact(n - r)[1]} <br>`;
    text += `C (${n}, ${r}) = ${fact(n)[1] / (fact(r)[1] * fact(n - r)[1])} <br>`;

    return [text, fact(n) / (fact(r) * fact(n - r))];
}


function getArrangement(n, r){

    var text = "";

    text += "A (n, r) = n! / (n - r)! <br>";
    text += `A (${n}, ${r}) = ${n}! / (${n} - ${r})! <br>`;
    text += `A (${n}, ${r}) = ${n}! / ${n - r}! <br>`;
    text += `A (${n}, ${r}) = ${fact(n)[1]} / ${n - r}! <br>`;
    text += `A (${n}, ${r}) = ${fact(n)[1]} / ${fact(n - r)[1]} <br>`;
    text += `A (${n}, ${r}) = ${fact(n)[1] / fact(n - r)[1]} <br>`;

    return [text, fact(n) / fact(n - r)];
}