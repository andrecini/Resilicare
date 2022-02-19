window.addEventListener("load", function() {
    var loadContainer = document.querySelector("#load");
    var contentContainer = document.querySelector("#content");
  
  setTimeout(function() {
      
        loadContainer.style.display = "none";
        contentContainer.style.cssText = "display: block !important"
    
  }, 3000);
});