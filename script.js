
// HAMBURGER ON CLICK
$("#hamb").click(function () {
  if ($(".menu").hasClass("hidden")) {
    $(".menu").removeClass("hidden");
    $("#rect1").toggleClass("showRect" + " " + "nav__rect-top");
    $("#rect2").toggleClass("showRect" + " " + "nav__rect-hide");
    $("#rect3").toggleClass("showRect" + " " + "nav__rect-bottom");
    console.log('turn to x')



  } else {
    $(".menu").addClass("hidden");
    $("#rect1").toggleClass("showRect" + " " + "nav__rect-top");
    $("#rect2").toggleClass("showRect" + " " + "nav__rect-hide");
    $("#rect3").toggleClass("showRect" + " " + "nav__rect-bottom");
    console.log('turn off x')
  }
});









// CLOSE DROP MENU ON OFFCLICK in safari and mobile


// 





// const menuId = document.getElementById("myDropdown");
const menu = document.querySelector('.menu');
// const menuToggle = document.querySelector('.hamburger');
// const menuItem = document.querySelector('.nav__dropbtn--item');
const hamburger = document.querySelector("#hamb");
const hambX = document.querySelector("#hamb-x");
const hambTop = document.querySelector("#rect1");
const hambMiddle = document.querySelector("#rect2");
const hambBottom = document.querySelector("#rect3");
// const addDropper = document.querySelector(".navbar");


function isDescendant(parent, child) {
  var node = child.parentNode;
  while (node != null) {
    if (node == parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

// CLOSE DROP MENU ON OFFCLICK


document.addEventListener("click", function(event){
  console.log('event.target', event.target);    
  const nav = document.querySelector(".nav");
  var isInNav = isDescendant(nav, event.target);
  console.log('isInNav', isInNav);
  if (hambX.classList.contains('hidden') && isInNav) {
    console.log('true')      
  } else {
    console.log('false')
    hambTop.classList.remove("showRect");
    hambTop.classList.remove("nav__rect-top");
    hambMiddle.classList.remove("showRect");
    hambMiddle.classList.remove("nav__rect-hide");
    hambBottom.classList.remove("showRect");
    hambBottom.classList.remove("nav__rect-bottom");
    menu.classList.add("hidden");
  }
})    



// ---------- 


// Close dropbox on nav-offclick // change hamburger as well  (doesn't work on safari and mobile need to fix)

// $("body").click(function () {
//   target = $(".nav")[0];
//   flag = event.path.some(function (el, i, arr) {
//     return (el == target)
//   });
//   if (!flag) {
//     $("#rect1").removeClass("showRect" + " " + "nav__rect-top");
//     $("#rect2").removeClass("showRect" + " " + "nav__rect-hide");
//     $("#rect3").removeClass("showRect" + " " + "nav__rect-bottom");
//     $(".menu").addClass("hidden");
//   } else if (($(".menu").hasClass("hidden") && ($("#sports-nav").hasClass("hidden")))) {
//     $("#rect1").removeClass("showRect" + " " + "nav__rect-top");
//     $("#rect2").removeClass("showRect" + " " + "nav__rect-hide");
//     $("#rect3").removeClass("showRect" + " " + "nav__rect-bottom");
//   } else if (!($(".menu").hasClass("hidden") && !($("#sports-nav").hasClass("hidden")))) {
//     $("#rect1").addClass("showRect" + " " + "nav__rect-top");
//     $("#rect2").addClass("showRect" + " " + "nav__rect-hide");
//     $("#rect3").addClass("showRect" + " " + "nav__rect-bottom");
//   }
// });

// $(".nav__item--sports").click(function () {
//   $(".menu").removeClass("hidden");
// });

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


// close mlb on hamb click
$("#hamb").click(function () {
  $("#mlb-nav").addClass("hidden");
});

// move back from mlb on arrow click
$(".mlb-nav__arrow-back-wrap").click(function () {
  $("#mlb-nav").addClass("hidden");
});


// SLIDER

$('.slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 735,
      settings: {
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
$(".current-year").text((new Date).getFullYear());


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


const $gallery = $(".type");
$inputs = $gallery.find("input");
$(function () {
  // $inputs.attr("checked", "checked");
  $inputs.on("change", function () {
    $inputs.each(function (i, cb) {
      if (!cb.checked) $(".hats__wrap").find("." + this.value).addClass('hidden');
    });
    $inputs.each(function (i, cb) {
      if (cb.checked) $(".hats__wrap").find("." + this.value).removeClass('hidden');
    });

    let checkboxChecked = $('input[type=checkbox]:checked').length;
    if (!checkboxChecked) {
      $(".all").removeClass('hidden');
    };

  });

});


$(".show-all-btn").click(function () {
  $('input[type=checkbox]').prop('checked', false);
  $(".all").removeClass('hidden');
});


// carrot

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


// INDIVIDUAL HAT PAGE 

// HAT IMAGE GALLERY


// onClick change hat image

var imageUrl1 = "./images/product/hat1-new.jpg";
var imageUrl2 = "./images/product/hat3.png";
var imageUrl4 = "./images/product/hat2.png";
var imageUrl3 = "./images/product/hat4-new.png";

$(".hat__image-link--1").click(function () {
  $(".hat__product-main").css("background-image", "url(" + imageUrl1 + ")");
});

$(".hat__image-link--2").click(function () {
  $(".hat__product-main").css("background-image", "url(" + imageUrl2 + ")");
});

$(".hat__image-link--3").click(function () {
  $(".hat__product-main").css("background-image", "url(" + imageUrl3 + ")");
});

$(".hat__image-link--4").click(function () {
  $(".hat__product-main").css("background-image", "url(" + imageUrl1 + ")");
});

$(".hat__image-link--5").click(function () {
  $(".hat__product-main").css("background-image", "url(" + imageUrl2 + ")");
});

$(".hat__image-link--6").click(function () {
  $(".hat__product-main").css("background-image", "url(" + imageUrl3 + ")");
});



// hat opacity
$('.hat__image-link').click(function () {
  $(this).addClass('opacity').siblings().removeClass('opacity');
});




// opacity on size LI 
$('.selector-lg__size').click(function () {
  $(this).addClass('red').siblings().removeClass('red');
});


// LISTENER TO MAKE NON-FUNCTIONAL LINKS DO NOTHING ON CLICK
$(".do-nothing").click(function (e) {
  e.preventDefault();
});


// Scroll to top button
$('.to-top__link a').click(function () {
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 10);
    }
  };
  scrollToTop();
});
