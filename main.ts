input.onButtonPressed(Button.A, function () {
    Number2 += 1
    basic.showNumber(Number2)
})
input.onGesture(Gesture.TiltLeft, function () {
    Sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Number2 += -1
    basic.showNumber(Number2)
})
input.onGesture(Gesture.TiltRight, function () {
    Sprite.change(LedSpriteProperty.X, 1)
})
let Sprite: game.LedSprite = null
let Number2 = 0
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
Number2 = 7
Sprite = game.createSprite(2, 2)
basic.forever(function () {
	
})
