 

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
responsive:{
        0:{
            items:2
        },
        700:{
            items:5,
        },
        1000:{
            items:7
        }
    },
	margin:20,
	autoPlay :true,
	autoplayHoverPause:true
  });

});
//  $(document).ready(function(){
//     $('#scroll').on('click','a', function (event) {
//         event.preventDefault();
//         var id  = $(this).attr('href'),
//             top = $(id).offset().top;
//         $('body,html').animate({scrollTop: top}, 1500);
//     });
// });
var humbBut = document.getElementById('humb');
var body = document.querySelector('body');

var navBur = document.querySelector('.nav-bur');
var headerSecond = document.querySelector('.header-second');
var w = window.screen.availWidth;
if(w < 1180){
	var menuLink = document.querySelectorAll('.additional-menu a');
	for(let i = 0,len = menuLink.length; len > i;i++){
		menuLink[i].addEventListener('click',openMenu);
	}	
}

function openMenu(event){
	let target = event && event.target || window.event.srcElement;
	let clas = target.classList.contains('prevent');
	let ulMenu = target.parentElement.querySelector('.nav-menu');
	target.classList.toggle('rotate-row');
	ulMenu.classList.toggle('show-menu');
	if(clas){
		event.preventDefault();
	}
}
humbBut.addEventListener('click',togglehumb);
function togglehumb(){
	humbBut.classList.toggle('close');
	body.classList.toggle('overflow');
	headerSecond.classList.toggle('show-header');
}
window.addEventListener('scroll',scroll);
function scroll() {
	var w = window.screen.availWidth;
	if(w > 1170){
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if(scrolled > 200){
			headerSecond.classList.add("fixed-header");
		}
		else{
			headerSecond.classList.remove("fixed-header");
		}
	}
	if(w < 1170){
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if(scrolled > 70){
			headerSecond.classList.add("fixed-header");
		}
		else{
			headerSecond.classList.remove("fixed-header");
		}
	}
}
// регистрация события загрузки документа.
if (window.addEventListener) window.addEventListener("load", init, false);
else if (window.attachEvent) window.attachEvent("onload", init);

// регистрация обработчиков событий элементов формы.
var form1 = document.querySelector('.form');
var name = document.getElementById('name');
var email = document.getElementById('email');
var telp = document.getElementById('telp');
var submit = document.getElementById('submit');
function init() {
    form1.name.onchange = nameOnChange;
    form1.email.onchange = emailOnChange;
    form1.telp.onchange = zipcodeOnChange;
    form1.onsubmit = onsubmitHandler;
}

// метод проверки значения в элементе по регулярному выражению.
function validate(elem, pattern) {
    var res = pattern.test(elem.value);
    if (res === false) {
        elem.className = "invalid";
    } // установка CSS класса 
    else {
        elem.className = "valid";
    }
}

// обработчики событий изменения текста в окне.
function nameOnChange() {
    var pattern = /\S\D/g;
    validate(this, pattern);
}

function emailOnChange() {
    var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
    validate(this, pattern);
}

function zipcodeOnChange() {
    var pattern = /\d{6}/g;
    validate(this, pattern);
}

// событие при отправке формы на сервер.
function onsubmitHandler(e) {

    for (var i = 0; i < form1.elements.length; ++i) {
        if (form1.elements[i].type === "text")
            form1.elements[i].className = "valid";
    }

    var invalid = false;

    for (var i = 0; i < form1.elements.length; ++i) {
        var elem = form1.elements[i];
        // проверка типа элемента и наличия обработчика события onchange.
        if (elem.type == "text" && elem.onchange) {
            elem.onchange(); // запуск события onchanhe
            if (elem.className == "invalid") invalid = true;
        }
    }

    if (invalid) {
        alert("Допущены ошибки при заполнении формы.");
        e.preventDefault();
        return false; // отмена отправки формы.
    }
}

