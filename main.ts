basic.forever(function () {
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.toggle(4 - X, 4 - Y)
            basic.pause(100)
            led.toggle(4 - X, 4 - Y)
        }
    }
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= 4; Y++) {
            led.toggle(X, Y)
            basic.pause(100)
            led.toggle(X, Y)
        }
    }
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            if (Y % 2 == 0) {
                led.toggle(X, Y)
            } else {
                led.toggle(4 - X, Y)
            }
            basic.pause(100)
        }
    }
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            if (Y % 2 == 0) {
                led.toggle(4 - X, 4 - Y)
            } else {
                led.toggle(X, 4 - Y)
            }
            basic.pause(100)
        }
    }
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= 4; Y++) {
            led.toggle(X, Y)
            basic.pause(100)
        }
    }
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.toggle(4 - X, 4 - Y)
            basic.pause(100)
        }
    }
})
