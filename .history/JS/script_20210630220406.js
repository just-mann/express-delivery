// alert('It works');


// Preloader
$(() => {
    
    $('body').hide();
    
    setTimeout(() => {
        $('#preloader').fadeOut('slow', () => {
            $(this).remove();
            $('body').show();
        });
    }, 2000);
})