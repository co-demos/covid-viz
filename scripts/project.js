// DEPRECATED!
// Carousels are now initiated through a dedicated function in co-demos/ApiViz/app/frontend/scripts/utils.js

function loadScript(url, callback){
    console.log("try to load script");
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;

    script.onreadystatechange = callback;
    script.onload = callback;

    document.head.appendChild(script);
}

var activateCarousel = function(){
    //console.log("callback?");
    var carousels=bulmaCarousel.attach('.carousel', {
        slidesToShow: 2,
        infinite: true,
        pagination: false
    });
    
    // "hacky" way to get custom icons
    document.getElementsByClassName("slider-navigation-previous")[0].childNodes[0].remove();
    document.getElementsByClassName("slider-navigation-next")[0].childNodes[0].remove();
};

loadScript("https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.4/dist/js/bulma-carousel.min.js", activateCarousel);

//console.log("loaded!");

