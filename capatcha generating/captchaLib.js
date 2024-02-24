var cpatcha = (captchapatern) =>{
    var pattern;
pattern = captchapatern ? captchapatern : getrandomPattern();
}
    var getrandomPattern = () =>{
    var pattern ='ulnlu';
    pattern.split();
    var generateCaptcha = ' ' ;
    for(var i = 1; i <= 5; i++){
    generateCaptcha += ` ${captchaGenration(pattern[Math.floor(Math.random()* pattern.length)])}`;
    } 
    return generateCaptcha;
    } 

    var captchaGenration = (type) => {
        type = type.trim();
        type = type.toLowerCase();
        var minRange,maxRange;
        switch (type){
         case 'u':
             minRange = 65;
             maxRange = 90;
             var upperaChar = Math.round(Math.random() * (maxRange - minRange) + minRange);
              return String.fromCharCode(upperaChar);
             break;
         case 'l':
             minRange = 97;
             maxRange = 122;
             var lowerChar = Math.round(Math.random() * (maxRange - minRange) + minRange); 
             return String.fromCharCode(lowerChar);
             break;
         case 'n':
      var no = Math.round(Math.random() * 9);
      return no;
      break;
     }
  }
