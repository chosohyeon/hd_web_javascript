window.addEventListener('DOMContentLoaded', () => {

    ////////////////////////////////////////////

    document.querySelector('.top_close_btn').addEventListener('click', function () {
        // this.classList.togglr('on');
        document.querySelector('.TopBanner').classList.add('on');
        document.querySelector('.MainVisual').classList.add('on');
    });
    
    document.querySelector('.lang strong').addEventListener('click', function () {
        this.classList.toggle('on');
        document.querySelector('.lang').classList.toggle('on');
    });
    
    document.querySelector('.top_search strong').addEventListener('click', function () {
        this.classList.toggle('on');
        document.querySelector('.top_search').classList.toggle('on');
    });



    window.addEventListener('scroll', () => {
        let SCT = window.screenY;
        SCT > 0
            ? document.querySelector('.Header').classList.add('on')
            : document.querySelector('.Header').classList.remove('on')
    });

    const MAINSLIDER = new Swiper('.main_slider', {
        loop: true,
        on: {
            init: function () {
                console.log(this.slides.length - 2);
                const current = document.querySelector('.swiper-slide-active');
                current.classList.add('on');
                document.querySelector('.main_slider_num').innerHTML = (this.realIndex + 1) + " / <span>" + (this.slides.length - 2);
            }
        }
    });

    const tatalslide = document.querySelectorAll('.swiper-slide');
    const slideDots = document.querySelectorAll('.slide_dots li');

    MAINSLIDER.on('slideChangeTransitionEnd', function () {
        //1. 번호찍는거
        //2. 지금 슬라이드에 class 붙이는 거
        const current = document.querySelector('.swiper-slide-active');
        tatalslide.forEach(it => it.classList.remove('on'));
        current.classList.add('on');
        console.log(tatalslide, current, this.realIndex);
        let count = this.realIndex; // 0 1 2
        slideDots.forEach(it => it.classList.remove('on'));
        slideDots[count].classList.add('on');
        document.querySelector('.main_slider_num').innerHTML = (this.realIndex + 1) + " / <span>" + (this.slides.length - 2);
    });

    document.querySelector('.slide_handler .next').addEventListener('click', () => {
        MAINSLIDER.slideNext();
    });

    document.querySelector('.slide_handler .prev').addEventListener('click', () => {
        MAINSLIDER.slidePrev();
    });

    slideDots.forEach((it, idx) => {
        it.addEventListener('click', () => {
            console.log(idx);
            MAINSLIDER.slideTo(idx + 1, 600);
        })
    })



    // document.querySelectorAll('.Wrap').style.color = 'red';
    // console.log( document.querySelectorAll('.Wrap'))
    //위의 구문을 제이쿼리로 바꾸면 $('.Wrap').css({color:'red'}) 이렇게 된다. 짜잔-!

    ////////////////////////////////////////////
});

// $(function(){

// })