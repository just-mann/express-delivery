// alert('It works');


// Preloader
$(() => {
    
    $('body').hide('slow');

    setTimeout(() => {
        $('#preloader').fadeOut('slow', () => {
          $(this).remove();
          $('body').show('slow');
        });
    }, 2000);
    
})