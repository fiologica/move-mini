enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    item = receivedNumber
})
let leftDetector = 0
let rightDetector = 0
let item = 0
radio.setGroup(44)
basic.showIcon(IconNames.Happy)
servos.P0.setRange(0, 360)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
basic.forever(function () {
    if (item == 1) {
        pins.servoWritePin(AnalogPin.P1, 0)
        pins.servoWritePin(AnalogPin.P2, 180)
    } else if (item == 3) {
        pins.servoWritePin(AnalogPin.P1, 180)
        pins.servoWritePin(AnalogPin.P2, 0)
    } else if (item == 2) {
        kitronik_servo_lite.stop()
    }
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
