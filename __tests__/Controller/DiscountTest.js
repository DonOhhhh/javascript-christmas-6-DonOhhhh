import { PRICES, TYPES } from '../../src/Constants/Menus.js';
import {
	DESSERT_DISCOUNT_MONEY,
	MAIN_DISCOUNT_MONEY,
	SPECIAL_DISCOUNT_MONEY,
} from '../../src/Constants/DiscountMoney.js';
import Discount from '../../src/Controller/Discount.js';

describe('Discount', () => {
	describe('D-Day', () => {
		test.each([
			{
				date: 1,
				menus: [
					{
						name: '티본스테이크',
						price: PRICES['티본스테이크'],
						type: TYPES['티본스테이크'],
						ea: 1,
					},
				],
				dDayDiscount: 1000,
			},
			{
				date: 19,
				menus: [
					{
						name: '티본스테이크',
						price: PRICES['티본스테이크'],
						type: TYPES['티본스테이크'],
						ea: 1,
					},
				],
				dDayDiscount: 2800,
			},
			{
				date: 25,
				menus: [
					{
						name: '티본스테이크',
						price: PRICES['티본스테이크'],
						type: TYPES['티본스테이크'],
						ea: 1,
					},
				],
				dDayDiscount: 3400,
			},
		])('디데이 할인이 적용된 경우', ({ date, menus, dDayDiscount }) => {
			const discounts = new Discount(date, menus).getDiscounts();
			expect(dDayDiscount).toEqual(discounts.dDayDiscount);
		});
		test.each([
			{
				date: 26,
				menus: [
					{
						name: '티본스테이크',
						price: PRICES['티본스테이크'],
						type: TYPES['티본스테이크'],
						ea: 1,
					},
				],
				dDayDiscount: 0,
			},
			{
				date: 31,
				menus: [
					{
						name: '티본스테이크',
						price: PRICES['티본스테이크'],
						type: TYPES['티본스테이크'],
						ea: 1,
					},
				],
				dDayDiscount: 0,
			},
		])('디데이 할인이 적용되지 않은 경우', ({ date, menus, dDayDiscount }) => {
			const discounts = new Discount(date, menus).getDiscounts();
			expect(dDayDiscount).toEqual(discounts.dDayDiscount);
		});
	});
	describe('weekday', () => {
		test.each([
			{
				date: 3,
				menus: [
					{
						name: '초코케이크',
						price: PRICES['초코케이크'],
						type: TYPES['초코케이크'],
						ea: 2,
					},
				],
				weekdayDiscount: DESSERT_DISCOUNT_MONEY * 2,
			},
			{
				date: 28,
				menus: [
					{
						name: '초코케이크',
						price: PRICES['초코케이크'],
						type: TYPES['초코케이크'],
						ea: 3,
					},
				],
				weekdayDiscount: DESSERT_DISCOUNT_MONEY * 3,
			},
		])('평일 할인이 적용된 경우', ({ date, menus, weekdayDiscount }) => {
			const discounts = new Discount(date, menus).getDiscounts();
			expect(weekdayDiscount).toEqual(discounts.weekdayDiscount);
		});
		test.each([
			{
				date: 3,
				menus: [
					{
						name: '티본스테이크',
						price: PRICES['티본스테이크'],
						type: TYPES['티본스테이크'],
						ea: 2,
					},
				],
				weekdayDiscount: 0,
			},
			{
				date: 28,
				menus: [
					{
						name: '타파스',
						price: PRICES['타파스'],
						type: TYPES['타파스'],
						ea: 3,
					},
				],
				weekdayDiscount: 0,
			},
		])('평일 할인이 적용되지 않은 경우', ({ date, menus, weekdayDiscount }) => {
			const discounts = new Discount(date, menus).getDiscounts();
			expect(weekdayDiscount).toEqual(discounts.weekdayDiscount);
		});
	});
	describe('weekend', () => {
		test.each([
			{
				date: 1,
				menus: [
					{
						name: '바비큐립',
						price: PRICES['바비큐립'],
						type: TYPES['바비큐립'],
						ea: 2,
					},
				],
				weekendDiscount: MAIN_DISCOUNT_MONEY * 2,
			},
			{
				date: 30,
				menus: [
					{
						name: '바비큐립',
						price: PRICES['바비큐립'],
						type: TYPES['바비큐립'],
						ea: 3,
					},
				],
				weekendDiscount: MAIN_DISCOUNT_MONEY * 3,
			},
		])('주말 할인이 적용된 경우', ({ date, menus, weekendDiscount }) => {
			const discounts = new Discount(date, menus).getDiscounts();
			expect(weekendDiscount).toEqual(discounts.weekendDiscount);
		});
		test.each([
			{
				date: 8,
				menus: [
					{
						name: '양송이수프',
						price: PRICES['양송이수프'],
						type: TYPES['양송이수프'],
						ea: 2,
					},
				],
				weekendDiscount: 0,
			},
			{
				date: 29,
				menus: [
					{
						name: '아이스크림',
						price: PRICES['아이스크림'],
						type: TYPES['아이스크림'],
						ea: 3,
					},
				],
				weekendDiscount: 0,
			},
		])('주말 할인이 적용된 경우', ({ date, menus, weekendDiscount }) => {
			const discounts = new Discount(date, menus).getDiscounts();
			expect(weekendDiscount).toEqual(discounts.weekendDiscount);
		});
	});
	describe('special', () => {
		const menus = [
			{
				name: '양송이수프',
				price: PRICES['양송이수프'],
				type: TYPES['양송이수프'],
				ea: 2,
			},
		];
		test.each([3, 10, 17, 24, 25, 31])('특별 할인이 적용된 경우', (date) => {
			const discounts = new Discount(date, menus).getDiscounts();
			expect(SPECIAL_DISCOUNT_MONEY).toEqual(discounts.specialDiscount);
		});
		test.each([1, 2, 9, 16, 23, 26, 30])('특별 할인이 적용되지 않은 경우', (date) => {
			const discounts = new Discount(date, menus).getDiscounts();
			expect(0).toEqual(discounts.specialDiscount);
		});
	});
});
