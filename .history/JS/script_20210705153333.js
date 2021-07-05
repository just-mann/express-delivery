// alert('It works');


// Preloader
$(() => {

    // const scrollY = window.scrollY;

    $('#preloader').show();
    // $('.page__up__arrow').addClass('d-none');
    
    // Display side nav when menuBars is clicked
    $('.menuBars').on('click', () => {
        $('.side__nav__links').show('slow');
    });

    // Close side nav when closeBtn is clicked
    $('.closeBtn').on('click', () => {
        $('.side__nav__links').hide(1200);
    });

    // Hide side nav when its links are clicked
    $('.side__nav__links a').on('click', () => {
        $('.side__nav__links').hide(1200);
    });

    // When the page loads remove preloader within 1.1sec
    $(window).on('load', () => {
        $('#preloader').delay(1200).fadeOut(1200, () => {
            $(this).remove();
            $('#preloader').removeClass('d-block');
            $('#preloader').addClass('d-none');
        });
    });

    // When user scrolls down, hide side nav and display
        // up arrow.
    $(window).on('scroll', () => {
        if (window.scrollY > 5) {
            $('.side__nav__links').hide(1200);
            $('.page__up__arrow').css('display', 'block');
        } else {
            $('.page__up__arrow').css('display', 'none');
        }
    });
    

    $('.page__up__arrow').on('click', () => {
        $('html, body').animate({
            scrollTop: $('#top').offset().top
        }, 300)
    });

    
});