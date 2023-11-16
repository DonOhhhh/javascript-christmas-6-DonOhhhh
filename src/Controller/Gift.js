import { getTotalPrice } from '../Utils/Utils.js';
import { GIFT_LIMIT, GIFT_PRICE } from '../Constants/Gift.js';

class Gift {
	#gift;

	constructor(menus) {
		this.#gift = getTotalPrice(menus) >= GIFT_LIMIT ? GIFT_PRICE : 0;
	}

	getGift() {
		return this.#gift;
	}
}

export default Gift;
