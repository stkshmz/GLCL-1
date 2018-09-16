var fn = function (){

    var minus = document.getElementsByClassName('minus');
    var plus = document.getElementsByClassName('plus');

    for (var i = 0; i < minus.length; i++) {
        var e = document.createElement('p');
        e.innerHTML = '-';
        minus[i].appendChild(e);
    }

    for (var i = 0; i < plus.length; i++) {
        var e = document.createElement('p');
        e.innerHTML = '+';
        plus[i].appendChild(e);
	};
};

document.addEventListener('DOMContentLoaded', fn, false);