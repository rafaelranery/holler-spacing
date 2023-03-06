$(document).ready(function () {
    
    /* Form mask */
    $('#tel').mask('(00) 0000-0000', {placeholder: '(DDD) 0000-0000'})

    /* Form validte */
    $('form').validate({
        rules: {
            name: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: false,
            },
            msg: {
                required: true,
            }
        },
        submitHandler: function () {
            let sccssMsg = `<div class="alert alert-success">Sua mensagem foi enviada com sucesso!</div>`;
            $('#formMsgDisplay').html('');
            $('.form-control').val('');

            $('#formMsgDisplay').html(sccssMsg);
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            
            if (camposIncorretos) {
                let errorMsg = `<div class="alert alert-danger">Existem ${camposIncorretos} campos incorretos...</div>`;
                $('#formMsgDisplay').html('')
                $('#formMsgDisplay').html(errorMsg);
            }
        
        },
        messages: {
            name: 'Por favor, insira seu nome completo.',
            email: 'Por favor, insira um email válido.',
            msg: 'Por favor, insira uma mensagem de contato.'
        }
    });

})