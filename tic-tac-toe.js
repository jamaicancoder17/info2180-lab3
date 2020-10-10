"use strict";
window.onload =  function() {
    var x  = document.querySelectorAll("#board div");
    for (var number = 0; number < x.length; number++){
        x[number].className = "square";
    }
}
