var accord = document.getElementsByClassName("accordion");
var i = 0;
 for (i; i < accord.length; i++) {
  accord[i].addEventListener("click", function() {
    this.classList.toggle("active");
      var menu = this.nextElementSibling;
      if (menu.style.maxHeight){
        menu.style.maxHeight = null;
      } else {
        menu.style.maxHeight = menu.scrollHeight + "px";
      } 
    });
}