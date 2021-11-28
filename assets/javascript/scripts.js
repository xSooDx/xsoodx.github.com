
let hideLoadingSpinner = function(){
    setTimeout(() => {
        $("#loading").fadeOut(500);
    }, 100)
}


window.onload = hideLoadingSpinner;
