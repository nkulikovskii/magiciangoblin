//Переключение вкладок без перезагрузки страницы
$(document).ready(function(){   //Переход на страницу
    $("#newPosts").show();
    $("#music").hide();     
    $("#videos").hide();
    $("#photos").hide();
});

$("#newPostz").click(function () {  //Обработка клика по вкладке "Главная"
    $("#newPosts").show();
    $("#music").hide();
    $("#videos").hide();
    $("#photos").hide();
	
});

$("#muzic").click(function () {    //Обработка клика по вкладке "Фото/Видео"
    $("#newPosts").hide();
    $("#music").show();
    $("#videos").hide();
    $("#photos").hide();
	
});
$("#videoz").click(function () { //Обработка клика по вкладке "Цены/Контакты"
    $("#newPosts").hide();
    $("#music").hide();
    $("#videos").show();
    $("#photos").hide();
	
});

$("#photoz").click(function () { //Обработка клика по вкладке "Гостевая"
    $("#newPosts").hide();
    $("#music").hide();
    $("#videos").hide();
    $("#photos").show();
	
});