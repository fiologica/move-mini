enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    item = receivedNumber
})
function pixelHeadlights () {
    headlights = 50 - input.lightLevel() * 3
    if (input.lightLevel() < 85) {
        pixelArray.showColor(neopixel.colors(NeoPixelColors.White))
        while (headlights < 50) {
            headlights += 1
        }
        pixelArray.setBrightness(headlights)
        pixelArray.show()
    } else if (input.lightLevel() >= 95) {
        pixelArray.clear()
        pixelArray.show()
    }
}
let headlights = 0
let item = 0
let pixelArray: neopixel.Strip = null
radio.setGroup(44)
basic.showIcon(IconNames.Happy)
servos.P0.setRange(0, 360)
pixelArray = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
    pixelHeadlights()
    if (item == 1) {
        pins.servoWritePin(AnalogPin.P1, 0)
        pins.servoWritePin(AnalogPin.P2, 180)
    } else if (item == 3) {
        pins.servoWritePin(AnalogPin.P1, 180)
        pins.servoWritePin(AnalogPin.P2, 0)
    } else if (item == 2) {
        kitronik_servo_lite.stop()
    }
})
