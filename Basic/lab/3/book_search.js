/**
 * Created by gautham on 9/12/16.
 */
function getImages()
{
    var img = new Image();
    img.src = 'images/img1.jpg';
    $('#div_content').append(img);
}

function loadForm()
{
    $.get('content_loader.php', function (res)
    {
        $('#div_title').append(res);
        getImages();
    });
}

function loadBook()
{
    $.get('book_search.php?isbn=' + $('#input_isbn').val(), function (res)
    {
        var content = $('#div_content');
        content.html('');

        if (res !== 'null')
        {
            var book = JSON.parse(res);
            content.append('<h2><br/><br/><strong>' + book.title + '</strong></h2>');
            content.append('<p class="lead">' + book.content + '</p>');
        }
        else
            content.append('<h2><br/><br/><strong>ISBN ' + $('#input_isbn').val() + ' not found.</strong></h2>');
    });
}