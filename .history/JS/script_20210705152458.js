// alert('It works');


// Preloader
$(() => {

    // const scrollY = window.scrollY;

    $('#preloader').show();
    // $('.page__up__arrow').addClass('d-none');
    
    $('.menuBars').on('click', () => {
        $('.side__nav__links').show('slow');
    })

    $('.closeBtn').on('click', () => {
        $('.side__nav__links').hide('slow');
    })

    $('.side__nav__links a').on('click', () => {
        $('.side__nav__links').hide('slow');
    })

    
    $(window).on('load', () => {
        $('#preloader').delay(1000).fadeOut('slow', () => {
            $(this).remove();
            $('#preloader').removeClass('d-block');
            $('#preloader').addClass('d-none');
        });
    });

    $(window).on('scroll', () => {
        if (window.scrollY > 5) {
            $('.page__up__arrow').css('display', 'block');
            $('.side__nav__links').hide('slow');
        } else {
            $('.page__up__arrow').css('display', 'none');
        }
    })

    $('.page__up__arrow').on('click', () => {
        $('html, body').animate({
            scrollTop: $('#top').offset().top
        }, 300)
    });

    
});