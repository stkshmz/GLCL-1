let tracker = () => {

	let min5 = document.getElementById('5-min')
	let counter = document.getElementById('counter');
	let i = 0;
	min5.addEventListener('click', ()=>{
		i += 5;
		counter.innerHTML = i;
	});
	console.log(min5);
};

document.addEventListener('DOMContentLoaded', tracker, false);