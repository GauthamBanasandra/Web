/**
 * Created by gautham on 9/12/16.
 */
function getNews()
{
    $.get('get_news.php', function (res)
    {
        var parser = new DOMParser();
        var doc = parser.parseFromString(res, 'application/xml').documentElement;

        var newsLinks = getNewsLinks(doc);

        insertNews(newsLinks);
    });
}

function getNewsLinks(xmlDoc)
{
    var newsLinks = {};
    var items = xmlDoc.getElementsByTagName('item');
    for (var i = 0; i < items.length; ++i)
    {
        var title = items[i].getElementsByTagName('title')[0];
        var link = items[i].getElementsByTagName('link')[0];
        newsLinks[link.innerHTML] = title.innerHTML;
    }

    return newsLinks;
}

function insertNews(newsLinks)
{
    var keys = Object.keys(newsLinks);
    for (var i = 0; i < keys.length; ++i)
        $('#news_scroll').append('<a class="btn btn-info" href="' + keys[i] + '">' + newsLinks[keys[i]] + '</a>&nbsp;&nbsp;');
}

getNews();