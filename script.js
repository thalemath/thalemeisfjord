console.log("hello world");


var   projects      = document.querySelector(".indexGalleri"),
      navigasjon    = document.querySelector(".sidepanel"),
      projectsLinks = document.querySelectorAll(".overskriftSidepanelElement"),
      projectsBoxes = document.querySelectorAll(".indexGalleriElement"),
      sidepanelElement = document.querySelectorAll(".sidepanelElement");

(function() {
  
  projectsLinks.forEach(function(link) {
    link.addEventListener("mouseenter", function() {
      var dataColor = link.getAttribute('data-color');
      link.style.color = dataColor;
    })
    link.addEventListener("mouseout", function() {
      link.style.color = null;
    })
  })

  
  projectsBoxes.forEach(function(link) {
    link.addEventListener("mouseenter", function() {
      var id = link.getAttribute('data-id'),
          target = navigasjon.querySelector('[data-id='+id+']')
          dataColor = target.getAttribute('data-color');
      
      target.style.color = dataColor;
    })
    link.addEventListener("mouseout", function() {
      var id = link.getAttribute('data-id'),
          target = navigasjon.querySelector('[data-id='+id+']');
      target.style.color = null;

    })
  })

})()

document.getElementById('arbeiderKnapp').onclick = function(){
        document.getElementsByClassName('sidepanel')[0].classList.toggle("synlig");
      }

