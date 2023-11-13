# :rocket: 기능구현 목록

## :pushpin: 도메인

### :white_check_mark: 입력 / `InputView.js`

- [x] 사용자에게 입력을 받는다.
  - 메소드
    - [x] `readDate()` : 날짜를 입력받아서 날짜 객체를 생성한 후 리턴한다.
    - [x] `readOrder()` : 주문을 입력받아서 주문 객체를 생성한 후 리턴한다.

### :white_check_mark: 날짜 / `Date.js`

- [x] 날짜를 입력받아서 유효성을 검증한 후 값을 저장한다.
  - 유효성 검증 목록
    - [x] 실수인가?
    - [x] 숫자가 아닌가?
    - [x] 1부터 31사이인가?
  - 메소드
    - [x] `#validate()` : 유효성을 검증함.
    - [x] `getDate()` : 날짜를 반환함.

### :white_check_mark: 주문 / `Order.js`

- [x] 주문을 문자열로 입력받아서 유효성을 검증한 후 값을 저장한다.
  - 유효성 검증 목록
    - [x] 메뉴가 존재하는가?
    - [x] 수량이 숫자인가?
    - [x] 수량이 실수인가?
    - [x] 수량이 1 이상인가?
    - [x] 메뉴들의 전체 개수가 20개 이하인가?
    - [x] 중복된 메뉴가 존재하는가?
    - [x] 오로지 음료만 주문하진 않았는가?
  - 메소드
    - [x] `#validate()` : 유효성 프로세스를 실행함.
    - [x] `#checkValidInput()` : 유효한 메뉴와 수량을 입력했는지 검증함.
    - [x] `#checkEaExceedTwenty()` : 전체 메뉴의 수량이 20개를 넘는지 검증함.
    - [x] `#checkDuplicateMenuExist()` : 입력받은 메뉴들 중 중복된 메뉴가 있는지 검증함.
    - [x] `#checkOnlyBeverage()` : 오로지 음료만 입력받았는지 검증함.
    - [x] `getOrderedMenus()` : 주문한 메뉴들만 리스트 형태로 반환함.

### :white_check_mark: 할인 / `Discount.js`

- [x] 적용된 할인 금액들을 구하여 하나의 object로 저장한다.
  - 메소드
    - [x] `#dDayDiscount()` : 디데이 할인 금액을 반환함.
    - [x] `#weekdayDiscount()` : 평일 할인 금액을 반환함.
    - [x] `#weekendDiscount()` : 주말 할인 금액을 반환함.
    - [x] `#specialDiscount()` : 특별 할인 금액을 반환함.
    - [x] `getDiscounts()` : 할인 금액들이 저장된 object를 반환함.

### :white_check_mark: 증정 / `Gift.js`

- [x] 할인 전 총 금액에 따라 증정 할인 금액을 저장한다.
  - 메소드
    - [x] `getGift()` : 증정 금액을 반환함.

### :white_check_mark: 뱃지 / `Badge.js`
- [x] 총 할인 금액 + 증정 금액에 따른 뱃지를 저장한다.
  - 메소드
    - [x] `getBadge()` : 뱃지 문자열을 반환함.

### :white_check_mark: 출력 / `OutputView.js`

- [x] 결과 문자열을 출력한다.
  - 메소드
     - [x] `printSelectedDate()` : 선택된 날짜를 출력한다.
     - [x] `printOrderedMenus()` : 주문한 메뉴들을 출력한다.
     - [x] `printTotalPriceBeforeDiscount()` : 할인 전 총 주문 금액을 출력한다.
     - [x] `printGiftMenu()` : 증정 메뉴를 출력한다.
     - [x] `printBenefits()` : 각 할인 금액과 증정 할인 금액을 출력한다.
     - [x] `printTotalBenefitPrice()` : 총 헤택 금액을 출력한다.
     - [x] `printTotalPriceAfterDiscount()` : 총 주문 금액 - 총 할인 금액을 출력한다.
     - [x] `printBadge()` : 뱃지를 출력한다.
     - [x] `printOutput()` : 전체 print 함수를 실행하여 결과를 출력한다.


## :building_construction: MVC

이번에 처음으로 `MVC 패턴`을 이용하여 구조를 생각하고 각 패턴별로 나눠보았는데 다른 분들이 하기에 따라서 해본거라 아직 많이 미숙하고 사실 지금보면 다 `Model`에 들어가도 될 것 같이 짠 것 같습니다 😭

### :white_check_mark: Model

사용자에게 입력을 받아서 저장된 날짜와 주문을 검증하고 값을 돌려주는 역할을 하는 것들을 `Model` 패턴으로 분류하였습니다!

- `Date.js`
- `Order.js`

### :white_check_mark: View

입력과 출력을 담당하는 부분을 `View` 패턴으로 분류하였습니다!

- `InputView.js`
- `OutputView.js`

### :white_check_mark: Controller

입력받은 값으로 어떤 계산이나 처리를 하는 기능을 하는 부분을 `Controller` 패턴으로 분류하였습니다!

- `Badge.js`
- `Discount.js`
- `Gift.js`


## :wrench: 기타

### :white_check_mark: Utils

특정 패턴이나 기능에 구애받지 않고 유니버셜하게 쓰이는 함수들을 모아놓은 폴더 및 파일입니다!

- [x] `Utils.js`
  - 메소드
    - [x] `getTotalPrice()` : `Order` 리스트를 전달받아서 총 주문 금액을 반환함.
    - [x] `getTotalDiscount()` : `Discount` 객체를 전달받아서 총 할인 금액을 반환함.
    - [x] `getFormattedPriceString()` : `price` 값을 전달받아서 3자리마다 콤마가 추가된 금액 문자열을 반환함.

### :white_check_mark: Constants

구현하면서 필요한 상수값들을 모아놓은 폴더입니다.

- [x] `Badge.js` : 뱃지명, 뱃지 자격 금액
- [x] `DiscountDate.js` : 할인 날짜들
- [x] `DiscountMoney.js` : 할인 금액들
- [x] `Gift.js` : 증정 상품명, 증정 자격 금액, 증정 할인 금액
- [x] `Menus.js` : 메뉴명, 메뉴 가격, 메뉴 타입, 초기 수량
