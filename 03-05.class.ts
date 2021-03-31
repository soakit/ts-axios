// 类的继承
class Animal {
	public name: string;
	private age: number;
	protected sex: boolean;
	
	constructor(name, age?, sex?) {
		this.name = name;
		this.age = age;
		this.sex = sex;
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