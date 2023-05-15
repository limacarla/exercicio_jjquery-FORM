$(document).ready(function(){
    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    }) 
    /*favor perguntar ao professor pq o type number não funciona, tive que colocar como tel*/
    $('#telefone').mask('(00)00000-0000', {
        placeholder: '(00)00000-0000'
    })

    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            cpf: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            },
            adress: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages:{
            nome: 'Por favor, informe seu nome',
            cpf: 'Por favor, informe seu CPF',
            email: 'Por favor, informe um e-mail válido',
            tel: 'Por favor, informe um telefone para contato',
            adress: 'Por favor, informe o endereço',
            cep: 'Por favor, informe o CEP'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})