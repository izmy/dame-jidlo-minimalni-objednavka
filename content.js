chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
	filterRestaurant(message.minimalOrderValue);
};

function filterRestaurant(minimalOrderLimit) {
	const items = document.querySelectorAll('.Restaurant-list .Restaurant-box');
	Array.from(items).forEach( (item) => {
		item.style.display = "block";
		if (!minimalOrderLimit) {
			return;
		}
		const minimalOrder = item.querySelectorAll('.RestaurantDeliveryInfo__order')[0];
		if (!minimalOrder) {
			return;
		}
		const minimalOrderValue = minimalOrder.textContent.match(/\d+/)[0];
		if (minimalOrderValue > minimalOrderLimit) {
			item.style.display = "none";
		}
	});
}
