let tracker = () => {

	let plus5 = document.getElementById('plus-5')
	let counter = document.getElementById('counter');
	let totalTime = 0;
	const timeInADay = 1440;
	plus5.addEventListener('click', ()=>{
		if(totalTime < timeInADay) {
			totalTime += 5;
			counter.innerHTML = totalTime;
		}
	});

	let min5us = document.getElementById('minus-5')
	
	min5us.addEventListener('click', ()=>{
		if(totalTime > 0) {
			totalTime -= 5;
			counter.innerHTML = totalTime;
		}
	});

};

document.addEventListener('DOMContentLoaded', tracker, false);