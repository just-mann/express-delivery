// alert('It works');


// Preloader
$(() => {

    // const scrollY = window.scrollY;

    $('#preloader').show();
    // $('.page__up__arrow').addClass('d-none');
    

    
    $(window).on('load', () => {
        $('#preloader').delay(1000).fadeOut('slow', () => {
            $(this).remove();
            $('#preloader').removeClass('d-block');
            $('#preloader').addClass('d-none');
        });
    });

    $('.page__up__arrow').on('click', () => {
        $('html, body').animate({
            scrollTop: $('#top').offset().top
        }, 300)
    })

    
});