const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	const message = {
		minimalOrderValue: +minimalOrderValue.value
	}
	
	const queryInfo = {
		active: true,
		currentWindow: true	
	}
	
	chrome.tabs.query(queryInfo, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, message);
	});
});