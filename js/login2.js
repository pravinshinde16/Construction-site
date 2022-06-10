function validate()
{
    var username=document.getElementById("userid").value;
    var password=document.getElementById("pswrd").value;
    if(username=="" && password=="")
    {
        window.open('css/admin.html');
        return false;
    }
    else
    {
        alert("Invalid User")
    }

}
