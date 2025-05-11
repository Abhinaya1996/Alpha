/**  
  Template Name: Soten - Creative Digital Business HTML5 Template
  Author: Themes Studio
  Support: themesstudiox@gmail.com
  Description: Soten - Creative Digital Business HTML5 Template
  Version: 1.0.0
  File Description: Main JS file of the template
*/

(function ($) {
  ("use strict");

  var windowOn = $(window);

  windowOn.on("load", function () {
    wowAnimation();
  });

  /*=============================================
	=    		Preloader			      =
=============================================*/
  function preloader() {
    $("#preloader").delay(0).fadeOut();
  }

  windowOn.on("load", function () {
    preloader();
  });

  /*=============================================
	=    		Language Select Customize			 =
=============================================*/
  var x, i, j, l, ll, selElmnt, a, b, c;
  /*look for any elements with the class "custom-select":*/
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }
  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
  except the current select box:*/
    var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
then close all select boxes:*/
  document.addEventListener("click", closeAllSelect);

  /*=============================================
	=        Mouse Active          =
=============================================*/
  $(".slider-drag").on("mouseenter", function () {
    $(".mouseCursor").addClass("cursor-big");
  });
  $(".slider-drag").on("mouseleave", function () {
    $(".mouseCursor").removeClass("cursor-big");
  });

  $("a,.sub-menu,button").on("mouseenter", function () {
    $(".mouseCursor").addClass("opacity-0");
  });
  $("a,.sub-menu,button").on("mouseleave", function () {
    $(".mouseCursor").removeClass("opacity-0");
  });

  //Mouse Custom Cursor
  function itCursor() {
    var myCursor = jQuery(".mouseCursor");
    if (myCursor.length) {
      if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
          t = document.querySelector(".cursor-outer");
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          $("body").on("mouseenter", "button, a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
          }),
          $("body").on("mouseleave", "button, a, .cursor-pointer", function () {
            ($(this).is("a", "button") &&
              $(this).closest(".cursor-pointer").length) ||
              (e.classList.remove("cursor-hover"),
              t.classList.remove("cursor-hover"));
          }),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
  }
  itCursor();

  /*=============================================
	=    		 Mobile Menu			      =
=============================================*/
  // offcanvas toogle
  $(".ts-offcanvas-toogle").on("click", function () {
    $(".ts-offcanvas").addClass("ts-offcanvas-open");
    $(".ts-offcanvas-overlay").addClass("ts-offcanvas-overlay-open");
  });
  $(".ts-offcanvas-close-toggle,.ts-offcanvas-overlay,.ts-click-close").on(
    "click",
    function () {
      $(".ts-offcanvas").removeClass("ts-offcanvas-open");
      $(".ts-offcanvas-overlay").removeClass("ts-offcanvas-overlay-open");
    }
  );

  // mobile menu
  var tsMenuWrap = $(".ts-mobile-menu-active > ul").clone();
  var tsSideMenu = $(".ts-offcanvas-menu nav");
  tsSideMenu.append(tsMenuWrap);
  if ($(tsSideMenu).find(".sub-menu, .ts-mega-menu").length != 0) {
    $(tsSideMenu)
      .find(".sub-menu, .ts-mega-menu")
      .parent()
      .append(
        '<button class="ts-menu-close"><i class="fas fa-chevron-right"></i></button>'
      );
  }

  var sideMenuList = $(
    ".ts-offcanvas-menu nav > ul > li button.ts-menu-close, .ts-offcanvas-menu nav > ul li.has-dropdown > a"
  );
  $(sideMenuList).on("click", function (e) {
    e.preventDefault();
    if (!$(this).parent().hasClass("active")) {
      $(this).parent().addClass("active");
      $(this).siblings(".sub-menu, .ts-mega-menu").slideDown();
    } else {
      $(this).siblings(".sub-menu, .ts-mega-menu").slideUp();
      $(this).parent().removeClass("active");
    }
  });

  /*=============================================
  	=    Menu sticky & Scroll to top      =
  =============================================*/
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $("#ts-sticky-header").removeClass("ts-sticky-menu");
    } else {
      $("#ts-sticky-header").addClass("ts-sticky-menu");
    }
  });

  // Page Scroll Percentage
  function scrollTopPercentage() {
    const scrollPercentage = () => {
      const scrollTopPos = document.documentElement.scrollTop;
      const calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollValue = Math.round((scrollTopPos / calcHeight) * 100);
      const scrollElementWrap = $("#scroll-percentage");

      scrollElementWrap.css(
        "background",
        `conic-gradient( var(--ts-white) ${scrollValue}%, var(--ts-theme-color) ${scrollValue}%)`
      );

      // ScrollProgress
      if (scrollTopPos > 101) {
        scrollElementWrap.addClass("active");
      } else {
        scrollElementWrap.removeClass("active");
      }

      if (scrollValue < 96) {
        $("#scroll-percentage-value").text(`${scrollValue}%`);
      } else {
        $("#scroll-percentage-value").html(
          '<i class="fas fa-angle-double-up"></i>'
        );
      }
    };
    window.onscroll = scrollPercentage;
    window.onload = scrollPercentage;

    // Back to Top
    function scrollToTop() {
      document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    $("#scroll-percentage").on("click", scrollToTop);
  }

  windowOn.on("load", function () {
    scrollTopPercentage();
  });

  /*=============================================
	=       Search Bar		      =
=============================================*/
  $(".ts-search-toggle").on("click", function () {
    $(".ts-header-search-bar").addClass("ts-search-open");
    $(".ts-header-search-bar-overlay").addClass(
      "ts-header-search-bar-overlay-open"
    );
  });

  $(".ts-search-close,.ts-header-search-bar-overlay").on("click", function () {
    $(".ts-header-search-bar").removeClass("ts-search-open");
    $(".ts-header-search-bar-overlay").removeClass(
      "ts-header-search-bar-overlay-open"
    );
  });

  /*=============================================
	=       Data Background  		      =
=============================================*/
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

  /*=============================================
	=       Data Background  Color		      =
=============================================*/
  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });

  /*=============================================
	=       Data  Color		      =
=============================================*/
  $("[data-color]").each(function () {
    $(this).css("color", $(this).attr("data-color"));
  });

  /*=============================================
	=    		Project Isotope Active 		      =
=============================================*/
  $(".tsproject-content-area").imagesLoaded(function () {
    var grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-item",
      },
    });

    $(".project-menu").on("click", "li", function () {
      var filterValue = $(this).attr("data-filter");
      grid.isotope({ filter: filterValue });
    });

    //for portfolio menu active class
    $(".project-menu li").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });
  });

  /*=============================================
  	=    		Odometer Active  	       =
  =============================================*/
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });

  /*=============================================
	=    		Magnific Popup		      =
=============================================*/
  /* magnificPopup image view */
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: false,
    },
  });

  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  //   /*=============================================
  // 	=    		Banner Two Swiper Slider		      =
  // =============================================*/
  var swiper = new Swiper(".tsBanner2Swiper", {
    slidesPerView: 1,
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 6000,
    },
    loop: true,
    navigation: {
      nextEl: ".ts-swiper-banner2-button-next",
      prevEl: ".ts-swiper-banner2-button-prev",
    },
  });

  /*=============================================
	=    		Banner Four Swiper Slider		      =
=============================================*/
  var swiper = new Swiper(".tsBanner4Swiper", {
    slidesPerView: 1,
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 6000,
    },
    loop: true,
    navigation: {
      nextEl: ".ts-swiper-banner4-button-next",
      prevEl: ".ts-swiper-banner4-button-prev",
    },
  });

  /*=============================================
	=    		Feature Swiper Slider		      =
=============================================*/
  var swiper = new Swiper(".tsFeatureSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 6000,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination-feature",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  /*=============================================
	=    		Feature Swiper Slider	Two	      =
=============================================*/
  var swiper = new Swiper(".tsFeatureSwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 6000,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination-feature2",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  /*=============================================
	=    		Service Swiper Slider		      =
=============================================*/
  var swiper = new Swiper(".tsServiceSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 6000,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination-service",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  /*=============================================
	=    		Team Swiper Slider		      =
=============================================*/
  var swiper = new Swiper(".tsTeamSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 6000,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination-team",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  /*=============================================
	=    		Team Swiper Slider Two		      =
=============================================*/
  var swiper = new Swiper(".tsTeamSwiper2", {
    slidesPerView: 4,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 6000,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination-team2",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  /*=============================================
	=    		Brand Swiper Slider		      =
=============================================*/
  var swiper = new Swiper(".tsBrandSwiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 8000,
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });

  /*=============================================
	=    		Testimonial Swiper Slider		      =
=============================================*/
  var swiper = new Swiper(".tsTestimonialSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination-testimonial",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  });

  /*=============================================
	=    		Testimonial Swiper Slider	Two	      =
=============================================*/
  var swiperThumbs = new Swiper(".tsTestimonialSwiper2thumb", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper = new Swiper(".tsTestimonialSwiper2", {
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 6000,
    },
    thumbs: {
      swiper: swiperThumbs,
    },
  });

  /*=============================================
	=    		Testimonial Swiper Slider	Four	      =
=============================================*/
  var swiperThumbs = new Swiper(".tsTestimonialSwiper4thumb", {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper = new Swiper(".tsTestimonialSwiper4", {
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 6000,
    },
    thumbs: {
      swiper: swiperThumbs,
    },
  });

  /*=============================================
	=    		Testimonial Swiper Slider Contact		     =
=============================================*/
  var swiper = new Swiper(".tsTestimonialSwiperContact", {
    slidesPerView: 1,
    keyboard: {
      enabled: true,
    },
    loop: true,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: ".swiper-pagination-testimonial-contact",
      clickable: true,
    },
  });

  /*=============================================
	=    		Project Swiper Slider		      =
=============================================*/
  var swiper = new Swiper(".tsProjectSwiper", {
    effect: "coverflow",
    slidesPerView: "auto",
    spaceBetween: 10,
    grabCursor: true,
    centeredSlides: true,
    paginationClickable: true,
    mousewheelControl: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    autoplay: {
      delay: 6000,
    },
    keyboard: {
      enabled: true,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination-project",
      clickable: true,
    },
  });

  /*=============================================
	=    		Blog Swiper Slider One		      =
=============================================*/
  var swiper = new Swiper(".tsBlogSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination-blog",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  /*=============================================
	=    		Blog Swiper Slider Four		      =
=============================================*/
  var swiper = new Swiper(".tsBlogSwiper4", {
    slidesPerView: 3,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination-blog4",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  /*=============================================
	=    		Wow Animation		      =
=============================================*/
  function wowAnimation() {
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }

  /*=============================================
	=    		Jarallax		      =
=============================================*/
  if ($(".jarallax").length) {
    $(".jarallax").jarallax({
      speed: 0.2,
    });
  }
})(jQuery);
