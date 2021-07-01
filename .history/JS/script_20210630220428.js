// alert('It works');


// Preloader
$(() => {
    
    
    setTimeout(() => {
        $('#preloader').fadeOut('slow', () => {
            $(this).remove();
        });
    }, 2000);
})