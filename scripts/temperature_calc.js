function cel_to_fah(temp){

    var text = "";

    text += "°F = (°C * 9 / 5) + 32 <br>";
    text += `°F = (${temp} * 9 / 5) + 32 <br>`;
    text += `°F = (${temp * 9} / 5) + 32 <br>`;
    text += `°F = ${temp * 9 / 5} + 32 <br>`;
    text += `°F = ${(temp * 9 / 5) + 32} <br>`;

    return [text, (temp * 9 / 5) + 32]
}

function cel_to_kel(temp){

    var text = "";

    text += "K = °C + 273.15 <br>";
    text += `K = ${temp} + 273.15 <br>`;
    text += `K = ${temp + 273.15} <br>`;

    return [text, temp + 273.15];
}

function fah_to_cel(temp){

    var text = "";

    text += "°C = (°F − 32) * 5 / 9 <br>";
    text += `°C = (${temp} − 32) * 5 / 9 <br>`;
    text += `°C = ${temp - 32} * 5 / 9 <br>`;
    text += `°C = ${(temp - 32) * 5} / 9 <br>`;
    text += `°C = ${(temp - 32) * 5 / 9} <br>`;

    return [text, (temp - 32) * 5 / 9]
}

function fah_to_kel(temp){

    var text = "";

    text += "K = (°F − 32) * 5 / 9 + 273.15 <br>";
    text += `K = (${temp} − 32) * 5 / 9 + 273.15 <br>`;
    text += `K = ${temp - 32} * 5 / 9 + 273.15 <br>`;
    text += `K = ${(temp - 32) * 5} / 9 + 273.15 <br>`;
    text += `K = ${(temp - 32) * 5 / 9} + 273.15 <br>`;
    text += `K = ${(temp - 32) * 5 / 9 + 273.15} <br>`;

    return [text, (temp - 32) * 5 / 9 + 273.15] 
}

function kel_to_cel(temp){

    var text = "";

    text += "°C = K - 273.15 <br>";
    text += `°C = ${temp} - 273.15 <br>`;
    text += `°C = ${temp - 273.15} <br>`;

    return [text, temp - 273.15]
}

function kel_to_fah(temp){

    var text = "";

    text += "°C = (K − 273.15) * 9 / 5 + 32 <br>";
    text += `°C = (${temp} − 273.15) * 9 / 5 + 32 <br>`;
    text += `°C = ${temp - 273.15} * 9 / 5 + 32 <br>`;
    text += `°C = ${(temp - 273.15) * 9} / 5 + 32 <br>`;
    text += `°C = ${(temp - 273.15) * 9 / 5} + 32 <br>`;
    text += `°C = ${(temp - 273.15) * 9 / 5 + 32} <br>`;

    return [text, (temp - 273.15) * 9 / 5 + 32] 
}