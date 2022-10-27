$(document).ready(function(){ // 페이지가 열리자마자 실행

    const nvDB=[
        ['꼭집어서 나','#about'],
        ['열정의 6개월','#portfoloio'],
        ['내사람테스트','#preInterview'],
        ['연락하기','#contact']
    ];
    let nvli = '';
    for(let i in nvDB){
        nvli += `<li><a href="${nvDB[i][1]}">${nvDB[i][0]}</a></li>`
    };

    $('.depth1').html(nvli);//ul에 네비넣기

    //////////데이터삽입완료 최상위유지해야한다.///////////
    
    $('.slideSection').each(function(){
        $(this).find('h2').html(nvDB[$(this).index()][0]);
    });///each

    //  $("#interview dt").click(function(){
    //      $(this).toggleClass('show').siblings().removeClass('show');
    //  });

    //  //네비 슬라이드 섹션이동
    //  $(".depth1 a").click(function(e){ //매개변수 e는 이벤트를 위미함
    //     //네비게이션 클릭실행

    //     e.preventDefault(); //a태그의 고유기능 책갈피 막기->자바스크립트 실행목적
    //     var targetPos = $($(this).attr('href')).offset().top;//top이랑 left 뿐이다
    //     //a태그 href값이랑 같은 객체의 상단위치 저장해둬
    //     //offset()계산해라

    //     $('body, html').animate({'scrollTop':targetPos});
    //     //화면 애니메이션 쳐라 스크롤상단위치에 그 위치를 넣어서 마치 그 객체한테 간것처럼 보이겠지
    //     //auto기능이 있는 것들은 height 못 넣음

    //     $(this).parent().addClass('active').siblings().removeClass('active');

    //     // $('#prevInterview dt').removeClass('active')
    //     // $(this).parent().addClass('active')
    //  });
     
     $(".depth1 a").click(function(e){
        e.preventDefault();
        var targetPos =$($(this).attr('href')).offset().top;
        $('body, html').animate({'scrollTop':targetPos});

        $(this).parent().addClass('active').siblings().removeClass('active');
        //.depth1 li.active a

    })

    $(".faq dt").click(function(){
        $(this).toggleClass('act').siblings().removeClass('act');
    })

    // $('#preInterview dt').click(function(){
    //     $(this).toggleClass('act')
    // })

});



