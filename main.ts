basic.forever(function () {
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= 4; Y++) {
            led.toggle(4 - X, 4 - Y)
            basic.pause(100)
            led.toggle(4 - X, 4 - Y)
        }
    }
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.toggle(X, Y)
            basic.pause(100)
            led.toggle(X, Y)
        }
    }
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= 4; Y++) {
            if (X % 2 == 0) {
                led.toggle(X, Y)
            } else {
                led.toggle(X, 4 - Y)
            }
            basic.pause(100)
        }
    }
})
