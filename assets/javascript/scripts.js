
let hideLoadingSpinner = () => {
    setTimeout(() => {
        $("#loading").fadeOut(500);
    }, 100)
}

let onLandignVideoLoaded = () => {
    $("#video-loader").fadeOut(200);
    setTimeout(() => {
        $('html, body').animate({scrollTop: '+=150px'}, 1000);
    }, 1500);
}

window.onload = hideLoadingSpinner;
