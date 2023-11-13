class Date {
	#date;

	constructor(date) {
		this.#validate(date);
	}

	#validate(date) {
		const number = +date;
		if (date.indexOf('.') > -1 || Number.isNaN(number) || number < 1 || number > 31) {
			throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
		}
		this.#date = number;
	}

	getDate() {
		return this.#date;
	}
}

export default Date;
