var accord = document.getElementsByClassName('accordion title');
var elem;
 document.getElementById('container').addEventListener('click', function() {
   var target = event.target;
     if (target.tagName === 'BUTTON') {
         elem = target.parentNode;
         var title = document.getElementsByClassName('accordion title')[0];
         title.classList.remove('title');
         title.classList.add('close');
         elem.className = 'accordion title';
     }
 });
