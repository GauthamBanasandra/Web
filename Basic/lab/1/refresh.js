/**
 * Created by gautham on 8/12/16.
 */
var period = 2000;
var refresh = setTimeout(updateCounts, period);

function updateCounts()
{
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'sports_home.php', true);
    xhr.timeout = 3000;

    xhr.ontimeout = function ()
    {
        clearTimeout(refresh);
        period *= 2;
        refresh = setTimeout(updateCounts, period);
    };

    xhr.onreadystatechange = function (res)
    {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            var jsonRes = JSON.parse(res.currentTarget.responseText);

            $('#rado_count').html(jsonRes['rado']);
            $('#rolex_count').html(jsonRes['rolex']);
            $('#yonex_count').html(jsonRes['yonex']);
            $('#wilson_count').html(jsonRes['wilson']);

            period = 2000;
        }
    };

    xhr.send(null);

    // debug.
    console.log('period', period);
    refresh = setTimeout(updateCounts, period);
}