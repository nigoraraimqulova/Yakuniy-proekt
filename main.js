

$(function(){


$("title").click(function(){
  let but = document.getElementsByClassName("title");
  let text = document.getElementsByClassName("desc");

  for(let i=0; i<but.length; i++){
      but[i].onclick = function(){
        for(let a=0; a<but.length; a++){
          if(a==i){

          }else{
            text[i].classList.remove("show")
          }
        }
        text[i].classList.add("show")
      }
  }

})


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },    
  
  });
  // });

  



  $('.title').click(function () {
    $(this).addClass('active')
    $(this).siblings('.title').removeClass('active')
    $(this).siblings('.desc').stop().slideUp()
    $(this).next().stop().slideDown()
  })




  var slider = new Swiper(".mySlider", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    freeMode: true,
    navigation: {
      nextEl: ".nx",
      prevEl: ".pr",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    }, 
  });



  
  let value = document.querySelectorAll(".number");
  let interval = 18000

value.forEach((value) => {

    let startValue = 0;
    let endValue = value.getAttribute("data-val");
    let duration = interval/endValue;

    let result = setInterval(function(){
        startValue += 1
        value.textContent = startValue

        if(startValue == endValue){
            clearInterval(result)
        }
    }, duration)
})


let btn = document.querySelector(".home-header");

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset>700){
        btn.classList.add("white")
        $(".home-menu li a").css("color","black");
        $(".home-header-logo a").css("color","black");

    }else{
        btn.classList.remove("white")
        $(".home-menu li a").css("color","white");
        $(".home-header-logo a").css("color","white");

    }
  })
  

})