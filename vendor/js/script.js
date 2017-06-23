$(document).ready(function () {
    $('.photos')
        .on('mouseenter','.image',function () {
        mouseenter(this);
    })
        .on('mouseleave','.image',function () {
            mouseleave(this);
        })
});

function mouseenter(element) {
    var img = $(element).find('img:not(".hidden-image")');
    if(!$(element).find('img').is('.hidden-image')){
        $(element).append('<img class="hidden-image" src="vendor/img/portfolio/another.jpg">');
    }
    $(element).find('.hidden-image').animate({opacity: 1}, 400);
}

function mouseleave(element) {
    $(element).find('.hidden-image').animate({opacity: 0}, 400);
}