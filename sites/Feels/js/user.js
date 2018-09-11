document.addEventListener("DOMContentLoaded", handler);
function handler() {
	let listTime = document.querySelectorAll('.list-time');
	let backBut = document.querySelector('.back-button');
	let blockHall = document.querySelector('.hall');
	let body = document.querySelector('body');
	let placeRow = document.querySelector('.block-place');
	let placeRowVip = document.querySelector('.block-place-vip');
	let blockBuy = document.querySelector('.block-buy');
	let captionFilm = document.querySelector('.caption-item');

	let nameFilmPay = document.querySelector('.name-film-pay');
	let timePay = document.querySelector('.time-pay');
	let rowPay = document.querySelector('.row-pay');
	let placePay = document.querySelector('.place-pay');
	let pricePat = document.querySelector('.price-pay');
	let pay = document.querySelector('.pay');
	let butPay = document.querySelector('.but-puy');

	let backPay = document.querySelector('.back-pay');
	let imgFilmPay = document.querySelector('.pay-item-img img');
	backPay.addEventListener('click',function(){
		pay.style.display = 'none';
	})
	butPay.addEventListener('click',function(){
		
		pay.style.display = 'block';
	});
	placeRow.addEventListener('click',placeBuy);
	placeRowVip.addEventListener('click',placeBuyVip);
	let placeChild = placeRow.children;
	let placeChildVip = placeRowVip.children;	
	backBut.addEventListener('click',setDisplay);
	for(let i = 0,len = listTime.length; len > i;i++){
		listTime[i].addEventListener('click',seelectTicket);	
	}

	function setDisplayBlock(place,row,prace,vipRow,vipPlace,vipPrace){
		let good = document.querySelector('.good');
		let vip = document.querySelector('.vip');
		good.innerHTML = 'GOOD - '+prace+'грн';
		vip.innerHTML = 'SUPER LUX - '+vipPrace+'грн';
		placeRow.style.width = 30 * row+'px';
		let rowPlace = 0;
		for(let i = 0; place > i;i++){
			if(i % row === 0){
				rowPlace++;
			}
			let appPlace = document.createElement('div');
			appPlace.className = 'place';
			appPlace.setAttribute('data-title', 'место:'+(i+1)+'\nряд:'+rowPlace);
			appPlace.setAttribute('data-tit', (i+1)+' '+rowPlace+' '+prace);
			placeRow.appendChild(appPlace);
		}
		for(let i = 0; vipPlace > i;i++){
			let appPlace = document.createElement('div');
			appPlace.className = 'place-vip';
			appPlace.setAttribute('data-title', 'место:'+(i+1)+'\nряд:'+vipRow);
			appPlace.setAttribute('data-tit', (i+1)+' '+vipRow+' '+vipPrace);
			placeRowVip.appendChild(appPlace);
		}
		blockHall.style.cssText += 'display:block;animation:hall-vis 0.5s ease-in-out;';
		body.style.overflow = 'hidden';

	}
	function setDisplay(){
		let placeHall = document.querySelectorAll('.place');
		let placeHAllVip = document.querySelectorAll('.place-vip')
		for(let i = 0,len = placeHall.length; i < len;i++){
			let oneChild = placeRow.lastChild;
			placeRow.removeChild(oneChild);
		}
		for(let i = 0,len = placeHAllVip.length; i < len;i++){
			let oneChild = placeRowVip.lastChild;
			placeRowVip.removeChild(oneChild);
		}
		blockBuy.style.display = 'none';
		blockHall.style.cssText += 'animation:hall-hid 0.5s ease-in-out;';
		body.style.overflow = 'auto';
		setTimeout(function(){
			blockHall.style.display = 'none';	
		},490);
	}
	function seelectTicket(event){
		var target = event && event.target || window.event.srcElement;
		var dataToggleID = target.closest('li');
		var timeCinema = dataToggleID.innerHTML;
		var imgFilm = target.closest('ul').parentElement.parentElement.firstElementChild.firstElementChild.getAttribute('src');
		imgFilmPay.setAttribute('src',''+imgFilm);
		timePay.innerHTML ='всремя: '+timeCinema;
		var nameFilms = target.closest('ul').parentElement.firstElementChild.firstElementChild.innerHTML;
		captionFilm.innerHTML = nameFilms;
		nameFilmPay.innerHTML = nameFilms;
		if(!dataToggleID) return;
		var vipPrace = target.getAttribute('data-price-vip');
		var vipPlace = target.getAttribute('data-place-vip');
		var vipRow = target.getAttribute('data-row-vip');
		var place = target.getAttribute('data-place');
		var row = target.getAttribute('data-row');
		var prace = target.getAttribute('data-price-ord');
		setDisplayBlock(place,row,prace,vipRow,vipPlace,vipPrace);	
	}

	var placeBuyItem = document.querySelector('.place-buy-item');
	var rowBuyItem	= document.querySelector('.row-buy-item');
	var priceBuyItem = document.querySelector('.price-buy-item');

	function placeBuy(){
		var target = event && event.target || window.event.srcElement;
		var dataToggleID = target.closest('div');
		var dataToggleIDAtt = dataToggleID.classList.contains('place');
		removeClass();
		if(!dataToggleIDAtt) return;
		target.classList.add('place-buy');
		blockBuy.style.display = 'block';
		var dataTitle = target.getAttribute('data-tit');
		var arrTitle = splitArr(dataTitle);
		placeBuyItem.innerHTML = arrTitle[0];
		rowBuyItem.innerHTML = arrTitle[1];
		priceBuyItem.innerHTML = arrTitle[2];

		placePay.innerHTML = 'место: '+arrTitle[0];
		rowPay.innerHTML = 'ряд: '+arrTitle[1];
		pricePat.innerHTML = 'цена: '+arrTitle[2];
	}

	function placeBuyVip(){
		var target = event && event.target || window.event.srcElement;
		var dataToggleID = target.closest('div');
		var dataToggleIDAtt = dataToggleID.classList.contains('place-vip');
		removeClass();
		if(!dataToggleIDAtt) return;
		target.classList.add('place-buy');
		blockBuy.style.display = 'block';
		var dataTitle = target.getAttribute('data-tit');
		var arrTitle = splitArr(dataTitle);
		placeBuyItem.innerHTML = arrTitle[0];
		rowBuyItem.innerHTML = arrTitle[1];
		priceBuyItem.innerHTML = arrTitle[2];
				placePay.innerHTML = 'место: '+arrTitle[0];
		rowPay.innerHTML = 'ряд: '+arrTitle[1];
		pricePat.innerHTML = 'цена: '+arrTitle[2];
	}
	function removeClass(){
		for(let i = 0,len = placeChild.length;len > i;i++){
			placeChild[i].classList.remove('place-buy');
		}
		removeClassVip();
	}
	function removeClassVip(){
		for(let i = 0,len = placeChildVip.length;len > i;i++){
			placeChildVip[i].classList.remove('place-buy');
		}
	}
	var closeBut = document.querySelector('.but-close');
	closeBut.addEventListener('click',closeButFun);
	function closeButFun(){
		removeClass();
		blockBuy.style.display = 'none';

	}
	function splitArr(arr){
		return arr.split(' ');
	}


};