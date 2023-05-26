function fib (n)
{
    var f1 = 1, f2 = 1;
    var f = true;

    for (var i = 2; i < n; i++)
    {
        if (f) 
        {
            f1 += f2;
            f = false;
        }
        else 
        {
            f2 += f1;
            f = true;
        }
        
    }

    if (f) return f2;
    else return f1;
}

document.write ("<h4>Завдання 4</h4>");
document.write (fib(3) + "</br>");
document.write (fib(7) + "</br>");
document.write (fib(77) + "</br>");