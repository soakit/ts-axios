interface Square {
    color: string,
    area: number
}

interface SquareConfig {
    color?: string,
    width?: number

    [xx: string]: any // 额外的属性
}

function createSquare(config: SquareConfig): Square {
    let newSquare = {
        color: 'white',
        area: 100,
    }
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

createSquare({
    color: 'black'
})

createSquare({
    color: 'black',

    border: '2',
})

// ----------------------
// 方法接口
interface SearchFn {
    (source: string, subString: string): boolean
}

var mySearch: SearchFn = function(src, sub) {
    return src.search(sub) > -1;
}
// ----------------------
// 可选属性
class Animal {
    name: string
}
class Dog extends Animal {
    breed: string
}

interface inter {
    [xx: number]: Dog,
    [yy: string]: Animal
}
// ----------------------
// 可选属性
interface NumberDict {
    [xx: string]: number,

    length: number,

    // name: string, // error，与第一行冲突
}
// ----------------------
// 只读属性
interface ReadOnlyStringArray {
    readonly [xx: number]: string
}
let arr: ReadOnlyStringArray = ['Alice', 'Bob'];
// arr.push('Cindy') // error
// arr[2] = 'Dick' // error
