// 接口的继承
interface Shape {
    color: string
}

interface PenStroke {
    penWidth: number
}

interface Squares extends Shape, PenStroke {
    sideLength: number
}

let square = {} as Squares;
square.color = 'blue';
square.sideLength = 10;
square.penWidth = 3;
// -------------------------
// 混合类型
interface Counter {
    (start: number): string,
    interval: number,
    reset(): void
}

function getCounter(): Counter {
    var start = 0;
    let counter = (function(tStart: number) {
        start = tStart
        
        setInterval(() => {
            start += counter.interval;
            console.log(start)
        }, 1000)
    }) as Counter;

    counter.interval = 5;

    counter.reset = function() {
        start = 0;
    }
    return counter;
}

let c = getCounter();
c(100);
setTimeout(() => {
    c.reset();
}, 5000)
// -----------------
// 接口继承类
class Control {
    public state: any
}
interface SelectAbleCtrl extends Control {
    select()
}
class Button extends Control implements SelectAbleCtrl {
    select() {
    }
}
class TextBox extends Control {
}
class ImageBox implements SelectAbleCtrl {
    select() {}
    public state: any;
}