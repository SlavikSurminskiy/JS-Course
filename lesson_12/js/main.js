$(document).ready(function($) {
	
	$('.modal').css({
		display: 'block',
		top: '-100%'
	});

	function showModal() {

		let linksForShowModal = [$("a[href='#tour']"),$("a[href='#sheldure']"),$('.contact')];


		for(let i = 0; i < linksForShowModal.length; i++) {

			linksForShowModal[i].click(function() {

			$('.modal').animate({
				top: 0
			},1000);

			$('.overlay').css({
				display: 'block',
				opacity: '0'
			});

			$('.overlay').animate({
				opacity: 1
			},1000);

		 });

		}

	}

	function closeModal() {

		$('.close').click(function() {

		$('.modal').animate({
			top: '-100%'
		},1000);

		$('.overlay').animate({
			opacity: 0
		},2000);

		function hideOverlay() {
			$('.overlay').css({
				display: 'none',
			});
		}

	 setTimeout(hideOverlay, 1800);

	 });

	}

	showModal();
	closeModal();

});