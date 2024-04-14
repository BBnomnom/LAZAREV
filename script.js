document.querySelector('nav')
.addEventListener('mouseenter', function(){
let tl = gsap.timeline();

   tl.to('.nav-bottom', {
        height: "25vh"
    })
   tl.to('.nav-elem h5', {
    display: 'block',
    duration: 0.2
    })

   tl.to('.nav-elem h5 span', {
    y:0,
    stagger: {
        amount:0.7
    }
    })
})
document.querySelector('nav')
.addEventListener('mouseleave', function(){
let tl = gsap.timeline();

   tl.to('.nav-elem h5 span', {
    y: '25px',
    stagger: {
        amount:0.2
    }
    })
   tl.to('.nav-elem h5', {
    display: 'none',
    } )
    tl.to('.nav-bottom', {
        height: 0,
        duration:0.2,
    })
})