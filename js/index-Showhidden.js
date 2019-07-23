// 第一个轮播图客服链接点击按钮
// 显示按钮
var bb = document.getElementById("a1");
var wid = document.getElementById("widthcha");
bb.onclick = function () {
  console.log(88);
  this.style.display = "none"
  wid.style.transition = 1 + "s"
  widthcha.style.width = 470 + "px"
}
// 隐藏按钮
var gx = document.getElementById("btn");
var wid = document.getElementById("widthcha");
var closeBtn = wid.children[0];
console.log(closeBtn)
closeBtn.onclick=function() {
  bb.style.display = "block"
  wid.style.transition = "width 1s linear";
  widthcha.style.width = 0 + "px"
}
