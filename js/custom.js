
// For Loader ON Load
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('content').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('introAnim').style.visibility="hidden";
         document.getElementById('content').style.visibility="visible";
      },1000);
  }
}

// latestWorks_list Section add and remove class on scroll
$("#hamburger").click(function(){
  $("body").toggleClass("menuactive");
});
$(".mainMenu_nav li a").click(function(){
  $("body").toggleClass("menuactive");
});
$(window).scroll(function(){
  var sticky = $('.stickyHeader'),
      scroll = $(window).scrollTop();

  if (scroll >= 50) sticky.addClass('fixedHeader');
  else sticky.removeClass('fixedHeader');
});

// latestWorks_list Section add and remove class on scroll
$(document).ready(function() {
  $(window).scroll(function(){
      if ($(this).scrollTop() > 500) {
         $('.latestWorks_box').removeClass('is-hidden');
       };
  });
});

// Background Parallax JS
document.addEventListener("mousemove", parallax);
  function parallax(e){
      this.querySelectorAll('.layer').forEach(layer => {
          const speed = layer.getAttribute('data-speed')

          const x = (window.innerWidth - e.pageX*speed)/100
          const y = (window.innerHeight - e.pageY*speed)/100

          layer.style.transform = `translateX(${x}px) translateY(${y}px)`
      })
  }

// Custom Cursor JS STart
// let root = document.documentElement;

// root.addEventListener("mousemove", e => {
//   root.style.setProperty('--mouse-x', e.clientX + "px");
//   root.style.setProperty('--mouse-y', e.clientY + "px");
// });
// Custom Cursor JS END

// Theme Change
let initialTheme = true;

function toggleColors() {   
  const root = document.documentElement;

  // if(initialTheme) {
  //   root.style.setProperty('--grayBg', 'black');
  //   root.style.setProperty('--text-color', '#08fdfd');
  //   root.style.setProperty('--white', '#e9e9e9');
  //   initialTheme = false;  
  // } else {
  //   root.style.setProperty('--grayBg', '#e9e9e9');
  //   root.style.setProperty('--text-color', '#595959');
  //   root.style.setProperty('--white', '#ffffff');
  //   initialTheme = true;
  // }

  // if(initialTheme) {
  //   root.style.setProperty('--grayBg', '#101820FF');
  //   root.style.setProperty('--text-color', '#FEE715FF');
  //   root.style.setProperty('--white', '#FEE715FF');
  //   root.style.setProperty('--textShadow', 'rgba(0, 0, 0, 0.38%)');
  //   initialTheme = false;  
  // } else {
  //   root.style.setProperty('--grayBg', '#e9e9e9');
  //   root.style.setProperty('--text-color', '#595959');
  //   root.style.setProperty('--white', '#ffffff');
  //   root.style.setProperty('--textShadow', '#a4a4a4');
  //   initialTheme = true;
  // }

  if(initialTheme) {
     root.style.setProperty('--filter', 'hue-rotate(45deg)');

    // Puple Theme
    // root.style.setProperty('--grayBg', '#320d3e');
    // root.style.setProperty('--text-color', '#ffd79d');
    // root.style.setProperty('--white', '#ffd79d');
    // root.style.setProperty('--textShadow', 'rgba(0, 0, 0, 0.38%)');
    // root.style.setProperty('--latestWorks_boxLayer', '#320d3e');
    // root.style.setProperty('--black', '#892ea6');
    // root.style.setProperty('--tags', '#892ea6');    

    // Green Theme
    // root.style.setProperty('--grayBg', '#1b6535');
    // root.style.setProperty('--text-color', '#a8c66c');
    // root.style.setProperty('--white', '#e1dd72');
    // root.style.setProperty('--textShadow', 'rgba(0, 0, 0, 0.38)');
    // root.style.setProperty('--latestWorks_boxLayer', '#1b6535');
    // root.style.setProperty('--black', '#a8c66c');

    // Yellow Theme
    root.style.setProperty('--grayBg', '#f3ca20');
    root.style.setProperty('--grayBg2', '#f3ca20');
    root.style.setProperty('--bg3', '#f3ca20');
    root.style.setProperty('--text-color', '#000000');
    root.style.setProperty('--white', '#000000');
    root.style.setProperty('--tm_white', '#f3ca20');
    root.style.setProperty('--textShadow', 'rgba(0, 0, 0, 0.34)');
    root.style.setProperty('--latestWorks_boxLayer', '#000000');
    root.style.setProperty('--latestWorks_text', '#f3ca20');
    root.style.setProperty('--black', '#f3ca20');
    root.style.setProperty('--tags', '#ffeb9a');
     root.style.setProperty('--hoverText', '#ffffff');
     root.style.setProperty('--number', '#ffffff');
     root.style.setProperty('--numberMsk', '#f3ca20');
     root.style.setProperty('--filter', 'hue-rotate(45deg)');
     root.style.setProperty('--ms', '#ffffff');
     root.style.setProperty('--headerbg', ' rgba(0, 0, 0, 0.42)');
    initialTheme = false;  

  } 
  else {
    root.style.setProperty('--grayBg', 'linear-gradient( 130deg,#ff7a18,#af002d 41.07%,#319197 76.05%)');
    root.style.setProperty('--grayBg2', '-webkit-linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%)');
    root.style.setProperty('--bg3', '#1A2930');
    root.style.setProperty('--text-color', '#ffffff');
    root.style.setProperty('--white', '#ffffff');
    root.style.setProperty('--tm_white', '#ffffff');
    root.style.setProperty('--textShadow', '#0000004a');
    root.style.setProperty('--latestWorks_boxLayer', '#1c1d25');
    root.style.setProperty('--latestWorks_text', '#ffffff');
    root.style.setProperty('--black', '#000000');
    root.style.setProperty('--tags', '#08fdd8');
    root.style.setProperty('--hoverText', '#08fdd8');
    root.style.setProperty('--number', '#ffffff');
    root.style.setProperty('--numberMsk', '#e9e9e9');
    root.style.setProperty('--filter', 'hue-rotate(0deg)');
    root.style.setProperty('--ms', '#8d8d8d');
    root.style.setProperty('--headerbg', ' rgba(0, 0, 0, 0.42)');
    initialTheme = true;
  }
}


