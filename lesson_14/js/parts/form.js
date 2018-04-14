function form() {

	 let message = new Object();
	 message.loading = "Загрузка...";
	 message.success = "Спасибо! Скоро мы з вами свяжемся";
	 message.failure = "Что-то пошло не так...";

	 let form = document.getElementsByClassName('main-form')[0],
	 				input = form.getElementsByTagName('input'),
	 				statusMessage = document.createElement('div');
	 				statusMessage.classList.add('status');

	 				form.addEventListener('submit', function(event) {
	 						event.preventDefault();
	 						form.appendChild(statusMessage);

	 						//AJAX
	 						let request = new XMLHttpRequest();
	 						request.open("POST", 'server.php');

	 						request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	 						let formData = new FormData(form);

	 						request.send(formData);

	 						request.onreadystatechange = function() {

	 							if(request.readyState < 4)
	 							{
	 								statusMessage.innerHTML = message.loading;
	 							}
	 							else if (request.readyState === 4)
	 							{
	 								if( request.status == 200 && request.status < 300)
	 								{
	 									statusMessage.innerHTML = message.success;
	 									// додаємо контент на сторінку
	 								}
	 								else 
	 								{
	 									statusMessage.innerHTML = message.failure;
	 								}
	 							}

	 						}
	 						for(let i = 0; i < input.length; i++) {
	 							input[i].value = '';
	 							//очищуємо поля вводу
	 						}
	 				});

	let form2 = document.getElementById('form'),
					email = form2.getElementsByTagName('input')[0],
					phone = form2.getElementsByTagName('input')[1];

					form2.addEventListener('submit', function(event) {
							event.preventDefault();
							form.appendChild(statusMessage);

							//AJAX
							let request = new XMLHttpRequest();
							request.open("POST", 'server.php');

							request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

							let formData = new FormData(form2);

							request.send(formData);

							request.onreadystatechange = function() {

								if(request.readyState < 4)
								{
									statusMessage.innerHTML = message.loading;
								}
								else if (request.readyState === 4)
								{
									if( request.status == 200 && request.status < 300)
									{
										statusMessage.innerHTML = message.success;
										// додаємо контент на сторінку
									}
									else 
									{
										statusMessage.innerHTML = message.failure;
									}
								}

							}
							for(let i = 0; i < input.length; i++) {
								input[i].value = '';
								//очищуємо поля вводу
							}
					});
}

module.exports = form;