
document.addEventListener("DOMContentLoaded", function(){

    var parent = document.querySelector(".intellect-choose"),
        numberOfelmnt  = document.querySelectorAll(".intellect-choose__item").length,
        elmnt = document.querySelectorAll(".intellect-choose__item"),
        activeClass = 'active';

        if(parent !== null) {
            var repeat = (numberOfIterations, timeBetweenItereation, stuffToRepeat) => {
                var iterationCounter = 0;
                var repeater = () => {
                    setTimeout( () => {
                        stuffToRepeat(elmnt[iterationCounter], activeClass);
                        iterationCounter++;
                        if (numberOfIterations === iterationCounter) {
                            iterationCounter = 0;
                        };
                        if (iterationCounter >= numberOfIterations) {
                            return;
                        };
                        repeater();
                    }, 1000 * timeBetweenItereation);
                };
                repeater();
            };

            var addClassToElmnt = (elmnt, className) => {
                var elmntWithClassToRemove = document.getElementsByClassName(className);

                [...elmntWithClassToRemove].forEach((curentElmnt)=>{
                    curentElmnt.classList.remove(className);
                });

                elmnt.classList.add(className);
            };

            repeat(numberOfelmnt, 2, addClassToElmnt);
        }

});








