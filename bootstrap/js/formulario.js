function validarFormulario(){

    /*var nome = document.getElementById('nome').value.trim();
    var cpf = document.getElementById('cpf').value.trim();
    var data_nascimento = document.getElementById('data_nascimento').value.trim();
    var sexo_m = document.getElementById('sexo_m').checked;
    var sexo_f = document.getElementById('sexo_f').checked;
    var profissao = document.getElementById('profissao').value;
    var musica_pagode = document.getElementById('musica_pagode').checked;
    var musica_forro = document.getElementById('musica_forro').checked;
    var musica_rock = document.getElementById('musica_rock').checked;*/
    

   /* if(nome ===''){
        alert('Favor preencher o campo nome.')
        return false;
    }

    if(cpf ===''){
        alert('Favor preencher o campo CPF.')
        return false;
    }

    if(data_nascimento ===''){
        alert('Favor preencher o campo data de nascimento.')
        return false;
    }

    if(!sexo_m && !sexo_f){ 
        alert('Favor preencher o campo sexo.')
        return false;
    }

    if(profissao ===''){
        alert('Favor preencher o campo profissão.')
        return false;
    }

    if(!musica_rock && !musica_pagode && !musica_forro){ 
        alert('Favor preencher o campo gosto musical.')
        return false;
    }*/
    
    /*Outra forma de validar
    var invalidos = [];

     if(nome ===''){
        invalidos.push('nome');
    }

    if(cpf ===''){
        invalidos.push('cpf');
    }

    if(data_nascimento ===''){
        invalidos.push('data_nascimento');
    }

    if(!sexo_m && !sexo_f){ 
        invalidos.push('sexo');
    }

    if(profissao ===''){
        invalidos.push('profissao');
    }

    if(!musica_rock && !musica_pagode && !musica_forro){ 
        invalidos.push('gosto_musical');
    }

    if(invalidos.length > 0 ) {
        alert("favor preencher os campos " + invalidos.join(', '));
        return false;
    }

*/

/*outra forma*/
var nome = $('#nome');
var cpf = $('#cpf');
var dataNascimento = $('#data_nascimento');
var sexoM = $('#sexo_m')[0].checked;
var sexoF = $('#sexo_f')[0].checked;
var profissao = $('#profissao');
var musicaPagode = $('#musica_pagode')[0].checked;
var musicaRock = $('#musica_rock')[0].checked;
var musicaForro = $('#musica_forro')[0].checked;
var invalidos = [];


if(nome.val().trim() === '') {
    invalidos.push('nome');
    //nome.style.backgroundColor = 'red';
    //$('#nome').closest('.form-group').addClass('has-error');
    addErrorClass('#nome');
} else {
    //nome.style.backgroundColor = 'white';
    //$('#nome').closest('.form-group').addClass('has-success');
    addSuccessClass('#nome');
}
if(!/^\d{3}\.\d{3}\-\d{2}$/.test(cpf.val().trim())) {
    invalidos.push('cpf');
    //cpf.style.backgroundColor = 'red';
    addErrorClass('#cpf');
} else {
    //cpf.style.backgroundColor = 'white';
    addSuccessClass('#cpf');
}
if(dataNascimento.val().trim() === '') {
    invalidos.push('data_nascimento');
    //data_nascimento.style.backgroundColor = 'red';
    addErrorClass('#data_nascimento');
} else {
    //data_nascimento.style.backgroundColor = 'white';
    addSuccessClass('#data_nascimento');
}
if(!sexoM && !sexoF) {
    invalidos.push('sexo');
    addErrorClass('#sexo_m');
} else {
    addSuccessClass('#sexo_m'); 
}

if(profissao.val() === '') {
    invalidos.push('profissao');
    //profissao.style.backgroundColor = 'red';
    addErrorClass('#profissao');
} else {
    //profissao.style.backgroundColor = 'white';
    addSuccessClass('#profissao');
}
if(!musica_rock && !musica_pagode && !musica_forro) {
    invalidos.push('gosto_musical');
    addErrorClass('#musica_pagode');
}   else {
    addSuccessClass('#musica_pagode');
}

if(invalidos.length > 0) {
    //alert('Favor informar os campos: ' + invalidos.join(', '));
    $('#message').text('Favor informar os campos:' + invalidos.join(', ') );
    $('#validationModal').modal();
    return false;
}
    

    return true;

}


function maskCpf(event){
    var value = event.target.value.replace(/\D/g, '');
    
    if(value.length > 11){
        value = value.substring(0,11);
    }

    if(value.length > 9) {
        event.target.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/,'$1.$2.$3-$4');

    }
    else if(value.length > 6) {
        event.target.value = value.replace(/(\d{3})(\d{3})(\d{1,3})/,'$1.$2.$3');
    }
    else if(value.length > 3) {
        event.target.value = value.replace(/(\d{3})(\d{1,3})/,'$1.$2');
    }
    else {
        event.target.value = value;
    }

}

function removeValidationClass(selector) {
    $(selector).closest('.form-group').removeClass('has-error has-success');

}

function addErrorClass(selector) {
   
    removeValidationClass(selector);

    $(selector).closest('.form-group').addClass('has-error');

}

function addSuccessClass(selector) {

    removeValidationClass(selector);

    $(selector).closest('.form-group').addClass('has-success');

}