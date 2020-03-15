/*
Funções dos botões.
*/

function calcArrangement(){

    // Obtém os valores N e R
    var n = document.getElementById("a_n").value;
    var r = document.getElementById("a_r").value;

    // Abre o <details> e obtém as div's para inserir os resultados.
    document.getElementById("arrangement_result").open = true;
    const arrangement = document.getElementById("arrangement_calc");
    const msg = document.getElementById("arrangement_msg");

    arrangement.innerHTML = "Quantidade de agrupamentos possíveis:<br><br>";

    // Verifica se todos os campos foram preenchidos.
    if (n !== "" && r !== ""){
        n = parseInt(n);
        r = parseInt(r);
        arrangement.innerHTML += getArrangement(n, r)[0];
        msg.hidden = true;

    }else{
        document.getElementById("arrangement_result").open = false;
        arrangement.innerHTML = "";
        msg.hidden = false;
        msg.innerHTML = "Para realizar este cálculo, é necessário preencher todos os campos."
    }
}


function calcCombination(){

    // Obtém os valores N e R
    var n = document.getElementById("c_n").value;
    var r = document.getElementById("c_r").value;

    // Abre o <details> e obtém as div's para inserir os resultados.
    document.getElementById("combination_result").open = true;
    const combination = document.getElementById("combination_calc");
    const msg = document.getElementById("combination_msg");

    combination.innerHTML = "Quantidade de combinações possíveis:<br><br>";

    // Verifica se todos os campos foram preenchidos.
    if (n !== "" && r !== ""){
        n = parseInt(n);
        r = parseInt(r);
        combination.innerHTML += getCombination(n, r)[0];
        msg.hidden = true;

    }else{
        document.getElementById("combination_result").open = false;
        combination.innerHTML = "";
        msg.hidden = false;
        msg.innerHTML = "Para realizar este cálculo, é necessário preencher todos os campos."
    }
}


function calcDelta(){

    // Obtém os valores A, B, C.
    const a = parseFloat(document.getElementById("d_a").value);
    const b = parseFloat(document.getElementById("d_b").value);
    const c = parseFloat(document.getElementById("d_c").value);

    // Abre o <details> e obtém as div's para inserir os resultados.
    document.getElementById("delta_result").open = true;
    const delta = document.getElementById("delta_calc");
    const msg = document.getElementById("delta_msg");

    delta.innerHTML = "Delta:<br><br>";

    // Verifica se todos os campos foram preenchidos.
    if (a && b && c){
        delta.innerHTML += getDelta(a, b, c)[0];
        msg.hidden = true;

    }else{
        document.getElementById("delta_result").open = false;
        delta.innerHTML = "";
        msg.hidden = false;
        msg.innerHTML = "Para realizar este cálculo, é necessário preencher todos os campos."
    }
}


function calcBhaskara(){

    // Obtém os valores A, B, C.
    const a = parseFloat(document.getElementById("b_a").value);
    const b = parseFloat(document.getElementById("b_b").value);
    const c = parseFloat(document.getElementById("b_c").value);

    // Abre o <details> e obtém as div's para inserir os resultados.
    document.getElementById("bhaskara_result").open = true;
    const bhaskara = document.getElementById("bhaskara_calc");
    const msg = document.getElementById("bhaskara_msg");

    bhaskara.innerHTML = "Bhaskara:<br><br>";

    // Verifica se todos os campos foram preenchidos.
    if (a && b && c){
        bhaskara.innerHTML += getBhaskara(a, b, c)[0];
        msg.hidden = true;

    }else{
        document.getElementById("bhaskara_result").open = false;
        bhaskara.innerHTML = "";
        msg.hidden = false;
        msg.innerHTML = "Para realizar este cálculo, é necessário preencher todos os campos."
    } 
}


