pins.set_pull(DigitalPin.P0, PinPullMode.PULL_UP)
#m1 fast, m2 slow

basic.show_icon(IconNames.HAPPY)
def on_forever():
    touch_sensor = pins.digital_read_pin(DigitalPin.P0)
    # return a 0 or 1
    if input.button_is_pressed(Button.A):
        #stay in loop until pressed
        motor.motor_run(motor.Motors.M1, motor.Dir.CW, 60)
        motor.motor_run(motor.Motors.M2, motor.Dir.CW, 55)
        
        while touch_sensor == 1:
            touch_sensor = pins.digital_read_pin(DigitalPin.P0)
        
        # touched!
        basic.show_icon(IconNames.ANGRY)
        motor.motor_run(motor.Motors.M1, motor.Dir.CW, 255)
        motor.motor_run(motor.Motors.M2, motor.Dir.CW, 230)
        basic.pause(5000)
        motor.motor_stop_all()
basic.forever(on_forever)
