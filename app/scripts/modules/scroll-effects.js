gsap.registerPlugin(ScrollTrigger);

// if (ScrollTrigger.isTouch !== 1) {
//     ScrollSmoother.create({
//         wrapper: "#smooth-wrapper",
//         content: "#smooth-content",
//         smooth: 1.5,
//         effects: true,
//     });
// }

const { innerHeight, innerWidth } = window;

let historyOverlay = document.querySelector(".history__overlay");

// let tlMap = gsap.timeline({ paused: true });

// if (historyOverlay) {
//     function runTween() {
//         TweenMax.to(historyOverlay, 1, {
//             width: 600,
//             height: 600,
//             scale: 1,
//             xPercent: -50,
//             yPercent: -50,
//             left: "50%",
//             top: "50%",
//             borderRadius: "50% 50%",
//         });
//     }
//     //Set The Tween Width
//     TweenMax.set(historyOverlay, {
//         width: "100%",
//         xPercent: -50,
//         yPercent: -50,
//         left: "50%",
//         top: "50%",
//     });
//     const actionTween = TweenMax.to(historyOverlay, {
//         onComplete: () => {
//             runTween();
//         },
//     });
// }

if (historyOverlay) {
    let tl = gsap.timeline({
        scale: 1,
        // stager: 0.25,
        duration: 1,
        width: "100%",
        scrollTrigger: {
            trigger: "#history",
            start: "top",
            pin: true,
            // end: `+=${innerHeight * 1.3}`,
            // x: innerWidth / 2,
            // y: innerHeight / 2,
            scrub: 3,
        },
    });
    tl.to(historyOverlay, {
        left: "50%",
        top: "50%",
        xPercent: -50,
        yPercent: -50,
    });
    tl.to(historyOverlay, {
        borderRadius: "50% 50%",
        width: 600,
        height: 600,
    });
    tl.to(historyOverlay, {
        scale: 0,
    });
    tl.reversed();
}

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
        ".home-slider",
        { opacity: 1 },
        {
            opacity: 0,
            // yPercent: 100,
            scrollTrigger: {
                trigger: ".home",
                start: "top",
                end: "820",
                scrub: true,
            },
        }
    );
}
const uniqueTitle = document.querySelector(".unique .heading-block__title");
if (uniqueTitle) {
    gsap.fromTo(
        uniqueTitle,
        { xPercent: -30, stagger: 0.1, opacity: 0.5 },
        {
            xPercent: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".unique",
                scrub: true,
            },
        }
    );
}
