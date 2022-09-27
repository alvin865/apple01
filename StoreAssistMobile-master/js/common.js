var gnbFn = {
	init: function(t) {
		SCROLL_TOP = $(window).scrollTop();
		var hdTit = $(".tit_calendar").offset().top;
		var hdHeight = $(".header").outerHeight();

		$(window).scroll(function(){
			SCROLL_TOP = $(window).scrollTop();
			hdTit = $(".tit_calendar").offset().top;
			hdHeight = $(".header").outerHeight();
			
			if(SCROLL_TOP > hdTit - hdHeight){
				$(".tit_calendar").addClass("scroll");
			} 
			if(SCROLL_TOP < hdTit ){
				$(".tit_calendar").removeClass("scroll");
			} 
		});
	}
};


//팝업 열기
function openLayerPopup(id){
	var $obj = $("#" +id);
	var scrollTop = $(window).scrollTop();
	
	$(".layerPopup").hide();
	$("body").addClass("popfix");
	
	if (!$obj.hasClass("ty2")){
		$obj.fadeIn(100);
		$obj.before("<div class='popup_dim ty1'></div>");
	} else {
		$("#" +id).fadeIn(100, function(){
			$(this).find(".popup").animate({bottom:'0'}, 200);
		});
		$obj.before("<div class='popup_dim'></div>");
	}

	

	$(".b-close, .popup_dim").on("click", function(){
		if (!$obj.hasClass("ty2")){
			$obj.hide();
		} else {
			$obj.hide(0, function(){
				$(this).find(".popup").animate({bottom:'-100%'}, 100);
			});
		}

		$("body").removeClass("popfix");
		$(".popup_dim").remove();
	});
}






//팝업 위 팝업 
function openLayerPopup1(id){
	var $obj = $("#" +id);
	var scrollTop = $(window).scrollTop();

	$("body").addClass("popfix");
	
	
	if (!$obj.hasClass("ty2")){
		$obj.fadeIn(100);
		$obj.before("<div class='popup_dim ty1'></div>");
	} else {
		$("#" +id).fadeIn(100, function(){
			$(this).find(".popup").animate({bottom:'0'}, 200);
		});
		$obj.before("<div class='popup_dim'></div>");
	}

	
	$(".b-close3, .popup_dim").on("click", function(){
		if (!$obj.hasClass("ty2")){
			$obj.hide();
		} else {
			$obj.hide(0, function(){
				$(this).find(".popup").animate({bottom:'-100%'}, 100);
			});
		}

		$("body").removeClass("popfix");
		$(".popup_dim").remove();
	});
}




//팝업 -alert
function openLayerPopup2(id){
	var $obj = $("#" +id);
	var scrollTop = $(window).scrollTop();
	
	$obj.fadeIn(100,function(){
		$(this).find(".popup").animate({top:'50%'}, 200);
		$("body").addClass("popfix");
	});
	
	$obj.before("<div class='popup_dim2'></div>");

	$(".b-close2, .popup_dim2").on("click", function(){
		$obj.hide();
		$obj.find(".popup").css("top","0");
		if (!$(".layerPopup").is(":visible")){
			$("body").removeClass("popfix");
		}		
		$(".popup_dim2").remove();
	});
}

//팝업 -toste
function openLayerPopup3(id){
	var $obj = $("#" +id);
	
	$obj.fadeIn(100,function(){
		$(this).find(".popup").animate({top:'0'}, 200);
	});

	$(".b-close3").on("click", function(){
		$obj.hide();
		$obj.find(".popup").css("top","-50%");
	});
}


//팝업 위에서 팝업열기인데 밑으로올라오는팝업
function openLayerPopup4(id){
	var $obj = $("#" +id);
	var scrollTop = $(window).scrollTop();
	

	$("body").addClass("popfix");
	
	if (!$obj.hasClass("ty2")){
		$obj.fadeIn(100);
		$obj.before("<div class='popup_dim ty1'></div>");
	} else {
		$("#" +id).fadeIn(100, function(){
			$(this).find(".popup").animate({bottom:'0'}, 200);
		});
		$obj.before("<div class='popup_dim'></div>");
	}

	

	$(".b-close3, .b-close, .popup_dim").on("click", function(){
		if (!$obj.hasClass("ty2")){
			$obj.hide();
		} else {
			$obj.hide(0, function(){
				$(this).find(".popup").animate({bottom:'-100%'}, 100);
			});
		}

		$("body").removeClass("popfix");
		$(".popup_dim").remove();
	});
}

$(document).ready(function(){
 // 텝메뉴
 $(".tab-menu-box > li:not("+$(".top-tab-ul > li > a.active").attr("href")+")").hide();
			
 $(".top-tab-ul > li > a").click(function(){ 
	 
	$(".top-tab-ul > li > a").removeClass("active"); 			
	$(this).addClass("active");	
		
	$(".tab-menu-box > li").hide(); 

	$($(this).attr("href")).show(); 

	return false;       
 });  
}); 




  // 천단위 콤마 (소수점포함)
  function numberWithCommas(num) {
    var parts = num.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
  }

  // 숫자 체크(숫자 이외 값 모두 제거)
  function chkNumber(obj){
    var tmpValue = $(obj).val().replace(/[^0-9,]/g,'');
    tmpValue = tmpValue.replace(/[,]/g,'');
    // 천단위 콤마 처리 후 값 강제변경
    obj.value = numberWithCommas(tmpValue);
  }

  // 카드매출 입금, 조회 화면에서 날짜 뒤로가기 버튼 클릭 시 기능
function downDate() {
	v_yyyy = v_yyyymm.substring(0,4)
	v_mm = v_yyyymm.substring(5);

	console.log(v_yyyymm);
	console.log(v_yyyy);

	v_mm = Number(v_mm) - 1;

	if(v_mm == 0) {
		v_yyyy = Number(v_yyyy) - 1;
		v_mm = 12;
	}

	if(v_mm < 10) {
		v_yyyymm = v_yyyy + "-0" + v_mm;
		v_mm = "0" + v_mm;
	} else {
		v_yyyymm = v_yyyy + "-" + v_mm;
	}

	console.log(v_mm);

	v_yyyymm = v_yyyy + "-" + v_mm;
}

  // 카드매출 입금, 조회 화면에서 날짜 앞으로가기 버튼 클릭 시 기능
function upDate() {
	v_yyyy = v_yyyymm.substring(0,4)
	v_mm = v_yyyymm.substring(5);

	console.log(v_yyyymm);
	console.log(v_yyyy); 

	v_mm = Number(v_mm) + 1;

	if(v_mm == 13) {
		v_yyyy = Number(v_yyyy) + 1;
		v_mm = 1;
	}

	if(v_mm < 10) {
		v_yyyymm = v_yyyy + "-0" + v_mm;
		v_mm = "0" + v_mm;
	} else {
		v_yyyymm = v_yyyy + "-" + v_mm;
	}

	console.log(v_mm);

	v_yyyymm = v_yyyy + "-" + v_mm;
}