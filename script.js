const button = document.querySelector("button");

if(button)
{
    var str = "";
    for(let i=0; i<100000; i++)
    {
        str = str + "buttonbuttonbuttonbuttonbuttonbuttonbutton\n";

    }
    button.innerText = str;
}