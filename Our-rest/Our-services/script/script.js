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