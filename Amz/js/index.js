window.addEventListener("DOMContentLoaded", () => {
    const btns = document.querySelectorAll(".about__btns-item"),
          imgs = document.querySelectorAll(".about-item"),
          white = document.querySelector(".about__white"),
          text = document.querySelectorAll(".about__white-text");

    btns.forEach(el => {
        el.addEventListener('click', () => {
            btns.forEach(e => e.classList.remove('about__btns-item_active'));
            imgs.forEach(img => img.classList.remove('about-item_active'));
            text.forEach(txt => txt.classList.remove("about__white-text_active"));
            if (el.id != 2){
                white.classList.remove('about__white_right');
            }else{
                white.classList.add('about__white_right');
            }
            el.classList.add('about__btns-item_active');
            imgs[el.id - 1].classList.add('about-item_active');
            text[el.id - 1].classList.add("about__white-text_active");

        })
    })
})