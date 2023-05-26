function color()
{
    this.style.backgroundColor = 'green';
}

var enter = document.getElementById("enter");
enter.addEventListener('mouseenter', color);

var out = document.getElementById("out");
out.addEventListener('mouseout', color);

var over = document.getElementById("over");
over.addEventListener('mouseover', color);

var down = document.getElementById("down");
down.addEventListener('mousedown', color);

var up = document.getElementById("up");
up.addEventListener('mouseup', color);

var click = document.getElementById("click");
click.addEventListener('click', color);