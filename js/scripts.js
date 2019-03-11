/**
 * Created by mephisto on 6/16/17.
 */


$(document).ready(function () {

    myCellular = 'Njc4LTQ4OC04MTg2';
    myInbox = 'bXJhaW5lczRAZ21haWwuY29t';
    $('#cell').click(function () {

        $('.contact-box').html('<br>Phone: ' + atob(myCellular) + '<br><br> Email: ' + atob(myInbox));
        $('.contact-box').fadeIn('slow');
    });
    $('#mail').click(function () {
        $('.contact-box').html('<br>Phone: ' + atob(myCellular) + '<br><br> Email: ' + atob(myInbox));
        $('.contact-box').fadeIn();
    });
    $('#Projects').click(function () {
        $('#Nav-Bar').fadeOut();
        $('#About').fadeOut();
        $('#Contact').fadeOut();
        $('#Top').fadeOut();
        $('#Skills').fadeOut();
        $('#Links').fadeOut();
        $('#Recent-Projects').fadeOut();
    });
    $('.cd-close').click(function () {
        setTimeout(function () {
            $('#Nav-Bar').fadeIn('slow');
            $('#About').fadeIn();
            $('#Contact').fadeIn();
            $('#Top').fadeIn();
            $('#Skills').fadeIn();
            $('#Links').fadeIn();
            $('#Recent-Projects').fadeIn();
            $('html, body').animate({
                scrollTop: $("#Recent-Projects").offset().top
            }, 0);
        },2500);
    });

    $('#About-link').click(function () {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#About").offset().top
        }, 700);
    });

    $('#Top-link').click(function () {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#Top").offset().top
        }, 700);
    });
    $('#Projects-link').click(function () {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#Recent-Projects").offset().top
        }, 700);
    });
    $('#Contact-link').click(function () {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#Contact").offset().top
        }, 700);
    });

});