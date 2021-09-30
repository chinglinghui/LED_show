basic.forever(function () {
    for (let _1 = 0; _1 <= 4; _1++) {
        for (let index = 0; index <= 4; index++) {
            led.toggle(4 - index, 4 - _1)
            basic.pause(100)
            led.toggle(4 - index, 4 - _1)
        }
    }
    for (let index = 0; index <= 4; index++) {
        for (let _1 = 0; _1 <= 4; _1++) {
            led.toggle(index, _1)
            basic.pause(100)
            led.toggle(index, _1)
        }
    }
    for (let _1 = 0; _1 <= 4; _1++) {
        for (let index = 0; index <= 4; index++) {
            if (_1 % 2 == 0) {
                led.toggle(index, _1)
            } else {
                led.toggle(4 - index, _1)
            }
            basic.pause(100)
        }
    }
    for (let _1 = 0; _1 <= 4; _1++) {
        for (let index = 0; index <= 4; index++) {
            if (_1 % 2 == 0) {
                led.toggle(4 - index, 4 - _1)
            } else {
                led.toggle(index, 4 - _1)
            }
            basic.pause(100)
        }
    }
    for (let index = 0; index <= 4; index++) {
        for (let _1 = 0; _1 <= 4; _1++) {
            led.toggle(index, _1)
            basic.pause(100)
        }
    }
    for (let _1 = 0; _1 <= 4; _1++) {
        for (let index = 0; index <= 4; index++) {
            led.toggle(4 - index, 4 - _1)
            basic.pause(100)
        }
    }
})
