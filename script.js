var div;
var display = 0;
var navico;
var navico2;
var nav;

window.addEventListener('load', function() {
    var navHeight = document.getElementById('nav').offsetHeight;
    document.documentElement.style.setProperty('--nav-height', navHeight + 'px');
});

window.addEventListener('resize', function() {
    var navHeight = document.getElementById('nav').offsetHeight;
    document.documentElement.style.setProperty('--nav-height', navHeight + 'px');
});

document.addEventListener("DOMContentLoaded", function () {
    div = document.getElementById('sidebar');
    navico = document.getElementById('navico');
    navico2 = document.getElementById('navico2');
});

function hideshow() {
    if (display == 0) {
        var body = document.body;
        
        body.style.overflow = "hidden";
        div.style.display = 'flex';
        navico.style.display = 'none';
        navico2.style.display = 'block';

        display = 1;
    } else {
        var body = document.body;

        body.style.overflow = "visible";
        div.style.display = 'none';
        navico.style.display = 'block';
        navico2.style.display = 'none';

        display = 0;
    }
}