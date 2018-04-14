function modal() {

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

}

module.exports = modal;