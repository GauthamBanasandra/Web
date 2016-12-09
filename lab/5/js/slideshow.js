/**
 * Created by gautham on 9/12/16.
 */
var maxImageIdx = 6;
var minImageIdx = 0;
/*

 function getImages()
 {
 var images = [];
 for (var i = 0; i <= maxImageIdx; ++i)
 {
 images[i] = new Image();
 images[i].src = 'images/prince' + (i + 1) + '.jpg';
 }

 return images;
 }
 */

function main()
{
    var i = 1;

    $('#input_next').bind('click', function (e)
    {
        if (i == maxImageIdx)
        {
            $('#input_next').fadeOut();
            return;
        }

        ++i;
        displayImage(i);
        $('#input_prev').fadeIn();
    });

    $('#input_prev').bind('click', function (e)
    {
        if (i == minImageIdx)
        {
            $('#input_prev').fadeOut();
            return;
        }

        --i;
        displayImage(i);
        $('#input_next').fadeIn();
    });

    $('#input_prev').hide();
    displayImage(i);
}

function displayImage(i)
{
    if (i >= minImageIdx && i <= maxImageIdx)
    {
        var image = $('#image');
        image.css({width: '0px', height: '0px'}).fadeOut();
        image.attr({src: 'images/prince' + i + '.jpg', width: '0px', height: '0px'}).animate({
            width: '900px',
            height: '600px'
        }, 2000).fadeIn();
    }
}