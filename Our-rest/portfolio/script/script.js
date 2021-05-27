var	slider=document.getElementById('slider');
var	leftarrow=document.getElementById('left-arrow');
var rightarrow=document.getElementById('right-arrow');
var images=["images/ksyuha1.JPG","images/ksyuha2.JPG"];
var num=0;
function next(){
	num++;
	if(num>=images.length){
		num=0;
	}
	slider.src=images[num];
}

function prev(){
	num--;
	if(num<0){
		num=images.length-1;
	}
	slider.src=images[num]
}

leftarrow.onclick=prev;
rightarrow.onclick=next;


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
	