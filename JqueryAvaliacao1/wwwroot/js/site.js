$(document).ready(function () {
    $('#frmCalc').on('submit', function (e) {
        Operation(e);
    });
})


function Operation(e) {
    e.preventDefault();

    if (ValidateForm()) {
        Calculo();
    }
}


function ValidateForm() {
    var operacao = $('#lblOperacao').find(':selected').val();
    var result = true;

    if ($.trim($('#txtValor1').val()) === '') {
        SetInvalid($('#txtValor1'));
        $('#txtFeedValor1').text('Informe o valor');
        result = false
    } else {
        SetValid($('#txtValor1'));
    }

    if ($.trim($('#txtValor2').val()) === '') {
        SetInvalid($('#txtValor2'));
        $('#txtFeedValor2').text('Informe o valor');
        result = false
    }
    else {
        SetValid($('#txtValor2'));
    }

    if (operacao === 'Selecione...') {
        SetInvalid($('#lblOperacao'));
        $('#txtoperacao').text('Qual a operação?');
        result = false;
    }
    else {
        SetValid($('#lblOperacao'));
    }

    return result;
}

function Calculo() { 
    var operacao = $('#lblOperacao').find(':selected').val();
    var valor1 = parseFloat($('#txtValor1').val().replaceAll('.', '').replaceAll(',', '.'));
    var valor2 = parseFloat($('#txtValor2').val().replaceAll('.', '').replaceAll(',', '.'));
    var resultado = 0;

    if (operacao === '1') {
        resultado = valor1 / valor2;
    }
    else if (operacao === '2') {
        resultado = valor1 * valor2;
    }
    else if (operacao === '3') {
        resultado = valor1 - valor2;
    }
    else if (operacao === '4') {
        resultado = valor1 + valor2;
    }

    $('#txtResultado').val(resultado);
    $('#txtResultado').trigger('input');

}

function SetValid(field) {
    $(field).removeClass('is-invalid');
    $(field).addClass('is-valid');
}

function SetInvalid(field) {
    $(field).removeClass('is-valid');
    $(field).addClass('is-invalid');
}