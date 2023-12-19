gsap.registerPlugin(ScrollTrigger);

// if (ScrollTrigger.isTouch !== 1) {
//     ScrollSmoother.create({
//         wrapper: ".wrapper",
//         content: ".parking",
//         smooth: 1.5,
//         effects: true,
//     });
// }

const { innerHeight, innerWidth } = window;
let options = {
        width: "600px",
        height: "600px",
    },
    el = document.querySelector(".history__overlay");

// gsap.fromTo(
//     ".history__overlay",
//     {
//         scale: 1,
//         stager: 0.25,
//         duration: 0.25,
//         clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
//     },
//     {
//         scale: 0,
//         width: 600,
//         height: 600,
//         scrollTrigger: {
//             trigger: "#history",
//             start: "center center",
//             // pin: true,
//             end: `+=${innerHeight * 1.3}`,
//             // x: innerWidth / 2,
//             // y: innerHeight / 2,
//             scrub: 3,
//         },
//     }
// );
// tl.to(".history__overlay img", {
//     scale: 0,
//     width: 600,
//     height: 600,
//     clipPath: "circle(50% at 50% 50%)",
//     xPercent: -50,
//     yPercent: -50,
// });
// tl.to(".history__overlay img", {
//     scale: 0,
//     width: 0,
//     height: 0,
//     clipPath: "circle(50% at 50% 50%)",
// });
// tl.to(".history__overlay", {
//     clipPath: "circle(50% at 50% 50%)",
//     xPercent: -50,
//     yPercent: -50,
// });

let historyOverlay = document.querySelector(".history__overlay");

if (historyOverlay) {
    function runTween() {
        TweenMax.to(historyOverlay, 1, {
            width: 600,
            height: 600,
            scale: 1,
            xPercent: -50,
            yPercent: -50,
            left: "50%",
            top: "50%",
            borderRadius: "50% 50%",
        });
    }
    //Set The Tween Width
    TweenMax.set(historyOverlay, {
        width: "100%",
        xPercent: -50,
        yPercent: -50,
        left: "50%",
        top: "50%",
    });
    const actionTween = TweenMax.to(historyOverlay, {
        onComplete: () => {
            runTween();
        },
    });
}

// let tl = gsap.timeline({
//     scale: 1,
//     stager: 0.25,
//     duration: 1,
//     scrollTrigger: {
//         trigger: "#history",
//         start: "center center",
//         pin: true,
//         // end: `+=${innerHeight * 1.3}`,
//         // x: innerWidth / 2,
//         // y: innerHeight / 2,
//         scrub: 3,
//     },
// });
// tl.from(historyOverlay, {
//     width: "100%",
//     xPercent: -50,
//     yPercent: -50,
//     left: "50%",
//     top: "50%",
// });
// tl.to(historyOverlay, {
//     clipPath: "circle(50% at 50% 50%)",
//     scale: 0,
//     width: 600,
//     height: 600,
//     xPercent: -50,
//     yPercent: -50,
//     left: "50%",
//     top: "50%",
//     borderRadius: "50% 50%",
// });

const individualSmallImage = document.querySelector(
    ".individual__image--small"
);
if (individualSmallImage) {
    gsap.fromTo(
        individualSmallImage,
        { y: 0, stagger: 0.5 },
        {
            y: -300,
            scrollTrigger: {
                trigger: "#individual",
                scrub: true,
            },
        }
    );
}
const homeSection = document.querySelector(".home");
if (homeSection) {
    gsap.fromTo(
        ".home",
        { opacity: 1 },
        {
            opacity: 0,
            scrollTrigger: {
                trigger: ".home",
                start: "center",
                end: "820",
                scrub: true,
            },
        }
    );
}
