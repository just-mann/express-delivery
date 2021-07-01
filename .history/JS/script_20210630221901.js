// alert('It works');


// Preloader
$(() => {

    $('#preloader').show();
    
    $(window).on('load', () => {
        $('#preloader').delay(1500).fadeOut('slow', () => {
            $(this).remove();
        });
    });
})