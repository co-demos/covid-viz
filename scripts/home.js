console.log("--- home.js / counter ...")

if ( !window.projectCountP ){
  const projectCountP = fetch('https://solidata-api.co-demos.com/api/dsi/infos/get_one/5c7f0438328ed72e431f338e')
    .then(r => r.json())
    .then(r => r.data.data_raw.f_data_count);
  
  const DELAY = 5000;
  const counter = document.querySelector('.counter')
  console.log("--- counter : ", counter)
  
  projectCountP.then(projectCount => {
    const start = performance.now();
  
    (function step(){
      requestAnimationFrame(now => {
        const elapsed = now - start;
        let fraction = elapsed/DELAY;
        if(fraction >=1)
          fraction = 1;
        // ease out expo to stabilize the significative numbers quickly
        const toDisplay = projectCount * (1- (fraction === 1 ? 0 : Math.pow(2, -10*fraction)));
  
        counter.textContent = Math.round(Math.max(0, toDisplay));
  
        if(fraction <1){
          step();
        }
      })
    })();
  })
}


console.log("--- home.js / carousel ...")

if ( !window.options_car_home ){

  // const carouselDiv_home = document.querySelector('#carousel-home')
  // console.log("--- carouselDiv_home : ", carouselDiv_home)
  
  // console.log("--- home.js / bulmaCarousel : ", bulmaCarousel)

  const options_car_home = {
    slidesToScroll: 1,
    slidesToShow: 2,
    infinite: true,
    pagination: false,
  }
  console.log("--- home.js / options_car_home : ", options_car_home)
  
  // let carouselHome = bulmaCarousel.attach('#carousel-home', options_car_home)
  bulmaCarousel.attach('#carousel-home', options_car_home)
}

