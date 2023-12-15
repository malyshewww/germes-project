let groupItems = document.querySelectorAll(".filter-group");

function rangeSliders() {
    [...groupItems].forEach((elem) => {
        const slider = elem.querySelector(".filter-group__slider");
        if (slider) {
            let inputMin = elem.querySelector(".min"); // Ищем input с меньшим значнием
            let inputMax = elem.querySelector(".max"); // Ищем input с большим значнием
            let minValue = parseInt(inputMin.dataset.min);
            let maxValue = parseInt(inputMax.dataset.max);
            let inputs = [inputMin, inputMax]; // создаем массив из меньшего и большего значения

            noUiSlider.create(slider, {
                start: [minValue, maxValue],
                step: 1,
                connect: true,
                range: {
                    min: Number(minValue),
                    max: Number(maxValue),
                },
            });
            slider.noUiSlider.on("update", function (e) {
                let min = Math.round(e[0]);
                let max = Math.round(e[1]);
                inputMin.innerText = min;
                inputMax.innerText = max;
            });
        }
    });
}
rangeSliders();
