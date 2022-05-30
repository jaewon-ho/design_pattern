// 팩토리 패턴
// 로직에서 객체 인스턴스 생성을 분리할 수 있다.
// 동일한 프로퍼티가 많은 인스턴스가 중복이 된다면 고려해보는게 좋을 듯 하다.
// 클로저를 통해 캡슐화를 하는데도 용이하다.

const AnimalFactory = () => {
	const animalSound = {
		dog: "멍멍",
		cat: "야옹",
		cow: "음머"
	}
	this.createAnimal = (type) => {
		return {
			makeSound : () => {
				console.log(animalSound[type] || "Grrrr");
			}
		}
	}
	return this;
}

const factory = AnimalFactory();

factory.createAnimal("dog").makeSound();
factory.createAnimal("cat").makeSound();