// For Blast Animation Apply
$(".text-zone h1, .text-zone h2, .blast_animation").blast({
  delimiter: "character",
  tag: "span"
});

a = 0;
$(".blast").each(function() {
  if (a == 300) {
    a = 400;
  }

  if (a == 1200) {
    a = 1400;
  }

  var el = $(this);

  if (a == 400) {
    setTimeout(function() {
      $(".text-zone h1 img").addClass("animated rotateIn");
    }, 500);
  }

  setTimeout(function() {
    el.addClass("animated bounceIn");
  }, a);

  if (a < 1200) {
    a = a + 100;
  } else {
    a = a + 70;
  }
});
setTimeout(function() {
  $(".blast").removeClass("animated bounceIn");
  $(".blast").css("opacity", 1);
  // $(".blast").eq(6).css("color", "#6b6b6b");
  // $(".blast").velocity("transition.perspectiveDownIn", { stagger: 50 });

  $(".blast").mouseenter(function() {
    var el = $(this);

    $(this).addClass("animated rubberBand");
    $(
      this
    ).one(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function() {
        el.removeClass("animated rubberBand");
      }
    );
  });
}, 3000);


// Timeline Sec JS
// (function($) {
//   $.fn.timeline = function() {
//     var selectors = {
//       id: $(this),
//       item: $(this).find(".timeline-item"),
//       activeClass: "timeline-item--active",
//       img: ".timeline__img"
//     };
//     selectors.item.eq(0).addClass(selectors.activeClass);
//     selectors.id.css(
//       "background-image",
//       "url(" +
//         selectors.item
//           .first()
//           .find(selectors.img)
//           .attr("src") +
//         ")"
//     );
//     var itemLength = selectors.item.length;
//     $(window).scroll(function() {
//       var max, min;
//       var pos = $(this).scrollTop();
//       selectors.item.each(function(i) {
//         min = $(this).offset().top;
//         max = $(this).height() + $(this).offset().top;
//         var that = $(this);
//         if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
//           selectors.item.removeClass(selectors.activeClass);
//           selectors.id.css(
//             "background-image",
//             "url(" +
//               selectors.item
//                 .last()
//                 .find(selectors.img)
//                 .attr("src") +
//               ")"
//           );
//           selectors.item.last().addClass(selectors.activeClass);
//         } else if (pos <= max - 40 && pos >= min) {
//           selectors.id.css(
//             "background-image",
//             "url(" +
//               $(this)
//                 .find(selectors.img)
//                 .attr("src") +
//               ")"
//           );
//           selectors.item.removeClass(selectors.activeClass);
//           $(this).addClass(selectors.activeClass);
//         }
//       });
//     });
//   };
// })(jQuery);

// $("#timeline-1").timeline();
