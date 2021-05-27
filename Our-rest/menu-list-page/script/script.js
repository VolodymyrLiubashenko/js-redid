var background=document.getElementById('background-who-we-are');
var background2=document.getElementById('background-what-we-do');
var background3=document.getElementById('background-will-come-soon');
var background4=document.getElementById('background-view-photos');
var whoweare=document.getElementById('who-we-are');
var whatwedo=document.getElementById('what-we-do');
var willcomesoon=document.getElementById('will-come-soon');
var viewphotos=document.getElementById('view-photos');
whoweare.onmouseover=function(){
	background.style.opacity='1';
	background.style.transform='scale(1.1)';
	background.style.transition="1s";
	whatwedo.style.opacity="0.5";
	willcomesoon.style.opacity="0.5";
	viewphotos.style.opacity="0.5";
}

whoweare.onmouseleave=function(){
	background.style.opacity='0';
	background.style.transform='scale(1)';
	whatwedo.style.opacity="1";
	willcomesoon.style.opacity="1";
	viewphotos.style.opacity="1";

}

whatwedo.onmouseover=function(){
	background2.style.opacity='1';
	background2.style.transform='scale(1.1)';
	background2.style.transition='1s';
	whoweare.style.opacity="0.5";
	willcomesoon.style.opacity="0.5";
	viewphotos.style.opacity="0.5";


}

whatwedo.onmouseleave=function(){
	background2.style.opacity='0';
	background2.style.transform='scale(1)';
	whoweare.style.opacity="1";
	willcomesoon.style.opacity="1";
	viewphotos.style.opacity="1";
}

willcomesoon.onmouseover=function(){
	background3.style.opacity="1";
	background3.style.transform='scale(1.1)';
	background3.style.transition='1s';
	whatwedo.style.opacity="0.5";
	whoweare.style.opacity="0.5";
	viewphotos.style.opacity="0.5";

}

willcomesoon.onmouseleave=function(){
	background3.style.opacity='0';
	background3.style.transform='scale(1)';
	whatwedo.style.opacity="1";
	whoweare.style.opacity="1";
	viewphotos.style.opacity="1";

}

viewphotos.onmouseover=function(){
	background4.style.opacity="1";
	background4.style.transform='scale(1.1)';
	background4.style.transition='1s';
	whatwedo.style.opacity="0.5";
	whoweare.style.opacity="0.5";
	willcomesoon.style.opacity="0.5";

}

viewphotos.onmouseleave=function(){
	background4.style.opacity='0';
	background4.style.transform='scale(1)';
	whatwedo.style.opacity="1";
	whoweare.style.opacity="1";
	willcomesoon.style.opacity="1";

}

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