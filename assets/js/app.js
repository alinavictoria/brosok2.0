var currentImageId = 1, currentColor, timeSlider, starSlider, saveActive = true;

$(document).ready(function() {

    timeSlider = $(".time-slider").slider({
        orientation: "vertical",
        min: 1,
        max: 3,
        range: "min",
        value: 3,
        step:1,
        slide: function( event, ui ) {
            changeTime(ui.value);
        }
    });

    starSlider = $(".stars-slider").slider({
        orientation: "vertical",
        min: 1,
        max: 2,
        range: "min",
        value: 1,
        step:1,
        slide: function( event, ui ) {
            changeStars(ui.value);
        }
    });

    $(document).on('click', '.i-s01', function (e) {
        timeSlider.slider("option", 'value', 3);
        changeTime(3);
        e.preventDefault();
    });
    $(document).on('click', '.i-s02', function (e) {
        timeSlider.slider("option", "value", 2);
        changeTime(2);
        e.preventDefault();
    });

    $(document).on('click', '.i-s03', function (e) {
        changeTime(1);
        timeSlider.slider("option", "value", 1);
        e.preventDefault();
    });

    $(document).on('click', '.i-s04', function (e) {
        changeStars(2);
        starSlider.slider("option", "value", 2);
        e.preventDefault();
    });
    $(document).on('click', '.i-s05', function (e) {
        changeStars(1);
        starSlider.slider("option", "value", 1);
        e.preventDefault();
    });


    var bgColorArray = ['#F79130', '#45BEF2', '#F69130', '#45BEF2', '#F79130', '#6AE8B4'];

    $(document).on('click', '.images .i', function (e) {

        $('.container-'+currentImageId).fadeOut(200);

        currentImageId = $(this).data('image-id');

        $('.container-'+$(this).data('image-id')).fadeIn(200);

        //console.log($(this).data('image-id'));

        $('.images .i').removeClass('current');
        $(this).addClass('current');

        $('.background .stop-color').attr('stop-color', bgColorArray[($(this).data('image-id')-1)]);

        e.preventDefault();

    });


    $(document).on('click', '.colors .c', function (e) {

        currentColor = '#'+$(this).data('color');

        $('.colors .c').removeClass('current');
        $(this).addClass('current');


        e.preventDefault();

    });

    $(document).on('click', '.image-container', function (e) {
        if(currentColor) {
            $(e.target).attr({fill:currentColor});
        }

        e.preventDefault();
    });

    $(document).on('click', '.save-bt', function (e) {

        if(saveActive) {
            saveActive = false;
            $('.progress-bar').animate({
                width: '100%'
            }, 1200, function () {
                $('.progress-bar').fadeOut(500, function () {
                    $('.progress-bar').css({width: '0%', opacity: 1, display: 'block'});
                    saveActive = true;
                });

            });
        }
        e.preventDefault();
    });



    $('.strs')
        .draggable()
        .bind('mousedown', function(event, ui){
            // bring target to front
            //$(event.target.parentElement).append( event.target );
        })
        .bind('drag', function(event, ui){
            // update coordinates manually, since top/left style props don't work on SVG
            //event.target.setAttribute('x', ui.position.left);
            //event.target.setAttribute('y', ui.position.top);
        });




});


function changeTime(value){
    switch (value) {
        case 1:
            $('body').addClass('black');
            $('.control-container').addClass('black');
            $('.moon').addClass('show');
            $('.sun').removeClass('show');
            break;
        case 2:
            $('.moon').removeClass('show');
            $('.sun').removeClass('show');
            break;
        case 3:
            $('body').removeClass('black');
            $('.control-container').removeClass('black');
            $('.moon').removeClass('show');
            $('.sun').addClass('show');
            break;
        default:
    }
}

function changeStars(value){
    switch (value) {
        case 1:
            $('.strs').fadeOut(600);
            break;
        case 2:
            $('.strs').fadeIn(600);
            break;
    }
}
