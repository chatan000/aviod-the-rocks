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
. . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . 1 1 . . . . . . . . . . . . . . 1 1 . . . 
. . 1 1 . . . . . . . . . . . . . . . . 1 1 . . 
. 1 1 . . . . . . . . . . . . . . . . . . 1 1 . 
. 1 . . . . . . . . . . . . . . . . . . . . 1 . 
1 1 . . . . . . . . . . . . . . . . . . . . 1 1 
`, SpriteKind.Player)
    surivior.setPosition(128, 63)
    controller.moveSprite(surivior, 40, 100)
    surivior.setFlag(SpriteFlag.StayInScreen, true)
}
function projectile2 () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . c c c c c . . . . . . 
. . . . c c b b c c c c . . . . 
. . . c c b b b b b c c . . . . 
. . c c c b b b b c c c c c c . 
c c c c c c c c c c c c c c c c 
c c c c c b c c c c b b c c c c 
c c c b b b c c c c b c c c c c 
c c c b b c c c b c b c c c c c 
c c c b c c c c b b b c c c c . 
. c c b b b c c c c c c c c c . 
. c c c c c c c c c c c c c c . 
. c c c c c c b b b b b c c c . 
. . c c c b b b b b b c c c . . 
. . . c c c b b b b b c c . . . 
. . . . . c c c c c c c . . . . 
`, 50, Math.randomRange(-5, 97))
}
function life () {
    info.setLife(1)
}
let projectile: Sprite = null
let surivior: Sprite = null
game.splash("Survive the falling rocks for as long as you can")
Surivior()
life()
music.baDing.play()
effects.clouds.startScreenEffect()
game.onUpdateInterval(200, function () {
    Score()
    projectile2()
})
