basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        for (let _1 = 0; _1 <= 4; _1++) {
            led.plot(index, _1)
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