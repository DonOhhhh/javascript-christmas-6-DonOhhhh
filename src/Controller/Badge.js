import { getTotalDiscount } from '../Utils/Utils.js';
import { NAMES, QUALIFICATION_BENEFITS } from '../Constants/Badge.js';

class Badge {
	#badge;

	constructor(discount, gift) {
		const totalBenefits = getTotalDiscount(discount) + gift;
		if (totalBenefits < QUALIFICATION_BENEFITS.STAR) this.#badge = NAMES.NONE;
		else if (totalBenefits < QUALIFICATION_BENEFITS.TREE) this.#badge = NAMES.STAR;
		else if (totalBenefits < QUALIFICATION_BENEFITS.SANTA) this.#badge = NAMES.TREE;
		else this.#badge = NAMES.SANTA;
	}

	getBadge() {
		return this.#badge;
	}
}

export default Badge;