function calcMultiplication(){

    // Obtém os valores X e Y.
    const x = document.getElementById("mult_x").value;
    const y = document.getElementById("mult_y").value;

    // Abre o <details> e obtém as div's para inserir os resultados.
    document.getElementById("mult_result").open = true;
    const mult = document.getElementById("mult_calc");
    const msg = document.getElementById("mult_msg");

    // Verifica se todos os campos foram preenchidos.
    if (x !== "" && y !== ""){

        mult.innerHTML = getMult(x, y)[0];  // AVISO: Os valores de X e Y devem ser strings obrigatoriamente.
        msg.hidden = true;

    }else{
        document.getElementById("mult_result").open = false;
        mult.innerHTML = "";
        msg.hidden = false;
        msg.innerHTML = "Para realizar este cálculo, é necessário preencher todos os campos."
    }  
}


function calcProgression(){

    // Obtém o primeiro termo, número de termos e razão.
    var a1 = document.getElementById("pg_a1").value;
    var n = document.getElementById("pg_n").value;
    var q = document.getElementById("pg_q").value;

    // Abre o <details> e obtém as div's para inserir os resultados.
    document.getElementById("progression_result").open = true;
    const pa_an = document.getElementById("pa_an_calc");
    const pa_sn = document.getElementById("pa_sn_calc");
    const pg_an = document.getElementById("pg_an_calc");
    const pg_sn = document.getElementById("pg_sn_calc");
    const msg = document.getElementById("pg_msg");

    pa_an.innerHTML = "An (PA):<br><br>"
    pa_sn.innerHTML = "Sn (PA):<br><br>"
    pg_an.innerHTML = "An (PG):<br><br>"
    pg_sn.innerHTML = "Sn (PG):<br><br>"


    // Verifica se todos os campos foram preenchidos.
    if (a1 !== "" && n !== "" && q !== ""){

        a1 = parseFloat(a1);
        n = parseFloat(n);
        q = parseFloat(q);

        pa_an.innerHTML += getAnFromPA(a1, n, q)[0];
        pa_sn.innerHTML += getSnFromPA(a1, n, q)[0];
        pg_an.innerHTML += getAnFromPG(a1, n, q)[0];
        pg_sn.innerHTML += getSnFromPG(a1, n, q)[0];
        msg.hidden = true;

    }else{
        document.getElementById("progression_result").open = false;
        msg.hidden = false;
        msg.innerHTML = "Para realizar este cálculo, é necessário preencher todos os campos."
        pa_an.innerHTML = "";
        pa_sn.innerHTML = "";
        pg_an.innerHTML = "";
        pg_sn.innerHTML = "";
    }
}


function calcRadiansToDegrees(){

    // Obtém o valor em radianos
    var value = document.getElementById("r2d_radians").value;

    // Abre o <details> e obtém as div's para inserir os resultados.
    document.getElementById("rad_to_degrees_result").open = true;
    const degrees = document.getElementById("rad_to_degrees_calc");
    const msg = document.getElementById("rad_to_degrees_msg");

    degrees.innerHTML = "Graus:<br><br>";

    if (value !== ""){
        value = parseFloat(value);
        msg.hidden = true;
        degrees.innerHTML += radiansToDegrees(value)[0];

    }else{
        document.getElementById("rad_to_degrees_result").open = false;
        degrees.innerHTML = "";
        msg.hidden = false;
        msg.innerHTML = "Informe o valor em radianos.";
    }
}


function calcTemperature(){

    // Obtém o valor em radianos
    var value = document.getElementById("temperature").value;
    var option = document.getElementById("cv_temp_sel").value;

    // Abre o <details> e obtém as div's para inserir os resultados.
    document.getElementById("cv_temp_result").open = true;
    const temp = document.getElementById("cv_temp_calc");
    const msg = document.getElementById("cv_temp_msg");

    const functions = {
        cel_to_fah: [cel_to_fah, "Fahrenheit"],
        cel_to_kel: [cel_to_kel, "Kelvin"],
        fah_to_cel: [fah_to_cel, "Celsius"],
        fah_to_kel: [fah_to_kel, "Kelvin"],
        kel_to_cel: [kel_to_cel, "Celsius"],
        kel_to_fah: [kel_to_fah, "Fahrenheit"],
    }

    temp.innerHTML = `Temperatura em ${functions[option][1]}:<br><br>`;

    if (value !== ""){
        value = parseFloat(value);
        msg.hidden = true;
        temp.innerHTML += functions[option][0](value)[0];

    }else{
        document.getElementById("cv_temp_result").open = false;
        temp.innerHTML = "";
        msg.hidden = false;
        msg.innerHTML = "Informe a temperatura.";
    }
}


