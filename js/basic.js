// slide 넘기는 약속
$(function () {



    $('.main_slide').slick({
        arrows: false,
        // 버튼없애기
        autoplay: true,
        // 자동
        pauseOnHover: false,
        // 마우스 올리면
        pauseOnFocus: false,
        // 클릭했을때 멈추는거

    });


    // mian_visual 이전 다음 버튼
    $('.main_visual .arrows .prev').on('click', function () {
        $('.main_slide').slick('slickPrev')
    })
    $('.main_visual .arrows .next').on('click', function () {
        $('.main_slide').slick('slickNext')
    });


    $(function () {
        $('.to_top_banner').on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 500)
        });
    });


    // 2
    $('.about_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.main_about .arrows .left').on('click', function () {
        $('.about_slide').slick('slickPrev');
    });
    $('.main_about .arrows .right').on('click', function () {
        $('.about_slide').slick('slickNext');
    });



    // 헤더 배경색
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct)
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }

    })

    // aos 구현

    // $(window).on('load scroll', function () {
    //     let sct = $(window).scrollTop();
    //     console.log(sct);
    //     $('.sec').each(function () {
    //         if (sct > $(this).offset().top - 200) {
    //             $(this).addClass('on');
    //         } else {
    //             $(this).removeClass('on');
    //         }
    //     })
    // })


    $(function () {
        $('.to_top').on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 500)
        });
    });

    // 탑 아이콘 비쥬얼에 가면 fade
    $(window).on('scroll', function () {
        // 변수에 스크롤한 양을 저장
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 300) {
            // 스크롤 내린만큼 오면 나타나기
            $('.to_top').addClass('on');
        } else {
            $('.to_top').removeClass('on');
        }
    });


});

