window.addEventListener('load', () => {
	const preloader = document.querySelector('.loader')
	if(preloader){
		preloader.classList.add('done')
		setTimeout(() => preloader.parentElement.removeChild(preloader), 1000)
	}
})
