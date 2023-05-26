function isEven (n)
{
    n = Math.abs(n);
    if (n == 0) return true;
    else if (n == 1) return false;
    else 
    {
        n = n - 2;
        return isEven(n);
    }
}

document.write ("<h4>Завдання 2</h4>");
document.write("50 is " + String(isEven(50)) + "</br>");
document.write("75 is " + String(isEven(75)) + "</br>");
document.write("-1 is " + String(isEven(-1)) + "</br>");
