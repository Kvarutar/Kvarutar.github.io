window.addEventListener("DOMContentLoaded", () => {
    const btns = document.querySelectorAll(".about__btns-item"),
          imgs = document.querySelectorAll(".about-item"),
          white = document.querySelector(".about__white"),
          text = document.querySelectorAll(".about__white-text"),
          close = document.querySelector(".header__close"),
          burger = document.querySelector(".header__burger"),
          modal = document.querySelector(".header__menu_mobile"),
          cardCloses = document.querySelectorAll(".card__close"),
          cards = document.querySelectorAll(".goods-item");

    btns.forEach(el => {
        el.addEventListener('click', () => {
            btns.forEach(e => e.classList.remove('about__btns-item_active'));
            imgs.forEach(img => img.classList.remove('about-item_active'));
            text.forEach(txt => txt.classList.remove("about__white-text_active"));
            if (el.id != 2){
                white.classList.remove('about__white_right');
            }else{
                if (window.innerWidth > 850){
                    white.classList.add('about__white_right');
                }
            }
            el.classList.add('about__btns-item_active');
            imgs[el.id - 1].classList.add('about-item_active');
            text[el.id - 1].classList.add("about__white-text_active");
        })
    })

    burger.addEventListener("click", () => {
        modal.classList.add("header__menu_active");
    })

    close.addEventListener("click", (e) => {
        modal.classList.remove("header__menu_active");
    })

    window.addEventListener('click', e => {
        if (!e.target.closest('.black') && !e.target.closest('.header__burger')){
            modal.classList.remove("header__menu_active");
        }

        if (!e.target.closest('.goods-item__content') && !e.target.closest('.card')){
            if (document.querySelector('.goods-item__modal_active')){
                document.querySelector('.goods-item__modal_active').classList.remove("goods-item__modal_active");
            }
        }
    })

    cards.forEach(card => {
        let cardModal = card.querySelector(".goods-item__modal"),
            close = card.querySelector(".card__close");

        card.addEventListener("click", (e) => {
            if (!cardModal.classList.contains("goods-item__modal_active") && !e.target.closest(".card__close") && !e.target.closest(".goods-item__modal")){
                cardModal.classList.add("goods-item__modal_active");
            }
        })

        close.addEventListener("click", () => {
            console.log(1);
            cardModal.classList.remove("goods-item__modal_active");
        })
    })

    // cardCloses.forEach(close => {
    //     close.addEventListener("click", () => {
    //         console.log(document.querySelector(".goods-item__modal_active"));
    //         let tmp = document.querySelector(".goods-item__modal_active");
    //         tmp.classList.remove("goods-item__modal_active")
    //     })
    // })
})