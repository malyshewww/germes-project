gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const mobile = window.matchMedia("(max-width: 991.98px)");
const { innerHeight, innerWidth } = window;

function scrollEffects() {
    if (!mobile.matches) {
        document.addEventListener("DOMContentLoaded", function () {
            let sections = gsap.utils.toArray(".page__screen");
            let tlpage = gsap.timeline({ paused: false });
            function goToSection(i) {
                tlpage.to(window, {
                    scrollTo: {
                        y: i * innerHeight,
                        autoKill: false,
                    },
                    ease: "power3.easeInOut",
                    duration: 1,
                });
            }
            ScrollTrigger.defaults({
                // markers: true,
            });
            sections.forEach((section, i) => {
                ScrollTrigger.create({
                    trigger: section,
                    pinReparent: true,
                    onEnter: () => {
                        goToSection(i);
                    },
                });
                ScrollTrigger.create({
                    trigger: section,
                    pinReparent: false,
                    onEnterBack: () => goToSection(i),
                });
            });
        });
        let historyMap = document.getElementById("map");
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
                    // x: innerWidth / 2,
                    // y: innerHeight / 2,
                    scrub: true,
                    // pinSpacing: false,
                    // normalizeScroll: true,
                },
                onStart: function () {
                    // console.log("animation start");
                    historyMap.style.pointerEvents = "none";
                },
                onComplete: function () {
                    // console.log("animation end");
                    historyMap.style.pointerEvents = "all";
                },
                onReverseComplete: function () {
                    // console.log("reverse animation end");
                    historyMap.style.pointerEvents = "all";
                },
                onUpdate: function () {
                    // console.log("done one tick animation");
                    historyMap.style.pointerEvents = "none";
                },
            });
            tl.to(historyOverlay, 0.2, {
                left: "50%",
                top: "50%",
                xPercent: -50,
                yPercent: -50,
            });
            tl.to(historyOverlay, 0.1, {
                borderRadius: "50% 50%",
                width: 600,
                height: 600,
            });
            tl.to(historyOverlay, 0.1, {
                scale: 0,
            });
            // tl.reversed();
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
                homeSection,
                { opacity: 1 },
                {
                    opacity: 0,
                    // yPercent: 100,
                    scrollTrigger: {
                        trigger: homeSection,
                        start: "top",
                        // end: "820",
                        scrub: true,
                    },
                }
            );
        }
        gsap.fromTo(
            ".item-home__bg-img",
            2,
            { scale: 1.5, duration: 2 },
            { scale: 1 }
        );
        const homeOverlay = document.querySelector(".home__overlay");
        if (homeOverlay) {
            gsap.fromTo(homeOverlay, 1, { yPercent: 0 }, { yPercent: -100 });
        }
        const indexHeader = document.querySelector("#header");
        // if (indexHeader) {
        //     gsap.to(indexHeader, {
        //         y: 0,
        //         duration: 0.3,
        //         delay: 1,
        //         ease: "power4.out",
        //     });
        // }
        const uniqueTitle = document.querySelector(
            ".unique .heading-block__title"
        );
        // if (uniqueTitle) {
        //     gsap.fromTo(
        //         uniqueTitle,
        //         { xPercent: -30, stagger: 0.1, opacity: 0.5 },
        //         {
        //             xPercent: 0,
        //             opacity: 1,
        //             scrollTrigger: {
        //                 trigger: ".unique",
        //                 scrub: true,
        //             },
        //         }
        //     );
        // }
    } else {
        return false;
    }
}
scrollEffects();

// $(document).ready(function () {
//     $("#pagepiling").pagepiling({
//         menu: null,
//         direction: "vertical",
//         verticalCentered: false,
//         scrollingSpeed: 900,
//         css3: false,
//         navigation: {},
//         normalScrollElements: "#section-second",
//         // normalScrollElementTouchThreshold: 5,
//         // touchSensitivity: 5,
//         // keyboardScrolling: true,
//         sectionSelector: ".section",
//         animateAnchor: false,
//         afterRender: function () {
//             scrollEffects();
//         },
//     });
// });

// window.addEventListener("resize", () => {
//     scrollEffects();
// });
