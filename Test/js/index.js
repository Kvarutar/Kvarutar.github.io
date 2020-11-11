document.addEventListener('DOMContentLoaded', function(){
    //menu
    let menu = document.querySelector('.sides__left'),
        closeBtn = menu.querySelector('.close'),
        showBtn = document.querySelector('.show');
    
    let profile = document.querySelector('.header__right_profile'),
        right = document.querySelector('.sides__right');
    let tabs = document.querySelectorAll('.tabs-item');

    let options = document.querySelectorAll('.options-item');

    let section = document.querySelector('.tabs__title'),
        tabsWrapper = document.querySelector('.tabs');


    closeBtn.addEventListener('click', function(){
        menu.classList.remove('left_active');
    })

    showBtn.addEventListener('click', function(){
        if (document.documentElement.clientWidth < 450){
            if (right.classList.contains('right_active')) right.classList.remove('right_active');
            //if (tabs) tabs.classList.remove('tabs_active');
        }
        menu.classList.add('left_active');
    })
    
    //right
    

    profile.addEventListener('click', function(){
        if (document.documentElement.clientWidth < 450){
            if (menu.classList.contains('left_active')) menu.classList.remove('left_active');
            //if (tabs != undefined) tabs.classList.remove('tabs_active');
        }
        if (right.classList.contains('right_active')){
            right.classList.remove('right_active');
        }else{
            right.classList.add('right_active');
        }
    })

    if (document.documentElement.clientWidth < 1300){
        menu.classList.remove('left_active');
        right.classList.remove('right_active');
    }

    //tabs
    
        

    tabs.forEach((tab) => {
        tab.addEventListener('click', function(e){
            let target = e.currentTarget;
            console.log(target);
            for(let i = 0; i < tabs.length; i++){
                if (target == tabs[i]) {
                    tabs[i].classList.add('active');
                }else{
                    tabs[i].classList.remove('active');
                }
    
            }
            
        })
    })
    //menu-items

    

    options.forEach((option) => {
        option.addEventListener('click', function(e){
            let target = e.currentTarget;
            for (let i = 0; i < options.length; i++){
                if (target == options[i]) {
                    options[i].classList.add('active');
                }else{
                    options[i].classList.remove('active');
                }
            }
        })
    })

    //разделы на мобилках
    

    section.addEventListener('click', function(){
        if (document.documentElement.clientWidth < 450){
            if (right.classList.contains('right_active')) right.classList.remove('right_active');
            if (menu.classList.contains('left_active')) menu.classList.remove('left_active');
        }
        if (tabsWrapper.classList.contains('tabs_active')){
            tabsWrapper.classList.remove('tabs_active');
        }else{
            tabsWrapper.classList.add('tabs_active');
        }
    })

    console.log( document.documentElement.clientWidth );
    
    
})