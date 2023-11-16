import Badge from '../../src/Controller/Badge.js';
import * as Utils from '../../src/Utils/Utils.js';
import { NAMES } from '../../src/Constants/Badge.js';
import { GIFT_PRICE } from '../../src/Constants/Gift.js';

describe('Badge', () => {
	const testFunc = ({ totalPrice, gift, badge }) => {
		jest.spyOn(Utils, 'getTotalDiscount').mockReturnValueOnce(totalPrice);
		const result = new Badge({}, gift).getBadge();
		expect(result).toEqual(badge);
	};
	describe('Gift 부재', () => {
		test.each([
			{
				totalPrice: 0,
				gift: 0,
				badge: NAMES.NONE,
			},
			{
				totalPrice: 4_999,
				gift: 0,
				badge: NAMES.NONE,
			},
		])('없음', testFunc);
		test.each([
			{
				totalPrice: 5_000,
				gift: 0,
				badge: NAMES.STAR,
			},
			{
				totalPrice: 9_999,
				gift: 0,
				badge: NAMES.STAR,
			},
		])('별', testFunc);
		test.each([
			{
				totalPrice: 10_000,
				gift: 0,
				badge: NAMES.TREE,
			},
			{
				totalPrice: 19_999,
				gift: 0,
				badge: NAMES.TREE,
			},
		])('트리', testFunc);
		test.each([
			{
				totalPrice: 20_000,
				gift: 0,
				badge: NAMES.SANTA,
			},
			{
				totalPrice: 100_000,
				gift: 0,
				badge: NAMES.SANTA,
			},
		])('산타', testFunc);
	});
	describe('Gift 존재', () => {
		test.each([
			{
				totalPrice: 0,
				gift: GIFT_PRICE,
				badge: NAMES.SANTA,
			},
			{
				totalPrice: 4_999,
				gift: GIFT_PRICE,
				badge: NAMES.SANTA,
			},
			{
				totalPrice: 5_000,
				gift: GIFT_PRICE,
				badge: NAMES.SANTA,
			},
			{
				totalPrice: 9_999,
				gift: GIFT_PRICE,
				badge: NAMES.SANTA,
			},
			{
				totalPrice: 10_000,
				gift: GIFT_PRICE,
				badge: NAMES.SANTA,
			},
			{
				totalPrice: 19_999,
				gift: GIFT_PRICE,
				badge: NAMES.SANTA,
			},
			{
				totalPrice: 20_000,
				gift: GIFT_PRICE,
				badge: NAMES.SANTA,
			},
			{
				totalPrice: 100_000,
				gift: GIFT_PRICE,
				badge: NAMES.SANTA,
			},
		])('산타', testFunc);
	});
});
