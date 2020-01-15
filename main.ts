function Score () {
    info.setScore(1)
}
function rocks () {
    rocks1 = sprites.create(img`
. . . . . . . b b b b c . . . . 
. . b b b b b c b b b b c . . . 
. b b c c c c c b b b b c c . . 
. b b c c c c c b b b b b b . . 
. b b c c c c c b b b b b b b . 
. b b c c c c c b c b b b b b . 
b b c c c c c c c b b b b b c c 
b b c c c c c c c b b b b b b c 
b b c c c c c c b b b b b b b c 
b b c c c c c c b b b b b c b c 
b b c c c c c c b b b c c c b . 
b b c c c c c c c c c b c c c . 
. c c c c c b c c c b b b b c . 
. . c c c c b b b c b b b b c . 
. . . c c c c c b b b b c c . . 
. . . . . . . . c b b c . . . . 
`, SpriteKind.Player)
}
function Surivior () {
    surivior = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . f 4 f f f f f . . . . 
. . . . . . . . . . . f f 4 4 e e e e e f f . . 
. . . . . . . . . . f f 4 4 4 e e e e e e f f . 
. . . . . . . . . . f e e e e f f f e e e e f . 
. . . . . . . . . f e 4 4 4 4 e e e f f f f f . 
. . . . . . . . . f 4 e f f f f f 2 2 2 e f f f 
. . . . . . . . . f f f e e e f f f f f f f f f 
. . . . . . . . . f 4 4 4 4 f b b 4 9 9 4 f 4 f 
. . . . . . . . . . f 4 d d f b b d d 9 4 4 f . 
. . . . . . . . . 4 4 f d d d d d d 4 4 4 f . . 
. . . . . . . . . d d 4 4 2 2 2 2 2 2 2 f . . . 
. . . . . . . . . d d 4 4 4 8 9 9 9 9 9 f . . . 
. . . . . . . . . 4 4 4 4 f f f f f f f f . . . 
. . . . . . . . . . . . . f f . . . f f f . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    surivior.setPosition(144, 60)
    controller.moveSprite(surivior, 100, 100)
}
let surivior: Sprite = null
let rocks1: Sprite = null
rocks()
Surivior()
