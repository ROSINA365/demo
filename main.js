// console.log('sha')

let theme = localStorage.getItem('theme')
if (theme)
{
	setTheme(theme);
}
//since you will be clicking single div use class provided instead if Id 
let themeDots = document.getElementsByClassName('theme-dot');

//prefer modern js syntax let instead of var
for(let i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode);
	});

}

function setTheme(mode){
	if (mode == 'light') {
		document.getElementById('theme-style').href = 'style.css';
	}

	if (mode == 'blue') {
		document.getElementById('theme-style').href = 'blue.css'
	}

	if (mode == 'green') {
		document.getElementById('theme-style').href = 'green.css'
	}

	if (mode == 'purple') {
		document.getElementById('theme-style').href = 'purple.css'
	}
	   //after the selection above, you can save the selected theme  to local storage defined line 4 above 
	localStorage.setItem('theme', mode)


}

// we want to set a customattribute