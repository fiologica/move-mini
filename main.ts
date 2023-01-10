enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    item = receivedNumber
})
let item = 0
radio.setGroup(44)
basic.showIcon(IconNames.Happy)
servos.P0.setRange(0, 360)
basic.forever(function () {
    if (item == 1) {
        pins.servoWritePin(AnalogPin.P1, 180)
        pins.servoWritePin(AnalogPin.P2, 0)
    } else if (item == 3) {
        pins.servoWritePin(AnalogPin.P1, 0)
        pins.servoWritePin(AnalogPin.P2, 180)
    } else if (item == 2) {
        kitronik_servo_lite.stop()
    }
})
