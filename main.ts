let Paddle: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
    Paddle.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    Paddle.change(LedSpriteProperty.X, 1)
})
basic.forever(function () {
    let Line: game.LedSprite = null
    let Ball: game.LedSprite = null
    Ball.ifOnEdgeBounce()
    if (Paddle.isTouching(Ball)) {
    	
    }
    if (Ball.isTouching(Line)) {
        game.gameOver()
    }
})
