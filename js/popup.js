img = $('.popup__overlay')
$('#popup__toggle').click(function() {
    img.css('display', 'block')
})
img.click(function(event) {
    e = event || window.event
    if (e.target == this) {
        $(img).css('display', 'none')
    }
})
$('.popup__close').click(function() {
    img.css('display', 'none')
})