//Слайдер на главной
var mainSlider = new Swiper ('.main-slider-container', {
    loop: false,
    autoplay: false,
    // Navigation arrows
    navigation: {
        nextEl: '.main-slider-nav--next',
        prevEl: '.main-slider-nav--prev'
    },
    watchOverflow: true,
    pagination: {
        el: '.main-slider-pagination',
        type: 'fraction',
    }
});

//Фильтр

$('.filter-drop').each(function() {
    $(this).dropdown({
        label: $(this).data('label')
    });
});

//Добавление тултипа на dropdown при выборе опции

/*$('.fs-dropdown-selected').each(function() {
    if ($(this).html() !== $(this).siblings('.fs-dropdown-element').data('label')) {
        console.log('true');
    }
});*/

$(".filter-drop").on("change", function() {
    $('.fs-dropdown-selected').each(function() {
        if ($(this).html() !== $(this).siblings('.fs-dropdown-element').data('label')) {
            let div = $('<div/>');
            div.addClass('dropdown-selected-label');
            div.html($(this).siblings('.fs-dropdown-element').data('label'));
            $(this).parent().append(div);
            $(this).addClass('filled-option');
        }
    });
});


//Бургер

$('.header-burger').click(function(e) {
    e.preventDefault();
    $(this).hide();
    $('.header-burger--close').show();
    $('body').addClass('over-hidden');
    $('.header-mobile-nav').slideDown();
});

$('.header-burger--close').click(function(e) {
    e.preventDefault();
    $(this).hide();
    $('.header-burger').show();
    $('body').removeClass('over-hidden');
    $('.header-mobile-nav').slideUp();
});

//Клик по строке внутри таблицы и переход по ссылке


$('.detail-info-table tbody tr').click(function(e) {
    let lastCell = $(this).find('td:last-child'),
        preLastCell = $(this).find('td:nth-last-child(2)');
    let deliveryCell = false;



   let target = $(e.target);
    if ($(this).parents('.detail-info-table').hasClass('offers-table')) {
        deliveryCell = $(this).find('td:nth-last-child(3)');
        deliveryCell = target.closest(deliveryCell).length;
    }
    if (target.closest(lastCell).length || target.closest(preLastCell).length || deliveryCell) return;
    window.location.href = $(this).data('link');
});

//Галерея дисков

var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        992: {
            direction: 'horizontal',
            spaceBetween: 4
        }
    }
});
var galleryTop = new Swiper('.gallery-top', {
    slidesPerView: 1,
    normalizeSlideIndex: false,
    thumbs: {
        swiper: galleryThumbs,
    },
});



$('[data-fancybox=""]').fancybox({
    touch: false
});

$('[data-fancybox="gallery"]').fancybox({
    backFocus: false
});

$("input[type=checkbox], input[type=radio]").checkbox();

;(function() {
    alertify.set('notifier','position', 'top-right');
    $('.alert-call').click(function() {
        let contentMain;
        let contentHead;
        let contentMainClass = '';
        let contentFooter;

        if ($(this).data('content')) {
            contentMainClass = 'text';
            contentHead = '';
            contentMain = $(this).data('content');
            contentFooter = '';
        } else {
            contentMain = `<a href="${$(this).parent().parent().data('link')}" class="alert-content-main__link">${$(this).data('title')}</a>`;
            contentHead = 'Товар добавлен в корзину';
            contentMainClass = '';
            contentFooter = `<a href="/basket" class="alert-content-footer__btn btn btn-trans">Перейти в корзину</a>`;
        }

        let content = `<div class="alert-content">
                            <div class="alert-content-header">
                                ${contentHead}
                            </div>
                            <div class="alert-content-main ${contentMainClass}">
                                ${contentMain}
                            </div>
                            <div class="alert-content-footer">
                                ${contentFooter}
                            </div>
                        </div>`;
        let alertifyObject = alertify.notify('', 'custom', 10);
        console.log(content);
        alertifyObject.setContent(content);

    })
})();

;(function() {
    tippy('.tooltip', {
        animation: 'fade',
        arrow: true
    })
})();