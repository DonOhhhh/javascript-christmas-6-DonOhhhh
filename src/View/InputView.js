import { Console } from '@woowacourse/mission-utils';
import { Order, Date } from '../Model/index.js';

const InputView = {
	async readDate() {
		async function getValidDate() {
			const input = await Console.readLineAsync(
				'안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.\n12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
			);
			try {
				const date = new Date(input);
				return date;
			} catch (error) {
				Console.print(error.message);
				return getValidDate();
			}
		}
		return getValidDate();
	},
	async readOrder() {
		async function getValidOrder() {
			const input = await Console.readLineAsync(
				'주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
			);
			try {
				const order = new Order(input.split(',').map((e) => [e.split('-')[0], +e.split('-')[1]]));
				return order;
			} catch (error) {
				Console.print(error.message);
				return getValidOrder();
			}
		}
		return getValidOrder();
	},
};

export default InputView;
