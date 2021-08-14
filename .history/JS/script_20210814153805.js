// Preloader
$(() => {
    
    const currentYear = $('.currentYear');
    const d = new Date();
    const year = d.getFullYear();
    let gallImages = document.querySelectorAll('.gallImg');
    let modalImg = document.getElementById('modalImage');
    let myModal = document.querySelector('.myModal');
    let caption = document.querySelector('.caption');
    let closeBtn = document.querySelectorAll('.closeBtn');


    
    currentYear.html(year);

    // When the page loads remove preloader within 1.1sec
    // $(window).on('load', () => {
    //     $('#preloader').delay(1000).fadeOut('slow', () => {
    //         $(this).remove();
    //         $('#preloader').hide();
    //     });
    // });

    $('#preloader').show();
    
    // Display side nav when menuBars is clicked
    $('.menuBars').on('click', () => {
        $('.side__nav__links').show();
    });

    // Close side nav when closeBtn is clicked
    $('.closeBtn').on('click', () => {
        $('.side__nav__links').hide();
    });

    // Hide side nav when its links are clicked
    $('.side__nav__links a').on('click', () => {
        $('.side__nav__links').hide('slow');
    });

    

    // When user scrolls down, hide side nav and display up arrow.
    $(window).on('scroll', () => {
        if (window.scrollY > 7) {
            $('.side__nav__links').hide();
            $('.page__up__arrow').css('display', 'block');
        } else {
            $('.page__up__arrow').css('display', 'none');
        }
    });

    // Scroll up to top of page when up arrow is clicked
    $('.page__up__arrow').on('click', () => {
        $('html, body').animate({
            scrollTop: $('#top').offset().top
        }, 600)
    });

    // Display Modal when Images are clicked
    gallImages.forEach((img) => {
        img.onclick = function() {
            modalImg.src = this.src;
            caption.alt = this.alt;
            myModal.style.display = 'block';
        }
    });


    // Close Button
    closeBtn.forEach(item => {
        item.addEventListener('click', () => {
            myModal.style.display = 'none';
        });
    })

    // myModal.onclick = function() {
    //     myModal.style.display = 'none';
    // }

    // modalImg.onclick = function() {
    //     myModal.style.display = 'block';
    // }
    
});