//Переключение вкладок без перезагрузки страницы
$(document).ready(function(){   //Переход на страницу
    $("#mainDiv").show();
    $("#photoVideoDiv").hide();     
    $("#magicContestDiv").hide();
    $("#priceContactsDiv").hide();
    $("#guestDiv").hide();
});

$("#mainPage").click(function () {  //Обработка клика по вкладке "Главная"
    $("#mainDiv").show();
    $("#photoVideoDiv").hide();
    $("#magicContestDiv").hide();
    $("#priceContactsDiv").hide();
    $("#guestDiv").hide();
	
});

$("#photoVideoPage").click(function () {    //Обработка клика по вкладке "Фото/Видео"
    $("#mainDiv").hide();
    $("#photoVideoDiv").show();
    $("#magicContestDiv").hide();
    $("#priceContactsDiv").hide();
    $("#guestDiv").hide();
	
});
/*
$("#magicContestPage").click(function () {  //Обработка клика по вкладке "Фото/Видео"
    $("#mainDiv").hide();
    $("#photoVideoDiv").hide();
    $("#magicContestDiv").show();
    $("#priceContactsDiv").hide();
    $("#guestDiv").hide();
	
});
*/
$("#priceContactsPage").click(function () { //Обработка клика по вкладке "Цены/Контакты"
    $("#mainDiv").hide();
    $("#photoVideoDiv").hide();
    $("#magicContestDiv").hide();
    $("#priceContactsDiv").show();
    $("#guestDiv").hide();
	
});

$("#guestPage").click(function () { //Обработка клика по вкладке "Гостевая"
    $("#mainDiv").hide();
    $("#photoVideoDiv").hide();
    $("#magicContestDiv").hide();
    $("#priceContactsDiv").hide();
    $("#guestDiv").show();
	
});