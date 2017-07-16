/**
 * Created by gautham on 8/12/16.
 */
var iframeAjax;

function getStudentDetails()
{
    iframeAjax.src = 'student_details.php?usn=' + $('#input_usn').val();
}

function updateStudentDetails(res)
{
    if (res !== 'null')
    {
        var arr = res.split(';');
        $('#input_usn').val(arr[0]);
        $('#input_name').val(arr[1]);
        $('#select_dept').val(arr[2]);
        $('#input_gpa').val(arr[3]);
        $('#p_not_found').fadeOut();
    }
    else
        $('#p_not_found').fadeIn();
}

window.onload = function ()
{
    $('#p_not_found').hide();
    iframeAjax = document.getElementById('iframe_ajax');
};