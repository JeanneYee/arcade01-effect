# Tutorials

Here are some cool tutorials to get you started with your Gizmo Board!

## Basic
```template
scene.setBackgroundColor(1)
let mySprite = sprites.create(img`
    . . f f f f f f f . . . . . . .
    . f 7 7 7 7 7 7 7 f . . . . . .
    f 7 7 7 7 1 f 1 7 f . . . . . .
    f 7 7 7 7 1 f 1 7 f . . . . . .
    f 7 7 7 7 1 1 1 7 f . . . . . .
    f 7 7 7 7 7 7 7 7 f . . . . . .
    . f f 7 f f f 7 7 f . . . . . .
    . . . f 2 2 f 7 7 f . . . . . .
    . . . e 2 f f 7 7 f . . . . . .
    . . f f f 7 7 7 f . . . . . . .
    . . f 7 7 7 7 7 f 4 4 . . . . .
    . f 7 7 7 6 6 7 7 f f 4 4 . . .
    . . f 7 6 6 6 7 7 7 7 f f 4 4 .
    . . f 7 6 6 6 f 7 f 7 7 f f 4 .
    . . f 7 f f f f 7 f c 7 7 7 f d
    . . . f . . . . f . . c c c . .
`, SpriteKind.Player)
let mySprite5 = sprites.create(img`
    . . f f f f f f f f f f f f . .
    . f f 6 6 6 6 6 6 6 6 6 6 6 f .
    f 4 f 6 6 6 6 6 6 6 6 6 6 6 f .
    f 4 f 6 1 f 1 6 6 f 6 6 6 f f .
    f f f 6 1 f 1 6 6 6 6 6 6 6 f .
    . f 4 f 1 1 1 6 6 6 6 6 6 6 f .
    . f 4 f 6 6 6 6 6 6 f f f f f .
    . f f f 6 6 6 6 6 6 6 f . . . .
    . . . f f 6 6 6 6 6 6 f . . . .
    . . . . f 6 d d d d d f . . . .
    . . f f f 6 d d d d d f . . . .
    . . f 6 6 6 d d d d d f . . . .
    . . f f 6 6 6 6 6 6 6 f . . . .
    . . . f f 6 6 6 6 6 6 f . . . .
    . . . . f 6 6 f f 6 6 f . . . .
    . . . . f f f . . f f . . . . .
`, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . f f f f f f f . . . . . . .
    . f 7 7 7 7 7 7 7 f . . . . . .
    f 7 7 7 7 1 f 1 7 f . . . . . .
    f 7 7 7 7 1 f 1 7 f . . . . . .
    f 7 7 7 7 1 1 1 7 f . . . . . .
    f 7 7 7 7 7 7 7 7 f . . . . . .
    . f f 7 f f f 7 7 f . . . . . .
    . . . f 2 2 f 7 7 f . . . . . .
    . . . e 2 f f 7 7 f . . . . . .
    . . f f f 7 7 7 f . . . . . . .
    . . f 7 7 7 7 7 f 4 4 . . . . .
    . f 7 7 7 6 6 7 7 f f 4 4 . . .
    . . f 7 6 6 6 7 7 7 7 f f 4 4 .
    . . f 7 6 6 6 f 7 f 7 7 f f 4 .
    . . f 7 f f f f 7 f c 7 7 7 f d
    . . . f . . . . f . . c c c . .
`, SpriteKind.Player)
let mySprite3 = sprites.create(img`
    . . f f f f f f f . . . . . . .
    . f 7 7 7 7 7 7 7 f . . . . . .
    f 7 7 7 7 1 f 1 7 f . . . . . .
    f 7 7 7 7 1 f 1 7 f . . . . . .
    f 7 7 7 7 1 1 1 7 f . . . . . .
    f 7 7 7 7 7 7 7 7 f . . . . . .
    . f f f f 7 7 7 7 f . . . . . .
    . . . 7 7 7 7 7 7 f . . . . . .
    . . . f 7 7 7 7 7 f . . . . . .
    . . f f f 7 7 7 f . . . . . . .
    . . f 7 7 7 7 7 f 4 4 . . . . .
    . f 7 7 7 6 6 7 7 f f 4 4 . . .
    . . f 7 6 6 6 7 7 7 7 f f 4 4 .
    . . f 7 6 6 6 f 7 f 7 7 f f 4 .
    . . f 7 f f f f 7 f c 7 7 7 f d
    . . . f . . . . f . . c c c . .
`, SpriteKind.Player)
let mySprite4 = sprites.create(img`
    . . f f f f f f f f f f f f . .
    . f f 7 7 7 7 7 7 7 7 7 7 7 f .
    f 4 f 7 7 7 7 7 7 7 7 7 7 7 f .
    f 4 f 7 1 f 1 7 7 f 7 7 7 f f .
    f f f 7 1 f 1 7 7 7 7 7 7 7 f .
    . f 4 f 1 1 1 7 7 7 7 7 7 7 f .
    . f 4 f 7 7 7 7 7 7 f f f f f .
    . f f f 7 7 7 7 7 7 7 f . . . .
    . . . f f 7 7 7 7 7 7 f . . . .
    . . . . f 7 d d d d d f . . . .
    . . f f f 7 d d d d d f . . . .
    . . f 7 7 7 d d d d d f . . . .
    . . f f 7 7 7 7 7 7 7 f . . . .
    . . . f f 7 7 7 7 7 7 f . . . .
    . . . . f 7 7 f f 7 7 f . . . .
    . . . . f f f . . f f . . . . .
`, SpriteKind.Player)
mySprite3.setPosition(24, 22)
mySprite5.setPosition(26, 95)
mySprite.setPosition(62, 45)
mySprite2.setPosition(122, 87)
mySprite4.setPosition(123, 22)

```