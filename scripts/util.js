
function fact(n){

    const values = [];
    var result = 1;

    while (n > 1){

        values.push(n);
        result *= n;
        n -= 1;
    }

    return [values.join(" * "), result];
}


function getMult(x, y){

    const max = x.length > y.length ? x.length : y.length;
    const values = [];

    var text = `${x}<br>x ${y}<br>${"-".repeat(max)}-------------<br>`;
    var p_pos = 0; 
    var result = 0;
    var cont = 0;

    // Calcula a posição do ponto flutuante.
    if (x.includes(".")){
        p_pos += x.length - x.indexOf(".") - 1;
    }

    if (y.includes(".")){
        p_pos += y.length - y.indexOf(".") - 1;
    }

    for (let num_y of y.split("").reverse().join("")){

        let result = "";
        let rest = 0;

        // Verifica se é um ponto flutuante.
        if (num_y == "."){
            continue;
        }

        for (let num_x of x.split("").reverse().join("")){

            // Verifica se é um ponto flutuante.
            if (num_x == "."){
                continue;
            }

            // Multiplica o dígito X e Y somando o resto da casa decimal anterior.
            let r = (num_x * num_y) + parseInt(rest);
            rest = 0;

            // Verifica se o valor é maior que 10 e se é o último.
            if (r > 9 && num_x != x[0]){
                rest = r.toString()[0];
                r = r.toString()[1];
            }

            result = r.toString() + result;
        }

        // Verifica se o resultado é zero.
        if (result == 0){
            result = "0".repeat(x.length);
        }

        result += "0".repeat(cont)

        // Adiciona valores para somar.
        if (result != 0){
            values.push(parseInt(result));
        }

        text += cont == 0 ? result + "<br>" : "+ " + result + "<br>";
        cont ++;
    }

    // Soma todos os valores obtidos.
    for (let value of values){
        result += value;
    }

    // Insere o ponto flutuante se necessário.
    result /= 10 ** p_pos;
    text += `${"-".repeat(values[values.length - 1].toString().length)}-------------<br> ${result}`;

    return [text, result];
}


function radiansToDegrees(radians){

    var text = "";

    text += "D = r * (180 / π) <br>";
    text += `D = ${radians} * (180 / ${Math.PI}) <br>`;
    text += `D = ${radians} * ${180 / Math.PI} <br>`;
    text += `D = ${radians * (180 / Math.PI)}`;

    return [text, radians * (180 / Math.PI)];
}