var str = 'Быть или не быть, вот в чём вопрос.';
var count = 0;
    for(var i = 0; i < str.length; i++) {
      for(var j = i + 1; j < str.length; j++) {
            if(str[i] === str[j]) {
                 var pos = str.indexOf(str[i]);
            }
         
         }
    }while (pos !== -1) {
         count++;
         pos = str.indexOf(str[i], pos + 1);
        }
        
console.log(count);