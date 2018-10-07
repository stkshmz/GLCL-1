let dashboard = () => {
	let calendarContainer = document.getElementById('body');
	calendarContainer.addEventListener('arrowClick', function(){
		console.log('left arrow clicked!');
	});
};

document.addEventListener('DOMContentLoaded', dashboard, false);
