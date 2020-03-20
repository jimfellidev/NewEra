

  // HAMBURGER ON CLICK
$("#hamb").click(function () {
    if ($("#dropdown").hasClass("hidden")) {
      $("#dropdown").removeClass("hidden");
      $("#rect1").toggleClass("showRect"+" "+"nav__rect-top");
      $("#rect2").toggleClass("showRect"+" "+"nav__rect-hide");
      $("#rect3").toggleClass("showRect"+" "+"nav__rect-bottom");
      
      

    } else {
      $(".dropdown").addClass("hidden");
      $("#rect1").toggleClass("showRect"+" "+"nav__rect-top");
      $("#rect2").toggleClass("showRect"+" "+"nav__rect-hide");
      $("#rect3").toggleClass("showRect"+" "+"nav__rect-bottom");
    }
  });


// OPEN SPORTS NAV
$(".dropdown__link--sports").click(function () {
      $("#sports-nav").removeClass("hidden");
  });

  $(".nav__item--sports").click(function () {
    $("#sports-nav").removeClass("hidden");
});

  $("#hamb").click(function () {
    $("#sports-nav").addClass("hidden");
  });


  $(".sports-nav__arrow-back-wrap").click(function () {
    $("#sports-nav").addClass("hidden");
  });

  $(".sports-nav__arrow-back-wrap").click(function () {
    $("#mlb-nav").addClass("hidden");
  });


//   OPEN/CLOSE MLB LINKS

$(".sports-nav__link--mlb").click(function () {
    // on click add mlb sm-mq

    $("#mlb-nav").removeClass("hidden"); 

    // on click add mlb lg-mq

    $(".mlb-nav__ul").removeClass("hidden");
});

// close mlb link if click other sport
$(".sports-nav__link--nolink").click(function () {
    $("#mlb-nav").addClass("hidden"); 
    $(".mlb-nav__ul").addClass("hidden");
});

// close mlb on hamb click
$("#hamb").click(function () {
  $("#mlb-nav").addClass("hidden");
});

// move back from mlb on arrow click
$(".mlb-nav__arrow-back-wrap").click(function () {
  $("#mlb-nav").addClass("hidden");
});

// $(".mlb-nav__arrow-back-wrap").click(function () {
//   $("#mlb-nav").addClass("hidden");
// });



// close nav on offclick
const $menu = $('#sports-nav');

$(document).mouseup(e => {
   if (!$menu.is(e.target) // if the target of the click isn't the container...
   && $menu.has(e.target).length === 0) // ... nor a descendant of the container
   {
     $menu.addClass('hidden');
     $(".mlb-nav__ul").addClass("hidden");
  }
 });

  




// scroll through active nav

// const selector = '.sports-nav__ul li';

// $(selector).on('click', function(){
//     $(selector).removeClass('active-nav');
//     $(this).addClass('active-nav');
// });

// $(document).on("click",".sports-nav__ul li",function(){
//   if (!$(this).hasClass("active-nav")) {
//     $("li.active-nav").removeClass("active-nav");
//     $(this).addClass("active-nav");
//   }
// });

// $(selector).click(function () {
//   if ($(selector).hasClass("active-nav")) {
//     $(".mlb-nav__ul").removeClass("hidden");
//     $("#mlb-nav").removeClass("hidden"); 
    
//   } else {
//     $(".mlb-nav__ul").addClass("hidden");
//     $("#mlb-nav").addClass("hidden"); 
//   }
// });





 $('.slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    // focusOnSelect: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows: true,
    centerMode: true,
        // centerPadding: '60px',
    responsive: [
    {
        breakpoint: 1200,
        settings: {
            arrows: true,
            centerMode: true,
            // centerPadding: '40px',
            slidesToShow: 3,
        }
    },
    {
    breakpoint: 735,
    settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
    }
    },
    {
    breakpoint: 480,
    settings: {
        arrows: true,
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 1,
    }
    }
]
  });







// copyright add current year
  $(".current-year").text( (new Date).getFullYear() );




// Open hat filter menu
$(".hats__button").click(function () {
  if ($(".hats__menu-wrap").hasClass("hidden")) {
    $(".hats__menu-wrap").removeClass("hidden");
  }
});
 

$(".filter__close").click(function () {
  $(".hats__menu-wrap").addClass("hidden");
});


// ADD OFFCLICKS TO CLOSE FILTER THINGY
// FIX HAT FILTER




// hat filter
filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

// Show filtered elements
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)

// var btnContainer = document.getElementById("hats__button-wrap");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }



