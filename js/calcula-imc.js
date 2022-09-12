    
var titulo = document.querySelector(".titulo");
titulo.textContent = "Beatriz Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

//calculo do imc
for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000){

        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("pacinete-invalido");
    }

    if(altura <= 0 || altura >= 3.00){

        alturaEhValida = false;
        tdImc.textContent = "Altura Inválido";
        paciente.classList.add("pacinete-invalido");
    }

    if (alturaEhValida && pesoEhValido){

        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }

}

function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}











