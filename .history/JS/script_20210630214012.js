// alert('It works');


// Preloader
$(() => {
    setTimeout(function() {
        $('#preloader').fadeOut('slow', function() {
          $(this).remove();
        });
    }, 2000);
})