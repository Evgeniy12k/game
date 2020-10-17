'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
 };

const game = function(){
const randomNumber = parseInt((Math.random()*100)+1);
return  function repeat(){
   
  
        let userNumber = prompt('Введите число ');
        if (isNumber(userNumber)){
           if ( +userNumber < randomNumber ){
               alert ('Загаданное число больше');
               return repeat();
           }   else if ( +userNumber > randomNumber ){
                   alert ('Загаданное число меньше');
                   return repeat();
           }
               else if ( +userNumber === randomNumber ){
                   alert ('Поздравляю, вы угадали!!');
                   return game()(); 
                   
      
           }
           // проверяет является ли числом
        }else if (!isNumber(userNumber)){
            userNumber = confirm('Введите число');
           //  если нажали Отмена
            if (userNumber === null) {
                alert('Пока');
            }else {
                return repeat();
            }
        }
     
}

};

//  запускает функцию на проверку условий 
game()();