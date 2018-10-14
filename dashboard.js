let dashboard = () => {
	const dashBody = document.getElementById('body');
	const calendar = document.getElementById('calendar');

	const monthChange = (direction) => {
		return new CustomEvent('monthChange', {
		  bubbles: false,
		  detail: { changeDirection: direction }
		});
	}
	dashBody.addEventListener('arrowClick', function(event){
		calendar.dispatchEvent(monthChange(event.detail.arrowDirection));

		}, true);
	};

	document.addEventListener('DOMContentLoaded', dashboard, false);
