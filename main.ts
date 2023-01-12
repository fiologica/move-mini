enum RadioMessage {
    message1 = 49434
}
let leftDetector = 0
let rightDetector = 0
basic.showIcon(IconNames.Happy)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
servos.P1.setRange(0, 180)
servos.P2.setRange(0, 180)
kitronik_servo_lite.setDistancePerSecond(100)
kitronik_servo_lite.setDegreesPerSecond(50)
basic.forever(function () {
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
