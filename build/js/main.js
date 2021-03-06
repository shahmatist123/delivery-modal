$(document).ready(function () {
    // сама выпадашка
    // открывается если закрыта
    // иначе закрывается
    $('.delivery-cart__input-drop input').on('click', function () {
        if ($('.delivery-cart__input-drop-body').css('opacity') == 0) {
            $('.delivery-cart__input-drop-body').addClass('delivery-cart__input-drop-body-active')
            $('.delivery-cart__drop-img').css('transform', 'rotate(180deg)')
        } else {
            $('.delivery-cart__input-drop-body').removeClass('delivery-cart__input-drop-body-active')
            $('.delivery-cart__drop-img').css('transform', 'rotate(0)')
        }
    })
    // при нажатии на элемент в выпадашке
    // выпадашка закрывается и в value у инпута записывается значение элемента по которому кликнули
    $('.delivery-cart__input-drop-body p').on('click', function (e) {
        modalDropIndex = $('.delivery-cart__input-drop-body p').index(this)
        $('.delivery-cart__input-drop input').val($('.delivery-cart__input-drop-body p').eq(modalDropIndex).text())
        $('.delivery-cart__input-drop-body').removeClass('delivery-cart__input-drop-body-active')
        $('.delivery-cart__drop-img').css('transform', 'rotate(0)')
    })
    // прибавляет к кол-ву штук единичку
    $('.delivery-cart__count3').on('click', function (e) {
        var count3Index = $('.delivery-cart__count3').index(this)
        $('.delivery-cart__count2').eq(count3Index).text(parseInt($('.delivery-cart__count2').eq(count3Index).text()) + 1 + ' шт.')
    })
    // вычитает из кол-ва штук единичку
    $('.delivery-cart__count1').on('click', function (e) {
        var count3Index = $('.delivery-cart__count1').index(this)
        if (parseInt($('.delivery-cart__count2').eq(count3Index).text()) > 1) {
            $('.delivery-cart__count2').eq(count3Index).text(parseInt($('.delivery-cart__count2').eq(count3Index).text()) - 1 + ' шт.')
        }
    })
    // убирает одну позицию по крестику
    $('.delivery-cart__delete-pos').on('click', function (e) {
        var deletePosIndex = $('.delivery-cart__delete-pos').index(this)
        $('.delivery-cart__item').eq(deletePosIndex).css('opacity', '0')
        $('.delivery-cart__item').eq(deletePosIndex).css('transform', 'translateY(-100%)')
        setTimeout(function () {
            $('.delivery-cart__item').eq(deletePosIndex).remove()
        }, 500)
    })
    // убирает все позиции из html
    $('.delivery-cart__clear-all button').on('click', function (e) {
        var posCount = $('.delivery-cart__delete-pos').length

        $('.delivery-cart__item').css('opacity', '0')
        $('.delivery-cart__item').css('transform', 'translateY(-100%)')
        setTimeout(function () {
            $('.delivery-cart__item').remove()
        }, 500)

    })
    // Кнопка далее на мобиле
    // "Перелистывает" блоки (блок с позициями убирает и показывает блок с инпутами)
    $('.delivery-cart__mobile-order').on('click', function () {
        $('.delivery-cart__modal-body1').css('display', 'none')
        $('.delivery-cart__modal-body2').css('display', 'block')
        $('.box-size .delivery-cart__modal .delivery-cart__modal-body form').css('width', '100%')
    })
    // Кнопка назад на мобиле
    // "Перелистывает" блоки (блок с инпутами убирает и показывает блок с позициями)
    $('.delivery-cart__continue-back').on('click', function () {
        $('.delivery-cart__modal-body1').css('display', 'block')
        $('.delivery-cart__modal-body2').css('display', 'none')
        $('.box-size .delivery-cart__modal .delivery-cart__modal-body form').css('width', '0')
    })
    // Открыть модальное окно
    $('.btn-click-delivery-modal').on('click', function () {
        $('.delivery-cart__modal-container').addClass('delivery-cart__modal-container-active')
        $('.delivery-cart__modal-bg').addClass('delivery-cart__modal-bg-active')
        $('body').css('overflow', 'hidden')
    })
    // Закрыть модальное окно
    $('.delivery-cart__modal-bg,.delivery-cart__close').on('click', function () {
        $('.delivery-cart__modal-container').removeClass('delivery-cart__modal-container-active')
        $('.delivery-cart__modal-bg').removeClass('delivery-cart__modal-bg-active')
        $('body').css('overflow', 'auto')
    })
});




var elements = document.getElementsByClassName("delivery__mask");
for (var i = 0; i < elements.length; i++) {
    new IMask(elements[i], {
        mask: '+{7} (000) 000-00-00',
    });
}
