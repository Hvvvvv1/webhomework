var select_pic = false, num = 0, isOver = true;
var add="<div class=\"InputAddOn\"><span>1</span><input><button>Delete</button></div>";
var btnList = document.querySelector(".btn").querySelectorAll("button"),
	liList = document.getElementsByTagName("img"),
	showBox = document.querySelector(".show_box"),
	imgBox = document.querySelector(".show_box").querySelector("img"),
	pageBox = document.querySelectorAll(".pageBox"),
	addBtn = document.querySelector(".addBtn").querySelector("button")
	;
showBox.style.display="none",pageBox[0].style.display="flex",pageBox[1].style.display="none",pageBox[2].style.display="none";

window.onload = function(){
	for(var i = 0; i < btnList.length; i++){
		btnList[i].onclick = function(){
			if(select_pic)return;
			for(var j = 0; j < btnList.length; j++){
				if(this == btnList[j]) num = j;
				else
				pageOut(pageBox[j],j);
			}
			setTimeout(function(){pageIn(pageBox[num], num)}, 500);
			
		}
	}

	function pageIn(e,n){
		if(pageBox[n].style.display == "none"){
			e.style.display = "flex";
			e.style.opacity = '0';
			e.style.transition = 'opacity 1s';
			setTimeout(function(){
			 e.style.opacity = '1' ;
			}, 500);
			
		}
	}

	function pageOut(e,n){
		if(e.style.display == "flex"){
			e.style.transition = 'opacity 1s';
			e.style.opacity = '0';
			pageIsHid = true;
			setTimeout(function(){ e.style.display = "none" }, 500);
		}
	}
	
	for(var i = 1; i < liList.length-1; i++){
		liList[i].addEventListener('click', showMsg);
	}

	/*fade in & 背景模糊*/
	function showMsg(e){
		/*防止用户连续点击导致动画冲突*/
		if(!isOver)return;
		if(!select_pic){
			event.stopPropagation();
			isOver = false;
			showBox.style.display="flex";
			imgBox.src = [this.src];
			for(var i = 0; i < liList.length-1; i++){
				liList[i].style.filter = 'blur(3px)';
			}

			imgBox.style.opacity = 0;
			var timer = setInterval(function() {
					imgBox.style.opacity = num++ / 40;
					if(num >= 40) {
						clearInterval(timer);
						select_pic = true;
						isOver = true;
					}
			}, 20);
		}
	}

	/*fade out*/
	window.onclick = function(){
		/*防止用户连续点击导致运行中断，只有处于图片放大状态且其他动画效果运行完毕才可运行fade out*/
		if(select_pic && isOver){
			isOver = false;
			for(var i = 0; i < liList.length-1; i++){
			liList[i].style.filter = '';
			}
			var timer = setInterval(function() {
				imgBox.style.opacity = num-- / 40;
				if(num <= 0) {
					clearInterval(timer);
					showBox.style.display="none";
					select_pic=false;
					isOver =true;
				}
			}, 15);
		}
	}

	addBtn.onclick=function(){
		var fa=this.parentElement;
		fa.insertAdjacentHTML("beforeBegin",add);
		var btn = document.querySelector(".m-data").querySelectorAll("button");
		var sp = document.querySelector(".m-data").querySelectorAll("span");
		for(var i=0;i<btn.length-1;i++){
			sp[i].innerHTML = i+1;
			btn[i].addEventListener("click",function(){
			this.parentElement.remove();
			});
		}
		
	}
	
}