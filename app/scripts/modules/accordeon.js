const accordeon = document.querySelector(".accordeon");
if (accordeon) {
    const accordeonItems = accordeon.querySelectorAll(".accordeon__item");
    [...accordeonItems].forEach((item, index) => {
        const header = item.querySelector(".accordeon__header");
        header.addEventListener("click", () => {
            console.log("header");
            item.classList.toggle("is-open");
            let content = item.querySelector(".accordeon__content");
            if (item.classList.contains("is-open")) {
                content.style.height = `${content.scrollHeight}px`;
            } else {
                content.style.height = "0px";
            }
            removeAccordeonOpen(index);
        });
    });
    function removeAccordeonOpen(index1) {
        [...accordeonItems].forEach((item2, index2) => {
            if (index1 != index2) {
                item2.classList.remove("is-open");
                let contentTwo = item2.querySelector(".accordeon__content");
                contentTwo.style.height = "0px";
            }
        });
    }
}
