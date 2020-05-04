enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Eating,
    Eating_Right,
    Eating_Left
}
namespace SpriteKind {
    export const BadFood = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Dino.setImage(img`
        . f f f f f f f f f . . . . . .
        f 7 7 7 7 7 7 7 7 7 f 4 . . . .
        f 7 7 7 1 f 1 7 7 7 f 4 . . . .
        f 7 7 7 1 f 1 7 7 7 f f . . . .
        f 7 7 7 1 1 1 7 7 7 f 4 . . . .
        f 7 7 7 7 7 7 f 7 7 f 4 4 . . .
        . f f f f f f f 7 7 7 f f . . .
        . . . . f 7 7 7 7 7 7 f 4 . . .
        . . f 7 7 7 7 7 7 f 7 f 4 4 . .
        . . f 7 7 7 7 7 7 f 7 7 f f . .
        . . . . f 7 d d 7 7 7 7 f 4 4 .
        . . . . f 7 d d d 7 7 7 7 f f 4
        . . . . f 7 d d d 7 7 7 7 7 1 f
        . . . . f 7 d d d 7 7 f f f f f
        . . . . f 7 d f f 7 7 f . . . .
        . . . . f f f . . f f f . . . .
    `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    if (img`
        . . . . . . f f f f f f f f f .
        . . . . 4 f 7 7 7 7 7 7 7 7 7 f
        . . . . 4 f 7 7 7 1 f 1 7 7 7 f
        . . . . f f 7 7 7 1 f 1 7 7 7 f
        . . . . 4 f 7 7 7 1 1 1 7 7 7 f
        . . . 4 4 f 7 7 f 7 7 7 7 7 7 f
        . . . f f 7 7 7 f f f f f f f .
        . . . 4 f 7 7 7 7 7 7 f . . . .
        . . 4 4 f 7 f 7 7 7 7 7 7 f . .
        . . f f 7 7 f 7 7 7 7 7 7 f . .
        . 4 4 f 7 7 7 7 d d 7 f . . . .
        4 f f 7 7 7 7 d d d 7 f . . . .
        f 7 7 7 7 7 7 d d d 7 f . . . .
        f f f f f 7 7 d d d 7 f . . . .
        . . . . f 7 7 f f d 7 f . . . .
        . . . . f f f . . f f f . . . .
    ` == sprite.image) {
        animation.setAction(Dino, ActionKind.Eating_Right)
    } else if (Dino.image == img`
        . f f f f f f f f f . . . . . .
        f 7 7 7 7 7 7 7 7 7 f 4 . . . .
        f 7 7 7 1 f 1 7 7 7 f 4 . . . .
        f 7 7 7 1 f 1 7 7 7 f f . . . .
        f 7 7 7 1 1 1 7 7 7 f 4 . . . .
        f 7 7 7 7 7 7 f 7 7 f 4 4 . . .
        . f f f f f f f 7 7 7 f f . . .
        . . . . f 7 7 7 7 7 7 f 4 . . .
        . . f 7 7 7 7 7 7 f 7 f 4 4 . .
        . . f 7 7 7 7 7 7 f 7 7 f f . .
        . . . . f 7 d d 7 7 7 7 f 4 4 .
        . . . . f 7 d d d 7 7 7 7 f f 4
        . . . . f 7 d d d 7 7 7 7 7 1 f
        . . . . f 7 d d d 7 7 f f f f f
        . . . . f 7 d f f 7 7 f . . . .
        . . . . f f f . . f f f . . . .
    `) {
        animation.setAction(Dino, ActionKind.Eating_Left)
    } else {
    	
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Dino.setImage(img`
        . . . . . . f f f f f f f f f .
        . . . . 4 f 7 7 7 7 7 7 7 7 7 f
        . . . . 4 f 7 7 7 1 f 1 7 7 7 f
        . . . . f f 7 7 7 1 f 1 7 7 7 f
        . . . . 4 f 7 7 7 1 1 1 7 7 7 f
        . . . 4 4 f 7 7 f 7 7 7 7 7 7 f
        . . . f f 7 7 7 f f f f f f f .
        . . . 4 f 7 7 7 7 7 7 f . . . .
        . . 4 4 f 7 f 7 7 7 7 7 7 f . .
        . . f f 7 7 f 7 7 7 7 7 7 f . .
        . 4 4 f 7 7 7 7 d d 7 f . . . .
        4 f f 7 7 7 7 d d d 7 f . . . .
        f 7 7 7 7 7 7 d d d 7 f . . . .
        f f f f f 7 7 d d d 7 f . . . .
        . . . . f 7 7 f f d 7 f . . . .
        . . . . f f f . . f f f . . . .
    `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BadFood, function (sprite, otherSprite) {
    controller.moveSprite(Dino, 10, 10)
    otherSprite.destroy()
    Dino.startEffect(effects.bubbles)
    pause(5000)
    effects.clearParticles(Dino)
    controller.moveSprite(Dino, 100, 100)
})
let FoulEgg: Sprite = null
let Egg: Sprite = null
let Dino: Sprite = null
scene.setBackgroundColor(1)
Dino = sprites.create(img`
    . . . . . . f f f f f f f f f .
    . . . . 4 f 7 7 7 7 7 7 7 7 7 f
    . . . . 4 f 7 7 7 1 f 1 7 7 7 f
    . . . . f f 7 7 7 1 f 1 7 7 7 f
    . . . . 4 f 7 7 7 1 1 1 7 7 7 f
    . . . 4 4 f 7 7 f 7 7 7 7 7 7 f
    . . . f f 7 7 7 f f f f f f f .
    . . . 4 f 7 7 7 7 7 7 f . . . .
    . . 4 4 f 7 f 7 7 7 7 7 7 f . .
    . . f f 7 7 f 7 7 7 7 7 7 f . .
    . 4 4 f 7 7 7 7 d d 7 f . . . .
    4 f f 7 7 7 7 d d d 7 f . . . .
    f 7 7 7 7 7 7 d d d 7 f . . . .
    f f f f f 7 7 d d d 7 f . . . .
    . . . . f 7 7 f f d 7 f . . . .
    . . . . f f f . . f f f . . . .
`, SpriteKind.Player)
controller.moveSprite(Dino)
info.setScore(0)
Dino.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(30)
let EatRight = animation.createAnimation(ActionKind.Eating_Right, 200)
EatRight.addAnimationFrame(img`
    . . . . . . f f f f f f f f f .
    . . . . 4 f 7 7 7 7 7 7 7 7 7 f
    . . . . 4 f 7 7 7 1 f 1 7 7 7 f
    . . . . f f 7 7 7 1 f 1 7 7 7 f
    . . . . 4 f 7 7 7 1 1 1 7 7 7 f
    . . . 4 4 f 7 7 f f f f 7 7 7 f
    . . . f f 7 7 7 f 2 2 f f f f .
    . . . 4 f 7 7 7 f e 2 e . . . .
    . . 4 4 f 7 f 7 7 7 7 7 7 f . .
    . . f f 7 7 f 7 7 7 7 7 7 f . .
    . 4 4 f 7 7 7 7 7 7 7 f . . . .
    4 f f 7 7 7 7 7 d d 7 f . . . .
    f 7 7 7 7 7 7 d d d 7 f . . . .
    f f f f f 7 7 d d d 7 f . . . .
    . . . . f 7 7 f f d 7 f . . . .
    . . . . f f f . . f f f . . . .
`)
EatRight.addAnimationFrame(img`
    . . . . . . f f f f f f f f f .
    . . . . 4 f 7 7 7 7 7 7 7 7 7 f
    . . . . 4 f 7 7 7 1 f 1 7 7 7 f
    . . . . f f 7 7 7 1 f 1 7 7 7 f
    . . . . 4 f 7 7 7 1 1 1 7 7 7 f
    . . . 4 4 f 7 7 f 7 7 7 7 7 7 f
    . . . f f 7 7 7 f f f f f f f .
    . . . 4 f 7 7 7 7 7 7 f . . . .
    . . 4 4 f 7 f 7 7 7 7 7 7 f . .
    . . f f 7 7 f 7 7 7 7 7 7 f . .
    . 4 4 f 7 7 7 7 d d 7 f . . . .
    4 f f 7 7 7 7 d d d 7 f . . . .
    f 7 7 7 7 7 7 d d d 7 f . . . .
    f f f f f 7 7 d d d 7 f . . . .
    . . . . f 7 7 f f d 7 f . . . .
    . . . . f f f . . f f f . . . .
`)
let EatLeft = animation.createAnimation(ActionKind.Eating_Left, 200)
EatLeft.addAnimationFrame(img`
    . f f f f f f f f f . . . . . .
    f 7 7 7 7 7 7 7 7 7 f 4 . . . .
    f 7 7 7 1 f 1 7 7 7 f 4 . . . .
    f 7 7 7 1 f 1 7 7 7 f f . . . .
    f 7 7 7 1 1 1 7 7 7 f 4 . . . .
    f 7 7 7 f f f f 7 7 f 4 4 . . .
    . f f f f 2 2 f 7 7 7 f f . . .
    . . . . e 2 e f 7 7 7 f 4 . . .
    . . f 7 7 7 7 7 7 f 7 f 4 4 . .
    . . f 7 7 7 7 7 7 f 7 7 f f . .
    . . . . f 7 7 7 7 7 7 7 f 4 . .
    . . . . f 7 d d 7 7 7 7 7 4 4 4
    . . . . f 7 d d d 7 7 7 7 7 7 f
    . . . . f 7 d d d 7 7 f f f f f
    . . . . f 7 d f f 7 7 f . . . .
    . . . . f f f . . f f f . . . .
`)
EatLeft.addAnimationFrame(img`
    . f f f f f f f f f . . . . . .
    f 7 7 7 7 7 7 7 7 7 f 4 . . . .
    f 7 7 7 1 f 1 7 7 7 f 4 . . . .
    f 7 7 7 1 f 1 7 7 7 f f . . . .
    f 7 7 7 1 1 1 7 7 7 f 4 . . . .
    f 7 7 7 7 7 7 f 7 7 f 4 4 . . .
    . f f f f f f f 7 7 7 f f . . .
    . . . . f 7 7 7 7 7 7 f 4 . . .
    . . f 7 7 7 7 7 7 f 7 f 4 4 . .
    . . f 7 7 7 7 7 7 f 7 7 f f . .
    . . . . f 7 d d 7 7 7 7 f 4 4 .
    . . . . f 7 d d d 7 7 7 7 f f 4
    . . . . f 7 d d d 7 7 7 7 7 1 f
    . . . . f 7 d d d 7 7 f f f f f
    . . . . f 7 d f f 7 7 f . . . .
    . . . . f f f . . f f f . . . .
`)
animation.attachAnimation(Dino, EatLeft)
animation.attachAnimation(Dino, EatRight)
game.onUpdateInterval(2000, function () {
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
game.onUpdateInterval(5000, function () {
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
