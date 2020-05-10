enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Eating_Right,
    Eating_Left
}
namespace SpriteKind {
    export const BadFood = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Dino.setImage(img`
        . . . . . . . . . . . . . . . .
        . . f f f f f f f f . . . . . .
        . f 7 7 7 7 7 7 7 7 f 4 . . . .
        . f 7 7 1 f 1 7 7 7 f 4 . . . .
        . f 7 7 1 f 1 7 7 7 f f . . . .
        . f 7 7 1 1 1 7 7 7 f 4 . . . .
        . f 7 7 7 7 7 f 7 7 f 4 4 . . .
        . . f f f f f f 7 7 7 f f . . .
        . . . . f 7 7 7 7 7 7 f 4 . . .
        . . f 7 7 7 7 7 7 f 7 f 4 4 . .
        . . f 7 7 7 7 7 7 f 7 7 f f . .
        . . . . f 7 d d 7 7 7 7 f 4 4 .
        . . . . f 7 d d d 7 7 7 7 f f 4
        . . . . f 7 d d d 7 7 7 7 7 7 f
        . . . . f 7 d f f 7 7 f f f f f
        . . . . f f f . . f f f . . . .
    `)
    DinoDirection = 1
})
function AnimateEating () {
    if (DinoDirection == 0) {
        animation.runImageAnimation(
        Dino,
        EatingRightFrame,
        100,
        false
        )
    } else if (DinoDirection == 1) {
        animation.runImageAnimation(
        Dino,
        EatingLeftFrame,
        100,
        false
        )
        pause(50)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    MakeEatingEggSound()
    AnimateEating()
    info.changeScoreBy(1)
    otherSprite.destroy()
})
function MakeEatingEggSound () {
    music.jumpUp.play()
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Dino.setImage(img`
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f f f f f . .
        . . . . 4 f 7 7 7 7 7 7 7 7 f .
        . . . . 4 f 7 7 7 1 f 1 7 7 f .
        . . . . f f 7 7 7 1 f 1 7 7 f .
        . . . . 4 f 7 7 7 1 1 1 7 7 f .
        . . . 4 4 f 7 7 f 7 7 7 7 7 f .
        . . . f f 7 7 7 f f f f f f . .
        . . . 4 f 7 7 7 7 7 7 f . . . .
        . . 4 4 f 7 f 7 7 7 7 7 7 f . .
        . . f f 7 7 f 7 7 7 7 7 7 f . .
        . 4 4 f 7 7 7 7 d d 7 f . . . .
        4 f f 7 7 7 7 d d d 7 f . . . .
        f 7 7 7 7 7 7 d d d 7 f . . . .
        f f f f f 7 7 f f d 7 f . . . .
        . . . . f f f . . f f f . . . .
    `)
    DinoDirection = 0
})
info.onCountdownEnd(function () {
    game.over(true, effects.starField)
})
function MakeEatingFoulEggSound () {
    music.jumpDown.play()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.BadFood, function (sprite, otherSprite) {
    MakeEatingFoulEggSound()
    AnimateEating()
    controller.moveSprite(Dino, 10, 10)
    otherSprite.destroy()
    Dino.startEffect(effects.bubbles)
    pause(5000)
    effects.clearParticles(Dino)
    controller.moveSprite(Dino, 100, 100)
})
let FoulEgg: Sprite = null
let Egg: Sprite = null
let DinoDirection = 0
let EatingRightFrame: Image[] = []
let EatingLeftFrame: Image[] = []
let Dino: Sprite = null
scene.setBackgroundColor(1)
Dino = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . f f f f f f f f . .
    . . . . 4 f 7 7 7 7 7 7 7 7 f .
    . . . . 4 f 7 7 7 1 f 1 7 7 f .
    . . . . f f 7 7 7 1 f 1 7 7 f .
    . . . . 4 f 7 7 7 1 1 1 7 7 f .
    . . . 4 4 f 7 7 f 7 7 7 7 7 f .
    . . . f f 7 7 7 f f f f f f . .
    . . . 4 f 7 7 7 7 7 7 f . . . .
    . . 4 4 f 7 f 7 7 7 7 7 7 f . .
    . . f f 7 7 f 7 7 7 7 7 7 f . .
    . 4 4 f 7 7 7 7 d d 7 f . . . .
    4 f f 7 7 7 7 d d d 7 f . . . .
    f 7 7 7 7 7 7 d d d 7 f . . . .
    f f f f f 7 7 f f d 7 f . . . .
    . . . . f f f . . f f f . . . .
