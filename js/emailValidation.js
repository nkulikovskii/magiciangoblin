$(document).ready(function() {  //Валидация полей e-mail
 $("#validate").keyup(function(){   //Валидация поля e-mail на страницы "Цены/Контакты"
    
    var email = $("#validate").val();
  
    if(email != 0)
    {
    if(isValidEmailAddress(email))
    {
    $("#validEmail").css({
  "background-image": "url('images/validYes.png')"
    });
    } else {
    $("#validEmail").css({
  "background-image": "url('images/validNo.png')"
    });
    }
    } else {
    $("#validEmail").css({
  "background-image": "none"
    }); 
    }
  
    });
  $("#validate1").keyup(function(){ //Валидация поля e-mail на страницы "Гостевая"
    
    var email = $("#validate1").val();
  
    if(email != 0)
    {
    if(isValidEmailAddress(email))
    {
    $("#validEmail1").css({
  "background-image": "url('images/validYes.png')"
    });
    } else {
    $("#validEmail1").css({
  "background-image": "url('images/validNo.png')"
    });
    }
    } else {
    $("#validEmail1").css({
  "background-image": "none"
    }); 
    }
  
    });
    });
  
    function isValidEmailAddress(emailAddress) {    //Функция для проверки корректности e-mail'а, по RegExp (регулярному выражению)
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
    }