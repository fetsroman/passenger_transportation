$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

document.getElementById("anim-call-btn").onclick = function(){
    mylogo.classList.toggle('fade');
}

$('#anim-call-btn').on('click', function() {
    $(".phone1").toggle("show")
    $(".phone2").toggle("show")
});