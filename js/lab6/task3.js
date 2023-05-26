function out (str)
{
    var panel = document.getElementById("panel");
    str = panel.textContent + str;
    panel.textContent = str;
}

function remove ()
{
    var panel = document.getElementById("panel");
    panel.textContent = "";
}

function inFocus (str)
{
    var focus = document.getElementById("focus")
    focus.innerHTML = "In focus: " + str;
}

function _list ()
{
    var parent = document.getElementsByTagName("body");
    var p = document.createElement('p');
    p.innerHTML = panel.textContent;
    parent[0].appendChild(p);
    remove();
}