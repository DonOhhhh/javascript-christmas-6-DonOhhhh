import { NAMES, PRICES, TYPES, INITIAL_EA } from '../Constants/Menus.js';

class Order {
	#MENUS = Object.fromEntries(
		NAMES.map((menu) => [
			menu,
			{
				name: menu,
				price: PRICES[menu],
				type: TYPES[menu],
				ea: INITIAL_EA,
			},
		]),
	);

	#totalEa;

	#set;

	/**
	 * @param {list} order - [ ['타파스', 1], ['제로콜라', 2] ]
	 */

	constructor(order) {
		this.#validate(order);
		order.forEach(([menu, ea]) => {
			this.#MENUS[menu].ea = ea;
		});
	}

	#validate(order) {
		this.#checkValidInput(order);
		this.#checkEaExceedTwenty(order);
		this.#checkDuplicateMenuExist(order);
		this.#checkOnlyBeverage(order);
	}

	#checkValidInput(order) {
		order.forEach(([menu, ea]) => {
			if (this.#MENUS[menu] === undefined || Number.isNaN(ea) || !Number.isInteger(ea) || ea < 1)
				throw new Error(`[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.`);
		});
	}

	#checkEaExceedTwenty(order) {
		this.#totalEa = order.reduce((a, c) => a + c[1], 0);
		if (this.#totalEa > 20) throw new Error(`[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.`);
	}

	#checkDuplicateMenuExist(order) {
		this.#set = new Set();
		order.forEach(([menu]) => {
			if (this.#set.has(menu)) throw new Error(`[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.`);
			this.#set.add(menu);
		});
	}

	#checkOnlyBeverage(order) {
		const set = new Set();
		order.forEach(([menu]) => set.add(this.#MENUS[menu].type));
		if (set.size === 1 && set.has('beverage')) throw new Error(`[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.`);
	}

	getOrderedMenus() {
		return Object.values(this.#MENUS).filter((e) => e.ea);
	}
}

export default Order;
