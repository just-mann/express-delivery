// alert('It works');


// Preloader
$(() => {
    
    $('body').hide('slow');

    setTimeout(() => {
        $('#preloader').fadeOut('slow', () => {
          $(this).remove();
        });
    }, 2000);
})