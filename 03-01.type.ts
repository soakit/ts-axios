let str: string = 'str';
let num: number = 1;
let isDone: boolean = false;

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// 元组
let tup: [number, string] = [1, 'str'];
tup.push(2);
tup.push('str2');
// tup.push(true); // error

// 枚举
enum Color {
    Red=1,
    Green,
    Blue
}
let c: Color = Color.Red; // Color[1]
let c2: string = Color[2]; // Green

// any
let notSure: any = 4;
notSure = false;
notSure = 'str';

let list3: any[] = [1, false, 'str'];

let null1: null = null;
null1 = undefined;

let undefined1: undefined = undefined;
undefined1 = null;

// never
// 直接抛异常了，永远(never)没有返回值
function error(msg: string):never {
    throw new Error(msg);
}

// 死循环了，永远(never)没有返回值
function inifiniteLoop(): never {
    while(true) {

    }
}

// declare
declare function create(o: object | null): void;
create({key: 'value'});
create(null);

// 类型转换
let someValue: any = 'str';
let len: number = (<string>someValue).length;
let len2: number = (someValue as string).length;

