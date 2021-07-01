// alert('It works');


// Preloader
$(() => {
    
    $(window).on('load', () => {
        $('#preloader').delay(2000).fadeOut('slow', () => {
            $(this).remove();
        });
    } )
    // setTimeout(() => {
    // }, 2000);
})