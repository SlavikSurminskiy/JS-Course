window.addEventListener('DOMContentLoaded', function() {

	let tab = document.getElementsByClassName('info-header-tab'),
	    tabContent = document.getElementsByClassName('info-tabcontent'),
	    info = document.getElementsByClassName('info-header')[0];



	function hideTabContent(a) {

		for(let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}

	}

	hideTabContent(1);

	function showTabContent(b) {

		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}

	}

	info.addEventListener('click', function(eevent) {

		let target = event.target;
		if(target.className == 'info-header-tab') {
			for(let i = 0; i < tab.length; i++) {
				if(target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}

	})

	//Timer
	let deadline = '2018-04-07';

	function getTimeRemaning(endtime) {

		let t = Date.parse(endtime) - Date.parse(new Date()),
		    seconds = Math.floor((t/1000) % 60),
		    minutes = Math.floor((t/1000/60) % 60),
		    hours = Math.floor(t/(1000*60*60));

  return {
  	'total': t,
  	'hours': hours,
  	'minutes': minutes,
  	'seconds': seconds
  }

	};

	function setClock(id, endtime) {

		let timer = document.getElementById(id),
		    hours = timer.querySelector('.hours'),
		    minutes = timer.querySelector('.minutes'),
		    seconds = timer.querySelector('.seconds');

		function updateClock() {

			let t = getTimeRemaning(endtime);

			if(t.total > 0){
			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;
			}else{
			hours.innerHTML = '00';
			minutes.innerHTML = '00';
			seconds.innerHTML = '00';
			}
			
			if(t.total <= 0) {
				clearInterval(timeInterval);
			}

		};

		updateClock();

		let timeInterval = setInterval(updateClock, 1000);
		
 };

 setClock('timer', deadline);


 //Modal

 let description   = document.querySelectorAll('.description-btn'),
     overlay       = document.querySelector('.overlay'),
     close         = document.querySelector('.popup-close');


	for(let i = 0; i < description.length; i++) {

		description[i].addEventListener('click', function () {
	 	this.classList.add('more-splash');
	 	overlay.style.display = "block";
	 	document.body.style.overflow = "hidden";
	 });

	}

 close.addEventListener('click', function() {
 	overlay.style.display = "none";
 	description[0].classList.remove('more-splash');
 	document.body.style.overflow = "";
 });


});


