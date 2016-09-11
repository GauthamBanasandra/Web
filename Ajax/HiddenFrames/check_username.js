/**
 * Created by gautham on 11/9/16.
 */
var hiddenIFrame, usernameInput;

function init()
{
    hiddenIFrame=document.getElementById('hidden_frame');
    usernameInput=document.getElementById('username_input');
}

function checkUsername()
{
    hiddenIFrame.src='check_user.php?name='+usernameInput.value;
}

function displayResult(result)
{
    alert('Sorry. '+usernameInput.value+' isn\'t available.');
}