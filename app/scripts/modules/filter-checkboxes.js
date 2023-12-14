const flatBlocks = document.querySelectorAll(".flat-block");
const flatBody = document.querySelector(".flat__body");
if (flatBody) {
    let arrChecked = [];
    const paths = flatBody.querySelectorAll("path");
    const checkboxAll = flatBody.querySelector("input[value='all']");
    const checkboxes = flatBody.querySelectorAll(
        '.flat__checkboxes input[type="checkbox"]'
    );
    if (checkboxAll) {
        checkboxAll.addEventListener("change", checkAll);
    }
    function checkAll(event) {
        [...checkboxes].forEach((checkbox, index) => {
            checkbox.checked = checkboxAll.checked;
            checkbox.checked = event.target.checked ? true : false;
        });
        if (checkboxAll.checked) {
            [...paths].forEach((path) => {
                path.classList.add("active");
            });
        } else {
            [...paths].forEach((path) => {
                path.classList.remove("active");
            });
        }
    }
    [...checkboxes].forEach((item, index) => {
        item.addEventListener("change", (event) => {
            let checkBoxesChecked = flatBody.querySelectorAll(
                '.flat__checkboxes input[type="checkbox"]:checked'
            );
            const { value, checked } = item;
            let currentPaths = flatBody.querySelectorAll(
                `svg path[data-bedroom="${value}"]`
            );
            if (checked) {
                arrChecked.push(index);
                [...currentPaths].forEach((currentPath) =>
                    currentPath.classList.add("active")
                );
            } else {
                arrChecked.splice(arrChecked.indexOf(index), 1);
                [...currentPaths].forEach((currentPath) =>
                    currentPath.classList.remove("active")
                );
            }
            checkboxAll.checked = checkBoxesChecked.length == checkboxes.length;
        });
    });
}

const flatView = document.querySelector(".flat__view");
if (flatView) {
    flatView.addEventListener("click", (event) => {
        let target = event.target;
        if (target.classList.contains("view-front")) {
            target.classList.replace("view-front", "view-back");
            target.setAttribute("data-view", "back");
        } else {
            target.classList.replace("view-back", "view-front");
            target.setAttribute("data-view", "front");
        }
        let id = target.getAttribute("data-view");
        let currentBlock = document.querySelector(`[data-block="${id}"]`);
        if (flatBlocks.length > 0) {
            [...flatBlocks].forEach((el) => {
                el.classList.remove("is-active");
            });
        }
        currentBlock.classList.add("is-active");
    });
}
