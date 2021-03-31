// 类的继承, 修饰符，静态属性
class Animal {
	public name: string;
	private age: number;
	protected sex: boolean;
	readonly familyName: string;

	static greeting = 'hello there';
	
	constructor(name, age?, sex?) {
		this.name = name;
		this.age = age;
		this.sex = sex;
	}

	greet() {
		console.log(Animal.greeting);
	}
	
	move(distance: number) {
		console.log(`${this.name} moved ${distance}m`)
	}

	info() {
		console.log(`${this.name} ${this.age} ${this.sex ? '男':'女'}`)
	}
	
}

class Snake extends Animal {
	move (distance: number = 5) {
		super.move(distance);
	}

	info() {
		super.info();
		console.log(`${this.name} ${this.sex ? '男':'女'}`)
		// console.log(this.age) // error
	}
}


const s = new Snake('Sammy', 11, true);
s.move();
s.info();
console.log(s.name)
// console.log(s.age) // error
// console.log(s.sex) // error
s.greet();

let Animal2: typeof Animal = Animal;
Animal2.greeting = 'hey there';
const s2 = new Animal2('Sammy', 11, true);
s2.greet();