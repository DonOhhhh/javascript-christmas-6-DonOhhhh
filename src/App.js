import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';
import { Discount, Gift, Badge } from './Controller/index.js';

class App {
	// eslint-disable-next-line class-methods-use-this
	async run() {
		const date = (await InputView.readDate()).getDate();
		const orderedMenus = (await InputView.readOrder()).getOrderedMenus();
		const discounts = new Discount(date, orderedMenus).getDiscounts();
		const gift = new Gift(orderedMenus).getGift();
		const badge = new Badge(discounts, gift).getBadge();
		OutputView.printOutput({ date, orderedMenus, discounts, gift, badge });
	}
}

export default App;

// review를 위한 코멘트
