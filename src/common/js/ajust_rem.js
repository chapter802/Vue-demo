/**
 * Created by Andy on 4/24/17.
 */
var cssEl = document.createElement('style');
document.documentElement.firstElementChild.appendChild(cssEl);

function setPxPerRem(){
  var dpr = 1;
  //把viewport分成10份的rem，html标签的font-size设置为1rem的大小;
  var pxPerRem = document.documentElement.clientWidth * dpr / 37;
  cssEl.innerHTML = 'html{font-size:' + pxPerRem + 'px!important;}';
}
setPxPerRem();