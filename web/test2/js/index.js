var liList = document.querySelectorAll('li');
for(i = 0; i < liList.length; i++) {
    var item = liList[i];
    item.addEventListener('click', showMsg)
}

function changeColor() {
	document.getElementById("p1").style.color = "red";
}

function returnDay() {

	var today = new Date();
	document.getElementById("head").innerHTML = today.getFullYear() + "-" 
	 + (today.getMonth()+1) + "-" + today.getDate();
}

function addToClass() {
	document.getElementById("p3").className = "fn-active";
}

function deleteP8() {
	var child = document.getElementById("p8");
	child.parentNode.removeChild(child);
}

function taoBao() {
	window.location.assign("https://www.taobao.com/");
}

function addLi(){
 	var li = document.createElement("li");
    var node = document.createTextNode("p9");
    li.appendChild(node);
    var ele = document.getElementById("p6").parentNode;
    ele.appendChild(li);

    var liList = document.querySelectorAll('li');
	for(i = 0; i < liList.length; i++) {
    var item = liList[i];
    item.addEventListener('click', showMsg)
	}
}

function touchLi(){
	alert("");
}

function setWidth(){
	var node = document.getElementById("p7").parentNode;
	node.style.width = screen.availWidth;
}

function showMsg(e) {
    var item = e.target;
    alert(item.innerHTML);
}

window.onload = function(){
  var aLi = document.getElementsByTagName("li");

  for(var i=0; i<aLi.length; i++){
    aLi[i].onmouseover = function(){
      this.style.background = "red";
    }
    aLi[i].onmouseout = function(){
      this.style.background = "";
    }
  }
}