`, SpriteKind.Player)
controller.moveSprite(Dino)
info.setScore(0)
Dino.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(30)
EatingLeftFrame = [img`
    . . . . . . . . . . . . . . . .
    . . f f f f f f f f . . . . . .
    . f 7 7 7 7 7 7 7 7 f 4 . . . .
    . f 7 7 1 f 1 7 7 7 f 4 . . . .
    . f 7 7 1 f 1 7 7 7 f f . . . .
    . f 7 7 1 1 1 7 7 7 f 4 . . . .
    . f 7 7 f f f f 7 7 f 4 4 . . .
    . . f f f 2 2 f 7 7 7 f f . . .
    . . . . e 2 e f 7 7 7 f 4 . . .
    . . f 7 7 7 7 7 7 f 7 f 4 4 . .
    . . f 7 7 7 7 7 7 f 7 7 f f . .
    . . . . f 7 7 7 7 7 7 7 f 4 . .
    . . . . f 7 d d 7 7 7 7 7 4 4 4
    . . . . f 7 d d d 7 7 7 7 7 7 f
    . . . . f 7 d f f 7 7 f f f f f
    . . . . f f f . . f f f . . . .
`, img`
    . . . . . . . . . . . . . . . .
    . . f f f f f f f f . . . . . .
    . f 7 7 7 7 7 7 7 7 f 4 . . . .
    . f 7 7 1 f 1 7 7 7 f 4 . . . .
    . f 7 7 1 f 1 7 7 7 f f . . . .
    . f 7 7 1 1 1 7 7 7 f 4 . . . .
    . f 7 7 7 7 7 f 7 7 f 4 4 . . .
    . . f f f f f f 7 7 7 f f . . .
    . . . . f 7 7 7 7 7 7 f 4 . . .
    . . f 7 7 7 7 7 7 f 7 f 4 4 . .
    . . f 7 7 7 7 7 7 f 7 7 f f . .
    . . . . f 7 d d 7 7 7 7 f 4 4 .
    . . . . f 7 d d d 7 7 7 7 f f 4
    . . . . f 7 d d d 7 7 7 7 7 7 f
    . . . . f 7 d f f 7 7 f f f f f
    . . . . f f f . . f f f . . . .
`]
EatingRightFrame = [img`
    . . . . . . . . . . . . . . . .
    . . . . . . f f f f f f f f . .
    . . . . 4 f 7 7 7 7 7 7 7 7 f .
    . . . . 4 f 7 7 7 1 f 1 7 7 f .
    . . . . f f 7 7 7 1 f 1 7 7 f .
    . . . . 4 f 7 7 7 1 1 1 7 7 f .
    . . . 4 4 f 7 7 f f f f 7 7 f .
    . . . f f 7 7 7 f 2 2 f f f . .
    . . . 4 f 7 7 7 f e 2 e . . . .
    . . 4 4 f 7 f 7 7 7 7 7 7 f . .
    . . f f 7 7 f 7 7 7 7 7 7 f . .
    . 4 4 f 7 7 7 7 7 7 7 f . . . .
    4 f f 7 7 7 7 7 d d 7 f . . . .
    f 7 7 7 7 7 7 d d d 7 f . . . .
    f f f f f 7 7 f f d 7 f . . . .
    . . . . f f f . . f f f . . . .
`, img`
    . . . . . . . . . . . . . . . .
    . . . . . . f f f f f f f f . .
    . . . . 4 f 7 7 7 7 7 7 7 7 f .
    . . . . 4 f 7 7 7 1 f 1 7 7 f .
    . . . . f f 7 7 7 1 f 1 7 7 f .
    . . . . 4 f 7 7 7 1 1 1 7 7 f .
    . . . 4 4 f 7 7 f 7 7 7 7 7 f .
    . . . f f 7 7 7 f f f f f f . .
    . . . 4 f 7 7 7 7 7 7 f . . . .
    . . 4 4 f 7 f 7 7 7 7 7 7 f . .
    . . f f 7 7 f 7 7 7 7 7 7 f . .
    . 4 4 f 7 7 7 7 d d 7 f . . . .
    4 f f 7 7 7 7 d d d 7 f . . . .
    f 7 7 7 7 7 7 d d d 7 f . . . .
    f f f f f 7 7 f f d 7 f . . . .
    . . . . f f f . . f f f . . . .
`]
game.onUpdateInterval(1500, function () {
    Egg = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . f d d f . . . . . .
        . . . . . f d d d d f . . . . .
        . . . . . f d 1 1 d f . . . . .
        . . . . f d d d 1 d d f . . . .
        . . . . f d d d d d d f . . . .
        . . . . f d d d d d d f . . . .
        . . . . . f d d d d f . . . . .
        . . . . . f d d d d f . . . . .
        . . . . . . f f f f . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Food)
    Egg.setPosition(Math.randomRange(10, 160), Math.randomRange(10, 120))
})
game.onUpdateInterval(6000, function () {
    FoulEgg = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . f 6 6 f . . . . . .
        . . . . . f 6 6 6 6 f . . . . .
        . . . . . f 6 1 1 6 f . . . . .
        . . . . f 6 6 6 1 6 6 f . . . .
        . . . . f 6 6 6 6 6 6 f . . . .
        . . . . f 6 6 6 6 6 6 f . . . .
        . . . . . f 6 6 6 6 f . . . . .
        . . . . . f 6 6 6 6 f . . . . .
        . . . . . . f f f f . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.BadFood)
    FoulEgg.setPosition(Math.randomRange(10, 160), Math.randomRange(10, 120))
})
