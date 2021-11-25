var years = +prompt('Введите Свой Возраст');


 if(years> 1 && years<=18){
     alert('Вы Ещё Молоды. Вам Нужно Учится');
 }else if(years> 18 && years<=45){
     alert('Вам Нужно Работать')
 }else if(years > 45 && years <= 60){
     alert('Вам Скоро На Пенсию')
 }else if(years > 60 && years <= 150){
     alert('Вы Пенсионер')
 } else alert('Что-то Пошло Не Так')