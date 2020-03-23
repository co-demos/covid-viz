
console.log("--- le-projet.js / carousel ...")

if ( !window.options_car_projet ){

  // let carouselDiv_proj = document.querySelector('#carousel-home')
  // console.log("--- carouselDiv_proj : ", carouselDiv_proj)

  // console.log("--- le-projet.js / bulmaCarousel : ", bulmaCarousel)

  const options_car_projet = {
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    pagination: false,
  }
  console.log("--- le-projet.js / options_car_projet : ", options_car_projet)

  // let carouselHome = bulmaCarousel.attach('#carousel-project', options_car_projet)
  bulmaCarousel.attach('#carousel-project', options_car_projet)
  
}

