$('.counter').counterUp({
    delay: 5,
    time: 1000
});
$('.counter1').counterUp({
    delay: 5,
    time: 2000
});
$('.counter2').counterUp({
    delay: 5,
    time: 3000
});
$('.counter3').counterUp({
    delay: 5,
    time: 4000
});
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
       autoplayTimeout: 3000,
    });
});
