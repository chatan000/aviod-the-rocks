function Score () {
    info.changeScoreBy(1)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    overlap()
})
function overlap () {
    game.over(false)
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
    surivior.setPosition(128, 63)
    controller.moveSprite(surivior, 100, 100)
}
function projectile2 () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . c c c . . . . 
. . . . . . c c c c c c c c . . 
. . . b b b b b b b b b b c c . 
. . b c c c b b c c b b b b b c 
c b c c c c c c c c b b b c b c 
c c c c c c b b b c c b c c b c 
c c c c c b c c b b c b b c b c 
b c b b c b b b c b b c b c b c 
b c b b c c c c c c b c b c c c 
b c b b b c b b c c b c b c c c 
. c c c b c b b b c c c b c c c 
. . c c c c c b c b c c c c c c 
. . . b b b c c c c c c c c c . 
. . . c c b b b b c c c c c c . 
. . . . c c b b b c c c . . . . 
. . . . . c c c c c c . . . . . 
`, 50, Math.randomRange(-5, 98))
}
let projectile: Sprite = null
let surivior: Sprite = null
Surivior()
music.baDing.play()
effects.clouds.startScreenEffect()
game.onUpdateInterval(200, function () {
    Score()
    projectile2()
})
