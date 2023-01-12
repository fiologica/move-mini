enum RadioMessage {
    message1 = 49434
}
function headLights () {
    headlights = 255 - input.lightLevel() * 3
    if (input.lightLevel() < 85) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        while (headlights < 50) {
            headlights += 1
        }
        strip.setBrightness(headlights)
        strip.show()
    } else if (input.lightLevel() >= 95) {
        strip.clear()
        strip.show()
    }
}
let leftDetector = 0
let rightDetector = 0
let headlights = 0
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Happy)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.setBrightness(50)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
strip.setPixelColor(5, neopixel.colors(NeoPixelColors.White))
basic.forever(function () {
    headLights()
    rightDetector = pins.digitalReadPin(DigitalPin.P15)
    leftDetector = pins.digitalReadPin(DigitalPin.P16)
    if (leftDetector == 0 && rightDetector == 0) {
        kitronik_servo_lite.stop()
    } else if (leftDetector == 1 && rightDetector == 0) {
        kitronik_servo_lite.right()
    } else if (leftDetector == 0 && rightDetector == 1) {
        kitronik_servo_lite.left()
    } else if (leftDetector == 1 && rightDetector == 1) {
        kitronik_servo_lite.forward()
    }
})
