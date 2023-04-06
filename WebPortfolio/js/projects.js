document.addEventListener("DOMContentLoaded", () => {
    let hover = document.querySelectorAll(".projects-item");

    hover.forEach(el => {
        el.addEventListener("mouseover", (e) => {
            
            if(e.target.classList.contains("projects-item__hover")){
                hover.forEach(elem => {
                    elem.querySelector(".projects-item__more").classList.remove("projects-item__more_active");
                })
                el.querySelector(".projects-item__more").classList.add("projects-item__more_active");
                
            }
            
        });
        // el.addEventListener("mouseout", (e) => {
        //     if(e.relatedParent != el){
        //         el.querySelector(".projects-item__more").classList.remove("projects-item__more_active");
        //     }
        // });
    })
})