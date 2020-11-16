;(function(window,document,$,undefined){ //항상 밑에서 위로 보기(업데이트 항목은 위로 써줌)

    var brando = {
        init:           function(){ 
            var that=this;
                that.headerFn();
                that.section01Fn();
                that.section234Fn();
                /* 
                that.section234Fn(); 
                 =  that.section02Fn();
                    that.section03Fn();
                    that.section04Fn();
                */
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
        },//브란도에서 최초 실행될 js

        headerFn:       function(){
            var url = null; 
            $(".smooth-btn").on({ 
                click : function(event){ 
                    event.preventDefault();
                    url = $(this).attr("href");
                   $("html,body").stop().animate({ scrollTop: $( url ).offset().top },800) 
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
                    $(".mobile-menu").stop().slideUp(0);
                }
            });

            //btn-click
            $(".mobile-btn").on({
                click : function(event){
                    event.preventDefault();
                    $(this).toggleClass("addClose");
                    $(".mobile-menu").stop().slideToggle(300);
                }
            });


        },//헤더의 js

        section01Fn:    function(){
            
            var n = $(".slide").length-1; // 슬라이드 전체 갯수, 슬라이드 추가/삭제할때마다 변경하기 싫어서, index번호는 0부터 시작하니까 -1해주기
            var cnt = 0;
            
            var winH = 969;
            var imgH = $(".hungry").height();
            var imgTop = (winH-imgH)/2;
    
            setTimeout(resizeFn,100);

            function resizeFn(){                
                winH = $(window).height();
                $("#section01").css({ height:winH });
                
                imgH = $(".hungry").height();
                imgTop = (winH-imgH)/2;
                $(".hungry").css({ top:imgTop });
            };

            //Smooth Scrolling Event
            $(".arrow-down-btn").on({
                click : function(){
                    $("html,body").stop().animate({ scrollTop : $("#section02").offset().top},700);
                }
            });

            $(window).resize(function(){
                resizeFn();
            });

            setInterval(nextCountFn,3000);
            
            //메인 NEXT 슬라이드
            function mainNextSlideFn(){
                $(".slide").css({ zIndex:1 }).stop().animate({opacity:1},0);
                $(".slide").eq(cnt==0? n:cnt-1).css({ zIndex:2 });
                $(".slide").eq(cnt).css({ zIndex:3 }).stop().animate({opacity:0},0).animate({opacity:1},800);
                //console.log("next",cnt);
                }

            //메인 PREV 슬라이드
            function mainPrevSlideFn(){
                $(".slide").css({ zIndex:1 }).stop().animate({opacity:1},0);
                $(".slide").eq(cnt).css({ zIndex:2 });
                $(".slide").eq(cnt==n? 0:cnt+1).css({ zIndex:3 }).stop().animate({opacity:1},0).animate({opacity:0},800);
                //console.log("prev",cnt);
                }

            //PREV 슬라이드
            function prevCountFn(){
                cnt--;
                if(cnt<0){cnt=n};
                mainPrevSlideFn();
            }

            //NEXT 슬라이드
            function nextCountFn(){
                cnt++;
                if(cnt>n){cnt=0};
                mainNextSlideFn();
            }

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

        section234Fn:    function(){
         
            var rl = (windowWidth-boxWidth)/2;
            var windowWidth = $(window).width(); //1170
            var windowHeight = $(window).height(); //969
            var section234Height = windowHeight; 
            var boxTop = (windowHeight-boxHeight)/2; //(969-550)/2 = 209.5
            var boxWidth = $(".content-wrap").width(); //450
            var boxHeight = boxWidth * 1.22222;
            //            = $(".content-wrap").height(); //550
            var fontSizeH3 = rateH3 * textW;
            var rateH3 = 0.096551724
            var textW = $(".text-wrap").width();
            var fontSizeH4 = rateH4 * textW;   
            var rateH4 = 0.037931034
            var fontSizeP = rateP * textW;     
            var rateP = 0.048275862 

            setTimeout(resizeFn,100);

            function resizeFn(){
                
                rl = (windowWidth-boxWidth)/2;
                windowWidth = $(window).width();
                windowHeight = $(window).height();
                section234Height = windowHeight;
                boxWidth = $(".content-wrap").width();
                boxHeight = boxWidth * 1.22222;

                if(windowHeight < boxHeight+60){
                    section234Height = boxHeight+60;
                    boxTop = 30;
                }
                else{
                    section234Height = windowHeight;
                    boxTop = (windowHeight-boxHeight)/2;
                }
                
                textW = $(".text-wrap").width();
                fontSizeH3 = rateH3 * textW;
                fontSizeH4 = rateH4 * textW;  
                fontSizeP = rateP * textW;    

                $('.text-wrap h3').css({ fontSize:fontSizeH3 });
                $('.text-wrap h4').css({ fontSize:fontSizeH4 });
                $('.text-wrap p').css({ fontSize:fontSizeP });

                $(".content-wrap").css({ top:boxTop, height:boxHeight });
                $(".section234").css({ height:section234Height });
            
                if( windowWidth <= 1170 ){
                    $("#section02 .content-wrap, #section04 .content-wrap").stop().animate({ right:rl-15 },300);
                    $("#section03 .content-wrap").stop().animate({ left:rl-15 },300);  
                }
                else{
                    $("#section02 .content-wrap, #section04 .content-wrap").stop().animate({ right:0 },100);
                    $("#section03 .content-wrap").stop().animate({ left:0 },100);
                }
            };
            
            $(window).resize(function(){
                resizeFn();
            });


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
        //1. 갤러리 이미지 버튼을 클릭하면 
        //1-1. 클릭한 이미지를 모달창에 띄우기
        //1-2. 클릭한 이미지 파일 이름 가져오기 그리고 번호(이미지 인덱스번호)만 추출하기
                //ㄴ>tag의 property를 attr 메소드를 이용하여 가져온다.
        //1-3. 단, 페이드 인/아웃 효과를 준다.

        var fileName = null; //비어있는 값(값이 없음) -> 값이 들어가면 null은 없어짐
        var posNum = null;
        var num = null;

        //"20" + "30" = "2030" -> 문자열

        $(".gallery-img-btn").on({//function전 click : 이벤트리스너
            click : function(e){// gallery-img-btn를 클릭하면 파일 이름을 가져온다 -> 이벤트 핸들러
                e.preventDefault();
                //1 - 하위 요소 검색 + 속성(attr = property) 추출
                //2 - 속성 내용 중 문자열 위치를 겁색 search(), indexOf("검색할 문자열") [권장함]
                //3 - 해당 위치에서 특정 문자나 문자열을 추출 / 문자열.slice(시작,끝) 문자열 추출
                //4 - Number(); -> 내장함수, 문자형 숫자를 숫자형으로 변환

                //fileName = $(this).children().attr("src"); // this(gallery-img-btn).의 자식.의 속성.중에 href라는 속성 을 가져온다.
                //fileName = $(this).children("img").attr("src"); // (class 속성도 찾을 수 있음, 광범위하고 구체적) children에 img 써도 되지만 지금은 자식이 하나밖에 없어서 그냥 안 써도 알아서 img인줄 앎 
                fileName = $(this).find("img").attr("src"); // 내가 클릭한 것 아래의 요소 중에서 찾아라. img라는 요소를 찾아라. 그 중에서 이미지의 속성을 가져와라
                //둘 다 쓸 줄 알아야 됨
                //posNum = fileName.search("img");// fileName의 img의 인덱스를 찾아라(문자 열(파일경로까지 다) = 문자 숫자를 알려줌)
                //posNum = fileName.search(".jpg");// fileName의 jpg의 인덱스를 찾아라(문자 열 = 문자 숫자를 알려줌)
                //posNum = fileName.indexOf(".jpg");// search보다 더 정확하고 정밀함 (=지금 나오는 결과는 동일)
                //posNum = fileName.indexOf(".jpg");// search보다 더 정확하고 정밀함 (=지금 나오는 결과는 동일)
                posNum = fileName.indexOf(".jpg");// search보다 더 정확하고 정밀함 (=지금 나오는 결과는 동일)
                //posNum = fileName.lastindexOf(".jpg")-2;// search보다 더 정확하고 정밀함 (=지금 나오는 결과는 동일)
                //num = fileName.slice(posNum-2, posNum);//(포지션)인덱스번호.slice(글자가시작하는위치,글자가끝나는위치)
                // = num = fileName.slice(posNum,posNum+2)로 쓰면
                //posNum = fileName.indexOf(".jpg")-2; //-2 써줘야함

                //fileName = '0123456789';
                num = fileName.slice(0, 2);  //0 1   //0이상 2미만의 가운데 숫자들
                num = fileName.slice(0, 3);  //0 1 2 //0이상 3미만의 가운데 숫자들
                num = fileName.slice(2, 5);  //2 3 4 //2이상 5미만의 가운데 숫자들
                num = fileName.slice(8, 9);  //8(인덱스넘버는 8, 실제로는 9번째) //8이상 9미만의 가운데 숫자들
                num = fileName.slice(9, 10); //8(인덱스넘버는 9, 실제로는 10번째) //9이상 10미만의 가운데 숫자들
                num = fileName.slice();  //123456789 //끝위치가 필요없으면 내가 시작하고 싶은 위치만 써주면 됨
                num = fileName.slice(0); //123456789
                num = fileName.slice(8); //89
                num = fileName.slice(9); //9
                // 역순
                num = fileName.slice(-1); //9 //-는 뒤에서부터 추출
                num = fileName.slice(-2); //89 //-는 뒤에서부터 추출
                num = fileName.slice(0, -1); //012345678 //0부터 마지막 -1전 까지
                num = fileName.slice(0); //-1을 빼면 전체가 다 나옴
                num = fileName.slice(-2, -1); //8 //-2미만 -1전까지
                num = fileName.slice(-4, -1); //678 //-2미만 -1전까지
                num = fileName.slice(-4); //6789 //-2미만 0전까지

                num = fileName.slice(-6, -4); //정확히 img의 숫자만 추출함 //-6에서 -4 전까지
                
                console.log(fileName, Number(num)); //Number(num) : 문자로 되어진 num를 순수한 정수형으로 바꿔줌
                console.log(fileName, parseInt(num)); //parseInt(num) = Number(num)
                //console.log(fileName, num); //012가 콘솔에 나오는 이유는 숫자로 인식하지 않기 때문, 숫자로 인식한다면 0은 안 나옴
            }
        })


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