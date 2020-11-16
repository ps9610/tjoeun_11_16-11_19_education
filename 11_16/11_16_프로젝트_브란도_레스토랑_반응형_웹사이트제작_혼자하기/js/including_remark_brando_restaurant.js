;(function(window,document,$,undefined){ //항상 밑에서 위로 보기(업데이트 항목은 위로 써줌)

    var brando = {
        init:           function(){ 
            var that=this;
                that.headerFn();
                that.section01Fn();
                that.section02Fn();
                that.section03Fn();
                that.section04Fn();
                that.section05Fn();
                that.section06Fn();
                that.section07Fn();
                that.section08Fn();
                that.section09Fn();
                that.section10Fn();
                that.section11Fn();
                that.section12Fn();
                that.section13Fn();
                that.section14Fn();
                that.footerFn();
        },//브란도 레스토랑 전체에서 최초에 실행할 js

        headerFn:       function(){
            //속성을 변수로 둬서 이동시키면 됨
            //smooth scrolling = a href의 속성 중 하나인 (a href=#) hashtag 가져와서 해당 섹션으로 부드럽게 이동
            var url = null; //null이면 이동안되고 null이 아니면 해당 섹션으로 이동하게 하려고
            $(".smooth-btn").on({ //스무스 버튼을
                click : function(event){ //클릭하면 다음과 같이 실행하라 : 
                    event.preventDefault();
                    url = $(this).attr("href"); // url은 이 선택자의 속성을 가져오는 것이고,
                   $("html,body").stop().animate({ scrollTop: $( url ).offset().top },800) //html,body에서 0.6초 동안에url의 탑 값으로 스크롤 탑이라는 애니메이션이 실행되게 하라.
                                            //현재 스크롤의 위치값
                   $(".mobile-menu").hide();
                   $(".mobile-btn").removeClass("addClose");
                }
            });
       
            //scrolling
            $(window).scroll(function(){
                if( $(window).scrollTop()>=30 ){
                    $("#header").addClass("addMobile")
                    $(".goTop").addClass("addGotop")
                }
                else{
                    $("#header").removeClass("addMobile")
                    $(".goTop").removeClass("addGotop")
                }
            });

            //resize
            var winW = 0;

            $(window).resize(function(){
                winW = $(window).width();
                if( winW>990 ){
                    $(".mobile-btn").removeClass("addClose");
                    $(".mobile-menu").stop().slideUp(0);
                }
            });

            //btn-click
            $(".mobile-btn").on({
                click : function(event){
                    event.preventDefault();
                    $(this).toggleClass("addClose");
                    $(".mobile-menu").stop().slideToggle(300);//한번은 내려가고 한번은 올라가고
                }
            });


        },//헤더의 js
        section01Fn:    function(){

            var winH = 969;
            var imgH = $(".hungry").height();
            var imgTop = (winH-imgH)/2;
    
            //뭘 먼저 해야할지 우선순위 정리가 가장 첫번째
            //1. 창을 늘리고 줄일 때마다 섹션 1,2,3,4의 전체 높이가 같이 늘어났다 줄어들어야 하고 (전체 배경이 사진이니까)
                //ㄴ>   1) 변하는 값 : (늘어났다 줄어들었다 하는) 창의 높이 
                //          var winH = 0;
                //      2)  창을 늘렸다 줄여야 하니까 resize함수 필요
                //          function resizeFn(){}
                //      3) winH가 브라우저 창의 높이라는 변수라고 설정해줌
                //          winH = $(window).height();
                //      4) 섹션 1234, 움직인다, 높이, 윈도우 창과 같은 값으로 라고 설정
                //          $("#section01, #section02, #section03, #section04").stop().animate({ height:winH });
            //2. 헝그리 이미지 크기(높이)는 유지, resize시 브라우저 꼭대기랑 이미지 사이 위 공백의 길이가 같이 늘어났다 줄어들게 함
                //ㄴ>   1) 변하는 값 : 이미지 사이 위의 공백
                //                      = (전체 창 높이 - 이미지 높이) / 2;
                //          var imgTop = (winH - 이미지 높이) / 2;
                //                                  ㄴ> var imgH = $(".hungry").height();
                //      2) 헝그리 이미지, Top값이, 
                //      3) 

                //1) hungry 이미지 탑 값 구하기 = (window top - hungry높이)/2;              
                                //ㄴ> imgTop = (winH-imgH)/2;
            setTimeout(resizeFn,100);
            //ㄴ> 컴퓨터 킬 때도 높이가 정해야져 함
            
            
            function resizeFn(){                
                // setTimeouT(브라우저켜질때), resize()될 때 두 경우 필요하니까
                // 리터럴 함수 사용해서 필요한 곳곳마다 함수 이름만 불러서 실행시킴
                winH = $(window).height();
                $("#section01, #section02, #section03, #section04").css({ height:winH });
                //BOM문서에 의해서 높이가 자동으로 잡혀짐

                // ✨ {top:imgTop},{bottom:imgTop}을 줘도 헝그리는 중앙에 있는데 top만 쓴 이유 :  
                imgH = $(".hungry").height();
                imgTop = (winH-imgH)/2;
                //$(".hungry").css({top:imgTop},{bottom:imgTop});
                $(".hungry").css({ top:imgTop });
                //console.log(imgH) -> 이미지의 높이를 알고 싶을 때
                // = console.log($(".hungry").height())
            }

            //Smooth Scrolling Event
            // ✨ scroll vs scrollTop 차이점
            $(".arrow-down-btn").on({
                click : function(){
                    $("html,body").stop().animate({ scrollTop : $("#section02").offset().top},700);
                }
            });

            $(window).resize(function(){
                resizeFn();
                //ㄴ> 브라우저 창이 크기 변경 될 때마다 높이가 정해져야 함
            });

            setInterval(nextCountFn,100);

            //메인 NEXT 슬라이드
            function mainNextSlideFn(){
                $(".slide").css({ zIndex:1 }).stop().animate({opacity:1},0);
                // 다음 슬라이드가 나타나게끔 원
                $(".slide").eq(cnt==0? 2:cnt-1).css({ zIndex:2 });
                //현재 슬라이드
                //핵심 포인트 : 현재 슬라이드 위에 다음 슬라이드가 나타남
                // (=다음 슬라이드가 현재 슬라이드를 덮는다)
                $(".slide").eq(cnt).css({ zIndex:3 }).stop().animate({opacity:0},0).animate({opacity:1},800); //화면에 나타나는 것
                //보이지 않는 상태에서 1초만에 보이게 하라(페이드인효과) 
                console.log(cnt);
            }
            
            //메인 PREV 슬라이드
            function mainPrevSlideFn(){
                $(".slide").css({ zIndex:1 }).stop().animate({opacity:1},0);
                // 이전 슬라이드
                $(".slide").eq(cnt).css({ zIndex:2 });
                //현재 슬라이드를 사라지게 하면 이전 슬라이드가 보인다.
                //핵심 포인트 : 현재 슬라이드를 사라지게 하고 이전 슬라이들 보이게 함
                //( = 현재 덮어져있는 슬라이드를 걷어내 이전 슬라이드를 보이게 함)
                $(".slide").eq(cnt==2? 0:cnt+1).css({ zIndex:3 }).stop().animate({opacity:1},0).animate({opacity:0},800);
                                                                    //보여진 상태에서 1초만에 보이지 않게 하라(페이드아웃효과) 
                console.log(cnt);
                }
            
            //PREV 슬라이드
            function prevCountFn(){
                cnt--;
                if(cnt<0){cnt=2};
                mainPrevSlideFn();
            }
            //NEXT 슬라이드
            function nextCountFn(){
                cnt++; //0 1, 1 2, 2 0, 0 1 ...
                if(cnt>2){cnt=0};
                mainNextSlideFn();
            }
            //setInterval(prevCountFn,3000) : test용
            //setInterval(nextCountFn,3000) : test용

            //헝그리 이미지까지 같이 포함한 섹션01번을 터치이벤트로 잡아야 어디를 터치해도 슬라이드가 넘어감
            $("#section01").swipe({
                swipeLeft : function(){
                    if( !$(".slide").is(":animated") ){
                        nextCountFn();
                    }
                },
                swipeRight : function(){
                    if( !$(".slide").is(":animated") ){
                        prevCountFn();
                    }
                }
            })
        },
        /* section02Fn:    function(){
            //해당 섹션의 폰트사이즈 비율
            var txtBoxW = 0;
            var fontRateH3 = 0.082758621;//h3글자크기(24px)/텍스트박스너비; = 24/txtBoxW;
            var fontRateH4 = 0.037931034;//h4글자크기/텍스트박스너비; = 11/txtBoxW;
            var fontRateP = 0.048275862;//p글자크기/텍스트박스너비; = /txtBoxW;
            var fontSizeH3 = 0;//텍스트박스 너비 * 24px의 비율
            var fontSizeH4 = 0;//텍스트박스 너비 * 24px의 비율
            var fontSizeP =  0;//텍스트박스 너비 * 24px의 비율
            var boxHRate = 1.2222222;
            var boxW = 450;
            var boxH = boxW * boxHRate; //박스높이 = 박스너비 * 박스 높이의 비율;
            var winH = 0;
            var boxT = 0; //(창높이-박스높이)/2;
            var winW = 0;
            var boxR = 0; // 박스의 right 값 구하기 = (창 넓이=winW - 박스넓이) / 2;
            var boxL = 0; // 박스의 left 값 구하기 = (창 넓이=winW - 박스넓이) / 2; = boxR

            setTimeout(resizeFn,100);

            //해당 섹션의 폰트사이즈 비율
            function resizeFn(){
                
            txtBoxW = $(".content-wrap").width(); 
            boxW = $(".content").width(); 
            boxH = boxW * boxHRate;
            fontSizeH3 =  txtBoxW * fontRateH3;
            fontSizeH4 =  txtBoxW * fontRateH4;
            fontSizeP =  txtBoxW * fontRateP;
            winH = $(window).height();
            boxT = (winH-boxH)/2; //(창높이-박스높이)/2;
            winW = $(window).width();
            boxR = (winW-boxW)/2; 
            boxL = boxR 
            //console.log ( "창넓이" ,winW );
            //console.log ( "박스 넓이 ",boxW );
            //console.log ( "박스 right값 ",boxR );
            //console.log ( "박스 left값 ",boxL ); 

            $(".content-wrap h3").css({fontSize:fontSizeH3});
                $(".content-wrap h4").css({fontSize:fontSizeH4});
                $(".content-wrap p").css({fontSize:fontSizeP});

                $(".content").css({height:boxH,top:boxT});

                //창 너비가 1170이하이면 실행
                if(winW <= 1170){
                    $(".content24").stop().animate({right:boxR,},300);//css는 그냥 위치만 바뀌고 animate는 움직이는것
                    $(".content3").stop().animate({left:boxL},300);
                }
                else{
                    $(".content24").stop().animate({right:0,},300);
                    $(".content3").stop().animate({left:0,},300);
                }
            }
            // console.log( "텍스트박스 너비 ", txtBoxW, "글자크기비율", fontRateH3, "실제글자크기", fontSizeH3 );
            // console.log( "텍스트박스 너비 ", txtBoxW, "글자크기비율", fontRateH4, "실제글자크기", fontSizeH4 );
            // console.log( "텍스트박스 너비 ", txtBoxW, "글자크기비율", fontRateP, "실제글자크기", fontSizeP );

            $(window).resize(function(){
                resizeFn();
            });
        },
 */
section234Fn:    function(){
            
    //css.content-wrap {top:209.5px;height:550px;}   
    //content-wrap이라는 박스의 top값, height 값을 반응형으로(= 자동 계산되게) 설정하기
    //창 높이가 바뀌면 top 높이 값도 바뀌여야 함 : 제일 마지막에 한거
    //  ㄴ> 자동화 resize(); 사용해주면 됨
    //박스 넓이가 바뀌면 height도 바뀌여야 함

     //변수 박스 탑 값 = (창높이-박스높이)/2;
     //var = (windowHeight-boxHeight)/2;

    //창 높이가 content-wrap보다 작을 때 content-wrap이 창 높이를 안 넘어가게 유지하기
        //ㄴ>그럼 창 높이랑 content-wrap top값이 같이 줄어들게 하면 됨
        //function resizeFn(){ windowHeight = $(window).height();를 조정한다.
        // $("#section01, #section02, #section03, #section04").css({ height:winH });에서 
        //#section02, #section03, #section04를 삭제한다.
        //#section01은 무조건 창 높이인데, #section02, #section03, #section04는 아무리 작아도 박스높이만큼은 유지시켜야 됨
    // 창 높이가 박스 높이보다 작으면 섹션 2,3,4의 높이를 박스 높이로 설정
    // 그렇지 않으면 섹션 2,3,4의 높이는 창 높이로 설정
    // 결론 : 섹션 2,3,4의 높이는 최소 박스 높이 이상이여야 한다.
    // 필요한 변수 : 창 높이, #section02, #section03, #section04의 높이,
    // 변수 #section02, #section03, #section04의 높이 = var section234Height
    // 박스높이가 창 높이보다 큰 경우 = 창높이 < 박스 높이 ? 박스높이 : 창높이
    /*if(windowHeight < boxHeight){
        section234Height = boxHeight;
    }
    else if(windowHeight >= boxHeight)(= else){
        section234Height = windowHeight;
    }*/
    // = section234Height = windowHeight < boxHeight ? boxHeight : windowHeight;
    // 여기까지 하면 작아지긴하는데 Top값이 안 줄어들어서 윗 부분이 먹혀버림
    // ㄴ> 박스 높이가 창값으로 바꼈는데 인식을 못해서 그럼
    // ㄴ> 조건문 수정해줘야됨
    //  if(windowHeight < boxHeight){
    //    section234Height = boxHeight;
    
    var windowHeight = $(window).height(); //969
    var section234Height = windowHeight; // 아무 조건도 없는 기본은 창 높이고, 조건문 달아서 실행함
    var boxHeight = $(".content-wrap").height(); //550
    //(if문에서 실행했기 때문에 없어도 됨)var boxTop = (windowHeight-boxHeight)/2; //(969-550)/2 = 209.5
    // ㄴ> 박스 높이보다 창 높이가 작을 때, 섹션 높이는 박스 높이로 설정 됨
    // 그러니 박스의 탑 값은 창 높이랑 박스 높이랑 같기 때문에 0으로 설정한다.
    
    //모든 코딩이 끝나면 새로고침시 실행하게끔 setTimeout해주고, setTimeout, resizeFn 외의 코드들은 지워버리기

//    $(".content-wrap").css({ top:boxTop });
//    //여기까지만 하면 계속 새로고침해야만 content-wrap이 중앙으로 옴 -> resize 걸어줘야됨

//    if(windowHeight < boxHeight){
//        section234Height = boxHeight;
//        boxTop = 0;
//        // = (boxHeight-boxHeight)/2; 
//    }
//    else{ //크거나 같음
//        section234Height = windowHeight;
//        boxTop = (windowHeight-boxHeight)/2; 
//    }

//    $(".section234").css({height:section234Height});
    
    var rl = (windowWidth-boxWidth)/2;
    var windowWidth = $(window).width(); //1170
    var boxWidth = $(".content-wrap").width(); //450
    
//박스 넓이가 바뀌면 height도 바뀌여야 함 이거 할거임
//박스 높이(고정되어있음) = 박스 너비 (450)* 높이의 비율 = 1.22222
// boxHeight = boxWidth * 1.22222
// boxWidth는 boxHeight 위 쪽으로 변수 써주기

//창 너비가 1170이하면 [조건문] 박스를 가운데 정렬하는 애니메이션 만들기
// right(또는 left) = (창너비-박스너비)/2
// 창 너비 변수 생성하기
// 그리고 right(또는 left) 변수 생성하기

    setTimeout(resizeFn,100);

    function resizeFn(){
        
        rl = (windowWidth-boxWidth)/2;
        windowWidth = $(window).width(); //1170
        windowHeight = $(window).height(); //969
        section234Height = windowHeight;
        boxWidth = $(".content-wrap").width(); //450
        boxHeight = boxWidth * 1.22222;
        boxTop = (windowHeight-boxHeight)/2; //(969-550)/2 = 209.5

        //조건같이 계산 해야 되는 것들 따로
        if(windowHeight < boxHeight){
            section234Height = boxHeight;
            boxTop = 0; //section2(3, 4) 꼭대기에 딱 붙어서 더이상 위로 못 올라가게
        }
        else{
            section234Height = windowHeight;
            boxTop = (windowHeight-boxHeight)/2;
        };

        if( windowWidth <= 1170 ){ // boxWidth의 부모 넓이가 1170px이기 때문에 기준을 1170으로 잡음
            $("#section02 .content-wrap, #section04 .content-wrap").stop().animate({ right:rl-15 },300);
            // $("#section02 .content-wrap, #section04 .content-wrap").css({ right:rl-15 }) : 애니메이션 하기 전
            // $("#section02 .content-wrap, #section04 .content-wrap").css({ right:rl-15 = 마진값 빼줘야 한쪽으로 안 치우치고 중앙에 옴});
            $("#section03 .content-wrap").stop().animate({ left:rl-15 },300);
        }
        else{
            $("#section02 .content-wrap, #section04 .content-wrap").stop().animate({ right:0 },100);
            $("#section03 .content-wrap").stop().animate({ left:0 },100);
        };
    };

    //DOM 구조 따로 정리하기
    $(".content-wrap").css({ top:boxTop, height:boxHeight });
    $(".section234").css({height:section234Height});
    $(window).resize(function(){
        resizeFn();
    })
},

/*        section234Fn:    function(){} =
        section02Fn:function(){},
        section03Fn:function(){},
        section04Fn:function(){},
*/
        section05Fn:    function(){
            
        },
        section06Fn:    function(){
            
        },
        section07Fn:    function(){
            
        },
        section08Fn:    function(){
            
        },
        section09Fn:    function(){
            
        },
        section10Fn:    function(){
            
        },
        section11Fn:    function(){
            
        },
        section12Fn:    function(){
            
        },
        section13Fn:    function(){
            
        },
        section14Fn:    function(){
            
        },
        footerFn:         function(){
            
        }
    }; 

//위에서 함수를 만들고 밑에서 함수를 실행한다.
    brando.init();

})(window,document,jQuery);