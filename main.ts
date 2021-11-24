input.onButtonPressed(Button.A, function () {
    Paddle.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    game.pause()
})
input.onButtonPressed(Button.B, function () {
    Paddle.change(LedSpriteProperty.X, 1)
})
let Paddle: game.LedSprite = null
game.resume()
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