function calcTriangle(){

    // Obtém hipotenusa e catetos.
    var a = parseFloat(document.getElementById("t_a").value);
    var b = parseFloat(document.getElementById("t_b").value);
    var c = parseFloat(document.getElementById("t_c").value);

    // Abre o <details> e obtém as div's para inserir os resultados.
    document.getElementById("triangle_result").open = true;
    const leg = document.getElementById("triangle_leg_calc");
    const height = document.getElementById("triangle_height_calc");
    const pb = document.getElementById("triangle_pb_calc");
    const pc = document.getElementById("triangle_pc_calc");
    const msg = document.getElementById("triangle_msg");

    var error = false;

    height.innerHTML = "Altura: <br><br>";
    pb.innerHTML = "Projeção (b): <br><br>"
    pc.innerHTML = "Projeção (c): <br><br>"

    // Verifica se todos os campos foram preenchidos.
    if (a && b && c){
        msg.innerHTML = "Insira no máximo dois valores para realizar o cálculo.";
        error = true;
        leg.innerHTML = "";
    }

    // Verifica se o usuário informou o tamanho da hipotenusa.
    else if (!a){

        // Verifica se o usuário informou o tamanho dos catetos.
        if (b && c){
            leg.innerHTML = "Hipotenusa:<br><br>";
            result = getHypotenuse(b, c);
            a = result[1];
            leg.innerHTML += result[0];
            
        }else{
            msg.innerHTML = "Para realizar este cálculo, é necessário saber no mínimo o tamanho de dois lados do triângulo.";
            error = true;
            leg.innerHTML = "";
        }

    }else{

        // Abaixo será verificado se o usuário inseriu o tamanho de um dos catetos.
        if (b){
            leg.innerHTML = "Cateto C:<br><br>";
            result = getLeg(a, b, "b", "c");
            c = result[1];
            leg.innerHTML += result[0];

        }else if (c){
            leg.innerHTML = "Cateto B:<br><br>";
            result = getLeg(a, c, "c", "b");
            b = result[1];
            leg.innerHTML += result[0];

        }else{
            msg.innerHTML = "Para realizar este cálculo, é necessário saber no mínimo o tamanho de dois lados do triângulo.";
            error = true;
            leg.innerHTML = "";
        }
    }

    // Calcula a altura relativa do triângulo caso não tenha ocorrido erros.
    if (!error){
        height.innerHTML += getHeight(a, b, c)[0];
        pb.innerHTML += getProjection(a, b, "b", "m")[0];
        pc.innerHTML += getProjection(a, c, "c", "n")[0];
        msg.hidden = true;

    } else{
        document.getElementById("triangle_result").open = false;
        height.innerHTML = "";
        pb.innerHTML = "";
        pc.innerHTML = "";
        msg.hidden = false;
    }
}

function getTrigonometry(){

    // Obtém o ângulo.
    const value = document.getElementById("d2t_degrees").value;

    // Abre o <details> e obtém as div's para inserir os resultados.
    document.getElementById("deg_to_tri_result").open = true;
    const sin = document.getElementById("deg_to_tri_sin");
    const cos = document.getElementById("deg_to_tri_cos");
    const tan = document.getElementById("deg_to_tri_tan");
    const msg = document.getElementById("deg_to_tri_msg");

    if (value === ""){
        document.getElementById("deg_to_tri_result").open = false;
        sin.innerHTML = "";
        tan.innerHTML = "";
        cos.innerHTML = "";
        msg.hidden = false;
        msg.innerHTML = "Por favor, informe o ângulo em graus."
        return;
    }

    angle = parseInt(value);

    sin.innerHTML = "Seno: ";
    cos.innerHTML = "Cos: ";
    tan.innerHTML = "Tan: ";

    sin.innerHTML += degreesToSin(angle);
    cos.innerHTML += degreesToCos(angle);
    tan.innerHTML += degreesToTan(angle);

    msg.hidden = true;
}