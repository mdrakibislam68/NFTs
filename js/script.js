


jQuery(document).ready(function($){
  // nav bar active
// var header = document.getElementById("navbar-nav");
// var btns = header.getElementsByClassName("nav-item");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active3");
//   current[0].className = current[0].className.replace(" active3", "");
//   this.className += " active3";
//   });
// }
// nav
// if($('#navbar').length) {
//   $('.nav-item').on('click', function() {
//     $('.nav-item').removeClass('active');
//     $(this).addClass('active');
//   })
// }

$('.nav-item').click(function(){
  $('.nav-item').removeClass("active");
  $(this).addClass("active");
});

// nav End


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        // nav:true,
        dot: true,
        responsive:{
            0:{
                items:2
            },
            500:{
              items:2
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1200:{
              items:4
            }
        }
    })



    const icon = document.querySelector('.src-icon');
    const search = document.querySelector('.search');
    
    icon.onclick = function(){
        search.classList.toggle('active')
    }

    
    
    // scroll
    // var myNav = document.getElementById("navbar");
    
    // window.onscroll = function () {
    //     "use strict";
    //     if (document.body.scrollTop >= 280) {
    //         myNav.classList.add("scroll");
    //     } else {
    //         myNav.classList.remove("scroll");
    //     }
    // };
    
    
    // About slider
    
          var swiper = new Swiper(".mySwiper", {
            direction: "horizontal",
            pagination: {
              el: ".swiper-pagination",
              clickable: false
            }
          });
    
    
          // Button active
          // function myFunction() {
          //   document.getElementById("demo").addClass = "Hello World";
          // }


    // Explore Sidebar
    if($('#nav-menu').length) {
    $('.nav-link').on('click', function() {
      $('.nav-link').removeClass('active3');
      $(this).addClass('active3');
    })
}
    // Explore Sidebar End

          $('.grid').isotope({
            itemSelector: '.grid-item',
          });
          
          // filter items on button click
          $('.filter-button-group').on( 'click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $('.grid').isotope({ filter: filterValue });
            $('.filter-button-group li').addClass('active');
            $(this).addClass('active');
          });


          // var btn = document.getElementById("btn");
// btn.classList.add("active");
// // btn.classList.remove("active");
// }




if($('#myDIV').length) {
  $('.btn').on('click', function() {
    $('.btn').removeClass('active');
    $(this).addClass('active');
  })
}



// var btns = header.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active2");
//   current[0].className = current[0].className.replace(" active2", "");
//   this.className += " active2";
//   });
// }


// navbar

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.background = "#fff";
//   } else {
//     document.getElementById("navbar").style.background= "#fff";
//   }
//   prevScrollpos = currentScrollPos;
// }


var swiper = new Swiper(".exp-Swiper", {
  spaceBetween: 20,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true
});
var swiper2 = new Swiper(".exp-Swiper2", {
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  thumbs: {
    swiper: swiper
  }
});


// latest Page
if($('#unorder').length) {
  $('.list-item').on('click', function() {
    $('.list-item').removeClass('active');
    $(this).addClass('active');
  })
}



})
// Jquery End

// Table
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



// Modal

// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })


// Upload-page


$('.submite-preview-btn').click(function(){
  $('.submite-preview-btn').removeClass("active");
  $(this).addClass("active");
});





