/**
 * Created by root on 9/12/16.
 */
function init()
{
    $.get('chat_server.php?cmd=get-id', function (res)
    {
        localStorage['id'] = res;
    });

    $('#input_send').bind('click', function (event)
    {
       postMessage();
    });
    $('#input_msg').keypress(function (event)
    {
        console.log('enter key pressed');
        if (event.which == 13)
            postMessage();
    });

    streamMessages();
}

function postMessage()
{
    console.log('pushing data');
    $.get('push_data.php?id=' + localStorage['id'] + "&msg=" + $('#input_msg').val(), function (res)
    {
        alert(res);
    });
}

function streamMessages()
{
    var conn=new EventSource('chat_stream.php');
    conn.onmessage=function (event)
    {
        console.log(event.data);
    };
    conn.onerror=function ()
    {
        alert('Connection lost');
    }
}