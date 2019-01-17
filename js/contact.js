jQuery('form.contact-form').on('submit', function( e ){
        e.preventDefault();
        var $form = jQuery(this);
        var request = $form.serialize();
        var ajax = jQuery.post( "../contact-form.php", request )
            .done(function( data ) {
                jQuery($form).find('[type="submit"]').attr('disabled', false).parent().prepend('<h2 class="contact-form-respond highlight text-success"><i class="fa fa-smile-o"></i> Mensaje enviado correctamente</h2>');
        })
            .fail(function( data ) {
                jQuery($form).find('[type="submit"]').attr('disabled', false).parent().prepend('<h2 class="text-danger"><i class="fa fa-frown-o"></i> No se pudo enviar su mensaje; vuelva a intentarlo.</he>');
        })
    });