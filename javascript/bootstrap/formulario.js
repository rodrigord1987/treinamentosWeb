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
var nome = document.getElementById('nome');
var cpf = document.getElementById('cpf');
var dataNascimento = document.getElementById('data_nascimento');
var sexoM = document.getElementById('sexo_m').checked;
var sexoF = document.getElementById('sexo_f').checked;
var profissao = document.getElementById('profissao');
var musicaPagode = document.getElementById('musica_pagode').checked;
var musicaRock = document.getElementById('musica_rock').checked;
var musicaForro = document.getElementById('musica_forro').checked;
var invalidos = [];

if(nome.value.trim() === '') {
    invalidos.push('nome');
    nome.style.backgroundColor = 'red';
} else {
    nome.style.backgroundColor = 'white';
}
if(!/^\d{3}\.\d{3}\-\d{2}$/.test(cpf.value.trim())) {
    invalidos.push('cpf');
    cpf.style.backgroundColor = 'red';
} else {
    cpf.style.backgroundColor = 'white';
}
if(data_nascimento.value.trim() === '') {
    invalidos.push('data_nascimento');
    data_nascimento.style.backgroundColor = 'red';
} else {
    data_nascimento.style.backgroundColor = 'white';
}
if(!sexo_m && !sexo_f) {
    invalidos.push('sexo');
}
if(profissao.value === '') {
    invalidos.push('profissao');
    profissao.style.backgroundColor = 'red';
} else {
    profissao.style.backgroundColor = 'white';
}
if(!musica_rock && !musica_pagode && !musica_forro) {
    invalidos.push('gosto_musical');
}

if(invalidos.length > 0) {
    alert('Favor informar os campos: ' + invalidos.join(', '));
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
