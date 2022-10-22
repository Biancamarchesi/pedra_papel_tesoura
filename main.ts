let Mão = 0
input.onSound(DetectedSound.Loud, function () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    255,
    SuperBit.enMotors.M3,
    -255
    )
    basic.pause(500)
    Mão = randint(1, 3)
    if (Mão == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -255,
        SuperBit.enMotors.M3,
        255
        )
        basic.pause(500)
    } else if (Mão == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 4437, 4117, 238, 14, 434, SoundExpressionEffect.Warble, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -255,
        SuperBit.enMotors.M3,
        255
        )
        basic.pause(500)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            # # # . .
            # # . # .
            # # . . #
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1186, 1, 242, 6, 662, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -255,
        SuperBit.enMotors.M1,
        255
        )
        basic.pause(500)
    }
})
basic.forever(function () {
	
})
