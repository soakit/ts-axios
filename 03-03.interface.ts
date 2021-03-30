// 构造器接口与方法接口
interface ClockInterface {
    tick(): void
}

interface ClockCtor {
    new(hour: number, minute: number): ClockInterface
}

function createClock(ctor: ClockCtor, hour: number, minute: number) : ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {

    }

    tick() {
        console.log('beep beep');
    }
}

class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {

    }

    tick() {
        console.log('tick tok');
    }
}

let digital = createClock(DigitalClock, 12, 0);
let analog = createClock(AnalogClock, 12, 0);