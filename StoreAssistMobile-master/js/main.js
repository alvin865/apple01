//메인상단 고정
$(function(){
	var SCROLL_TOP = $(window).scrollTop();
	var hdTit = $(".tit_calendar").offset().top;
	var hdHeight = $(".header").outerHeight();

	$(window).scroll(function(){
		SCROLL_TOP = $(window).scrollTop();		
		if(SCROLL_TOP > hdTit - hdHeight){
			$(".tit_calendar").addClass("scroll");
			console.log("aa");
		} else {
			$(".tit_calendar").removeClass("scroll");
			console.log("bb");
		}
	});
})




//카드내역 상세
function prdView2(e){
	var obj = $(e);

	$(".l_card").removeClass("active");
	obj.parents(".l_card").addClass("active");

	openLayerPopup('popView_cashrecipt'); return false;
}



//공지사항
function gongView(e){
	var obj = $(e);

	$(".l_card").removeClass("active");
	obj.parents(".l_card").addClass("active");

	openLayerPopup('popView'); return false;
}


//등록카드
var swiper = new Swiper(".mainSwiper", {
	slidesPerView: 1,
	spaceBetween: 16,
	centeredSlides: true,
	pagination: {
	  el: ".mainSwiper .swiper-pagination",
	},
});


$(function(){
	//계좌조회
	if ($(".lst_swiper.ty2").length > 0){
		var swiper0 = new Swiper(".lst_swiper", {
			direction: "vertical",
			centeredSlides: true,
			slidesPerView: 5,
			observer: true,
			observeParents: true,
		});
		swiper0.slideTo($(".lst_swiper .current").index(), 1000, false);
	}


	//날짜선택
	if ($(".swiper1").length > 0){
		var swiper1 = new Swiper(".swiper1", {
			direction: "vertical",
			centeredSlides: true,
			slidesPerView: 3,
			observer: true,
			observeParents: true,
		});
		swiper1.slideTo($(".swiper1 .current").index(), 1000, false);

		var swiper2 = new Swiper(".swiper2", {
			direction: "vertical",
			centeredSlides: true,
			slidesPerView: 3,
			observer: true,
			observeParents: true,
		});
		swiper2.slideTo($(".swiper2 .current").index(), 1000, false);

		var swiper3 = new Swiper(".swiper3", {
			direction: "vertical",
			centeredSlides: true,
			slidesPerView: 3,
			observer: true,
			observeParents: true,
		});
		swiper3.slideTo($(".swiper3 .current").index(), 1000, false);
	}


	//계약
	textnum();
	$(".textNum").on('keydown', function(e){
		textnum();
	});

	$(".textNum").on('focus', function(e){
		var value = $(".textNum").val();
		if (value > 0){
			$(".textNum").val("")
		}
		return false;
	});


	//도움말
	$(".btn_i").on("click", function(){
		$(this).parents("div").addClass("on");
	});
	$(document).on("click", function(e){
		if($(".box_i").has(e.target).length === 0){
			$(".box_i").removeClass("on");
		}
		textnum();
	});

	
});




//연도선택
var swiper2 = new Swiper(".lst_swiper", {
	direction: "vertical",
	centeredSlides: true,
	slidesPerView: 3,
	observer: true,
	observeParents: true,
});
swiper2[0].slideTo($(".lst_line .current").index(), 1000, false);
swiper2[1].slideTo($(".lst_line .current").index(), 1000, false);


//밸류 삭제
function reset() {
	$("#accountname, #incomemoney").val('');
}