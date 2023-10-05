basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 12 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 75)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < 0) {
        	
        }
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 75)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    }
})
