def on_button_pressed_a():
    Paddle: game.LedSprite = None
    Paddle.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    pass
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

basic.show_string("" + str((game.create_sprite(2, 4))))