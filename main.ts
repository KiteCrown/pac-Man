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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game2 == 0) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        timer.after(1500, function () {
            gameOver = 0
            game2 = 1
            for (let index = 0; index < 4; index++) {
                music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                pause(100)
            }
            sprites.destroy(textSprite)
            sprites.destroy(start)
            game.showLongText("Try to eat all of the dots to win! Respawned ghosts are invincible to powers. Good luck! pls, if your device is bad, then it might have a little problem. ", DialogLayout.Bottom)
            for (let index = 0; index < 15; index++) {
                ghost = sprites.create(imageList._pickRandom(), SpriteKind.Enemy)
                ghost.vx = 20
                tiles.placeOnRandomTile(ghost, assets.tile`myTile6`)
            }
            for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
                dotCount += 1
                dot = sprites.create(img`
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . 6 6 . . . 
                    . . 6 8 8 6 . . 
                    . . 6 8 8 6 . . 
                    . . . 6 6 . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    `, SpriteKind.Food)
                tiles.setTileAt(value, assets.tile`transparency8`)
                tiles.placeOnTile(dot, value)
            }
        })
    }
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
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
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
info.onLifeZero(function () {
    info.changeScoreBy(10000)
    info.changeScoreBy(5000)
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
    game.setGameOverEffect(true, effects.melt)
    game.setGameOverPlayable(true, music.melodyPlayable(music.powerDown), false)
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(30)
    music.play(music.createSoundEffect(WaveShape.Noise, 3300, 1400, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    dotCount += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (enemyWeak == 1) {
        sprites.destroy(otherSprite)
        ghost = sprites.create(imageList._pickRandom(), SpriteKind.Enemy)
        ghost.vx = 20
        tiles.placeOnRandomTile(ghost, assets.tile`myTile6`)
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
let ghost: Sprite = null
let start: TextSprite = null
let textSprite: TextSprite = null
let mySprite: Sprite = null
let imageList: Image[] = []
let game2 = 0
let gameOver = 0
let invincible = 0
let pause2 = 0
let enemyFlee = 0
gameOver = 0
game2 = 0
imageList = [
img`
    2 . . 2 . . 2 
    . 2 2 2 2 2 . 
    . 2 2 2 2 2 . 
    2 2 a 2 a 2 2 
    . 2 2 2 2 2 . 
    . 2 2 2 2 2 . 
    2 . . 2 . . 2 
    `,
img`
    9 . . 9 . . 9 
    . 9 9 9 9 9 . 
    . 9 9 9 9 9 . 
    9 9 a 9 a 9 9 
    . 9 9 9 9 9 . 
    . 9 9 9 9 9 . 
    9 . . 9 . . 9 
    `,
img`
    5 . . 5 . . 5 
    . 5 5 5 5 5 . 
    . 5 5 5 5 5 . 
    5 5 a 5 a 5 5 
    . 5 5 5 5 5 . 
    . 5 5 5 5 5 . 
    5 . . 5 . . 5 
    `,
img`
    7 . . 7 . . 7 
    . 7 7 7 7 7 . 
    . 7 7 7 7 7 . 
    7 7 a 7 a 7 7 
    . 7 7 7 7 7 . 
    . 7 7 7 7 7 . 
    7 . . 7 . . 7 
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
textSprite = textsprite.create("PAC-MAN", 15, 5)
textSprite.setMaxFontHeight(30)
textSprite.setPosition(125, 97)
start = textsprite.create("press the A button to start", 9, 8)
start.setMaxFontHeight(3)
start.setPosition(125, 150)
gameOver = 1
let dotCount = 5
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
                8 . . 8 . . 8 
                . 8 8 8 8 8 . 
                . 8 2 8 2 8 . 
                8 8 1 8 1 8 8 
                . 8 2 8 2 8 . 
                . 8 8 8 8 8 . 
                8 . . 8 . . 8 
                `, value3, 0, 0)
            timer.after(10, function () {
                sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
            })
        }
    }
})
game.onUpdate(function () {
    if ((0 as any) == (1 as any)) {
        if (dotCount == 0) {
            info.changeScoreBy(5000)
            game.setGameOverEffect(true, effects.starField)
            game.setGameOverPlayable(true, music.melodyPlayable(music.magicWand), false)
            game.gameOver(true)
        }
    }
})
game.onUpdateInterval(10000, function () {
    if (game2 == 1) {
        tiles.setTileAt(ghost.tilemapLocation(), assets.tile`myTile8`)
    }
})
