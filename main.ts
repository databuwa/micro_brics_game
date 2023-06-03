input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    if (x > 0) {
        x += -1
    } else {
        x = 4
    }
})
function deleteLine () {
    for (let y_index = 3; y_index >= 0; y_index--) {
        for (let x_index = 0; x_index <= 4; x_index++) {
            if (led.point(x_index, y_index)) {
                led.plot(x_index, y_index+1)
            } else {
                led.unplot(x_index, y_index+1)
            }
        }
    }
}
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    if (x < 4) {
        x += 1
    } else {
        x = 0
    }
})
let y = 0
let x = 0
x = randint(0, 4)
let x0y = 4
let x1y = 4
let x2y = 4
let x3y = 4
let x4y = 4
basic.forever(function () {
    led.plot(x, y)
    basic.pause(800)
    led.unplot(x, y)
    if (x == 0) {
        if (y == x0y) {
            led.plot(x, x0y)
            if (x0y > 0) {
                x0y += 0 - 1
            }
            y = -1
            x = randint(0, 4)
        }
    } else if (x == 1) {
        if (y == x1y) {
            led.plot(x, x1y)
            if (x1y > 0) {
                x1y += 0 - 1
            }
            y = -1
            x = randint(0, 4)
        }
    } else if (x == 2) {
        if (y == x2y) {
            led.plot(x, x2y)
            if (x2y > 0) {
                x2y += 0 - 1
            }
            y = -1
            x = randint(0, 4)
        }
    } else if (x == 3) {
        if (y == x3y) {
            led.plot(x, x3y)
            if (x3y > 0) {
                x3y += 0 - 1
            }
            y = -1
            x = randint(0, 4)
        }
    } else {
        if (y == x4y) {
            led.plot(x, x4y)
            if (x4y > 0) {
                x4y += 0 - 1
            }
            y = -1
            x = randint(0, 4)
        }
    }
    y += 1
    if (x0y < 4 && x1y < 4 && x2y < 4 && x3y < 4 && x4y < 4) {
        deleteLine()
        x0y += 1
        x1y += 1
        x2y += 1
        x3y += 1
        x4y += 1
    }
})
