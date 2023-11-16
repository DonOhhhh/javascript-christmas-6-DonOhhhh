import { Console } from '@woowacourse/mission-utils';
import InputView from '../../src/View/InputView.js';
import { PRICES, TYPES } from '../../src/Constants/Menus.js';

describe('InputView', () => {
	describe('readDate', () => {
		const DATE_ERROR = '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.';
		test.each(['1', '5', '10', '15', '20', '25', '30', '31'])('정상적인 날짜를 입력받았을 경우', async (input) => {
			Console.readLineAsync = jest.fn().mockResolvedValueOnce(input);
			const date = (await InputView.readDate()).getDate();
			expect(date).toEqual(+input);
		});
		test.each(['1.5', 'a21af', '0', '32'])('비정상적인 날짜를 입력받았을 경우', async (invalid) => {
			Console.readLineAsync = jest.fn().mockResolvedValueOnce(invalid).mockResolvedValueOnce('5');
			Console.print = jest.fn();
			const date = (await InputView.readDate()).getDate();
			expect(Console.print).toHaveBeenCalledWith(expect.stringContaining(DATE_ERROR));
			expect(date).toEqual(5);
			expect(Console.readLineAsync).toHaveBeenCalledTimes(2);
		});
	});
	describe('readOrder', () => {
		test.each([
			{
				input: '타파스-1,제로콜라-2',
				result: [
					{
						name: '타파스',
						price: PRICES['타파스'],
						type: TYPES['타파스'],
						ea: 1,
					},
					{
						name: '제로콜라',
						price: PRICES['제로콜라'],
						type: TYPES['제로콜라'],
						ea: 2,
					},
				],
			},
			{
				input: '티본스테이크-3,바비큐립-2,초코케이크-2,제로콜라-1',
				result: [
					{
						name: '티본스테이크',
						price: PRICES['티본스테이크'],
						type: TYPES['티본스테이크'],
						ea: 3,
					},
					{
						name: '바비큐립',
						price: PRICES['바비큐립'],
						type: TYPES['바비큐립'],
						ea: 2,
					},
					{
						name: '초코케이크',
						price: PRICES['초코케이크'],
						type: TYPES['초코케이크'],
						ea: 2,
					},
					{
						name: '제로콜라',
						price: PRICES['제로콜라'],
						type: TYPES['제로콜라'],
						ea: 1,
					},
				],
			},
		])('정상적인 주문을 입력받았을 경우', async ({ input, result }) => {
			Console.readLineAsync = jest.fn().mockResolvedValueOnce(input);
			const menus = (await InputView.readOrder()).getOrderedMenus();
			expect(JSON.stringify(menus)).toEqual(JSON.stringify(result));
		});

		describe('비정상적인 주문을 입력받았을 경우', () => {
			const ORDER_ERROR = '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.';
			const valid = {
				input: '타파스-1,제로콜라-2',
				result: [
					{
						name: '타파스',
						price: PRICES['타파스'],
						type: TYPES['타파스'],
						ea: 1,
					},
					{
						name: '제로콜라',
						price: PRICES['제로콜라'],
						type: TYPES['제로콜라'],
						ea: 2,
					},
				],
			};
			const testFunc = async (input) => {
				Console.readLineAsync = jest.fn().mockResolvedValueOnce(input).mockResolvedValueOnce(valid.input);
				Console.print = jest.fn();
				const order = (await InputView.readOrder()).getOrderedMenus();
				expect(Console.readLineAsync).toHaveBeenCalledTimes(2);
				expect(Console.print).toHaveBeenCalledWith(expect.stringContaining(ORDER_ERROR));
				expect(JSON.stringify(order)).toEqual(JSON.stringify(valid.result));
			};
			test.each(['신라면-1', '타파스-abc', '타파스-0', '타파스-1, 레드와인-2'])(
				'메뉴에 없는 음식 또는 잘못된 수량 또는 잘못된 형식을 입력했을 경우',
				testFunc,
			);
			test.each(['타파스-20,제로콜라-1', '티본스테이크-15,크리스마스파스타-15'])('수량이 20개가 넘어갈 때', testFunc);
			test.each(['타파스-1,레드와인-3,타파스-2', '티본스테이크-10,티본스테이크-1'])(
				'중복된 메뉴를 입력했을 경우',
				testFunc,
			);
			test.each(['레드와인-1', '제로콜라-1,레드와인-18,샴페인-1'])('음료만 주문했을 경우', testFunc);
		});
	});
});
