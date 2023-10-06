maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 75)
basic.pause(2200)
maqueen.motorStop(maqueen.Motors.All)
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
basic.pause(280)
maqueen.motorStop(maqueen.Motors.All)
basic.forever(function () {
    while (maqueen.Ultrasonic(PingUnit.Centimeters) < 12 && maqueen.Ultrasonic(PingUnit.Centimeters) > 5) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 33)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
    }
    while (maqueen.Ultrasonic(PingUnit.Centimeters) < 5) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
