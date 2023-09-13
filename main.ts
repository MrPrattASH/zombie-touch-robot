pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
// m1 fast, m2 slow
basic.showIcon(IconNames.Happy)
basic.forever(function on_forever() {
    let touch_sensor = pins.digitalReadPin(DigitalPin.P0)
    //  return a 0 or 1
    if (input.buttonIsPressed(Button.A)) {
        // stay in loop until pressed
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 60)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 55)
        while (touch_sensor == 1) {
            touch_sensor = pins.digitalReadPin(DigitalPin.P0)
        }
        //  touched!
        basic.showIcon(IconNames.Angry)
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 230)
        basic.pause(5000)
        motor.motorStopAll()
    }
    
})
