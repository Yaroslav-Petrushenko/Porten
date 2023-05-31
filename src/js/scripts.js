let btn_slide = document.querySelector('.slide_btn');
let slider_container = document.querySelector('.slider_conteiner');
let slides_brand = document.querySelectorAll('.slides_brand');
let containerWidth = slider_container.offsetWidth;
let total_width = 0;

function createButtons() {
    let btnLeft = document.createElement("span");
    let btnRight = document.createElement("span");
    btnLeft.className = "cards-slider left";
    btnRight.className = "cards-slider right";
    slider_container.insertAdjacentElement("afterbegin", btnLeft);
    slider_container.insertAdjacentElement("beforeend", btnRight);
}

createButtons();


function updateSlideWidth() {
    total_width = 0;

    slides_brand.forEach((slide) => {
        total_width += slide.offsetWidth;
    });

    if (total_width > containerWidth) {
        let overflow = total_width - containerWidth;

        slides_brand.forEach((slide) => {
            if (overflow > 0) {
                slide.classList.add('hidden'); // Додати клас для приховування
                overflow -= slide.offsetWidth;
            } else {
                slide.classList.remove('hidden'); // Видалити клас при наявності місця
            }
        });
    } else {
        slides_brand.forEach((slide) => {
            slide.classList.remove('hidden'); // Показати всі слайди
        });
    }
}

// window.addEventListener('resize', updateSlideWidth);
updateSlideWidth();
