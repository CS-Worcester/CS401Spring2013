$(document).ready(function(){
    var timeout;
    $(document).on("mousemove keydown click", function() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
             window.location = "./screensaver/screensaver.html";
        },  1 * 60 * 1000);
    }).click();
});