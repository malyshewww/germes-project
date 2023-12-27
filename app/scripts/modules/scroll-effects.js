gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// if (ScrollTrigger.isTouch !== 1) {
//     ScrollSmoother.create({
//         wrapper: "#smooth-wrapper",
//         content: "#smooth-content",
//         smooth: 1.5,
//         effects: true,
//     });
// }

const { innerHeight, innerWidth } = window;

function scrollEffects() {
    if (window.innerWidth > 991.98) {
        let historyOverlay = document.querySelector(".history__overlay img");
        if (historyOverlay) {
            let tl = gsap.timeline({
                scale: 1,
                // stager: 0.25,
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
            tl.to(historyOverlay, 0.2, {
                left: "50%",
                top: "50%",
                xPercent: -50,
                yPercent: -50,
            });
            tl.to(historyOverlay, 0.3, {
                borderRadius: "50% 50%",
            });
            tl.to(historyOverlay, 0.3, {
                width: 600,
                height: 600,
            });
            tl.to(historyOverlay, 0.3, {
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
                ".home-section",
                { opacity: 1 },
                {
                    opacity: 0,
                    // yPercent: 100,
                    scrollTrigger: {
                        trigger: ".home",
                        start: "top",
                        // end: "820",
                        scrub: true,
                    },
                }
            );
        }
        gsap.fromTo(
            ".item-home__image img",
            2,
            { scale: 1.5, duration: 2 },
            { scale: 1 }
        );
        const homeOverlay = document.querySelector(".home__overlay");
        if (homeOverlay) {
            gsap.fromTo(homeOverlay, 1, { yPercent: 0 }, { yPercent: -100 });
        }
        const indexHeader = document.querySelector("#header");
        if (indexHeader) {
            gsap.to(indexHeader, {
                y: 0,
                duration: 0.3,
                delay: 1,
                ease: "power4.out",
            });
        }
        const uniqueTitle = document.querySelector(
            ".unique .heading-block__title"
        );
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
    } else {
        return false;
    }
}
scrollEffects();

// window.addEventListener("resize", () => {
//     scrollEffects();
// });
