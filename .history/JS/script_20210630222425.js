// alert('It works');


// Preloader
$(() => {

    $('#preloader').show();
    // $('#preloader').addClass('d-block');
    
    $(window).on('load', () => {
        $('#preloader').delay(1000).fadeOut('slow', () => {
            $(this).remove();
            $('#preloader').removeClass('d-block');
            $('#preloader').addClass('d-none');
        });
    });
})