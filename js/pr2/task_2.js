var k;
p = 1

n = prompt('Введіть висоту трикутника');
n = parseInt(n);

for (var i = 1; i < n + 1; i++)
{
    k = i;

    for (var i = 0; i < n - k; i++)
    {
        document.write("&nbsp;" + "&nbsp;");
    }

    for (var i = 0; i < p; i++)
    {
        document.write("#");
    }

    document.write("&nbsp;" + "&nbsp;");

    for (var i = 0; i < p; i++)
    {
        document.write("#");
    }
    
    document.write("<br/>");
    p++;
}