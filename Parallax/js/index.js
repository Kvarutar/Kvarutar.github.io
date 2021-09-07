document.addEventListener('DOMContentLoaded', function(){
    let swift = 0;
    let swift2 = 0;
    let swift3 = 0;
    let offset = 0;

    let blockHeight,
        pHeight = document.querySelector('.parallax-item').clientHeight;

    /* window.onresize = () => {
        console.log(localStorage.getItem('parallaxOffset'));
        document.location.reload()
    } */
    
    console.log('re')
    if (document.documentElement.clientWidth < 538) {
        blockHeight = pHeight/51;
    }else{
        blockHeight = pHeight/53;
    }

    
    document.querySelector('.hint').addEventListener('click', function(){
        let first = blockHeight + document.querySelector('.promo').clientHeight;
        $('html').animate({ scrollTop: first}, ((first/blockHeight)+200));
    })
    
    let counterR = 2,
        counterL = 0,
        swtichCount;

    window.onbeforeunload = function () {
        offset = window.pageYOffset;
        localStorage.setItem('parallaxOffset', offset); 
        window.scrollTo(0, 0);
    }

    $(document).ready(function () {
        console.log(localStorage.getItem('parallaxOffset'));
        let destination = localStorage.getItem('parallaxOffset');
        $('html').animate({ scrollTop: destination }, (destination/20));
        return false; 
    });

    let left = document.querySelector('.sticky-left'),
        right = document.querySelector('.sticky-right');

    left.addEventListener('click', function(){
        swtichCount = blockHeight*counterL + document.querySelector('.promo').offsetTop;
        let dest = swtichCount;
        $('html').animate({ scrollTop: dest}, (dest/counterL));
        console.log("left="+counterL);
        console.log("right="+counterR);
    })
    right.addEventListener('click', function(){
        swtichCount = blockHeight*counterR /* document.querySelector('.promo').offsetTop */;
        let dest2 = swtichCount;
        $('html').animate({ scrollTop: dest2 }, (dest2/counterR));
        swtichCount = 0;
        console.log("left="+counterL);
        console.log("right="+counterR);
    })


    window.addEventListener('scroll', function(){
        let p = window.pageYOffset - document.querySelector('.parallax-item').offsetTop,
            pBlocks = document.querySelectorAll('.parallax-block'),
            pTitles = document.querySelectorAll('.parallax__text'),
            pMobiles = document.querySelectorAll('.parallax-block_mobile'),
            img3 = document.querySelectorAll('.parallax-block_3 .parallax-img_3'),
            img5 = document.querySelectorAll('.parallax-block_5--images .parallax-block__wrapper'),
            taps = document.querySelectorAll('.tap'),
            tapsMob = document.querySelectorAll('.tap_mobile');

        

        let scaledWidth = (p/pHeight)*100;
        if (scaledWidth < 101){
            document.querySelector('.sticky_bar--yellow').style.width = scaledWidth + '%';
        }
        
        pBlocks[0].style.opacity = 1;

        if (p < 0){
            pTitles.forEach((title) => {
                title.style.opacity = 0;
            })
        }
        if(document.querySelector('.promo').getBoundingClientRect().bottom > 0){
            left.style.display = 'none';
            right.style.display = 'none';
        }
        if (p < blockHeight && p > 0){
            right.style.display = 'block';
            left.style.display = 'none';
            pTitles[0].style.opacity = 1;
            pBlocks[1].style.opacity = 0;
            pBlocks[2].style.opacity = 0;
            pBlocks[3].style.opacity = 0;
            pBlocks[4].style.opacity = 0;
            pBlocks[5].style.opacity = 0;
            pBlocks[6].style.opacity = 0;
            pBlocks[7].style.opacity = 0;
            counterR = 7;
        }
        
        if (p > blockHeight && p < blockHeight*1.5){
            taps[0].style.opacity = p/blockHeight - 1;
            
        }
        if (p > blockHeight*1.5 && p < blockHeight*2){

        }
        if (p > blockHeight*2 && p < blockHeight*3){
            taps[0].style.opacity = 1 -(p/blockHeight - 2);
            pBlocks[1].style.opacity = 0;
            right.style.display = 'block';
            left.style.display = 'none';
            pTitles[0].style.opacity = 1;
            pBlocks[1].style.left = 122 + '%'
            pBlocks[2].style.left = 122 + '%'
            counterR = 7;
            
        }
        if (p > blockHeight*3){
            
            pBlocks[0].style.opacity = 0;
        }
        if(p > blockHeight*3 && p < blockHeight*4){
            left.style.display = 'block';
            let x = 100 - (p-blockHeight*3)/blockHeight*50;
            pBlocks[1].style.opacity = 0;
            pBlocks[2].style.opacity = 0;
            pBlocks[3].style.opacity = 0;
            pBlocks[4].style.opacity = 0;
            pBlocks[5].style.opacity = 0;
            pBlocks[6].style.opacity = 0;
            pBlocks[7].style.opacity = 0;
            pBlocks[0].style.opacity =1 - (p/blockHeight - 3);
            pBlocks[1].style.opacity = p/blockHeight - 3;
            pBlocks[1].style.left = x + '%'
            pBlocks[2].style.left = x + '%'
            swift = x;
            pTitles[1].style.opacity = 0;
        }


        if(p > blockHeight*4 && p < blockHeight*5){
            left.style.display = 'block';
            pTitles[0].style.opacity = 0;
            pBlocks[0].style.opacity = 0;
            pBlocks[1].style.left = 50 + '%';
            pBlocks[2].style.left = 50 + '%';
            pBlocks[1].style.opacity = 1;
            pTitles[1].style.opacity = 1;
            counterR = 12.2;
            counterL = 2.3;

        }

        if (p > blockHeight*5 && p < blockHeight*5.5){
            left.style.display = 'block';
            taps[1].style.opacity = p/blockHeight - 5;
        }
        if (p > blockHeight*5.5 && p < blockHeight*6){
            pBlocks[1].style.opacity = 1;
        }
        if (p > blockHeight*6 && p < blockHeight*7){
            pBlocks[1].style.opacity = 1;
            taps[1].style.opacity = 1 -(p/blockHeight - 6);

            counterR = 12.2;
            counterL = 2.3;

            pBlocks[2].style.opacity = 0;
            pBlocks[3].style.opacity = 0;

        }



        
        if(p > blockHeight*7 && p < blockHeight*10){
            left.style.display = 'block';
            pBlocks[2].style.opacity = 0;
            pBlocks[3].style.opacity = 0;
            pBlocks[4].style.opacity = 0;
            pBlocks[5].style.opacity = 0;
            pBlocks[6].style.opacity = 0;
            pBlocks[7].style.opacity = 0;
            pTitles[2].style.opacity = 1;
            pBlocks[1].style.opacity = 1 - (p/blockHeight - 7);
            pBlocks[2].style.opacity = (p/blockHeight - 7);
            if (p > blockHeight*8 && p < blockHeight*9){
                img3[0].style.opacity = 1 - (p/blockHeight - 8);
            }
            if (p > blockHeight*9){
                img3[1].style.opacity = (p/blockHeight - 9);
            }
            pTitles[1].style.opacity = 1;
            counterR = 15;
            counterL = 7.2;
        }


        if (p > blockHeight*10 && p < blockHeight*11) {
            counterR = 15;
            counterL = 7.2;
        }
        if (p > blockHeight*10 && p < blockHeight*10.5){
            pTitles[1].style.opacity = 0;
            taps[2].style.opacity = p/blockHeight - 10;
        }
        if (p > blockHeight*10.5 && p < blockHeight*11){
            
        }
        if (p > blockHeight*11 && p < blockHeight*12){

            taps[2].style.opacity = 1 -(p/blockHeight - 11);
            pBlocks[3].style.opacity = 0;
            pTitles[3].style.opacity = 0;
            pBlocks[3].style.left = 122 + '%';
            counterR = 15;
            counterL = 7.2;
        }


        if (p > blockHeight*12 && p < blockHeight*13){
            
            let x = 100 - (p-blockHeight*12)/blockHeight*50;
            pBlocks[1].style.opacity = 0;
            pBlocks[3].style.opacity = 0;
            pBlocks[4].style.opacity = 0;
            pBlocks[5].style.opacity = 0;
            pBlocks[6].style.opacity = 0;
            pBlocks[7].style.opacity = 0;
            pTitles[3].style.opacity = 1;
            pBlocks[2].style.opacity = 1 - (p/blockHeight - 12);
            pBlocks[3].style.opacity = (p/blockHeight - 12);
            pBlocks[3].style.left = x + '%';
            if(document.documentElement.clientWidth < 538){
                counterR = 19;
                counterL = 12;
            }
            else{
                counterR = 36;
                counterL = 13;
            }
        }
        
        if (p > blockHeight*13 && p < blockHeight*14){
            taps[3].style.opacity = p/blockHeight - 13;
            pBlocks[3].style.left = 50 + '%';
            pBlocks[2].style.opacity = 0;
            /* counterR = 13;
            counterL = 7;  */
            /* counterL = 7; */
            if(document.documentElement.clientWidth < 538){
                counterR = 19;
                counterL = 12;
            }
            else{
                counterR = 36;
                counterL = 13;
            }
            
        }
        /* if (p > blockHeight*13.5 && p < blockHeight*14){
            
        } */


        if(document.documentElement.clientWidth < 538){
            if (p > blockHeight*14 && p < blockHeight*15){
                counterR = 19;
                counterL = 12;
                taps[3].style.opacity = 1 -(p/blockHeight - 14);
                pMobiles[0].style.left = 122 + '%';
                pBlocks[3].style.opacity = 1;
            }
            if (p > blockHeight*15 && p < blockHeight*16){
                let x = 100 - (p-blockHeight*15)/blockHeight*50;
                pBlocks[2].style.opacity = 0;
                pMobiles[0].style.left = x + '%';
                pBlocks[4].style.opacity = 0;
                pBlocks[5].style.opacity = 0;
                pBlocks[6].style.opacity = 0;
                pBlocks[7].style.opacity = 0;
                pBlocks[3].style.opacity = 1 - (p/blockHeight - 15);
                pMobiles[0].style.opacity = (p/blockHeight - 15);
                pMobiles[1].style.opacity = 0;
                pMobiles[2].style.opacity = 0;
                pMobiles[3].style.opacity = 0;
                pMobiles[4].style.opacity = 0;
                pMobiles[5].style.opacity = 0;
                pMobiles[6].style.opacity = 0;
                pTitles[3].style.opacity = 1;
                /* counterR = 21;
                counterL = 15; */
                /* counterR = 18;
                counterL = 12; */
            }

            if (p > blockHeight*16 && p< blockHeight*17){
                pMobiles[0].style.left = 50 + '%';
                counterR = 21;
                counterL = 15;
            }
            if (p > blockHeight*16 && p < blockHeight*16.5){
                pTitles[3].style.opacity = 0;
                tapsMob[0].style.opacity = p/blockHeight - 16;
            }
            if (p > blockHeight*16.5 && p < blockHeight*17){
                
            }
            if (p > blockHeight*17 && p < blockHeight*18){
                tapsMob[0].style.opacity = 1 -(p/blockHeight - 17);
                counterR = 21;
                counterL = 15;
                pMobiles[1].style.left = 122 + '%';
                pMobiles[1].style.opacity = 1;
                pMobiles[0].style.opacity = 1;
            }


            if (p > blockHeight*18 && p < blockHeight*19){
                let x = 100 - (p-blockHeight*18)/blockHeight*50;
                pMobiles[1].style.left = x + '%';
                pMobiles[1].style.opacity = (p/blockHeight - 18);
                pMobiles[0].style.opacity = 1 - (p/blockHeight - 18);
                pBlocks[3].style.opacity = 0;
                pMobiles[2].style.opacity = 0;
                pMobiles[3].style.opacity = 0;
                pMobiles[4].style.opacity = 0;
                pMobiles[5].style.opacity = 0;
                pMobiles[6].style.opacity = 0;
                counterR = 24;
                counterL = 18;
            }

            if (p > blockHeight*19 && p < blockHeight*20) pMobiles[1].style.left = 50 + '%';

            if (p > blockHeight*19 && p < blockHeight*19.5){
                tapsMob[1].style.opacity = p/blockHeight - 19;
            }
            if (p > blockHeight*19.5 && p < blockHeight*20){
                /* counterR = 24;
                counterL = 18; */
            }
            if (p > blockHeight*20 && p < blockHeight*21){
                tapsMob[1].style.opacity = 1 -(p/blockHeight - 20);
                counterR = 24;
                counterL = 18;
                pMobiles[2].style.left = 122 + '%';
                pMobiles[1].style.opacity = 1;
            }

            if (p > blockHeight*21 && p < blockHeight*22){
                let x = 100 - (p-blockHeight*21)/blockHeight*50;
                pMobiles[0].style.opacity = 0;
                pMobiles[3].style.opacity = 0;
                pMobiles[4].style.opacity = 0;
                pMobiles[5].style.opacity = 0;
                pMobiles[6].style.opacity = 0;
                
                pMobiles[2].style.left = x + '%';
                pMobiles[2].style.opacity = (p/blockHeight - 21);
                pMobiles[1].style.opacity = 1 - (p/blockHeight - 21);
                counterR = 27;
                counterL = 21;
            }

            if (p > blockHeight*22 && p < blockHeight*23) {
                pMobiles[2].style.opacity = 1;
                pMobiles[2].style.left = 50 + '%'};

            if (p > blockHeight*22 && p < blockHeight*22.5){
                tapsMob[2].style.opacity = p/blockHeight - 22;
            }
            if (p > blockHeight*22.5 && p < blockHeight*23){
                /* counterR = 27;
                counterL = 21; */
            }
            if (p > blockHeight*23 && p < blockHeight*24){
                tapsMob[2].style.opacity = 1 -(p/blockHeight - 23);
                counterR = 27;
                counterL = 21;
                pMobiles[3].style.left = 122 + '%';
            }

            if (p > blockHeight*24 && p < blockHeight*25){
                let x = 100 - (p-blockHeight*24)/blockHeight*50;
                pMobiles[0].style.opacity = 0;
                pMobiles[1].style.opacity = 0;
                pMobiles[4].style.opacity = 0;
                pMobiles[5].style.opacity = 0;
                pMobiles[6].style.opacity = 0;
                pMobiles[3].style.left = x + '%';
                pMobiles[3].style.opacity = (p/blockHeight - 24);
                pMobiles[2].style.opacity = 1 - (p/blockHeight - 24);
                counterR = 30;
                counterL = 24;
            }

            if (p > blockHeight*25 && p < blockHeight*26) {
                pMobiles[3].style.opacity = 1;
                pMobiles[3].style.left = 50 + '%'};

            if (p > blockHeight*25 && p < blockHeight*25.5){
                tapsMob[3].style.opacity = p/blockHeight - 25;
            }
            if (p > blockHeight*25.5 && p < blockHeight*26){
                /* counterR = 30;
                counterL = 24; */
            }
            if (p > blockHeight*26 && p < blockHeight*27){
                tapsMob[3].style.opacity = 1 -(p/blockHeight - 26);
                counterR = 30;
                counterL = 24;
                pMobiles[4].style.left = 122 + '%';
            }


            if (p > blockHeight*27 && p < blockHeight*28){
                let x = 100 - (p-blockHeight*27)/blockHeight*50;
                pMobiles[0].style.opacity = 0;
                pMobiles[1].style.opacity = 0;
                pMobiles[2].style.opacity = 0;
                pMobiles[5].style.opacity = 0;
                pMobiles[6].style.opacity = 0;
                pMobiles[4].style.left = x + '%';
                pMobiles[4].style.opacity = (p/blockHeight - 27);
                pMobiles[3].style.opacity = 1 - (p/blockHeight - 27);
                counterR = 33;
                counterL = 27;
            }

            if (p > blockHeight*28 && p < blockHeight*29) {
                pMobiles[4].style.opacity = 1;
                pMobiles[4].style.left = 50 + '%'};

            if (p > blockHeight*28 && p < blockHeight*28.5){
                tapsMob[4].style.opacity = p/blockHeight - 28;
            }
            if (p > blockHeight*28.5 && p < blockHeight*29){
                /* counterR = 33;
                counterL = 27; */
            }
            if (p > blockHeight*29 && p < blockHeight*30){
                tapsMob[4].style.opacity = 1 -(p/blockHeight - 29);
                counterR = 33;
                counterL = 27;
                pMobiles[5].style.opacity = 0;
                pMobiles[5].style.left = 122 + '%';
            }

            if (p > blockHeight*30 && p < blockHeight*31){
                let x = 100 - (p-blockHeight*30)/blockHeight*50;
                pMobiles[0].style.opacity = 0;
                pMobiles[1].style.opacity = 0;
                pMobiles[2].style.opacity = 0;
                pMobiles[3].style.opacity = 0;
                pMobiles[6].style.opacity = 0;
                pMobiles[5].style.left = x + '%';
                pMobiles[5].style.opacity = (p/blockHeight - 30);
                pMobiles[4].style.opacity = 1 - (p/blockHeight - 30);
                counterR = 37;
                counterL = 30;
            }

            if (p > blockHeight*31 && p < blockHeight*32) {
                pMobiles[5].style.opacity = 1;
                pMobiles[5].style.left = 50 + '%'};

            if (p > blockHeight*31 && p < blockHeight*31.5){
                tapsMob[5].style.opacity = p/blockHeight - 31;
            }
            if (p > blockHeight*31.5 && p < blockHeight*32){
                /* counterR = 36;
                counterL = 30; */
            }
            if (p > blockHeight*32 && p < blockHeight*33){
                tapsMob[5].style.opacity = 1 -(p/blockHeight - 32);
                counterR = 37;
                counterL = 30;
                /* pMobiles[5].style.opacity = 0; */
                pMobiles[6].style.left = 122 + '%';
            }

            if (p > blockHeight*33 && p < blockHeight*34){
                let x = 100 - (p-blockHeight*33)/blockHeight*50;
                pMobiles[0].style.opacity = 0;
                pMobiles[1].style.opacity = 0;
                pMobiles[2].style.opacity = 0;
                pMobiles[3].style.opacity = 0;
                pMobiles[4].style.opacity = 0;
                pMobiles[6].style.left = x + '%';
                pMobiles[6].style.opacity = (p/blockHeight - 33);
                pMobiles[5].style.opacity = 1 - (p/blockHeight - 33);
                counterR = 43;
                counterL = 33;
            }

            if (p > blockHeight*34 && p < blockHeight*35) {
                pMobiles[6].style.opacity = 1;
                pMobiles[6].style.left = 50 + '%'};

            if (p > blockHeight*34 && p < blockHeight*34.5){
                pMobiles[5].style.opacity = 0;
                tapsMob[6].style.opacity = p/blockHeight - 33;
            }
            if (p > blockHeight*34.5 && p < blockHeight*35){
                /* counterR = 43;
                counterL = 33; */
            }
            if (p > blockHeight*35 && p < blockHeight*36){
                tapsMob[6].style.opacity = 1 -(p/blockHeight - 35);
                counterR = 43;
                counterL = 33;
                pMobiles[5].style.opacity = 0;
                pBlocks[5].style.left = 122 + '%';
                pTitles[4].style.opacity = 0;
            }


            if (p > blockHeight*36 && p < blockHeight*37){
                let x = 100 - (p-blockHeight*36)/blockHeight*50;
                pMobiles[6].style.opacity = 1 - (p/blockHeight - 36);
                pMobiles[1].style.opacity = 0;
                pMobiles[2].style.opacity = 0;
                pMobiles[3].style.opacity = 0;
                pMobiles[4].style.opacity = 0;
                pMobiles[5].style.opacity = 0;
                pBlocks[4].style.opacity = 1 - (p/blockHeight - 36);
                pBlocks[5].style.opacity = 0;
                pBlocks[6].style.opacity = 0;
                pBlocks[7].style.opacity = 0;
                pTitles[4].style.opacity = 1;
                pBlocks[5].style.opacity = (p/blockHeight - 36);
                pBlocks[5].style.left = x + '%';
                counterR = 47;
                counterL = 37;
            }

            if (p > blockHeight*37 && p < blockHeight*42) {
                pBlocks[5].style.opacity = 1;
                pBlocks[5].style.left = 50 + '%';
                pBlocks[5].style.opacity = 1;
            }

            if (p > blockHeight*37 && p < blockHeight*37.5){
                pMobiles[6].style.opacity = 0;
                taps[12].style.opacity = p/blockHeight - 37;
            }
            if (p > blockHeight*37.5 && p < blockHeight*38){
                
            }
            if (p > blockHeight*38 && p < blockHeight*39){
                taps[12].style.opacity = 1 -(p/blockHeight - 38);
                pMobiles[6].style.opacity = 0;
            }


            if (p > blockHeight*39 && p < blockHeight*39.5){
                taps[13].style.opacity = p/blockHeight - 39;
            }
            if (p > blockHeight*39.5 && p < blockHeight*40){
                
            }
            if (p > blockHeight*40 && p < blockHeight*41){
                taps[13].style.opacity = 1 -(p/blockHeight - 40);
                /* counterR = 39;
                counterL = 36; */
                /* pTitles[4].style.opacity = 1; */
            }



            if (p > blockHeight*41 && p < blockHeight*42){
                /* pTitles[4].style.opacity = (p/(blockHeight) - 41); */
                pTitles[4].style.opacity = 1;
                /* counterR = 47;
                counterL = 36; */
            }
            if (p > blockHeight*42 && p < blockHeight*43){
                pBlocks[4].style.opacity = 0;
                counterR = 47;
                counterL = 37;
                pBlocks[6].style.opacity = 0;
                pTitles[5].style.opacity = 0;
                pBlocks[6].style.left = 122 + '%';
            }
            if (p > blockHeight*43 && p < blockHeight*44){
                let x = 100 - (p-blockHeight*43)/blockHeight*50;
                pTitles[4].style.opacity = 0;
                pMobiles[1].style.opacity = 0;
                pMobiles[2].style.opacity = 0;
                pMobiles[3].style.opacity = 0;
                pMobiles[4].style.opacity = 0;
                pMobiles[5].style.opacity = 0;
                pMobiles[6].style.opacity = 0;
                pBlocks[5].style.opacity = 1 - (p/blockHeight - 43);
                pBlocks[6].style.opacity = 0;
                pBlocks[7].style.opacity = 0;
                pBlocks[6].style.opacity = (p/blockHeight - 43);
                pBlocks[6].style.left = x + '%';
                pTitles[5].style.opacity = 1;
                counterR = 50;
                counterL = 42;
            }

            if (p > blockHeight*44 && p < blockHeight*45) pBlocks[6].style.left = 50 + '%';


            if (p > blockHeight*44 && p < blockHeight*44.5){
                taps[14].style.opacity = p/blockHeight - 44;
            }
            if (p > blockHeight*44.5 && p < blockHeight*45){
                
            }
            if (p > blockHeight*45 && p < blockHeight*46){
                taps[14].style.opacity = 1 -(p/blockHeight - 45);
                /* counterR = 50;
                counterL = 42; */
                pTitles[5].style.opacity = 1;
            }


            if (p > blockHeight*46 && p < blockHeight*47){
                /* pTitles[5].style.opacity = (p/(blockHeight) - 46); */
                
                document.querySelector('.sticky').style.background = '#FFFFFF';
                counterR = 50;
                counterL = 42;
                /* pBlocks[6].style.opacity = 0; */
                pBlocks[7].style.opacity = 0;
                right.style.display = 'block';
            }
            if (p > blockHeight*47 && p < blockHeight*48){
                pBlocks[5].style.opacity = 0;
                pBlocks[4].style.opacity = 0;
                pMobiles[1].style.opacity = 0;
                pMobiles[2].style.opacity = 0;
                pMobiles[3].style.opacity = 0;
                pMobiles[4].style.opacity = 0;
                pMobiles[5].style.opacity = 0;
                pMobiles[6].style.opacity = 0;
                pBlocks[6].style.opacity = 1 - (p/blockHeight - 47);
                pBlocks[7].style.opacity = 0;
                pBlocks[7].style.opacity = (p/blockHeight - 47);
                pBlocks[7].style.left = 50 + '%';
                let z = (p-(blockHeight*47))/blockHeight*70;
                pTitles[6].style.opacity = 1;
                document.querySelector('.parallax-block_8--img').style.left = z + '%'
                document.querySelector('.sticky').style.background = '#FCF5F2';
                right.style.display = 'none';
            }
            if(p > blockHeight*48 && p < blockHeight*49){
                pTitles[5].style.opacity = 0;
                counterL = 47;
                right.style.display = 'none';
                left.style.display = 'block';
                pBlocks[6].style.opacity = 0;
                
            }
            if(document.querySelector('.last').getBoundingClientRect().bottom - document.querySelector('.last').clientWidth < 0){
                left.style.display = 'none';
                right.style.display = 'none';
            }
        }else{
            if (p > blockHeight*14 && p < blockHeight*15){
                

                taps[3].style.opacity = 1 -(p/blockHeight - 14);
                pTitles[3].style.opacity = 1;
                pBlocks[3].style.opacity = 1;
                pBlocks[4].style.opacity = 0;
                pBlocks[4].style.left = 122 + '%';
                counterR = 42;
                counterL = 15;

            }
            if (p > blockHeight*15 && p < blockHeight*16){
                
                let x = 100 - (p-blockHeight*15)/blockHeight*50;
                pTitles[3].style.opacity = 0;
                pBlocks[2].style.opacity = 0;
                pBlocks[4].style.left = x + '%';
                pBlocks[4].style.opacity = 0;
                pBlocks[5].style.opacity = 0;
                pBlocks[6].style.opacity = 0;
                pBlocks[7].style.opacity = 0;
                pBlocks[3].style.opacity = 1 - (p/blockHeight - 15);
                pBlocks[4].style.opacity = (p/blockHeight - 15);
                /* counterR = 36.2; */
                /* counterL = 7; */
                counterR = 42;
                counterL = 15;
            }


            /* if (p > blockHeight*16 && p < blockHeight*16.5){
                
                taps[4].style.opacity = p/blockHeight - 16;
                
            } */
            if (p > blockHeight*16 && p < blockHeight*17){
                pBlocks[4].style.opacity = 1;
                pBlocks[4].style.left = 50 + '%';

            }
            /* if (p > blockHeight*17 && p < blockHeight*18){
                
                taps[4].style.opacity = 1 -(p/blockHeight - 17);
            } */


           /*  if (p > blockHeight*18 && p < blockHeight*18.5){
                taps[5].style.opacity = p/blockHeight - 18;
            }
            if (p > blockHeight*18.5 && p < blockHeight*19){
                
            }
            if (p > blockHeight*19 && p < blockHeight*20){
                taps[5].style.opacity = 1 -(p/blockHeight - 19);
            } */

            /* if (p > blockHeight*20 && p < blockHeight*34){
                let y = -(p-(blockHeight*20))/blockHeight*;
                document.querySelector('.parallax-block_5--images').style.transform = `translate3d(${y}%, 0, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
            } */
            if (p > blockHeight*20 && p < blockHeight*21){
                pBlocks[3].style.opacity = 0;
                let y = -(p-(blockHeight*20))/blockHeight*10;
                swift2 = y; 
                document.querySelector('.parallax-block_5--images').style.transform = `translate3d(${y}%, 0, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
            }
            if (p > blockHeight*22 && p < blockHeight*23){
                /* document.querySelector('.parallax-block_5--images').style.transform = `translate3d(${-9}%, 0, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` */
                img5[0].style.opacity = 1.5 - (p/blockHeight - 22) ;
                img5[1].style.opacity = 1.5 - (p/blockHeight - 22) ;
                img5[2].style.opacity = (p/blockHeight - 22) + 0.5 ;
                img5[3].style.opacity = (p/blockHeight - 22) + 0.5;
            }

            /* if (p > blockHeight*23 && p < blockHeight*23.5){
                taps[6].style.opacity = p/blockHeight - 23;
            }
            if (p > blockHeight*23.5 && p < blockHeight*24){
                
            }
            if (p > blockHeight*24 && p < blockHeight*25){
                taps[6].style.opacity = 1 -(p/blockHeight - 24);
            } */
            

            /* if (p > blockHeight*25 && p < blockHeight*25.5){
                taps[7].style.opacity = p/blockHeight - 25;
            }
            if (p > blockHeight*25.5 && p < blockHeight*26){
                
            }
            if (p > blockHeight*26 && p < blockHeight*27){
                taps[7].style.opacity = 1 -(p/blockHeight - 26);
            } */


            
            if (p > blockHeight*27 && p < blockHeight*28){
                let y = -(p-(blockHeight*27))/blockHeight*40 + swift2;
                swift3 = y;
                document.querySelector('.parallax-block_5--images').style.transform = `translate3d(${y}%, 0, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
            }
            if (p > blockHeight*28 && p < blockHeight*29){
                /* document.querySelector('.parallax-block_5--images').style.transform = `translate3d(${-45}%, 0, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` */
                img5[0].style.opacity = 0.5;
                img5[1].style.opacity = 0.5;
                img5[2].style.opacity = 1.5 - (p/blockHeight - 28) ;
                img5[3].style.opacity = 1.5 - (p/blockHeight - 28) ;
                img5[4].style.opacity = (p/blockHeight - 28) + 0.5;
                img5[5].style.opacity = (p/blockHeight - 28) + 0.5;
                img5[6].style.opacity = (p/blockHeight - 28) + 0.5;
                counterR = 42;
                counterL = 15;
                /* counterR = 42.2;
                counterL = 21; */
            }

            /* if (p > blockHeight*28 && p < blockHeight*28.5){
                taps[8].style.opacity = p/blockHeight - 28;
            }
            if (p > blockHeight*28.5 && p < blockHeight*29){
                
            }
            if (p > blockHeight*29 && p < blockHeight*30){
                taps[8].style.opacity = 1 -(p/blockHeight - 29);
            } */


            /* if (p > blockHeight*30 && p < blockHeight*30.5){
                taps[9].style.opacity = p/blockHeight - 30;
            }
            if (p > blockHeight*30.5 && p < blockHeight*31){
                
            }
            if (p > blockHeight*31 && p < blockHeight*32){
                taps[9].style.opacity = 1 -(p/blockHeight - 31);
            }


            if (p > blockHeight*31 && p < blockHeight*31.5){
                taps[10].style.opacity = p/blockHeight - 31;
            }
            if (p > blockHeight*31.5 && p < blockHeight*32){
                
            }
            if (p > blockHeight*32 && p < blockHeight*33){
                taps[10].style.opacity = 1 -(p/blockHeight - 32);
            } */


            if (p > blockHeight*33 && p < blockHeight*34){
                let y = -(p-(blockHeight*33))/blockHeight*36.8 + swift3;
                if (Math.floor(y) > -87){
                    document.querySelector('.parallax-block_5--images').style.transform = `translate3d(${Math.floor(y)}%, 0, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
                }
            }

            if (p > blockHeight*34 && p < blockHeight*34.5){
                document.querySelector('.parallax-block_5--images').style.transform = `translate3d(${Math.floor(-86)}%, 0, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
                /* taps[11].style.opacity = p/blockHeight - 34; */
                img5[2].style.opacity = 0.5;
                img5[3].style.opacity = 0.5;
                img5[4].style.opacity = 1;
                img5[5].style.opacity = 1;
                img5[6].style.opacity = 1;
            }
            if (p > blockHeight*34.5 && p < blockHeight*35){
                
                counterR = 42;
                counterL = 15;
            }
            if (p > blockHeight*35 && p < blockHeight*36){
                console.log(36);
                /* taps[11].style.opacity = 1 -(p/blockHeight - 35); */
                counterR = 42;
                counterL = 15;
                pBlocks[5].style.opacity = 0;
                pTitles[4].style.opacity = 0;
                pBlocks[5].style.left = 122 + '%';
            }

            
            if (p > blockHeight*36 && p < blockHeight*37){
                let x = 100 - (p-blockHeight*36)/blockHeight*50;
                pBlocks[4].style.opacity = 1 - (p/blockHeight - 36);
                pBlocks[2].style.opacity = 0;
                pBlocks[3].style.opacity = 0;
                pBlocks[5].style.opacity = 0;
                pBlocks[6].style.opacity = 0;
                pBlocks[7].style.opacity = 0;
                pBlocks[5].style.opacity = (p/blockHeight - 36);
                pBlocks[5].style.left = x + '%';
                pTitles[4].style.opacity = 1;
                /* counterR = 47.2;
                counterL = 36; */
            }
            
            if (p > blockHeight*37 && p < blockHeight*38){
                pBlocks[5].style.opacity = 1;
                pBlocks[5].style.left = 50 + '%';
            }
            if (p > blockHeight*37 && p < blockHeight*37.5){
                pBlocks[4].style.opacity = 0;
                taps[12].style.opacity = p/blockHeight - 37;
            }
            if (p > blockHeight*37.5 && p < blockHeight*38){
                
            }
            if (p > blockHeight*38 && p < blockHeight*39){
                taps[12].style.opacity = 1 -(p/blockHeight - 38);
            }


            if (p > blockHeight*38 && p < blockHeight*38.5){
                taps[13].style.opacity = p/blockHeight - 38;
            }
            if (p > blockHeight*38.5 && p < blockHeight*39){
                
            }
            if (p > blockHeight*39 && p < blockHeight*40){
                taps[13].style.opacity = 1 -(p/blockHeight - 39);
                counterR = 48;
                counterL = 36;
            }



            if (p > blockHeight*40 && p < blockHeight*41){
                pTitles[4].style.opacity = 1;
                counterR = 48;
                counterL = 36;
                
            }
            if (p > blockHeight*41 && p < blockHeight*42){
                counterR = 48;
                counterL = 36;
                /* pBlocks[5].style.left = 50 + '%'; */
                pBlocks[4].style.opacity = 0;
                pBlocks[2].style.opacity = 0;
                pBlocks[3].style.opacity = 0;
                /* counterR = 47.2;
                counterL = 36.2; */
                /* counterL = 36; */
                pBlocks[6].style.opacity = 0;
                pTitles[5].style.opacity = 0;
                pBlocks[6].style.left = 122 + '%';
                
            }
            if (p > blockHeight*42 && p < blockHeight*43){
                let x = 100 - (p-blockHeight*42)/blockHeight*50;
                pBlocks[5].style.opacity = 1 - (p/blockHeight - 42);
                pBlocks[6].style.opacity = 0;
                pBlocks[7].style.opacity = 0;
                pBlocks[2].style.opacity = 0;
                pBlocks[3].style.opacity = 0;
                pBlocks[6].style.opacity = (p/blockHeight - 42);
                pBlocks[6].style.left = x + '%';
                pTitles[5].style.opacity = 1;
                /* counterR = 51.2;
                counterL = 42.9; */
            }


            if (p > blockHeight*43 && p < blockHeight*43.5){
                pBlocks[6].style.opacity = 1;
                pBlocks[6].style.left = 50 + '%';
                pTitles[4].style.opacity = 0;
                taps[14].style.opacity = p/blockHeight - 43;
            }
            if (p > blockHeight*43.5 && p < blockHeight*44){
                pBlocks[6].style.opacity = 1;
            }
            if (p > blockHeight*44 && p < blockHeight*45){
                taps[14].style.opacity = 1 -(p/blockHeight - 44);
                pBlocks[6].style.opacity = 1;
                counterR = 52;
                counterL = 42;
            }


            if (p > blockHeight*46 && p < blockHeight*47){
                /* pTitles[5].style.opacity = (p/(blockHeight) - 46); */
                pTitles[5].style.opacity = 1;
                document.querySelector('.sticky').style.background = '#FFFFFF';
                /* counterR = 51.2;
                counterL = 42.9; */
                /* pBlocks[6].style.opacity = 1; */
                pBlocks[6].style.opacity = 1 - (p/blockHeight - 46);
                /* counterL = 42.9;  */
                pBlocks[7].style.opacity = 0;
                /* pBlocks[7].style.left = 122 + '%'; */
                counterR = 52;
                counterL = 42;
                left.style.display = 'block';
            }
            if (p > blockHeight*47 && p < blockHeight*48){
                /* counterR = 15; */
                counterR = 52;
                counterL = 42;
                /* let x = 100 - (p-blockHeight*47)/blockHeight*50; */
                pBlocks[5].style.opacity = 0;
                pBlocks[2].style.opacity = 0;
                pBlocks[3].style.opacity = 0;
                /* pBlocks[6].style.opacity = 1 - (p/blockHeight - 47); */
                pBlocks[6].style.opacity = 0;
                pBlocks[7].style.opacity = 0;
                pBlocks[7].style.opacity = (p/blockHeight - 47);
                pBlocks[7].style.left = 50 + '%';
                let z = (p-(blockHeight*47))/blockHeight*70;
                pTitles[6].style.opacity = 1;
                document.querySelector('.parallax-block_8--img').style.left = z + '%'
                document.querySelector('.sticky').style.background = '#FCF5F2';
                right.style.display = 'block';
                left.style.display = 'block';
                /* counterL = 47; */
            }
            if(p > blockHeight*49 && p < blockHeight*50){
                document.querySelector('.parallax-block_8--img').style.left = 69.8582 + "%";
                pBlocks[7].style.opacity = 1;
                /* pBlocks[7].style.left = 50 + '%'; */
                pTitles[5].style.opacity = 0;
                /* counterL = 47; */
                right.style.display = 'none';
                left.style.display = 'block';
                pBlocks[6].style.opacity = 0;
                counterL = 48;
                
            }
            if(p > blockHeight*50 && p < blockHeight*51){
                pBlocks[6].style.opacity = 0;
                counterL = 48;
                left.style.display = 'block';
            }
            if(document.querySelector('.last__wrapper').getBoundingClientRect().bottom - document.querySelector('.last__wrapper').clientWidth < 0 && document.querySelector('.promo').getBoundingClientRect().bottom > 0){
                console.log('bottom');
                left.style.display = 'none';
                right.style.display = 'none';
            }else{
                left.style.display = 'block';
            }
        }
    })
})