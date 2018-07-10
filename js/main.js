
document.addEventListener("DOMContentLoaded", function(){

    var itemsArray = [],
        items  = document.querySelectorAll(".intellect-choose__item"),
        item = document.querySelector(".intellect-choose__item");
    var i;

        // for(i=0;items.length < 3; i++ ) {
        //     console.log(items[i]);
        // }


    // function start() {
    //     items.forEach(function (item, i, items) {
    //
    //         item.classList.add('active');
    //
    //             if ( i !== 0 ) {
    //                 item.previousSibling.className = "";
    //             }
    //
    //             else if( i === 3 ) {
    //                 i = 0;
    //                 item.previousSibling.className = "";
    //             }
    //
    //         console.log(item);
    //     });
    // }

    function start() {

        for ( var i = 0; i < items.length; i++ ) {

            if ( i === 0 ) {
                items[i].classList.add('active');

            }

            else if ( i !== 0 ) {
                items[i-1].classList.remove('active');
                items[i].classList.add('active');
            }

            else if( i === 3 ) {
                i = 0;
                items[i-1].classList.remove('active');
                items[i].classList.add('active');
            }

            console.log(items[i]);

        }
    }

    // start();
    setInterval( start, 1000);

});








