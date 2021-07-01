// alert('It works');


// Preloader
$(() => {
    
    $(window).on('load', () => {
        $('#preloader').fadeOut('slow', () => {
            $(this).remove();
        });
    } )
    // setTimeout(() => {
    // }, 2000);
})