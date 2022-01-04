
let hideLoadingSpinner = () => {
    setTimeout(() => {
        $("#loading").fadeOut(500);
    }, 100)
}
let autoScrollTimeout = null;
let onLandignVideoLoaded = () => {
    $("#video-loader").fadeOut(200);
    autoScrollTimeout = setTimeout(() => {
        $('html, body').animate({scrollTop: '+=250px'}, 1000);
    }, 1500);
}

let onScroll = () => {
    if(autoScrollTimeout) {
        clearTimeout(autoScrollTimeout);
        autoScrollTimeout = null;
    }
}

window.onload = hideLoadingSpinner;
window.onscroll = onScroll
