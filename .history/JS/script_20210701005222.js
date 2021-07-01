// alert('It works');


// Preloader
$(() => {

    $('#preloader').show();
    
    $(window).on('load', () => {
        $('#preloader').delay(1000).fadeOut('slow', () => {
            $(this).remove();
            $('#preloader').removeClass('d-block');
            $('#preloader').addClass('d-none');
        });
    });

    $('.page__up__arrow').on('click', () => {
        $(window).scrollTo(0, 0);
    })
});