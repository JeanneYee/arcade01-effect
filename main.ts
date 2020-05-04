namespace SpriteKind {
    export const BadFood = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
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
