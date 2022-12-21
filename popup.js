/*eslint-env es6*/
		const modal = document.querySelector(".modal");
		const previews = document.querySelectorAll(".gallery img");
		const original = document.querySelector(".full-img");
		const caption = document.querySelector(".caption");
		
		previews.forEach((preview) => {
			preview.addEventListener("click", () => {
				modal.classList.add("open");
				original.classList.add("open");
				
				
				original.src = preview.getAttribute('data-original');
				const altText = preview.alt;
				caption.textContent = altText;
			});
		});

		modal.addEventListener('click', (e) => {
			if(e.target.classList.contains('modal')){
				modal.classList.remove('open');
				original.classList.remove("open");
			}
		});
