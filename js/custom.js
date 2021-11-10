
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
$(document).ready(function() {
  $(window).scroll(function(){
      if ($(this).scrollTop() > 500) {
         $('.latestWorks_box').removeClass('is-hidden');
       };
  });
});

// Backrgound Parallax JS
document.addEventListener("mousemove", parallax);
  function parallax(e){
      this.querySelectorAll('.layer').forEach(layer => {
          const speed = layer.getAttribute('data-speed')

          const x = (window.innerWidth - e.pageX*speed)/100
          const y = (window.innerHeight - e.pageY*speed)/100

          layer.style.transform = `translateX(${x}px) translateY(${y}px)`
      })
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
  $(".blast").eq(6).css("color", "#6b6b6b");
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

// Scroll Section 
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".myDetails_wrapper",
      pin: true,
       markers: false,
      scrub:1,
      //snap: directionalSnap(1 / (sections.length - 1)),
      end: "+=3000"
    }
  });

gsap.set(".box-1, .box-2", {y: 100});
// gsap.set(".col1_animate, .col2_animate, .col3_animate, .col4_animate, .col5_animate, .col6_animate, .col7_animate", {y: 100});
ScrollTrigger.defaults({markers: false});

// red section
gsap.to(".box-1", {
  y: -130,
  duration: 2,
  ease: "elastic",
  scrollTrigger: {
    trigger: ".box-1",
    containerAnimation: scrollTween,
    start: "left center",
    toggleActions: "play none none reset",
    id: "1",
  }
});


// gray section
gsap.to(".box-2", {
  y: -120,
  // backgroundColor: "#1e90ff",
  ease: "none",
  scrollTrigger: {
    trigger: ".box-2",
    containerAnimation: scrollTween,
    start: "center bottom",
    end: "center center",
    scrub: true,
    id: "2"
  }
});

// purple section
// ScrollTrigger.create({
//   trigger: ".box-3",
//   containerAnimation: scrollTween,
//   toggleClass: "active",
//   start: "center 20%",
//   end: "center 80%",
//   id: "3"
// });

// green section
ScrollTrigger.create({
  trigger: ".green",
  containerAnimation: scrollTween,
  start: "center 65%",
  end: "center 51%",
  onEnter: () => console.log("enter"),
  onLeave: () => console.log("leave"),
  onEnterBack: () => console.log("enterBack"),
  onLeaveBack: () => console.log("leaveBack"),
  onToggle: self => console.log("active", self.isActive),
  id: "4"
});



// helper function for causing the sections to always snap in the direction of the scroll (next section) rather than whichever section is "closest" when scrolling stops.
// function directionalSnap(increment) {
//   let snapFunc = gsap.utils.snap(increment);
//   return (raw, self) => {
//     let n = snapFunc(raw);
//     return Math.abs(n - raw) < 1e-4 || (n < raw) === self.direction < 0 ? n : self.direction < 0 ? n - increment : n + increment;
//   };
// }

// making the code pretty/formatted.
// PR.prettyPrint();