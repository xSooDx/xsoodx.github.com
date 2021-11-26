
let foo = function(){
    setTimeout(() => {
        $("#loading").fadeOut(500);
    }, 1000)
}


window.onload = foo;
