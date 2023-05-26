function CutStr (str)
{
    if (str.length > 20)
    {
        str = str.slice(0 , 17) + "...";
    } 
    
    return str;
}

var str1 = "Lorem, ipsum dolor."
var str2 = "Lorem ipsum dolor sit."

document.write ("<h4>Завдання 5</h4>");
document.write(CutStr(str1) + "</br>");
document.write(CutStr(str2) + "</br>");