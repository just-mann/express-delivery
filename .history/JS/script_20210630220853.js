// alert('It works');


// Preloader
$(() => {
    
    $(window).on('load', () => {
        $('#preloader').delay(1000).fadeOut('slow', () => {
            $(this).remove();
        });
    } )
    // setTimeout(() => {
    // }, 2000);
})