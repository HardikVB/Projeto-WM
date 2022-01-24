$('.serie-img').hover(function () {
    $(this)[0].childNodes[3].classList.toggle('hidden');
})

$('.button-dark-mode').click(function() {
    $('.fa-moon-o')[0].classList.toggle('hidden');
    $('.fa-sun-o')[0].classList.toggle('hidden');

    for(var i = 0; i < $('.series-row').length; i++) {
        $('.series-row')[i].classList.toggle('series-row-dark')
    }

    for(var i = 0; i < $('.button-more').length; i++) {
        $('.button-more')[i].classList.toggle('button-more-dark')
    }

    for(var i = 0; i < $('.btn-outline-primary').length; i++) {
        $('.btn-outline-primary')[i].classList.toggle('btn-outline-primary-dark')
    }

    for(var i = 0; i < $('h3').length; i++) {
        $('h3')[i].classList.toggle('text-white')
    }

    for(var i = 0; i < $('h4').length; i++) {
        $('h4')[i].classList.toggle('text-white')
    }


})