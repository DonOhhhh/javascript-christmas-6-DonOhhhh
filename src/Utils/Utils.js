const getTotalPrice = (orderedMenus) => orderedMenus.reduce((a, c) => a + c.price * c.ea, 0);
const getTotalDiscount = (discounts) => Object.values(discounts).reduce((a, c) => a + c, 0);
const getFormattedPriceString = (price) => {
	const priceString = `${price}`;
	const { length } = priceString;
	let result = '';
	for (let i = 0; i < length; i += 1) {
		if (i > 0 && (length - i) % 3 === 0) {
			result += ',';
		}
		result += priceString[i];
	}
	return result;
};

export { getTotalPrice, getTotalDiscount, getFormattedPriceString };
