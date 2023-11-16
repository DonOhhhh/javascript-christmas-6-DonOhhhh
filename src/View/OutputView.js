import { Console } from '@woowacourse/mission-utils';
import { getTotalPrice, getTotalDiscount, getFormattedPriceString } from '../Utils/Utils.js';

const OutputView = {
	printSelectedDate(date) {
		Console.print(`12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`);
		Console.print('');
	},

	printOrderedMenus(orderedMenus) {
		Console.print('<주문 메뉴>');
		orderedMenus.forEach(({ name, ea }) => {
			Console.print(`${name} ${ea}개`);
		});
		Console.print('');
	},

	printTotalPriceBeforeDiscount(orderedMenus) {
		Console.print(`<할인 전 총주문 금액>`);
		Console.print(`${getFormattedPriceString(getTotalPrice(orderedMenus))}원`);
		Console.print('');
	},

	printGiftMenu(gift) {
		Console.print(`<증정 메뉴>`);
		Console.print(gift ? `샴페인 1개` : `없음`);
		Console.print('');
	},

	printBenefits({ dDayDiscount, weekdayDiscount, weekendDiscount, specialDiscount, gift }) {
		Console.print('<혜택 내역>');
		if (!(dDayDiscount + weekdayDiscount + weekendDiscount + specialDiscount + gift)) {
			Console.print('없음\n');
			return;
		}
		if (dDayDiscount) Console.print(`크리스마스 디데이 할인: -${getFormattedPriceString(dDayDiscount)}원`);
		if (weekdayDiscount) Console.print(`평일 할인: -${getFormattedPriceString(weekdayDiscount)}원`);
		if (weekendDiscount) Console.print(`주말 할인: -${getFormattedPriceString(weekendDiscount)}원`);
		if (specialDiscount) Console.print(`특별 할인: -${getFormattedPriceString(specialDiscount)}원`);
		if (gift) Console.print(`증정 이벤트: -${getFormattedPriceString(gift)}원`);
		Console.print('');
	},

	printTotalBenefitPrice(discounts, gift) {
		Console.print('<총혜택 금액>');
		const totalBenefitPrice = getTotalDiscount(discounts) + gift;
		Console.print(`${totalBenefitPrice ? `-` : ``}${getFormattedPriceString(totalBenefitPrice)}원`);
		Console.print('');
	},

	printTotalPriceAfterDiscount(orderedMenus, discounts) {
		Console.print('<할인 후 예상 결제 금액>');
		Console.print(`${getFormattedPriceString(getTotalPrice(orderedMenus) - getTotalDiscount(discounts))}`);
		Console.print('');
	},

	printBadge(badge) {
		Console.print('<12월 이벤트 배지>');
		Console.print(`${badge}`);
		Console.print('');
	},

	printOutput({ date, orderedMenus, discounts, gift, badge }) {
		this.printSelectedDate(date);
		this.printOrderedMenus(orderedMenus);
		this.printTotalPriceBeforeDiscount(orderedMenus);
		this.printGiftMenu(gift);
		this.printBenefits({ ...discounts, gift });
		this.printTotalBenefitPrice(discounts, gift);
		this.printTotalPriceAfterDiscount(orderedMenus, discounts);
		this.printBadge(badge);
	},
};

export default OutputView;
