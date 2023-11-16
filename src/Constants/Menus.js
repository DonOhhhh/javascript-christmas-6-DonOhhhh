const NAMES = Object.freeze([
	'양송이수프',
	'타파스',
	'시저샐러드',
	'티본스테이크',
	'바비큐립',
	'해산물파스타',
	'크리스마스파스타',
	'초코케이크',
	'아이스크림',
	'제로콜라',
	'레드와인',
	'샴페인',
]);

const PRICES = Object.freeze({
	양송이수프: 6_000,
	타파스: 5_500,
	시저샐러드: 8_000,
	티본스테이크: 55_000,
	바비큐립: 54_000,
	해산물파스타: 35_000,
	크리스마스파스타: 25_000,
	초코케이크: 15_000,
	아이스크림: 5_000,
	제로콜라: 3_000,
	레드와인: 60_000,
	샴페인: 25_000,
});

const TYPES = Object.freeze({
	양송이수프: 'appetizer',
	타파스: 'appetizer',
	시저샐러드: 'appetizer',
	티본스테이크: 'main',
	바비큐립: 'main',
	해산물파스타: 'main',
	크리스마스파스타: 'main',
	초코케이크: 'dessert',
	아이스크림: 'dessert',
	제로콜라: 'beverage',
	레드와인: 'beverage',
	샴페인: 'beverage',
});

const INITIAL_EA = 0;

export { NAMES, PRICES, TYPES, INITIAL_EA };
