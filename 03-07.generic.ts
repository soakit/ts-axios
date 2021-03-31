// 泛型
interface GenericIdentityFn<T> {
    (args: T): T
}

function identity<T>(arg: T): T {
    return arg
}

let myIdentity: GenericIdentityFn<number> = identity

let num: number = myIdentity(3);
num.toFixed(2);
// ---------------
// 泛型类
class GenericNumber<T> {
    zeroValue: T
    add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
    return x + y
}

let stringNumeric = new GenericNumber<string>()
stringNumeric.zeroValue = ''
stringNumeric.add = function (x, y) {
    return x + y
}

// -------------
// 泛型约束
interface Lengthwise {
    length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length) // OK
    return arg
}
loggingIdentity({ length: 3 });

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

let x = { a: 1, b: 2, c: 3, d: 4 }

getProperty(x, 'a') // ok
// getProperty(x, 'm') // error