import {
	D_DAY_START_DATE,
	D_DAY_END_DATE,
	WEEKDAY_START_DATE,
	WEEKDAY_END_DATE,
	WEEKEND_START_DATE,
	WEEKEND_END_DATE,
	SPECIAL_DATES,
	DEC_2023_STR,
} from '../Constants/DiscountDate.js';
import {
	D_DAY_START_MONEY,
	D_DAY_DISCOUNT_MONEY,
	DESSERT_DISCOUNT_MONEY,
	MAIN_DISCOUNT_MONEY,
	SPECIAL_DISCOUNT_MONEY,
	DISCOUNT_APPLY_LIMIT,
} from '../Constants/DiscountMoney.js';
import { getTotalPrice } from '../Utils/Utils.js';

class Discount {
	#discounts = {
		dDayDiscount: 0,
		weekdayDiscount: 0,
		weekendDiscount: 0,
		specialDiscount: 0,
	};

	#date;

	#day;

	#menus;

	constructor(date, menus) {
		this.#date = date;
		this.#day = new Date(`${DEC_2023_STR}${date}`).getDay();
		this.#menus = menus;

		if (getTotalPrice(menus) >= DISCOUNT_APPLY_LIMIT) {
			this.#discounts = {
				dDayDiscount: this.#dDayDiscount(),
				weekdayDiscount: this.#weekdayDiscount(),
				weekendDiscount: this.#weekendDiscount(),
				specialDiscount: this.#specialDiscount(),
			};
		}
	}

	getDiscounts() {
		return this.#discounts;
	}

	#dDayDiscount() {
		if (D_DAY_START_DATE <= this.#date && this.#date <= D_DAY_END_DATE) {
			return D_DAY_START_MONEY + D_DAY_DISCOUNT_MONEY * (this.#date - 1);
		}
		return 0;
	}

	#weekdayDiscount() {
		if (WEEKDAY_START_DATE <= this.#day && this.#day <= WEEKDAY_END_DATE) {
			return this.#menus.reduce((a, c) => a + (c.type === 'dessert' ? DESSERT_DISCOUNT_MONEY * c.ea : 0), 0);
		}
		return 0;
	}

	#weekendDiscount() {
		if (WEEKEND_START_DATE <= this.#day && this.#day <= WEEKEND_END_DATE) {
			return this.#menus.reduce((a, c) => a + (c.type === 'main' ? MAIN_DISCOUNT_MONEY * c.ea : 0), 0);
		}
		return 0;
	}

	#specialDiscount() {
		if (SPECIAL_DATES.has(this.#date)) {
			return SPECIAL_DISCOUNT_MONEY;
		}
		return 0;
	}
}

export default Discount;
