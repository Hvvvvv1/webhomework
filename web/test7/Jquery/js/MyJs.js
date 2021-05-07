var select_pic = false;
var add="<div class=\"InputAddOn\"><span>1</span><input><button>Delete</button></div>";

$(document).ready(function(){
	/*滑动页面切换*/
	$("div.m-data,div.m-other,div.show_box").hide();
	$("button.picture,button.data,button.other").on("mouseover mouseout click", function(event) {
        if(select_pic) return;
        if (event.type == "mouseover") {
            $(this).css("backgroundColor", "rgb(100,0,0,0.2)");
            $(this).css("fontSize","22px");
        } else if (event.type == "mouseout") {
            $(this).css("backgroundColor", "white");
            $(this).css("fontSize","18px");
        } else if (event.type == "click") {
        	var txt = $(this).text();
        	alert(txt);
        	if(txt == "picture"){
        		$("div.m-data,div.m-other").slideUp(500,function(){
        			$("div.pic").slideDown(500);
        		});
            }else if(txt == "data"){
            	$("div.pic,div.m-other").slideUp(500,function(){
        			$("div.m-data").slideDown(500);
        		});
            }else if(txt == "other"){
            	$("div.pic,div.m-data").slideUp(500,function(){
        			$("div.m-other").slideDown(500);
        		});
            }
        }
    });

	/*对图片的操作*/
	$(".box img").on("mouseover mouseout click", function(event) {
		if(select_pic) return;
		if (event.type == "mouseover") {
			$(this).css("border","2px solid")
        } else if (event.type == "mouseout") {
            $(this).css("border", "");
        } else if (event.type == "click") {
            $(this).css("border", "");
        	event.stopPropagation();
            $(".show_box img").attr("src", $(this).attr("src"));
            $("div.show_box").siblings().css("filter", "blur(3px)");         
            $("div.show_box").fadeIn(1000);
            select_pic = true;
        }
	});
	$(window).click(function() {
		if(select_pic){
            $("div.show_box").fadeOut(500,function(){
            	$("div.show_box").siblings().css("filter", "");
            	select_pic = false;
            });    
		}
	});

	/*输入框的增删*/
	for(var i = 1; i <= 5; i++){
		$(".addBtn button").parent().before(add);
		$(".InputAddOn:nth-last-child(2)>span").html(i);
	}
	$(".addBtn button").click(function() {
		var num = ($(".InputAddOn").length)==0?1:parseInt($(".InputAddOn:nth-last-child(2)>span").text())+1;
		$(this).parent().before(add);
		$(".InputAddOn:nth-last-child(2)>span").html(num);
	});
	$(document).on("click",".InputAddOn button",function(){
		$(this).parent().remove();
	})
});