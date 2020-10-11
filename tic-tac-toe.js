"use strict";

var main = function(){
    var count = 0;
    let boardState = ["","","","","","","","",""];
    var cube  = document.querySelectorAll(".square");
    
    for (var number = 0; number < cube.length; number++){
        cube[number].addEventListener("click", function(event){
            event.preventDefault();
            if (count % 2 == 0){
                console.log("You have pressed 'X'");
                event.target.classList.add("X");
                event.target.textContent = "X";
                boardState[event.target.id] = "X";
            } 
            else{
                console.log("You have pressed 'O'");
                event.target.classList.add("O");
                event.target.textContent = "O";
                boardState[event.target.id] = "O"
            }
            count = count + 1; 
        })

        cube[number].addEventListener("mouseover",function(event){
            event.preventDefault();
            event.target.classList.add("hover");
        })

        cube[number].addEventListener("mouseout",function(event){
            event.preventDefault();
            event.target.classList.remove("hover");
        })

}
    console.log("Finished setting up Event Handlers");

}

window.onload =  function() {
    var x  = document.querySelectorAll("#board div");
    for (var number = 0; number < x.length; number++){
        x[number].className = "square";
        x[number].id = number;
    }
    console.log("Finished Setup");
    main();
}