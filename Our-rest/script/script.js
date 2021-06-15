
var ksuha=document.getElementById("ksuha");
var ksyuhatext=document.getElementById('ksyuhatext');
var aboutme=document.getElementById("about-me");
var orderksyuha=document.getElementById('orderksyuha');
var	kiraphoto=document.getElementById('kiraphoto');
var aboutmekira=document.getElementById('about-mekira');
var kira=document.getElementById("kira");
var orderkira=document.getElementById('orderkira');
var	fonksyuha=document.getElementById("fonksyuha");
var vova=document.getElementById("vova");
var ordervova=document.getElementById('ordervova');
var vovaphoto=document.getElementById('vovaphoto');
var aboutmevova=document.getElementById('about-me-vova');
var loadribbon=document.getElementById('load-ribbon');
var ouraim=document.getElementById('ouraim');
var wrapphoto=document.getElementById('wrapphoto')
var	menu=document.getElementById('menu');
var	leftsidemenublock=document.getElementById('leftside-menu-block');
var rightsidemenublock=document.getElementById('rightside-menu-block');
var leftblock=document.getElementById('left-block');
var rightblock=document.getElementById('right-block');
var content=document.getElementById('content');
var body=document.getElementsByTagName('body')[0];
var	rightsidemenutext=document.getElementById('rightside-menu-text');
var leftsidemenutext=document.getElementById('leftside-menu-text');


var	ribbon=document.getElementById('ribbon')
  var links = document.querySelectorAll('a');  
  console.log(links);
  links.forEach(function (link) {
    link.addEventListener('click', onLinkClicked);
    
    function onLinkClicked(event) {
      event.preventDefault();
      ribbon.style.animationName='animam';
      ribbon.style.animationDuration='1s';
      ribbon.style.animationFillMode='forwards'
      setTimeout(anmation,1000);
      
    }
    function anmation() {
      window.location = link.href;  
    }
  
  });