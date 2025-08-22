scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    mySprite.vx = -30
    tiles.placeOnTile(mySprite, tiles.getTileLocation(28, 12))
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameOver == 0) {
        mySprite.vy = -30
        animation.runImageAnimation(
        mySprite,
        [img`
            . 5 . . 5 . 
            5 5 . . 5 5 
            5 5 . . 5 5 
            5 5 5 5 5 5 
            5 5 5 5 5 5 
            . 5 5 5 5 . 
            `,img`
            . 5 . . 5 . 
            5 5 . . 5 5 
            5 5 . . 5 5 
            5 5 . . 5 5 
            5 5 5 5 5 5 
            . 5 5 5 5 . 
            `,img`
            . 5 5 5 5 . 
            5 5 5 5 5 5 
            5 5 5 5 5 5 
            5 5 5 5 5 5 
            5 5 5 5 5 5 
            . 5 5 5 5 . 
            `],
        100,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    mySprite.vx = 30
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 19))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameOver == 0) {
        mySprite.vx = -30
        animation.runImageAnimation(
        mySprite,
        [img`
            . 5 5 5 5 . 
            5 5 5 5 5 5 
            . . . 5 5 5 
            . . . 5 5 5 
            5 5 5 5 5 5 
            . 5 5 5 5 . 
            `,img`
            . 5 5 5 5 . 
            5 5 5 5 5 5 
            . . . . 5 5 
            . . . . 5 5 
            5 5 5 5 5 5 
            . 5 5 5 5 . 
            `,img`
            . 5 5 5 5 . 
            5 5 5 5 5 5 
            5 5 5 5 5 5 
            5 5 5 5 5 5 
            5 5 5 5 5 5 
            . 5 5 5 5 . 
            `],
        100,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    mySprite.vx = -30
    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 19))
})
info.onCountdownEnd(function () {
    enemyWeak = 0
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameOver == 0) {
        mySprite.vx = 30
        animation.runImageAnimation(
        mySprite,
        [img`
            . 5 5 5 5 . 
            5 5 5 5 5 5 
            5 5 5 . . . 
            5 5 5 . . . 
            5 5 5 5 5 5 
            . 5 5 5 5 . 
            `,img`
            . 5 5 5 5 . 
            5 5 5 5 5 5 
            5 5 . . . . 
            5 5 . . . . 
            5 5 5 5 5 5 
            . 5 5 5 5 . 
            `,img`
            . 5 5 5 5 . 
            5 5 5 5 5 5 
            5 5 5 5 5 5 
            5 5 5 5 5 5 
            5 5 5 5 5 5 
            . 5 5 5 5 . 
            `],
        100,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency8`)
    enemyWeak = 1
    info.changeScoreBy(100)
    info.startCountdown(10)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameOver == 0) {
        mySprite.vy = 30
        animation.runImageAnimation(
        mySprite,
        [img`
            . 5 5 5 5 . 
            5 5 5 5 5 5 
            5 5 5 5 5 5 
            5 5 . . 5 5 
            5 5 . . 5 5 
            . 5 . . 5 . 
            `,img`
            . 5 5 5 5 . 
            5 5 5 5 5 5 
            5 5 . . 5 5 
            5 5 . . 5 5 
            5 5 . . 5 5 
            . 5 . . 5 . 
            `,img`
            . 5 5 5 5 . 
            5 5 5 5 5 5 
            5 5 5 5 5 5 
            5 5 5 5 5 5 
            5 5 5 5 5 5 
            . 5 5 5 5 . 
            `],
        100,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    mySprite.vx = 30
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 12))
})
info.onLifeZero(function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    animation.runImageAnimation(
    mySprite,
    [img`
        . 5 5 5 5 . . 
        5 5 5 5 5 5 . 
        5 5 5 5 5 5 . 
        5 5 5 5 5 5 . 
        5 5 5 5 5 5 . 
        . 5 5 5 5 . . 
        . . . . . . . 
        `,img`
        . . . . . . . 
        . . 5 5 5 5 . 
        . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 
        . . 5 5 5 5 . 
        `,img`
        . 5 5 5 5 . . 
        5 5 5 5 5 5 . 
        5 5 5 5 5 5 . 
        5 5 5 5 5 5 . 
        5 5 5 5 5 5 . 
        . 5 5 5 5 . . 
        . . . . . . . 
        `,img`
        . . . . . . . 
        . . 5 5 5 5 . 
        . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 
        . . 5 5 5 5 . 
        `,img`
        . . . . . . . 
        . . 5 5 5 5 . 
        . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 
        . . 5 5 5 5 . 
        `,img`
        . . . . . . . 
        . . 5 5 5 5 . 
        . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 
        . . 5 5 5 5 . 
        `,img`
        . . . . . . . 
        . . 5 5 5 5 . 
        . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 
        . . 5 5 5 5 . 
        `,img`
        . . . . . . . 
        . . 5 5 5 5 . 
        . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 
        . . 5 5 5 5 . 
        `,img`
        . . . . . . . 
        . . 5 5 4 5 . 
        . 5 5 4 5 5 5 
        . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 
        . . 5 5 5 5 . 
        `,img`
        . . . . . . . 
        . . 5 5 4 5 . 
        . 5 5 4 5 5 5 
        . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 
        . . 5 5 5 5 . 
        `,img`
        . . . . . . . 
        . . 5 5 4 5 . 
        . 5 5 4 5 5 5 
        . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 
        . . 5 5 5 5 . 
        `,img`
        . . . . . . . 
        . . 5 5 4 5 . 
        . 5 5 4 5 5 5 
        . 5 5 5 4 5 5 
        . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 
        . . 5 5 5 5 . 
        `,img`
        . . . . . . . 
        . . 5 5 4 5 . 
        . 5 5 4 5 5 5 
        . 5 5 5 4 5 5 
        . 5 5 4 5 5 5 
        . 5 5 5 5 5 5 
        . . 5 5 5 5 . 
        `,img`
        . . . . . . . 
        . . 5 5 4 5 . 
        . 5 5 4 5 5 5 
        . 5 5 5 4 5 5 
        . 5 5 4 5 5 5 
        . 5 5 5 5 5 5 
        . . 5 5 5 5 . 
        `,img`
        . . . . . . . 
        . . 5 5 4 5 . 
        . 5 5 4 5 5 5 
        . 5 5 5 4 5 5 
        . 5 5 4 5 5 5 
        . 5 5 5 4 5 5 
        . . 5 5 5 5 . 
        `,img`
        . . . . . . . 
        . . 5 5 4 5 . 
        . 5 5 4 5 5 5 
        . 5 5 5 4 5 5 
        . 5 5 4 5 5 5 
        . 5 5 5 4 5 5 
        . . 5 4 5 5 . 
        `,img`
        . . . . 4 5 . 
        . 5 5 . 5 5 5 
        5 5 4 . 4 5 5 
        5 5 5 . 5 5 5 
        5 5 4 . 4 5 5 
        5 5 5 . 5 5 . 
        . 5 4 . . . . 
        `,img`
        . . . . 4 . . 
        . 5 5 . 5 5 . 
        . 5 . . 4 . 5 
        5 5 5 . 5 5 . 
        5 . 4 . . . 5 
        5 5 . . 5 . . 
        . 5 4 . . . . 
        `,img`
        . . . . 4 . . 
        . . 5 . 5 5 . 
        . . . . 4 . 5 
        . . 5 . 5 . . 
        5 . 4 . . . 5 
        . 5 . . 5 . . 
        . . 4 . . . . 
        `,img`
        . . . . . . . 
        . . 5 . 5 . . 
        . . . . . . . 
        . . 5 . 5 . . 
        . . . . . . 5 
        . 5 . . . . . 
        . . . . . . . 
        `,img`
        . . . . . . . 
        . . . . . . . 
        . . . . . . . 
        . . . . . . . 
        . . . . . . . 
        . . . . . . . 
        . . . . . . . 
        `,img`
        . . . . . . . 
        . . . . . . . 
        . . . . . . . 
        . . . . . . . 
        . . . . . . . 
        . . . . . . . 
        . . . . . . . 
        `],
    100,
    false
    )
    timer.after(2200, function () {
        game.setGameOverPlayable(true, music.melodyPlayable(music.bigCrash), false)
        game.setGameOverEffect(true, effects.splatter)
        game.setGameOverMessage(true, "GAME OVER!")
        game.gameOver(true)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(30)
    music.play(music.createSoundEffect(WaveShape.Noise, 3300, 1400, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    dotCount += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (enemyWeak == 1) {
        enemyCount += -1
        sprites.destroy(otherSprite)
        for (let index = 0; index < 4; index++) {
            music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            pause(100)
        }
    } else {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 4))
        info.changeLifeBy(-1)
        music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.InBackground)
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            gameOver = 1
            value.setVelocity(0, 0)
            mySprite.setVelocity(0, 0)
            timer.after(1500, function () {
                gameOver = 0
                value.vy = 20
            })
        }
    }
})
let projectile: Sprite = null
let enemyOverlapY = 0
let enemyOverlapX = 0
let enemyWeak = 0
let dot: Sprite = null
let dotCount = 0
let ghost: Sprite = null
let mySprite: Sprite = null
let gameOver = 0
let enemyCount = 10
let pause2 = 0
let enemyFlee = 0
gameOver = 0
let imageList = [
img`
    . 2 2 2 2 2 . 
    2 2 2 2 2 2 2 
    2 1 8 2 8 1 2 
    2 1 8 2 8 1 2 
    2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 
    2 . 2 . 2 . 2 
    `,
img`
    . 9 9 9 9 9 . 
    9 9 9 9 9 9 9 
    9 1 8 9 8 1 9 
    9 1 8 9 8 1 9 
    9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 
    9 . 9 . 9 . 9 
    `,
img`
    . 5 5 5 5 5 . 
    5 5 5 5 5 5 5 
    5 1 8 5 8 1 5 
    5 1 8 5 8 1 5 
    5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 
    5 . 5 . 5 . 5 
    `,
img`
    . 7 7 7 7 7 . 
    7 7 7 7 7 7 7 
    7 1 8 7 8 1 7 
    7 1 8 7 8 1 7 
    7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 
    7 . 7 . 7 . 7 
    `
]
tiles.loadMap(tiles.createSmallMap(tilemap`level4`))
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 242
    export const ARCADE_SCREEN_HEIGHT = 256
}
info.setLife(3)
spriteutils.setLifeImage(img`
    . . f f f f . . 
    . f 5 5 5 5 f . 
    f 5 5 5 5 5 5 f 
    f 5 5 5 . . . . 
    f 5 5 5 . . . . 
    f 5 5 5 5 5 5 f 
    . f 5 5 5 5 f . 
    . . f f f f . . 
    `)
mySprite = sprites.create(img`
    . 5 5 5 5 . 
    5 5 5 5 5 5 
    5 5 5 5 5 5 
    5 5 5 5 5 5 
    5 5 5 5 5 5 
    . 5 5 5 5 . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 4))
let textSprite = textsprite.create("PAC-MAN", 15, 5)
textSprite.setMaxFontHeight(30)
textSprite.setPosition(125, 97)
let start = textsprite.create("press the A button to start", 9, 8)
start.setMaxFontHeight(3)
start.setPosition(125, 150)
gameOver = 1
pauseUntil(() => controller.A.isPressed())
music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
timer.after(1500, function () {
    gameOver = 0
    for (let index = 0; index < 4; index++) {
        music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        pause(100)
    }
    sprites.destroy(textSprite)
    sprites.destroy(start)
    game.showLongText("Try to eat all of the dots or ghosties to win! Good luck!", DialogLayout.Bottom)
    for (let index = 0; index < 10; index++) {
        ghost = sprites.create(imageList._pickRandom(), SpriteKind.Enemy)
        ghost.vx = 20
        tiles.placeOnRandomTile(ghost, assets.tile`myTile6`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
        dotCount += 1
        dot = sprites.create(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 5 5 . . . 
            . . . 5 5 . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            `, SpriteKind.Food)
        tiles.setTileAt(value, assets.tile`transparency8`)
        tiles.placeOnTile(dot, value)
    }
})
game.onUpdate(function () {
    for (let value2 of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value2.isHittingTile(CollisionDirection.Top)) {
            enemyOverlapX = randint(0, 1)
            if (enemyOverlapX == 0) {
                value2.vx = -20
            } else {
                value2.vx = 20
            }
        }
        if (value2.isHittingTile(CollisionDirection.Bottom)) {
            enemyOverlapX = randint(0, 1)
            if (enemyOverlapX == 0) {
                value2.vx = -20
            } else {
                value2.vx = 20
            }
        }
        if (value2.isHittingTile(CollisionDirection.Left)) {
            enemyOverlapY = randint(0, 1)
            if (enemyOverlapY == 0) {
                value2.vy = -20
            } else {
                value2.vy = 20
            }
        }
        if (value2.isHittingTile(CollisionDirection.Right)) {
            enemyOverlapY = randint(0, 1)
            if (enemyOverlapY == 0) {
                value2.vy = -20
            } else {
                value2.vy = 20
            }
        }
    }
})
game.onUpdate(function () {
    if (enemyWeak == 1) {
        for (let value3 of sprites.allOfKind(SpriteKind.Enemy)) {
            projectile = sprites.createProjectileFromSprite(img`
                . 8 8 8 8 8 . 
                8 8 8 8 8 8 8 
                8 a 1 8 1 a 8 
                8 a 1 8 1 a 8 
                8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 
                8 . 8 . 8 . 8 
                `, value3, 0, 0)
            timer.after(100, function () {
                sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
            })
        }
    }
})
game.onUpdate(function () {
    if (enemyCount == 0) {
        info.changeScoreBy(1000)
        game.setGameOverEffect(true, effects.starField)
        game.setGameOverPlayable(true, music.melodyPlayable(music.magicWand), false)
        game.gameOver(true)
    }
})
