
let tooltipButtons = document.querySelectorAll('.tooltip-button');
let tooltip = document.querySelector('.tooltip');
let tooltipText = document.querySelector('.tooltip-text');
let closeButton = document.querySelector('.close-button');

for (let tooltipButton of tooltipButtons) {
	tooltipButton.onclick = function() {
		tooltip.classList.add('opened');
		tooltipText.textContent = tooltipButton.dataset.tooltipText;
	}
}

closeButton.onclick = function() {
	tooltip.classList.remove('opened');
}