$(".type-onclick").click(function () {
    if ($(".carrot__up--type").hasClass("hidden")) {
        $(".carrot__up--type").removeClass("hidden");
        $(".carrot__down--type").addClass("hidden"); 
        $(".type").removeClass("hidden"); 
        
      }
       else if ($(".carrot__down--type").hasClass("hidden")) {
        $(".carrot__up--type").addClass("hidden");
        $(".carrot__down--type").removeClass("hidden");
        $(".type").addClass("hidden"); 
      }
});


$(".gender-onclick").click(function () {
  if ($(".carrot__up--gender").hasClass("hidden")) {
      $(".carrot__up--gender").removeClass("hidden");
      $(".carrot__down--gender").addClass("hidden"); 
      $(".gender").removeClass("hidden"); 
      
    }
     else if ($(".carrot__down--gender").hasClass("hidden")) {
      $(".carrot__up--gender").addClass("hidden");
      $(".carrot__down--gender").removeClass("hidden");
      $(".gender").addClass("hidden"); 
    }
});

$(".size-onclick").click(function () {
  if ($(".carrot__up--size").hasClass("hidden")) {
      $(".carrot__up--size").removeClass("hidden");
      $(".carrot__down--size").addClass("hidden"); 
      $(".size").removeClass("hidden"); 
      
    }
     else if ($(".carrot__down--size").hasClass("hidden")) {
      $(".carrot__up--size").addClass("hidden");
      $(".carrot__down--size").removeClass("hidden");
      $(".size").addClass("hidden"); 
    }
});


// Carrot up/down 
// $(".type-selector__title").click(function () {
//   if ($("#carrot__up--type").hasClass("hidden")) {
//     $("#carrot__up--type").removeClass("hidden");
    // $(".carrot__up--type").toggleClass("hidden");
    
//   }
//    else {
//     $("#carrot__down--type").addClass("hidden");
//   }
// });







// INDIVIDUAL HAT PAGE 

// HAT IMAGE GALLERY


// onClick change hat image

// $(".hat__image-link--1").click(function () {
//     var imageUrl1 = "../images/product/hat1.png"; 
//     $(".hat__product-main").css("background-image", "url(" + imageUrl1 + ")"); 
// });

// $(".hat__image-link--2").click(function () {
//   var imageUrl2 = "../images/product/hat2.png"; 
//   $(".hat__product-main").css("background-image", "url(" + imageUrl2 + ")"); 
// });
 

// $(".dropdown__link--sports").click(function () {
//   $("#sports-nav").removeClass("hidden");
// });



  // $(".hat__image-link--2").click(function() { 
  //     var imageUrl = "../images/product/hat3.png"; 
  //     $(".hat__product-main").css("background-image", "url(" + imageUrl + ")"); 
  // }); 

  var imageUrl1 = "./images/product/hat1-new.jpg"; 
  var imageUrl2 = "./images/product/hat3.png"; 
  var imageUrl4 = "./images/product/hat2.png"; 
  var imageUrl3 = "./images/product/hat4-new.png"; 

$(".hat__image-link--1").click(function () {
  $(".hat__product-main").css("background-image", "url(" + imageUrl1 + ")");
  // $(".hat__product-main").css("background-size", "cover");
});

$(".hat__image-link--2").click(function () {
  $(".hat__product-main").css("background-image", "url(" + imageUrl2 + ")");
  // $(".hat__product-main").css("background-size", "contain");
});

$(".hat__image-link--3").click(function () {
  $(".hat__product-main").css("background-image", "url(" + imageUrl3 + ")");
  // $(".hat__product-main").css("background-size", "contain");
});
$(".hat__image-link--4").click(function () {
  $(".hat__product-main").css("background-image", "url(" + imageUrl1 + ")");
  // $(".hat__product-main").css("transform:", "scaleX(-1)");
  // $(".hat__product-main").css("background-size", "cover");

});
$(".hat__image-link--5").click(function () {
  $(".hat__product-main").css("background-image", "url(" + imageUrl2 + ")");
  // $(".hat__product-main").css("background-size", "contain");
});
$(".hat__image-link--6").click(function () {
  $(".hat__product-main").css("background-image", "url(" + imageUrl3 + ")");
  // $(".hat__product-main").css("background-size", "contain");
});




// testing alternate ways to scroll through hats

// $('.hat__image-link--1').click(function() {
//     $(".hat__product-main").addClass('.hat__image-link--1');
// });


// hat opacity
$('.hat__image-link').click(function() {
  $(this).addClass('opacity').siblings().removeClass('opacity');
});




// opacity on size LI 

$('.selector-lg__size').click(function() {
  $(this).addClass('opacity').siblings().removeClass('opacity');
});

