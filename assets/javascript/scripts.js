
let foo = function(){
    setTimeout(() => {
        $("#loading").fadeOut(500);
    }, 100)
}


window.onload = foo;
