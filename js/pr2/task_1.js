var n, p = 1;

n = prompt('Введіть висоту трикутника');
n = parseInt(n);

for (var i = 0; i <= n; i++)
{
    for (var i = 0; i < p; i++)
    {
        document.write("#")
    }
    document.write("<br/>")
    p++;
}