import { PRICES, TYPES } from '../../src/Constants/Menus.js';
import { GIFT_PRICE } from '../../src/Constants/Gift.js';
import Gift from '../../src/Controller/Gift.js';

describe('Gift', () => {
	test.each([
		{
			menus: ['타파스', '양송이수프', '티본스테이크', '바비큐립', '초코케이크', '레드와인'].map((menu) => ({
				name: menu,
				price: PRICES[menu],
				type: TYPES[menu],
				ea: 1,
			})),
		},
		{
			menus: ['시저샐러드', '해산물파스타', '크리스마스파스타', '아이스크림', '레드와인', '샴페인'].map((menu) => ({
				name: menu,
				price: PRICES[menu],
				type: TYPES[menu],
				ea: 1,
			})),
		},
	])('증정 이벤트 대상일 경우', ({ menus }) => {
		const gift = new Gift(menus).getGift();
		expect(gift).toEqual(GIFT_PRICE);
	});
	test.each([
		{
			menus: ['타파스', '레드와인'].map((menu) => ({
				name: menu,
				price: PRICES[menu],
				type: TYPES[menu],
				ea: 1,
			})),
		},
		{
			menus: ['타파스', '티본스테이크', '바비큐립', '아이스크림'].map((menu) => ({
				name: menu,
				price: PRICES[menu],
				type: TYPES[menu],
				ea: 1,
			})),
		},
	])('증정 이벤트 대상이 아닐 경우', ({ menus }) => {
		const gift = new Gift(menus).getGift();
		expect(gift).toEqual(0);
	});
});
