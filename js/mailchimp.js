$(function() {
    "use strict";
    /* ==========================================================================
   Sub Form   
   ========================================================================== */

    $('#mc-form').ajaxChimp({
        language: 'cm',
        url: 'http://hawaitour.us16.list-manage.com/subscribe/post?u=9e9d4991415c213ea697a3012&amp;id=0abf7bbf8d'
        
            //http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
    });

    $.ajaxChimp.translations.cm = {
        'submit': 'Enviando...',
        0: '<i class="fa fa-smile-o"></i></i> ¡Gracias por suscribirte! Revisa tu E-mail, te hemos enviado un correo de confirmación.',
        1: '<i class="fa fa-exclamation-triangle"></i> Por favor ingresar su Correo electrónico.',
        2: '<i class="fa fa-exclamation-triangle"></i> Introduzca una dirección de correo electrónico real.'
    };
});




