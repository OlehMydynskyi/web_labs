function countA (str)
{
    var count = 0;

    for (var i = 0; i < str.length; i++)
    {
        if (str.charAt(i) == 'A') count++;
    }
    return count;
}

function countChar (str, a)
{
    var count = 0;

    for (var i = 0; i < str.length; i++)
    {
        if (str.charAt(i) == a) count++;
    }
    return count;
}

var str = "AadFAaA";
document.write ("<h4>Завдання 3</h4>");
document.write(countA(str) + "</br>");
document.write(countChar(str , 'a') + "</br>");