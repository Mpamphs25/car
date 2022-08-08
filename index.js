
const btnMenu = document.querySelector('.mobile');
const btnMobile = document.querySelector('.mobile-close');
const btnScrollTo = document.querySelector('.scroll-to');
const  findUs = document.querySelector('#findUs');
const poioiEimaste = document.getElementById('poioiEimaste');
const yphresies = document.getElementById('yphresies');
const menu = document.querySelector('.nav-ul');
const heroTextBox = document.querySelector('.hero-text-box');

const btnBackToTop = document.querySelector('.back-to-top');

const mouseScroll = document.querySelector('.mouse_scroll');

const w = document.documentElement.clientWidth;
const h = document.documentElement.clientHeight;

  window.addEventListener("load", function(){
    if(w <= 319 ){
   
         allImages0.forEach(function(el,i){
            el.classList.add('sm')
            console.log(el,i);
            switch(i){
               
                case 1: el.setAttribute('data-src', "img/kantran-mobile.jpg")
                break;
                case 2: el.setAttribute('data-src', "img/tools-mobile.jpg")
                break;
                case 3: el.setAttribute('data-src', "img/kinitiras-mobile.jpg")
                break;
            }
        })
        
        
    }
    if(w <= 575 && w >= 320){
    
         allImages0.forEach(function(el,i){
            el.classList.add('sm-2')
            switch(i){
                case 1: el.setAttribute('data-src', "img/kantran-mobile-sm.jpg")
                break;
                case 2: el.setAttribute('data-src', "img/tools-mobile-sm.jpg")
                break;
                case 3: el.setAttribute('data-src', "img/kinitiras-mobile-sm.jpg")
                break;
            }
        })

   }if(w >=576 && w <= 991){
        
    allImages0.forEach(function(el,i){
        el.classList.add('md')
        switch(i){
            case 1: el.setAttribute('data-src', "img/kantran-tablet.jpg")
            break;
            case 2: el.setAttribute('data-src', "img/tools-tablet.jpg")
            break;
            case 3: el.setAttribute('data-src', "img/kinitiras-tablet.jpg")
            break;
        }
    })
}
    if(w >= 992 ){
     allImages0.forEach(function(el,i){
        el.classList.add('xl');
        switch(i){
          case 1: el.setAttribute('data-src',"img/kantran.jpg");
              break;
          case 2: el.setAttribute('data-src',"img/tools.jpg");
              break;
          case 3: el.setAttribute('data-src',"img/kinitiras.jpg")
              break;
        }
     })
    
    }
    
  })

btnScrollTo.addEventListener('click',function(e){
    e.preventDefault();
   console.log(`button clicked`);
    const s1coords = findUs.getBoundingClientRect();
    console.log(s1coords.left,s1coords.top);
    console.log(s1coords);
   
    window.scrollTo({
        top: s1coords.top,
        left: s1coords.left,
        behavior: 'smooth'
      });
})

btnMenu.addEventListener('click',function(e){
    e.preventDefault();


    heroTextBox.classList.add('hide');
   menu.classList.remove('hide');
   menu.classList.add('animation')
   
   btnMenu.classList.add('hide');
   btnMobile.classList.remove('hide');
})

btnMobile.addEventListener('click',function(e){
    e.preventDefault();
    heroTextBox.classList.remove('hide');
    btnMobile.classList.add('hide');
    btnMenu.classList.remove('hide');
    menu.classList.add('hide');
    menu.classList.remove('animation');
 
})




btnBackToTop.addEventListener('click',function(e){
    e.preventDefault();
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    })
})

const allSections = document.querySelectorAll('.reveal');

const removeRevealFromSections = function(entries,observer){
    const [entry] = entries;
   
     if(!entry.isIntersecting) return;
    entry.target.classList.remove('reveal');
   entry.target.classList.add('active');

    observer.unobserve(entry.target);
}
const sectionObserver = new IntersectionObserver(removeRevealFromSections,{
    root:null,
    threshold:0,
  rootMargin:'80px'
})

allSections.forEach(function(obs){

    sectionObserver.observe(obs);
})
let allImages0 = document.querySelectorAll('img[src]');
const allImages = document.querySelectorAll('img[data-src]');

const removeBlurFromImages = function(entries,observer){
  
    const [entry] = entries;
     
     if(!entry.isIntersecting) return;
     


    entry.target.src=entry.target.dataset.src;
    observer.unobserve(entry.target);
}


const imagesObserver = new IntersectionObserver(removeBlurFromImages,{
    root:null,
    threshold:0,
  rootMargin:'100px'
})


allImages.forEach(function(img){
   
    imagesObserver.observe(img)
})

//MOUSE
const mouseScrollF = function(entries,observer){
    const [entry] = entries;
    if(!entry.isIntersecting) return;

  
 
    if(entry.target.classList.contains('mouseFade')){
 
        entry.target.classList.remove('mouseFade')
    }else{
        entry.target.classList.add('mouseFade')
    }
}
console.log(mouseScroll,heroTextBox.getClientRects());
const mouseScrollOb = new IntersectionObserver(mouseScrollF,{
    root:document.querySelector('#yphresies'),
    threshold:1,
    rootMargin:'-30px'
})

mouseScrollOb.observe(mouseScroll);


let map  =   L.map('map').setView([37.89533231403957, 23.75786895158011], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);



L.marker([37.89533231403957, 23.75786895158011]).addTo(map);


// mouseScroll.addEventListener('scroll',function(){
//     console.log('re');
// })

//  window.addEventListener("resize", checkSize)


// const mediaQuery = window.matchMedia("(orientation: landscape)");

// function handleOrientationChange(mq){
//     f()
//     const w = document.documentElement.clientWidth;
//     const h = document.documentElement.clientHeight;
//     console.log(`ksapla  platos: ${w} ypsos :${h} `);

    
// }

// handleOrientationChange(mediaQuery);


// mediaQuery.addEventListener('change', handleOrientationChange);