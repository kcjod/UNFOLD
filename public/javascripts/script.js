Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: .5,
  });


  Shery.makeMagnet("#elems" /* Element to target.*/, {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.textAnimate("#anitext" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 10,
    delay: 0.5,
    duration: 2.5,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.2,
  });

  gsap.from("#logo",{
    x:-70,
    opacity:0,
    duration:1,
  });

gsap.to("#matter",{
    color:"#fff",
    scrollTrigger:{
        trigger:"#matter",
        scroller:"body",
        start:"top 80%",
        end:"top 25%",
        scrub:5
    }
});

gsap.from("#p4-matter",{
  opacity:0,
  scrollTrigger:{
      trigger:"#page4",
      scroller:"body",
      start:"top -90%",
      end:"top -150%",
      scrub:5
  }
});


gsap.from("#p5-matter",{
  opacity:0,
  scrollTrigger:{
      trigger:"#page5",
      scroller:"body",
      start:"top -90%",
      end:"top -150%",
      scrub:5
  }
});

gsap.from("#img1",{
  opacity:0,
  x:-100,
  scrollTrigger:{
    trigger:"#img1",
    scroller:"body",
    start:"top -75%",
    end:"top -100%",
    scrub:2
  }
});


gsap.from("#img2",{
  opacity:0,
  x:-100,
  scrollTrigger:{
    trigger:"#img2",
    scroller:"body",
    start:"top -75%",
    end:"top -100%",
    scrub:2
  }
});


gsap.to("#exp",{
    transform:"translateX(-260%)",
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 25%",
        end:"top -100%",
        scrub:4,
        pin:true
    }
})