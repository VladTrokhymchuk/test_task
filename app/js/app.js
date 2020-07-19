document.addEventListener('DOMContentLoaded', function() {
	// Custom JS

	//owlCarousel
	$('.owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		margin: 50
	});

	//headhesive menu
	let header = new Headhesive('.header-nav-link', {
		offset: 500
	});
	//mixitup
	let mixer = mixitup('.recent-sort-item');

	//custom active class with button filter
	const btnsContainer = document.querySelector('.recent-sort-button');
	const btns = document.querySelectorAll('.recent-btn');

	btnsContainer.addEventListener('click', ({ target }) => {
		btns.forEach((item) => {
			item.classList.remove('recent-active');
		});
		if (target.classList.contains('recent-btn')) {
			target.classList.add('recent-active');
		}
	});

	//progress bar
	//blue progress
	let circle = new ProgressBar.Circle('.progress-blue', {
		color: '#a5d2da',
		trailColor: '#d7ebef',
		strokeWidth: 9,
		trailWidth: 9,
		text: {
			value: '0',
			style: {
				color: '#3a494c',
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%,-50%)'
			}
		},
		step: (state, shape) => {
			shape.setText(Math.round(shape.value() * 100) + ' %');
		}
	});

	//green progress
	let circle2 = new ProgressBar.Circle('.progress-green', {
		color: '#9bd6a7',
		trailColor: '#d4edd9',
		strokeWidth: 9,
		trailWidth: 9,
		text: {
			value: '0',
			style: {
				color: '#3a494c',
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%,-50%)'
			}
		},
		step: (state, shape) => {
			shape.setText(Math.round(shape.value() * 100) + ' %');
		}
	});

	//orange progress
	let circle3 = new ProgressBar.Circle('.progress-orange', {
		color: '#fbbe67',
		trailColor: '#fde4bf',
		strokeWidth: 9,
		trailWidth: 9,
		text: {
			value: '0',
			style: {
				color: '#3a494c',
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%,-50%)'
			}
		},
		step: (state, shape) => {
			shape.setText(Math.round(shape.value() * 100) + ' %');
		}
	});

	//blue-dark progress
	let circle4 = new ProgressBar.Circle('.progress-blue-dark', {
		color: '#036b7e',
		trailColor: '#72acb7',
		strokeWidth: 9,
		trailWidth: 9,
		text: {
			value: '0',
			style: {
				color: '#3a494c',
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%,-50%)'
			}
		},
		step: (state, shape) => {
			shape.setText(Math.round(shape.value() * 100) + ' %');
		}
	});

	//accardion
	const accardionContainer = document.querySelector('.faq-accardion');

	accardionContainer.addEventListener('click', ({ target }) => {
		if (
			target.classList.contains('faq-accardion-button') ||
			target.classList.contains('faq-accardion-subtitle')
		) {
			if (target.parentElement.lastElementChild.textContent == '+') {
				target.parentElement.lastElementChild.innerHTML = '-';
				target.parentElement.lastElementChild.classList.add('faq-btn-active');

				target.parentElement.nextElementSibling.style.display = 'block';
			} else {
				target.parentElement.lastElementChild.innerHTML = '+';
				target.parentElement.nextElementSibling.style.display = 'none';
				target.parentElement.lastElementChild.classList.remove(
					'faq-btn-active'
				);
			}
		}
	});

	//fancybox
	$('[data-fancybox="gallery"]').fancybox({
		toolbar: false,
		preventCaptionOverlap: false,
		infobar: false,
		arrows: false
	});
	//show/less more button

	const reventBtn = document.querySelector('.revent-btn');
	const mixitImgContainer = document.querySelector('.recent-sort-item');

	//visible recent item images with show more/less button

	reventBtn.addEventListener('click', () => {
		if (reventBtn.textContent == 'show more') {
			if (document.body.clientWidth < 1144 && document.body.clientWidth > 770) {
				mixitImgContainer.style.maxHeight = '863px';
			} else if (
				document.body.clientWidth < 770 &&
				document.body.clientWidth > 437
			) {
				mixitImgContainer.style.maxHeight = '1740px';
			} else if (
				document.body.clientWidth < 437 &&
				document.body.clientWidth > 319
			) {
				mixitImgContainer.style.maxHeight = '1740px';
			} else {
				mixitImgContainer.style.maxHeight = '560px';
			}

			reventBtn.innerHTML = 'show less';
		} else {
			if (document.body.clientWidth < 1144 && document.body.clientWidth > 770) {
				mixitImgContainer.style.maxHeight = '560px';
			} else if (
				document.body.clientWidth < 770 &&
				document.body.clientWidth > 437
			) {
				mixitImgContainer.style.maxHeight = '863px';
			} else if (
				document.body.clientWidth < 437 &&
				document.body.clientWidth > 319
			) {
				mixitImgContainer.style.maxHeight = '863px';
			} else {
				mixitImgContainer.style.maxHeight = '290px';
			}

			reventBtn.innerHTML = 'show more';
		}
	});

	//scroll target section
	let $div = $('#target_div'),
		inited = false;

	$(window).scroll(function() {
		if (inited) return;

		let $t = $(this),
			s_top = $t.scrollTop();

		if (s_top + $t.height() + 50 < $div.offset().top) return;
		circle.animate(0.92, {
			duration: 1500
		});
		circle2.animate(0.86, {
			duration: 1500
		});
		circle3.animate(0.78, {
			duration: 1500
		});
		circle4.animate(0.75, {
			duration: 1500
		});

		inited = true;
	});

	//hamburger

	const hamburgerBtn = document.querySelector('.mobile-nav__button');
	const mobileMenu = document.querySelector('.mobile-nav-link');
	hamburgerBtn.addEventListener('click', () => {
		hamburgerBtn.classList.toggle('is-active');
		if (hamburgerBtn.classList.contains('is-active')) {
			mobileMenu.classList.add('menu-active');
		} else {
			mobileMenu.classList.remove('menu-active');
		}
	});
	//smooth scroll

	// Add smooth scrolling to all links
	$('a').on('click', function(event) {
		if (this.hash !== '') {
			event.preventDefault();
			let hash = this.hash;
			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top
				},
				100,
				function() {
					window.location.hash = hash;
				}
			);
		}
	});
});
