
$(function(){
//棣栭〉鎼滅储灞忚斀
$(".search-theme a,.search-btn").click(function(){
    return false;
});

    //瀹氫箟寮瑰嚭锛屾敹鍥炴柟娉�
    var pullToggle={
        pullOut:function(){
            $('.loading').fadeIn();
            $('.model-box').velocity('fadeOut');
            $('#model').velocity({
                right:'-120%'
            },{
               complete:function(){
                   $('#about').attr('src','about:blank');
               }
            });
            return false
        },
        pullIn:function(src){

            $('.model-box').velocity('fadeIn');
            $('#model').velocity({
                right:0
            },{
                duration:500,
                complete:function(){
                         $('#about').attr('src',src);
                    function load(){
                        $('.loading').fadeOut();
                    }
                    setTimeout(load,2000)
                }
            });
            return false
        }
    };

    //鎵嬫満绔脊鍑哄唴椤�
    $('.section').on('click','.section-mobile li a',function(event){
        event.preventDefault();

        var aLink=$(this).attr('href');

        pullToggle.pullIn(aLink);

    });




    /*鑿滃崟瀵艰埅*/
    var nav=$('nav');
    $('.menu-btn').click(function(event){

        if(nav.css('right')=='0px'){
            nav.velocity({right:'-80px'},300)
        }else{
            nav.velocity({right:'0'},300)
        }
        return false
    });

    //鑿滃崟鏀跺洖
    $('body').on('click',function(){
        if($('nav').width()<80){
            nav.velocity({right:'-80px'},300)
        }
    });
    //寮瑰嚭灞傛敹鍥�
    $('.model-box').on('click',function(){
        pullToggle.pullOut();
    });
    $(window).resize(function(){
        nav.css('right',0)
    });


    /*绗竴灞忚疆鎾�*/
    var mySwiper = new Swiper ('.banner-container', {

        slidesPerView: 1,
        spaceBetween:0,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        loop: true,
        grabCursor: true,
        keyboardControl:true,
        noSwiping : true,
        observer:true,

        // 鍓嶈繘鍚庨€€鎸夐挳
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        onTransitionEnd:function(swiper){
            if(swiper.activeIndex==1){
                $('.banner-item1 h1').velocity({opacity:1, translateY:'0'});
                $('.banner-item1 span').velocity({opacity:1, translateY:'0'},{delay:600});
                $('.banner-item1 .p1').velocity({opacity:1, translateX:'0'},{delay:1200});
                $('.banner-item1 .p2').velocity({opacity:1, translateX:'0'},{delay:1200});
            }
        },
        onTransitionStart:function(swiper){
            if(swiper.activeIndex==1){
                $('.banner-item1 h1').velocity({opacity:0,translateY:'-40px'},{ duration:0});
                $('.banner-item1 span').velocity({opacity:0, translateY:'40px'},{duration:0});
                $('.banner-item1 .p1').velocity({opacity:0, translateX:'40px'},{duration:0});
                $('.banner-item1 .p2').velocity({opacity:0, translateX:'-40px'},{duration:0});
            }
        }


    });

    /*绗簩灞�*/

   /* $('.btn-arrow').on('click',function(){
        pullToggle.pullOut();

    });*/
    $('.btn-arrow').click(function(){
        pullToggle.pullOut();

    });




    /*$('.about-tab').on('click','span',function(){
        var _index=$(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.about-con').find('li').eq(_index).fadeIn().siblings('li').fadeOut();
    });*/


    /*绗笁灞�*/
    //var section3=(function(){
        var serviceBox=$('.service');

        serviceBox.find('li').hover(function(){
            var _this=$(this);
            var _title=_this.find('.service-title');
            var _con=_this.find('.service-con');
            var _span=_this.find('.icon-box span');
            var _spanClass=_span.attr('class');
            var _index=_this.index() ;


            _this.find('.icon-box i').stop(true,true).animate({height:'0'},300,function (){//鍦堟秷澶�
                _this.stop().css({backgroundColor:'#e8b721',color:'#fff'});//鑳屾櫙鍑虹幇
                _title.stop(true,true).css({top:'20px'},300);   //鏍囬鍗囬珮
                _con.stop(true,true).animate({opacity:1},300);       //鍐呭鍑虹幇


                if(!_span.hasClass('service'+(_index+1)+'-hover')){
                    _span.addClass('service'+(_index+1)+'-hover')
                }
            });

        },function(){
            var _index=$(this).index() ;
            var _span=$(this).find('.icon-box span');

            $(this).find('.icon-box i').stop(true,true).animate({height:'140px'},200);//鍦堝嚭鐜�
            $(this).css({backgroundColor:'transparent',color:'#333'});//鍘昏儗鏅鑹�
            $(this).find('.service-title').stop().css({top:'190px'},300);//鏍囬鍥炲埌鍘熸潵浣嶇疆
            $(this).find('.service-con').stop().css("opacity",0);//鍐呭闅愯棌

            if(_span.hasClass('service'+(_index+1)+'-hover')){
                _span.removeClass('service'+(_index+1)+'-hover')
            }
        });
    //})();

    //鎴戜滑鐨勬湇鍔★紝浜岀骇瀵艰埅鏄鹃殣
   $('.section-mobile').on('click','ul li',function(){

        var _index=$(this).index();
        var stateBox=$('.section-mobile-item');
        var state=$(this).attr('data-state');

        if(state=='hide'){

            stateBox.find('dd').eq(_index).velocity("finish").velocity('fadeIn').siblings('dd').velocity('fadeOut');

            $(this).attr('data-state','show').siblings('li').attr('data-state','hide');
        }
        if(state=='show'){
            stateBox.find('dd').velocity("finish").velocity('fadeOut');
            $(this).attr('data-state','hide').siblings('li').attr('data-state','hide')
        }

    });
        $(".section3 .section-mobile li").click(function() {
        var sin = $(this).index();
        $(this).parent().attr("id","s3mb");
        $(this).addClass('ftblue').siblings().removeClass('ftblue');
        $(".lislide").eq(sin).show().siblings().hide();
        return false;
        });
    /*绗洓灞�*/
    // var newList=$('.news-list');

    // newList.find('li').hover(function(){
    //     $(this).find('.news-pic-cover').stop().animate({'top':'-100%'},300);
    //     $(this).find('.news-main-cover').stop().animate({'bottom':'0'},300);

    // },function(){
    //     $(this).find('.news-pic-cover').stop().animate({'top':'0'},300);
    //     $(this).find('.news-main-cover').stop().animate({'bottom':'-100%'},300);
    // });

    // var mySwiper2 = new Swiper('.news-tab',{
    //     watchSlidesProgress : true,
    //     watchSlidesVisibility : true,
    //     slidesPerView : 4,
    //     spaceBetween : 10,
    //     onTap: function(){
    //         mySwiper3.slideTo( mySwiper2.clickedIndex)
    //     }
    // });
    // var mySwiper3 = new Swiper('.news-list-box',{

    //     onSlideChangeStart: function(){
    //         updateNavPosition()
    //     }

    // });

    // function updateNavPosition(){
    //     $('.news-tab .active-nav').removeClass('active-nav');
    //     var activeNav = $('.news-tab .swiper-slide').eq(mySwiper3.activeIndex).addClass('active-nav');


    //     if (!activeNav.hasClass('swiper-slide-visible')) {
    //         console.log(1);
    //         if (activeNav.index()>mySwiper2.activeIndex) {
    //             console.log(2);
    //             var thumbsPerNav = Math.floor(mySwiper2.width/activeNav.width())-1;
    //             mySwiper2.slideTo(activeNav.index()-thumbsPerNav)
    //         }
    //         else {
    //             console.log(3);
    //             mySwiper2.slideTo(activeNav.index())
    //         }
    //     }
    // }

    // $('.news').on('click','.more-btn,.news-list ul li a',function(event){
    //     event.preventDefault();

    //     var aLink=$(this).attr('href');

    //     pullToggle.pullIn(aLink);
    // });

    /*绗簲灞�*/

 

    /*绗叚灞�*/


    /*绗竷灞�*/
    $('.index-login').on('click','a',function(){
        event.preventDefault();

        var aLink=$(this).attr('href');

        pullToggle.pullIn(aLink);
    });

    $('.test').on('click',function(){
        event.preventDefault();

        var aLink=$(this).attr('href');

        pullToggle.pullIn(aLink);
    });



    /*鍏ㄥ睆婊氬姩*/
    $("#fullbox").fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4','page5','page6','page7','page8'],
        menu: 'header',
        scrollingSpeed: 500,
        autoScrolling: true,
        afterLoad: function(anchorLink, index){ //杩涘叆绗瑇灞忓洖璋冨嚱鏁�

            var menuList= $('.menu').find('li');
            var navbarWidth=menuList.eq(index-1).width();
            var navbarPos=menuList.eq(index-1).position('.menu').left+25;
            $(".lang a:first").addClass("cglang");

            $('.navbar').stop(true,true).animate({left:navbarPos+'px',width:navbarWidth+'px'},500);
            /*绗竴灞�*/
            if(index == 2){
                $('.section2').find('.section-mobile li').velocity('transition.swoopIn',{stagger:100});
                $('.section-mobile-item').fadeIn(1000)
            }
            if(index == 3){
                $('.section3').find('.section-mobile li').velocity('transition.slideLeftBigIn',{stagger:100});
                $('.service ').find('i').velocity({height:'140px'},300);
                $('.section-mobile-item').fadeIn(1000)
            }
            if(index==4){
                $('.section4').find('.theme').velocity('transition.slideRightIn');
                $('.news-tab').velocity('transition.slideLeftIn');
                $('.news-list-box').velocity('transition.slideUpBigIn');
            }

        },
        onLeave: function(index, direction){ //绂诲紑绗瑇灞忓洖璋冨嚱鏁�
            if(index==2){
                $('.section2').find('.section-mobile li').velocity('fadeOut');
            }
            if(index==3){
                $('.section3').find('.section-mobile li').velocity('fadeOut');
            }
            if(index==4){
                $('.section4').find('.theme').velocity('transition.slideRightOut');
                $('.news-tab').velocity('transition.slideLeftOut');
                $('.news-list-box').velocity('transition.slideUpBigOut',{delay:300});
            }
        }

    })

    var barPos;
    var navLi = $(".menu ul li");
    function navSlide(){
        navLi.each(function() {
            if($(this).attr("class")=="active"){
                barPos = $(this).position("#menu").left;
                var barPos_t = barPos+25;
                $(".navbar").stop().animate({marginLeft:barPos_t},300)
            }
        });
        
    }
    
    //瀵艰埅鏉℃偓鍋�-妯潯璺熼殢
    navLi.hover(function(){
        if(!$(this).hasClass("active")){
            $(this).addClass("active_s");
            barPos = $(this).position("#menu").left;
            var barPos_t = barPos+25;
            $(".navbar").stop().animate({marginLeft:barPos_t},300)
        }
    },function(){
            $(this).removeClass("active_s");
            navSlide()

    })


});

/*$(document).ready(function(){
    $(".morebutton").hover(function(){
        $(".lastsearch i").stop(true).css("display","block");
    });
    $(".lastsearch").mouseout(function(){
        $(".lastsearch i").hide();
    });
})*/