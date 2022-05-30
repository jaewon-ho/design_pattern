// builder pattern
// 복잡한 객체의 생성을 단훈화 하는 생성 디자인 패턴
// 생성자 파라미터가 많거나 하는 경ㅇ 유용하다.
//

class CoffeBuilder {
	constructor() {
		this.recipe=[];
		this.cc = 0;
	}

	add = (ingredients, cc) => {
		this.recipe.push(ingredients);
		this.cc += cc;
		return this;
	}

	build = () => {
		return {
			recipe: [...this.recipe],
			cc: this.cc
		}
	}

}

const americano = new CoffeBuilder()
	.add("espresso", 30)
	.add("espresso", 30)
	.add("water", 350)
	.build()
;

const ice_americano = new CoffeBuilder()
	.add("espresso", 30)
	.add("espresso", 30)
	.add("water", 250)
	.add("ice", 100)
	.build()
;

const cafe_latte = new CoffeBuilder()
	.add("espresso", 30)
	.add("espresso", 30)
	.add("hot_milk", 350)
	.build()
;

console.log(americano);
console.log(ice_americano);
console.log(cafe_latte);
